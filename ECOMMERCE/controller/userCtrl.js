const User = require("../models/userModel");
const ayncHandler = require("express-async-handler");
const createUser = ayncHandler ( async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne(email);

  if (!findUser) {

    // Criando um usuario
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
     throw new Error('User Alread Exists');
  }
});

module.exports = { createUser };