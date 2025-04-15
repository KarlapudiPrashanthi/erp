import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, FormControlLabel, Switch, Paper } from '@mui/material';
import '../App.css';

const Student = () => {
  // Retrieve stored attendance data or initialize it
  const initialAttendance = JSON.parse(localStorage.getItem('attendance')) || [
    { id: 1, name: 'Prashanthi', presentDays: 5, totalDays: 10 },
    { id: 2, name: 'Rashmitha', presentDays: 7, totalDays: 10 },
    { id: 3, name: 'Vidya', presentDays: 9, totalDays: 10 },
    { id: 4, name: 'Deva', presentDays: 6, totalDays: 10 },
  ];

  const [attendance, setAttendance] = useState(initialAttendance);

  // Update localStorage whenever attendance changes
  useEffect(() => {
    localStorage.setItem('attendance', JSON.stringify(attendance));
  }, [attendance]);

  const handleToggle = (id) => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((student) => {
        if (student.id === id) {
          return {
            ...student,
            presentDays: student.presentDays + (student.presentDays < student.totalDays ? 1 : 0),
            totalDays: student.totalDays + 1,
          };
        }
        return student;
      })
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
              <Typography variant="body2" color="text.secondary">
                Attendance: {((student.presentDays / student.totalDays) * 100).toFixed(1)}%
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    onChange={() => handleToggle(student.id)}
                    color="primary"
                  />
                }
                label="Mark Present"
                labelPlacement="top"
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Student;
