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

const project_list = req => {
    let code = 200
    let data = [
        {
            name: '测试一',
            type_name: 'Web',
            start_time: '2018-02-20',
            end_time: ''
        },
        {
            name: '测试二',
            type_name: 'Web',
            start_time: '2017-02-20',
            end_time: '2017-04-05'
        },
        {
            name: '测试三',
            type_name: '小工具',
            start_time: '2018-01-20',
            end_time: ''
        }
    ]
    return{
        code,
        data
    }
}

Mock.mock(`${domain}/login`, 'post', login_data)
Mock.mock(`${domain}/project/list`, 'post', project_list)