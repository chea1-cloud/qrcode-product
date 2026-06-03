import mongoose, {Schema} from "mongoose";

const productSchema = new Schema(
  {
    qr:{
      type: String,
      required: true,
      unique: true,
    },
    price:{
      type: String,
      required: true,
    }
  }
);
export default mongoose.model("Product", productSchema);
