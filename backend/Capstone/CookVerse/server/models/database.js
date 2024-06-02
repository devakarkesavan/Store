const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://devakark:MERNrecipe123@cluster0.gzj25bd.mongodb.net/Mydatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');
