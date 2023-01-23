// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDB } from '@/middlewares/connectMongo';
import { ProductModel, Product } from '@/models/product';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  products: Product[];
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const products = await ProductModel.find({});

  res.status(200).json({ products });
}

export default connectDB(handler);
