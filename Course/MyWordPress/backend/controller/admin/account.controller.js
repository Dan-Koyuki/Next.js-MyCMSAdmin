const { Account } = require("../../models/authentication/account");
const genAuthToken = require("../../tools/authtoken.generate");
const bcrypt = require("bcrypt");

class AccountController {
  register = async ({ email, password, username }) => {
    try {
      let user = await Account.findOne({ email: email });
      if (user) {
        throw new Error("User already exist..!");
      }

      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);

      user = new Account({
        username: username,
        email: email,
        password: hashedPassword,
      });

      user = await user.save();
      const token = genAuthToken(user);

      return { token };
    } catch (error) {
      throw error;
    }
  };
}

const accountController = new AccountController();

module.exports = accountController;
