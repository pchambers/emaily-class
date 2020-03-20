const mongoose = require('mongoose');
const {Schema} = mongoose;

//define class schema
const userSchema = new Schema({
  googleId: String,
  name: String,
  credits: {type: Number, default: 0}
});

//create collection in mongodb
mongoose.model('users', userSchema);
