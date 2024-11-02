// src/components/Courses.js

import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import '../App.css';

const Courses = () => {
  // Example course data
  const courseData = [
    { id: 1, name: 'Introduction to Programming', description:  'Learn the basics of programming using Python.' },
    { id: 2, name: 'Data Structures', description: 'Understand the fundamental data structures in computer science.' },
    { id: 3, name: 'Web Development', description: 'Build modern web applications using HTML, CSS, and JavaScript.' },
    { id: 4, name: 'Database Management', description: 'Explore relational databases and SQL.' },
    { id: 5, name: 'Machine Learning', description: 'Get introduced to machine learning algorithms and applications.' },
  ];

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <List>
        {courseData.map(course => (
          <ListItem key={course.id}>
            <Typography variant="h6">{course.name}</Typography>
            <Typography variant="body2">{course.description}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Courses;
