//获取用户列表
//删除用户
//添加用户
//修改用户
//查询数据
const express = require('express')
const router = express.Router();
const { Person }=require('../../../../db')
router.get('/',async (req,res)=>{
    //在express中获取url中传递的参数使用 req.query.参数名
    const result = await Person.find();
    res.json({
        code:'success',
        msg:'查询数据成功',
        data:result
    })
})
//创建数据 存储到服务器
router.post('/',async (req,res)=>{
        try {
            var p =new Person(req.body)
            await p.save()
            res.json({
                code:'success',
                msg:'创建数据成功',
                data:[]
            })
        } catch(err) {
            res.json({
                code:'err',
                mag:err
            })
        }
})
//根据id查询数据
//在express的路由中可以使用：形式传参数 获取的时候使用req.params.参数名
router.get('/:id',async (req,res)=>{
    const result = await Person.findById(req.params.id)
    res.json({
        code:'success',
        msg:'查询成功',
        data:result,
    })
})

//修改数据
router.put('/:id',async (req,res)=>{
    try {
        const result =await Person.findByIdAndUpdate(req.params.id,req.body)
    res.json({
        code:'success',
        data:result
    })
    } catch (error) {
        res.json({
            code:'error',
            msg:error
        })
    }
})
//删除数据
router.delete('/:id',async (req,res)=>{
    try {
        const result= await Person.findByIdAndDelete(req.params.id)
        res.json({
            code: 'success',
            msg:"删除数据成功",
            data:result
        })
    } catch (error) {
        res.json({
            code: 'error',
            msg:error,
        })
    }
})
module.exports=router;
