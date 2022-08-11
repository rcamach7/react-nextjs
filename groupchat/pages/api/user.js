import { getUsers } from "../../controllers/userController";

export default async function (req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      res.json({ message: "Performed POST Request on Users" });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  // try {
  //   await connectMongo();

  //   let user = new User({ username: "admin" });
  //   await user.save();

  //   res.json({ user });
  // } catch (error) {
  //   res.status(400).json({ error });
  // }
}
