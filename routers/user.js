const router = require('express').Router();
const db = require('../utils/db');
router.post('/', (req, res, next) => {
    const sql = `SELECT * FROM \`use\``;
    db.query(sql, '', result => {
        db.query('SELECT count(*) as count FROM \`use\`', [], function (resultInner, fields) {
            if (result.length) {
                res.send({
                    code: 200,
                    msg: '查询成功',
                    data: {
                        data: result,
                        total: resultInner[0].count,
                    },
                });
            } else {
                res.send({
                    code: 400,
                    msg: '登录失败',
                });
            }
        });
    });
});
module.exports = router;
