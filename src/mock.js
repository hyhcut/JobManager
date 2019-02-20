const Mock = require('mockjs')
const domain = 'http://job/api'

const login_data = req => {

    let code = 200
    let data = {
        id: 1,
        message: '登陆成功'
    }

    return{
        code,
        data
    }
}

Mock.mock(`${domain}/login`, 'post', login_data)