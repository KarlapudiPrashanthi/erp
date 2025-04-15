// src/components/Library.js

import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import '../App.css';

const Library = () => {
  // Example book data
  const bookData = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '9780743273565',
      year: 1925,
      cover: 'https://example.com/gatsby.jpg', 
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      isbn: '9780061120084',
      year: 1960,
      cover: 'https://example.com/mockingbird.jpg', 
    },
    {
      title: '1984',
      author: 'George Orwell',
      isbn: '9780451524935',
      year: 1949,
      cover: 'https://example.com/1984.jpg',  
      
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      isbn: '9781503290563',
      year: 1813,
      cover: 'https://example.com/pride.jpg', // Replace with actual image URLs
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      isbn: '9780316769488',
      year: 1951,
      cover: 'https://example.com/catcher.jpg', // Replace with actual image URLs
    },
  ];

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Library
      </Typography>
      <Grid container spacing={2}>
        {bookData.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={book.cover}
                alt={book.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Author: {book.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ISBN: {book.isbn}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Year: {book.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Library;
