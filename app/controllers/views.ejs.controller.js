const Student = require("../models/student.model");

class ViewController {
  async listPage(req, res) {
    try {
      const students = await Student.find({ isDeleted: false });

      res.render("list", { students });
    } catch (err) {
      res.render("list", { students: [], error: err.message });
    }
  }

  async addPage(req, res) {
    try {
      res.render("add");
    } catch (err) {
      res.send(err.message);
    }
  }

  async editPage(req, res) {
    try {
      const student = await Student.findById(req.params.id);

      if (!student) {
        return res.send("Student not found");
      }

      res.render("edit", { student });
    } catch (err) {
      res.send(err.message);
    }
  }

  async restorePage(req, res) {
    try {
      const students = await Student.find({ isDeleted: true });

      res.render("restore", { students });
    } catch (err) {
      res.render("restore", { students: [], error: err.message });
    }
  }
}

module.exports = new ViewController();