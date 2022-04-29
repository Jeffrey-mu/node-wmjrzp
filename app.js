const app = require('express')();
const port = 3030;
const index = require('./router/index');
var bodyParser = require('body-parser')
const login = require('./router/common/login');

//设置跨域访问 -- 开始 --
// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*'); //的允许所有域名的端口请求（跨域解决）
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Content-Type', 'application/json;charset=utf-8');
//     if (req.method === 'OPTIONS') {
//         res.end();
//     } else {
//         next();
//     }
// });
// app.use(bodyParser.urlencoded({ extended: false }));
//设置跨域访问 -- 结束 --
// 接口名称
app.use('/', index);
app.use('/login', login);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
