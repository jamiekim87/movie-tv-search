module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/media_db', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})