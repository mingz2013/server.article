/**
 * Created by zhaojm on 15/11/2016.
 */

import user_service from '../../services/user_service'

import $ from 'jQuery'


class UserDetailController {
    constructor() {

        user_service.get_user($('#user_id').val());

            $('#user_edit_btn').click(() => {
                location.href = "/admin/user/update/" + $('#user_id').val();
            });
            $('#user_remove_btn').click(() => {
                user_service.remove_user($('#user_id').val());
            });


    }
}

export default UserDetailController;