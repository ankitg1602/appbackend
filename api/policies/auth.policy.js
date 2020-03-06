const JWTService = require('../services/auth.service');

// usually: "Authorization: Bearer [token]" or "token: [token]"
module.exports = (req, res, next) => {
  let tokenToVerify = req.header('Authorization');

  // if (req.header('Authorization')) {
  //   const parts = req.header('Authorization').split('.');
  //   console.log('parts:', parts, req.header('Authorization'))
  //   if (parts.length === 2) {
  //     const scheme = parts[0];
  //     const credentials = parts[1];
  //     console.log('partss:', scheme, credentials)
  //     if (/^Bearer$/.test(scheme)) {
  //       console.log('partss:', /^Bearer$/.test(scheme))
  //       tokenToVerify = credentials;
  //     } else {
  //       return res.status(401).json({ msg: 'Format for Authorization: Bearer [token]' });
  //     }
  //   } else {
  //     return res.status(401).json({ msg: 'Format for Authorization: Bearer [token]' });
  //   }
  // } else if (req.body.token) {
  //   tokenToVerify = req.body.token;
  //   delete req.query.token;
  // } else {
  //   return res.status(401).json({ msg: 'No Authorization was found' });
  // }

  return JWTService().verify(tokenToVerify, (err, thisToken) => {
    if (err) return res.status(401).json({ err });
    req.token = thisToken;
    return next();
  });
};
