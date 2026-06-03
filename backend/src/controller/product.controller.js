import Product from '../models/product.model.js';

// Get product by QR
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ qr: req.params.qr });
    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }
    // Return both QR and MongoDB's auto _id
    res.json({
      id: product._id,   // auto-generated unique ID
      qr: product.qr,
      price: product.price
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create or update product
export const createOrUpdateProduct = async (req, res) => {
  try {
    const { qr, price } = req.body;
    const product = await Product.findOneAndUpdate(
      { qr },
      { price },
      { new: true, upsert: true }
    );
    // Return both QR and MongoDB's auto _id
    res.json({
      id: product._id,   // auto-generated unique ID
      qr: product.qr,
      price: product.price
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
