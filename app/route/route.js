
module.exports = function (app) {


    const catalogue = require('../controller/catalogue.js');
    const orders = require('../controller/orders.js');


    app.post('/api/DisplayCatalogue', catalogue.DisplayCatalogue);
    app.post('/api/addfood',catalogue.addfood)
    app.post('/api/placeorder',orders.placeorder)
    app.post('/api/addproduct',orders.addproduct)
    app.get('/api/getproduct',orders.getproduct)




}