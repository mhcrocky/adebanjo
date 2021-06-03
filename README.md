# OpenMapJs

### Front-End - React + Redux

### Back-End - Node.js, Express.js & MongoDB

To run it locally -

### Steps to run in development mode:-

1. Fork the repo and clone it.
2. Make sure you have `npm` Node.js & MongoDB installed in your system.
3. [Only once] Run (from the root) `npm install` and `cd client && npm install`.
4. Open two terminal windows (one for running Server and other for the UI).
5. Run `npm start` to start the server. By default it will run on `port 5000`.
6. For UI build `npm run build`.
7. You can see your project on `port 5000` by default.

### config mongoDB and server.
```
module.exports = {
    jwtSecret: JWTSECRET||'123456',
    mongodburi: '' //your mongodb uri
};
```
You can config mongoDB in config.js file.

and you have to config server url on /client/src/Config.js file.
```
module.exports={
    BASE_URL:'' //server url
}
```

