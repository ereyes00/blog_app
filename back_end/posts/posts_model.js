//BLOG POSTS:
//Title of blog posts
//Date posted
//Blog post text
//Categories/tags
//Images for post
//Comments on posts
//Author of blog posts
//archive: Boolean

//AUTHORS:
//name
//email
//password
//bio
//articles

//FOLLOWERS/READERS:
//Users
//name
//comments
//email
//password
//date joined
//age

const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: String,
  date: Date,
})

const Post =  mongoose.model('Post', blogSchema);
