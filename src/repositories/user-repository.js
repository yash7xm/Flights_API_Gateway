const CrudRepository = require("./crud-repository");
const { user } = require("../models");

class UserRepository extends CrudRepository {
  constructor() {
    super(user);
  }

  async getUserByEmail(email) {
    const User = await user.findOne({ where: { email: email } });
    return User;
  }
}

module.exports = UserRepository;
