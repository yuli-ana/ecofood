const jwt = require("jsonwebtoken");
const uuid = require("uuid");

const refreshTokens = {};

exports.createToken = (account) => {
  const token = jwt.sign(account, process.env.SECRET, { expiresIn: 300 });
  const refreshToken = uuid.v4();
  refreshTokens[refreshToken] = account?.id;
  return { token, refreshToken };
};

exports.createRefreshedToken = (account, refreshToken) => {
  if (
    refreshToken in refreshTokens &&
    refreshTokens[refreshToken] === account?.id
  ) {
    const token = jwt.sign(account, process.env.SECRET, { expiresIn: 300 });
    return token;
  }
};

exports.deleteRefreshToken = (refreshToken) => {
  if (refreshToken in refreshTokens) {
    delete refreshTokens[refreshToken];
  }
};

exports.verifyToken = async (token) => {
  let user;

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    console.log(err);
    if (err) {
      throw err;
    }

    user = decoded;
  });

  return user;
};
