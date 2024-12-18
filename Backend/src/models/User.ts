import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IUser extends Document {
    _id: Types.ObjectId,
  name: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export { UserModel };
