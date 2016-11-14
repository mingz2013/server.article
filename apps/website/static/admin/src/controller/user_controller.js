/**
 * Created by zhaojm on 14/11/2016.
 */

import user_service from '../services/user_service'

import $ from 'jQuery'


class UserController {
    constructor() {
        $('#user_list').show(() => {
            user_service.display_user_list();
        });

        $('#user_add_btn').click(() => {
            user_service.add_user();
        });

        $('#user_detail').show(() => {
            user_service.get_user($('#user_id').val());
        });

        $('#user_edit_btn').click(() => {
            location.href = "/admin/user/update/" + $('#user_id').val();
        });
        $('#user_remove_btn').click(() => {
            user_service.remove_user($('#user_id').val());
        });


        $('#user_update').show(() => {
            user_service.get_user_update($('#user_id').val());
        });

        $('#user_update_btn').click(() => {
            user_service.update_user($('#user_id').val());
        });

    }
}

export default UserController



