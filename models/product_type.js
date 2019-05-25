const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productTypeSchema = new Schema(
    {
        name: {
        type: String,
        required: true,
        
        },
        coverImg: {
        type: String
        },
        description: {
        type: String,
        }
    },
    {
        timestamps: true
    }
    );
    //3.创建数据库模型(表)
    const ProductType = mongoose.model("product_type",productTypeSchema);
    module.exports = ProductType