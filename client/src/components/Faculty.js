// src/components/Faculty.js

import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import '../App.css';

const Faculty = () => {
  // Example faculty data
  const facultyData = [
    {
      name: 'Dr. Alice Smith',
      department: 'Computer Science',
      email: 'alice.smith@klu.edu',
      phone: '(123) 456-7890',
      office: 'Room 101',
    },
    {
      name: 'Prof. Bob Johnson',
      department: 'Mathematics',
      email: 'bob.johnson@klu.edu',
      phone: '(987) 654-3210',
      office: 'Room 202',
    },
    {
      name: 'Dr. Charlie Brown',
      department: 'Physics',
      email: 'charlie.brown@klu.edu',
      phone: '(555) 123-4567',
      office: 'Room 303',
    },
    {
      name: 'Ms. Dana White',
      department: 'Chemistry',
      email: 'dana.white@klu.edu',
      phone: '(444) 987-6543',
      office: 'Room 404',
    },
  ];

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Faculty Details
      </Typography>
      <Grid container spacing={2}>
        {facultyData.map((faculty, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {faculty.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Department: {faculty.department}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {faculty.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: {faculty.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Office: {faculty.office}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faculty;
