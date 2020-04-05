const express = require('express');

const ongsController = require('./controllers/ongs');
const incidentsController = require('./controllers/incidents');
const profileController = require('./controllers/profile');
const sessionController = require('./controllers/session');

const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;