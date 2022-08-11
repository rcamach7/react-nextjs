import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true, minLength: 4 },
});

const User = models.User || model("User", userSchema);

export default User;
