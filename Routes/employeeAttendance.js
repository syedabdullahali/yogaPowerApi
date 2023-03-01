const express = require("express");
const employeeAttendance = require("../Models/employeeAttendance");
const employeeForm = require("../Models/employeeForm");

const router = express.Router();
//modelName

router.get("/all", async function (req, res) {
  try {
    const employeeAttendanceData = [];
    const response = await employeeForm.find();

    for (element of response) {
      const res = await employeeAttendance.find({ EmployeeID: element._id });
      const { FullName, _id } = element;

      if (res.length) {
        const present = await employeeAttendance
          .find({ EmployeeID: element._id, status: "P" })
          .count();
        const absent = await employeeAttendance
          .find({ EmployeeID: element._id, status: "A" })
          .count();
        const latePresent = await employeeAttendance
          .find({ EmployeeID: element._id, status: "LP" })
          .count();
        const leave = await employeeAttendance
          .find({ EmployeeID: element._id, status: "L" })
          .count();
        const halfDay = await employeeAttendance
          .find({ EmployeeID: element._id, status: "HD" })
          .count();

        employeeAttendanceData.push({
          FullName,
          _id,
          present,
          absent,
          latePresent,
          leave,
          halfDay,
        });
      } else {
        employeeAttendanceData.push({
          FullName,
          _id,
          present: 0,
          absent: 0,
          latePresent: 0,
          leave: 0,
          halfDay: 0,
        });
      }
    }
    return res.status(200).json({ employeeAttendanceData });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.post("/create", async (req, res) => {
  try {
    const temp = await new employeeAttendance(req.body);
    const response = await temp.save();
    console.log(response);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    const response = await employeeAttendance.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const response = await employeeAttendance.findByIdAndDelete(req.params.id);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
