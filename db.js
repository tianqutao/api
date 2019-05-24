    //1.模块引入
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    //2.连接数据库
    mongoose.connect("mongodb://localhost:27017/students-03",{useNewUrlParser: true} );

    //设置表模型
    //参数一：模型字段
    //参数二：模型的配置项
    //       常用timestamps为每一条记录生成一个新增和修改的时间戳
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

    //4.创建实例的人
    // var tom = new Person({
    //     name:'tom',
    //     mobile:'158158',
    //     age:'18'
    // })


    //5.调用方法存储到服务器
    // tom
    // .save()
    // .then(res => {
    //     console.log(res);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
    //6.模型导出
    module.exports={Person}