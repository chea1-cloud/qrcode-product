import express from 'express';
import { createOrUpdateProduct, getProduct } from '../controller/product.controller.js';


const router = express.Router();

router.route('/:qr').get(getProduct);
router.route('/update').post(createOrUpdateProduct);

export default router;