// src/components/Student.js

import React, { useState } from 'react';
import { Box, Typography, Grid, FormControlLabel, Switch, Paper } from '@mui/material';
import '../App.css';

const Student = () => {
  // Sample student data
  const [attendance, setAttendance] = useState([
    { id: 1, name: 'John Doe', isPresent: true },
    { id: 2, name: 'Jane Smith', isPresent: false },
    { id: 3, name: 'Alice Johnson', isPresent: true },
    { id: 4, name: 'Bob Brown', isPresent: false },
  ]);

  const handleToggle = (id) => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((student) =>
        student.id === id ? { ...student, isPresent: !student.isPresent } : student
      )
    );
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Student Attendance
      </Typography>
      <Grid container spacing={2}>
        {attendance.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Paper elevation={3} sx={{ padding: '10px', textAlign: 'center' }}>
              <Typography variant="h6">{student.name}</Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={student.isPresent}
                    onChange={() => handleToggle(student.id)}
                    color={student.isPresent ? 'success' : 'error'} // Change color based on attendance
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={student.isPresent ? 'Present' : 'Absent'}
                labelPlacement="top"
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundColor: student.isPresent ? 'green' : 'red', // Thumb color
                  },
                  '& .Mui-checked .MuiSwitch-thumb': {
                    backgroundColor: 'green', // Thumb color when checked
                  },
                  '& .Mui-checked': {
                    color: 'green', // Track color when checked
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: student.isPresent ? 'green' : 'red', // Track color based on attendance
                  },
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Student;
