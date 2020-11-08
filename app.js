const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const filmsRoutes = require('./routes/films-routes');
const musiquesRoutes = require('./routes/musiques-routes')

const app = express();

app.use(bodyParser.json());

app.use('/api/films', filmsRoutes);
app.use('/api/musiques', musiquesRoutes);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "une erreur non gérée est survenue !" })
})

mongoose.connect(`mongodb+srv://greta_user:WMzkhQoKYrBrWbxe@cluster0.ncwlp.mongodb.net/Greta?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true })
.then(() => {
    app.listen(5000);
})
.catch(err => {
    console.log(err);
})
