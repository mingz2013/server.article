/**
 * Created by zhaojm on 14/11/2016.
 */

import user_service from './services/user_service'

import $ from 'jQuery'


class UserController {
    constructor() {
        $('#user_list').show(() => {
            user_service.display_user_list();
        });

        $('#user_add_btn').onclick = user_service.add_user();


        $('#user_detail').show(() => {
            user_service.get_user('{{ user_id }}');
        });

        $('#user_edit_btn').onclick = () => {
            location.href = "/admin/user/update/" + '{{ user_id }}'
        };
        $('#user_remove_btn').onclick = user_service.remove_user('{{ user_id }}');


        $('#user_update').show(() => {
            user_service.get_user_update('{{ user_id }}');
        });

        $('#user_update_btn').onclick = user_service.update_user('{{ user_id }}');

    }
}

export default UserController



