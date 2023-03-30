const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  })
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    { 
      id: "12a",
      title: "Audi a4",
      category: "Automobile",
      image: "str",
      description: "O masina destul de puternica",
      location: "Suceava",
      emailAdreess: "vasilica.cernovschi@student.usv.ro",
      telephoneNumber: "0748898178"
    },
    { 
      id: "12a",
      title: "Mercedes",
      category: "Automobile",
      image: "str",
      description: "O masina destul de puternica",
      location: "Suceava",
      emailAdreess: "vasilica.cernovschi@student.usv.ro",
      telephoneNumber: "0748898118"
    }
  ]
  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  })
})

module.exports = app;
