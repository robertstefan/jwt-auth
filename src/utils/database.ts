import mongoose from 'mongoose';

async function database(): Promise<void> {
  try {
    // eslint-disable-next-line prettier/prettier
    await mongoose.connect(
      `${process.env.DATABASE_URL_DEV}/${process.env.DATABASE}` as string
    );
    console.log('🛢 Database connected.');
  } catch (error: any) {
    console.error('⭕️ Database connection failed.', error);
  }
}

export default database;
