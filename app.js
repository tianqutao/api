const express =require('express')
const app = express()
//解构赋值
const {Person}=require('./db')
//解析请求数据
app.use(express.json())
/*app.get('/api/v1/people',(req,res)=>{
    res.json({
        code:'success',
        msg:'查询数据成功',
        data:[]
    })
})*/
//查询数据
app.get('/api/v1/people',async (req,res)=>{
    //在express中获取url中传递的参数使用 req.query.参数名
    const result = await Person.find({/*userName:req.query.userName*/})
    res.json({
        code:'success',
        msg:'查询数据成功',
        data:result
    })
})
//创建数据 存储到服务器
app.post('/api/v1/people',async (req,res)=>{
    /*方法一
    var p = new Person(req.body)
    p.save()
        .then(r=>{
            res.json({
                code:'success',
                msg:'创建数据成功',
                data:[]
            })
        })
        .catch(err=>{
            res.json({
                code:'err',
                mag:err
            })
        })*/
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
app.get('/api/v1/people/:id',async (req,res)=>{
    const result = await Person.findById(req.params.id)
    res.json({
        code:'success',
        msg:'查询成功',
        data:result,
    })
})

//修改数据
app.put('/api/v1/people/:id',async (req,res)=>{
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
app.delete('/api/v1/people/:id',async (req,res)=>{
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
app.listen(3333,()=>{
    console.log('服务器运行与3333端口')
})