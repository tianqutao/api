# ORM
ORM/对象关系模型映射，通过它可以把数据库表映射到我们的代码中。不需要自己写数据库查询操作语句就可以实现数据库的操作。数据库操作由ORM组件完成。使用ORM可以减少自己写代码时出现bug的风险，并且可以非常方便的做数据库切换

ORM常见的有：
Hibernate,EnterPrise,ActiveRecord,mongoose

mongDB数据库

mongoose是用来操作数据库的，是orm的中间件
    方法：save
        findById
        findByIdAndDelete
        findByIdAndUpdate


## 跨域（协议，域名，端口号）
https：443
http：80
免费的证书资源：acme.sh

##前后端分离开发的时候，api接口常常用到token
在发送请求的时候会在http请求头中设置一个token值，这个值是用户第一次登录成功后服务器端返回的
现在常用的token加密技术叫：jwt
json web token