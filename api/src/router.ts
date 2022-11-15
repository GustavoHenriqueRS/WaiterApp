import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import express from 'express';

import { createCategory } from './app/useCases/categories/createCategories';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProcut';
import { listProducts } from './app/useCases/products/listProducts';
import { listProcutsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrders';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();
const app = express();

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);


router.get('/categories/:categoryId/products', listProcutsByCategory);


router.get('/orders', listOrders);

router.post('/orders', createOrder);

router.patch('/orders/:orderId', changeOrderStatus);

router.delete('/orders/:orderId', cancelOrder);


