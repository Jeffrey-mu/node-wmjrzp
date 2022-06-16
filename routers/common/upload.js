const router = require('express').Router();
const path = require('path');
const fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'upload/' });
router.post('/', upload.single('file'), (req, res, next) => {
    fs.readFile(req.file.path, (err, data) => {
        console.log(data);
        //如果读取失败
        if (err) {
            return res.send('上传失败');
        }
        //如果读取成功
        //声明图片名字为时间戳和随机数拼接成的，尽量确保唯一性
        let time = Date.now() + parseInt(Math.random() * 999) + parseInt(Math.random() * 2222);
        //拓展名
        let extname = req.file.mimetype.split('/')[1];
        //拼接成图片名
        let keepname = time + '.' + extname;
        //三个参数
        //1.图片的绝对路径
        //2.写入的内容
        //3.回调函数
        fs.writeFile(path.join(__dirname, '../../static/uploadsImg/' + keepname), data, err => {
            if (err) {
                console.log(err);
                return res.send('写入失败');
            }
            res.send({
                code: 200,
                msg: '上传ok',
                data: '/uploadsImg/' + keepname,
            });
        });
    });
});
module.exports = router;
