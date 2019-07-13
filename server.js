// server.js
'user strict';
require('dotenv').config();
const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`App listening at http://localhost:${process.env.PORT}`);
});
