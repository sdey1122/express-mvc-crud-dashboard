const Student = require("../models/student.model");
const { success, error } = require("../utils/responseHandler");
const codes = require("../utils/responseCodes");

class StudentController {
  async createStudent(req, res) {
    try {
      const student = await Student.create(req.body);

      return success(res, student, codes.SUCCESS.CREATED);
    } catch (err) {
      return error(res, err, codes.ERROR.BAD_REQUEST);
    }
  }

  async getStudents(req, res) {
    try {
      const students = await Student.find({ isDeleted: false });

      return success(res, students);
    } catch (err) {
      return error(res, err);
    }
  }

  async getStudentById(req, res) {
    try {
      const student = await Student.findById(req.params.id);

      if (!student) {
        return error(res, new Error("Student not found"), codes.ERROR.NOT_FOUND);
      }

      return success(res, student);
    } catch (err) {
      return error(res, err);
    }
  }

async updateStudent(req, res) {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    return res.json({
      success: true,
      message: "Student Updated successfully",
      data: updated
    });

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
}

  async softDelete(req, res) {
    try {
      const student = await Student.findByIdAndUpdate(
        req.params.id,
        { isDeleted: true },
        { new: true }
      );

      if (!student) {
        return error(res, new Error("Student not found"), codes.ERROR.NOT_FOUND);
      }

      return success(res, {}, codes.SUCCESS.OK);
    } catch (err) {
      return error(res, err);
    }
  }

  async restore(req, res) {
    try {
      const student = await Student.findByIdAndUpdate(
        req.params.id,
        { isDeleted: false },
        { new: true }
      );

      if (!student) {
        return error(res, new Error("Student not found"), codes.ERROR.NOT_FOUND);
      }

      return success(res);
    } catch (err) {
      return error(res, err);
    }
  }

  async hardDelete(req, res) {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);

      if (!student) {
        return error(res, new Error("Student not found"), codes.ERROR.NOT_FOUND);
      }

      return success(res);
    } catch (err) {
      return error(res, err);
    }
  }
}

module.exports = new StudentController();