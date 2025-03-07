// impor e inicializacion de express
const express = require('express');
const router = require('./Routes/AdminRoute');
const Aminrouter = require('./Routes/ShopRoute');
const {engine} = require('express-handlebars');
const app = express();
const path = require('path');

//configuration middleware.
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

//render engine config
app.engine("hbs", engine());
app.set("view engine", "hbs");
app.set("views","Views");

app.use(router.route);
app.use(Aminrouter);

app.use((req, res, next) => {
    res.render("notFound", {layout: false, title: 'page not found 404'});
});

// listen
app.listen(5000);