//普通用户
const express = require('express')
const router = express.Router()
const {Person} = require('../../../db')
console.log()
//注意此判断的逻辑
router.post('/login',async (req,res)=>{
    try {
        const result = await Person.findOne({
            userName:req.body.userName
        })
        if(result){
            if(result.pwd == req.body.pwd){
                res.json({
                    code:'success',
                    msg:'登陆成功'
                })
            }else{
                res.json({
                    code:'error',
                    msg:'密码错误'
                })
            }
        }else{
            res.json({
                code:'error',
                msg:'用户信息不存在'
            })
        }
    
    } catch (error) {
        res.json({
            code:'123',
            data:error
        })
    }
})

module.exports = router