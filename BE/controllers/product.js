import Product from "../models/product";

export const getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		return res.status(200).json(products);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
export const addProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		return res.status(200).json(product);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
