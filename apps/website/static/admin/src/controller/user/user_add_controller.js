/**
 * Created by zhaojm on 15/11/2016.
 */
import user_service from '../../services/user_service'

import $ from 'jQuery'


class UserAddController {
    constructor() {

        $('#user_add_btn').click(() => {
            var user = {
                "username": $('#username').val(),
                "password": $('#password').val(),
                "email": $('#email').val(),
                "mobile": $('#mobile').val(),
                "sex": $('#sex').val(),
                "permission": $('#permission').val()
            };

            user_service.add_user().catch(function (errmsg) {
                //获取数据失败时的处理逻辑
                console.log(errmsg)
            });
        });
    }
}

export default UserAddController;