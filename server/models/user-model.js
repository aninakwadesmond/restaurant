const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, minlength: 2, maxlength: 60, trim: true },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
    },
    phoneNumber: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true, trim: true },
    ghanaCard: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      select: false,
    },
    role: {
      type: String,
      enum: ['customer', 'admin', 'owner'],
      default: 'customer',
      required: true,
    },
  },
  { timestamps: true },
);

// hash password before save
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  const genSalt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, genSalt);
});

// hash the password

userSchema.pre('save', async function () {
  if (!this.isModified('ghanaCard')) return;

  this.ghanaCard = await bcrypt.hash(this.ghanaCard, await bcrypt.genSalt(12));
});

// genAuthTOken() attach to the methods;
userSchema.methods.genAuthToken = function () {
  const token = jwt.sign(
    { id: this._id, role: this.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '1d',
    },
  );

  return token;
};

// comparePasswoed() methods
userSchema.methods.comparePassword = async function (password) {
  console.log(password, this.password);
  return await bcrypt.compare(password, this.password);
};

const Users = mongoose.model('users', userSchema);

module.exports = { Users };
