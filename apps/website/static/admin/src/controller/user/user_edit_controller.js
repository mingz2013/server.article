/**
 * Created by zhaojm on 15/11/2016.
 */
import user_service from '../../services/user_service'

import $ from 'jQuery'


class UserEditController {
    constructor() {
        let user_id = $('#user_id').val();


        user_service.get_user_update(user_id).then((user)=> {
            $('#username').val(user.username);
            $('#email').val(user.email);
            $('#mobile').val(user.mobile);
            $('#sex').val(user.sex);
            $('#permission').val(user.permission);
            $('#create_time').val(user.create_time);
        });

        $('#user_update_btn').click(() => {
            let user = {
                "_id": $('#user_id').val(),
                "username": $('#username').val(),
                "password": $('#password').val(),
                "email": $('#email').val(),
                "mobile": $('#mobile').val(),
                "sex": $('#sex').val(),
                "permission": $('#permission').val(),
            };
            user_service.update_user(user);
        });

    }
}

export default UserEditController;