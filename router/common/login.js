const router = require('express').Router();
const db = require('../../utils/db')
router.get('/', (req, res, next) => {
    const {name, psd} = req.query;
    const sql = `SELECT * FROM \`use\` WHERE name = "${name}" AND psd = "${psd}"`
    db.query(sql, '', (result) => {
        if (result.length) {
            res.send({
                code: 200,
                msg: '登录成功',
              })
        } else {
            res.send({
                code: 400,
                msg: '登录失败',
            })
        }
    })
})
module.exports = router;