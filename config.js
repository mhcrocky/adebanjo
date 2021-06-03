const JWTSECRET = process.env.JWTSECRET;

module.exports = {
    jwtSecret: JWTSECRET||'123456',
    mongodburi: '' //your mongodb uri
};
