import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Avatar, CardActionArea } from '@mui/material';
import { deepPurple, blue, green, orange } from '@mui/material/colors';
import '../App.css';

const Faculty = () => {
  const facultyData = [
    {
      name: 'Dr. Alice Smith',
      department: 'Computer Science',
      email: 'alice.smith@klu.edu',
      phone: '(123) 456-7890',
      office: 'Room 101',
      color: deepPurple[500],
    },
    {
      name: 'Prof. Bob Johnson',
      department: 'Mathematics',
      email: 'bob.johnson@klu.edu',
      phone: '(987) 654-3210',
      office: 'Room 202',
      color: blue[500],
    },
    {
      name: 'Dr. Charlie Brown',
      department: 'Physics',
      email: 'charlie.brown@klu.edu',
      phone: '(555) 123-4567',
      office: 'Room 303',
      color: green[500],
    },
    {
      name: 'Ms. Dana White',
      department: 'Chemistry',
      email: 'dana.white@klu.edu',
      phone: '(444) 987-6543',
      office: 'Room 404',
      color: orange[500],
    },
  ];

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#eef2f3', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
        Faculty Details
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {facultyData.map((faculty, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 360, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardActionArea>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 2 }}>
                  <Avatar sx={{ bgcolor: faculty.color, width: 56, height: 56 }}>
                    {faculty.name.charAt(0)}
                  </Avatar>
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {faculty.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    {faculty.department}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 1 }}>
                    📧 {faculty.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 1 }}>
                    📞 {faculty.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 1, fontStyle: 'italic' }}>
                    🏢 {faculty.office}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faculty;
