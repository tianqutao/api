const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema(
    {
        userName: {
        type: String,
        required: true
        },
        mobile: {
        type: String
        },
        age: {
        type: Number,
        defaule: 18
        },
        address: {
        type: String
        },
        nickName: {
        type: String
        },
        pwd: {
        type: String,
        required: true
        }
    },
    {
        timestamps: true
    }
    );
    //3.创建数据库模型(表)
    const Person = mongoose.model("person",personSchema);
    module.exports = Person