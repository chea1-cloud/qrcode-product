import mongoose, {Schema} from "mongoose";

const productSchema = new Schema(
  {
    qr:{
      type: String,
      required: true,
      unique: true,
    },
    price:{
      type: Number,
      required: true,
    }
  }
);
export default mongoose.model("Product", productSchema);
