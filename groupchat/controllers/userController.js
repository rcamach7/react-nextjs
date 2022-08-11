import User from "../models/User";
import connectMongo from "../utils/connectMongo";

export const getUsers = async (req, res) => {
  try {
    await connectMongo();
    const users = await User.find({});

    res.json({ users });
  } catch (error) {
    res.status(500).json({ message: "Error getting users" });
  }
};
