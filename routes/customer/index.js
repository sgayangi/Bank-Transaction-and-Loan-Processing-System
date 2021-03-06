const routes = require('express').Router();

routes.use('/loan', require('./online_loan'));
routes.use('/login', require('./login'));
routes.use('/account', require('./account'));
routes.use('/transfer_money', require('./transfer_money'));

const isCustomer = require('../../middleware/employee');
const isLoggedIn = require('../../middleware/login');
const router = require('./online_loan');

routes.get('/', [isLoggedIn, isCustomer], (request, response) => {
    return response.render('customer/home');
});

module.exports = routes;