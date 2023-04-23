const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  image: {
    type: String,
  },
    title: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    language: {
      type: String,
      required: true,
      trim: true,
    },
    certificate:{
      type:String,
      required:true,
    },
    duration: {
      type: Number,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
});

const Movie = mongoose.model('Movie',movieSchema)

module.exports=Movie;