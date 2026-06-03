import Product from '../models/product.model.js';

//get product by QR
export const getProduct = async(req, res) =>{
  try{
    const product = await Product.findOne({
      qr: req.params.qr
    });
    if(!product){
      return res.status(404).json({
        message: "Not found"
      });
    }res.json(product)
  }catch(error){
    res.status(500).json({error: error.message});
  }
};
//update product
export const createOrUpdateProduct = async(req, res)=>{
  try{
    const {qr, price} = req.body;
    const product = await Product.findOneAndUpdate(
      {qr},
      {price},
      {new: true, upsert: true}
    );
    res.json(product);
  }catch(error){
    res.status(500).json({ error: error.message})
  }
};