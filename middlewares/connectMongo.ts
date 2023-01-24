import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

type ConnectDb = (
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) => (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const connectDB: ConnectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  mongoose.set('strictQuery', true);
  await mongoose.connect(process.env.MONGODB_URI!);

  return handler(req, res);
};
