const food = require('../model/food.js');
const inventry = require('../model/inventry.js');
const product = require('../model/product.js');


// API for Catalogue 
exports.DisplayCatalogue=(req,res)=>{ 

     // Preparing condition for search
  let condition = {};

    if (req.body.food_name) {
        condition.food_name = req.body.food_name;
    } else if (req.body.category) {
        condition.category = req.body.category;
    } else if (req.body.price) {
        condition.price = req.body.price;
    }
    else {
        condition = {};
    }

    let page = req.body.page || 1;
    let limit = req.body.limit || 5;

    food.find(condition, (err, data) => {
        if (!err) {
            return res.status(200).json({
                status: "success",
                page: page,
                data:  data ,
            });
        } else {
            return res.status(401).json({
                error: err,
            });
        }
    })
        .skip(limit * page - limit)
        .limit(limit * 1); // limit converted into number


}


 // API for add food category 
exports.addfood=(req,res)=>{ 


    food.create({food_name: req.body.food_name,
        category: req.body.category,
        price: req.body.price
     })
	.then((data) => {

		res.status(200).json({

			success: '200',
			message: 'Added Successfully.',

		});

	})

}


