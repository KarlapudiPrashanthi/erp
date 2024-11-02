// src/components/Timetable.js

import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../App.css';

const Timetable = () => {
  // Example timetable data
  const timetableData = [
    { day: 'Monday', time: '09:00 AM - 10:00 AM', subject: 'Mathematics', faculty: 'Dr. Smith' },
    { day: 'Monday', time: '10:00 AM - 11:00 AM', subject: 'Physics', faculty: 'Dr. Johnson' },
    { day: 'Tuesday', time: '09:00 AM - 10:00 AM', subject: 'Chemistry', faculty: 'Dr. Lee' },
    { day: 'Wednesday', time: '11:00 AM - 12:00 PM', subject: 'Biology', faculty: 'Dr. White' },
    { day: 'Thursday', time: '01:00 PM - 02:00 PM', subject: 'English', faculty: 'Dr. Green' },
    { day: 'Friday', time: '10:00 AM - 11:00 AM', subject: 'Computer Science', faculty: 'Dr. Brown' },
  ];

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Timetable
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Faculty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timetableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.day}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.faculty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Timetable;
