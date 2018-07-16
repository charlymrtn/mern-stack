const mongoose = require('mongoose');
const URI = 'mongodb://charly_mrtn:9torres9@cluster1-shard-00-00-gluuy.mongodb.net:27017,cluster1-shard-00-01-gluuy.mongodb.net:27017,cluster1-shard-00-02-gluuy.mongodb.net:27017/mern-pajaro?ssl=true&replicaSet=Cluster1-shard-0&authSource=admin';

mongoose.connect(URI)
  .then(db => console.log('db is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;
