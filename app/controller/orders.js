
const product = require('../model/product.js');
const inventry = require('../model/inventry.js');
const userorder = require('../model/userorder.js');

// API for place order
exports.placeorder= async(req,res)=>{ 

    inventry.findOne({productId: req.body.productId }).then(pro => {// check product stock

    if(pro.stock == 0){
        return res.status(401).json({ message: 'This product is out of stock' });
    }
    else{

    userorder.create({productId: req.body.productId,
        userId: req.body.userId,
        quantity: req.body.quantity
     })
	.then(data => {

        // Manage Inventry after order product
        var productstock = pro.stock - req.body.quantity
        var query = { productId: req.body.productId };
        inventry.updateOne(query, { stock: productstock }).then({})
        
		res.status(200).json({

			success: '200',
			message: 'Order Placed Successfully.',

		});

    })
    
    }
})

}


// API for Add Product
exports.addproduct=(req,res)=>{ 


    product.create({product_name: req.body.product_name,
        category: req.body.category,
        price: req.body.price
     })
	.then(data => {
        // save product quantity in inventry 
        inventry.create({productId: data.id,
            stock: req.body.stock,
         })

		res.status(200).json({

			success: '200',
			message: 'Product added Successfully.',

		});

	})

}

// API for Display Product
exports.getproduct=(req,res)=>{ 

    product.find().then(data => {

		res.status(200).json({

			success: '200',
            message: 'Products',
            data: data

		});

    })
}