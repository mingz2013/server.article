/**
 * Created by zhaojm on 13/11/2016.
 */

import UserAPI from '../api/user_api'
import $ from 'jQuery'

class UserService {
    constructor() {
        this.user_api = new UserAPI()
    }

    display_user_list() {
        this.user_api.get_user_list().then(function (data) {
            //通过拿到的数据渲染页面
            console.log(data);
            if (data.retcode == 0) {
                let user_list = data.result;
                let html_str = '<table><tr><td>index</td><td>username</td><td>permission</td></tr>';
                user_list.forEach(({username, permission}, index) => {
                    html_str += '<tr><td>index</td><td>' + username + '</td><td>' + permission + '</td></tr>';
                });
                html_str += '</table>';
                $('#user_list').html(html_str);
            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    }
}

export default new UserService()
