import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
import '../App.css';

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const courseData = [
    { id: 1, name: 'Introduction to Programming', description: 'Learn the basics of programming using Python.' },
    { id: 2, name: 'Data Structures', description: 'Understand fundamental data structures in computer science.' },
    { id: 3, name: 'Web Development', description: 'Build modern web applications using HTML, CSS, and JavaScript.' },
    { id: 4, name: 'Database Management', description: 'Explore relational databases and SQL.' },
    { id: 5, name: 'Machine Learning', description: 'Get introduced to machine learning algorithms and applications.' },
  ];

  const handleEnroll = (course) => {
    if (!enrolledCourses.includes(course.id)) {
      setEnrolledCourses([...enrolledCourses, course.id]);
      alert(`Enrolled in ${course.name}`);
    }
  };

  const handleUnenroll = (course) => {
    setEnrolledCourses(enrolledCourses.filter(id => id !== course.id));
    alert(`Unenrolled from ${course.name}`);
  };

  const filteredCourses = courseData.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Courses
      </Typography>
      <TextField
        label="Search Courses"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Course Name</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.description}</TableCell>
                <TableCell>
                  {enrolledCourses.includes(course.id) ? (
                    <Button 
                      variant="contained" 
                      color="error" 
                      onClick={() => handleUnenroll(course)}
                    >
                      Unenroll
                    </Button>
                  ) : (
                    <Button 
                      variant="contained" 
                      color="success" 
                      onClick={() => handleEnroll(course)}
                    >
                      Enroll
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Courses;
