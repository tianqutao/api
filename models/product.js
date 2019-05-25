const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: {
        type: String, 
        required: true,
        },
        productType:{
            type:mongoose.SchemaTypes.ObjectId,//ObjectId是mongdb的主键
            ref:'product_type',//设置其用来做关联查询
        },
        coverImg: {
        type: String
        },
        price: {
        type: Number,
        required:true,
        default:10
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
    const Product = mongoose.model("product",productSchema);
    module.exports = Product