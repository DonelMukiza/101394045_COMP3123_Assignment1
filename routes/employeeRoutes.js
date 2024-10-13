const express = require('express');
const Employee = require('../models/employee');
const router = express.Router();


router.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.status(200).json(employees);
});


router.post('/employees', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).json({ message: 'Employee created successfully.' });
});


router.get('/employees/:eid', async (req, res) => {
  const employee = await Employee.findById(req.params.eid);
  if (!employee) return res.status(404).json({ message: 'Employee not found' });
  res.status(200).json(employee);
});


router.put('/employees/:eid', async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
  if (!employee) return res.status(404).json({ message: 'Employee not found' });
  res.status(200).json({ message: 'Employee details updated successfully.' });
});


router.delete('/employees', async (req, res) => {
  const { eid } = req.query;
  await Employee.findByIdAndDelete(eid);
  res.status(204).json({ message: 'Employee deleted successfully.' });
});

module.exports = router;
