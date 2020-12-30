const express = require('express');
const router = express.Router();


router.get('/', (request, response) => {
    response.send("Hello World");
});

router.post('/', (request, response) => {
    response.send(request.body.name);
});

module.exports = router;