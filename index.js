const express = require('express');
// const serverless = require('serverless-http');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).send('hello world');
})

app.listen(PORT, () => console.log(`app deployed on port ${PORT}`));

// if (process.env.ENVIRONMENT === 'lambda') {
//     module.exports.handler = serverless(app);
// } else {
//     app.listen(PORT, () => console.log(`app deployed on port ${PORT}`));
// }