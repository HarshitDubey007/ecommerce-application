const Product = require('../models/product')
const shortid = require('shortid')
const slugify = require('slugify')

exports.createProduct =  (req, res) => {
    // res.status(200).json({ file: req.files, body: req.body })
    const {
        name, price, decription, categroy, quantity, createdBy 
    } = req.body;

    let productPictures = [];


    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            return { img: file.filename }
        })
    }

    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        decription,
        productPictures,
        categroy,
        createdBy: req.user._id
    });



    product.save((error, product) => {
        if(error) return res.status(200).json({error})
        if(product){
            res.status(201).json({ product })
        }
    })
}