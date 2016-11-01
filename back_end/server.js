const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./posts/posts_model')
const Post = mongoose.model('Post');

mongoose.connect('mongodb://localhost/blog_app_test');

const db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('Hey from Hpage');
});

app.get('/posts', (req,res) => {
  res.send('Hey from Ppage');
});

db.on('open', () => {
  console.log('db connection opened');

  app.listen(5555, () => {
    console.log("The app is listening on port 5555");
    Post.create({title: 'test post 1'}, (err,data) => {
      if(err) console.log('Error with database');
      else console.log('Post created');
    })
  });
})

db.on('error', () => {
  console.log('error in db connection!');
})