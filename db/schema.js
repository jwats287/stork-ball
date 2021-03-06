const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  dinnerChoice: String,
  registeredOn: Date,
  notes: String,
  guest: {
    guestFullName: String,
    guestDinnerChoice: String
  }
});



userSchema.pre('save', function(next){
    now = new Date();
    this.update_at = now;
    if ( !this.registeredOn ) {
      this.registeredOn = now;
    }
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = {
  User
}