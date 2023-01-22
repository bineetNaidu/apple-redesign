// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDB } from '@/middlewares/connectMongo';
import { CategoryModel, Category } from '@/models/category';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  categories: Category[];
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const categories = await CategoryModel.find({});

  res.status(200).json({ categories });
}

export default connectDB(handler);
