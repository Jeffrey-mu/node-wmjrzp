const app = require('express')()
const port = 3030;
const index = require('./router/index')
const login = require('./router/common/login')
app.use('/', index)
app.use('/login', login)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});