import connectMongoDB from '../../lib/mongodb';

export async function GET () {
  await connectMongoDB();
}