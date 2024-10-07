import mongoose from "mongoose";
// import mongoosePaginate from "mongoose-paginate-v2";
// import slugify from "slugify";

const ProductSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model("Product", ProductSchema);
