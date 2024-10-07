import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import productRouter from "./routers/product";

const app = express();

// Middleware
app.use(cors()); //Cấp quyền truy cập vào APIs từ mọi nguồn
app.use(express.json()); //Chuyển đổi body của request thành JSON
app.use(morgan("tiny")); //Ghi lại các yêu cầu HTTP

app.use("/api", productRouter);
// Kết nối tới MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/workshop_fa24");
// mongodb://127.0.0.1:27017/workshop

export const viteNodeApp = app;
