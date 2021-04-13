const Account = require("./accountModel");

exports.createAccount = async ({
  firstName,
  lastName,
  email,
  password,
  city,
  role,
}) => {
  try {
    const newAccount = new Account({
      firstName,
      lastName,
      email,
      password,
      city,
      role,
    });

    const account = await newAccount.save();
    return account;
  } catch (ex) {
    throw ex;
  }
};

exports.findAccountByEmail = async (email) => {
  try {
    const account = await Account.findOne({ email });
    return account;
  } catch (ex) {
    throw ex;
  }
};

exports.findAccountById = async (id) => {
  try {
    const account = await Account.findById(id);

    return {
      id: account?._id,
      firstName: account?.firstName,
      lastName: account?.lastName,
      email: account?.email,
    };
  } catch (ex) {
    throw ex;
  }
};
