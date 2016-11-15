/**
 * Created by zhaojm on 15/11/2016.
 */
import user_service from '../../services/user_service'

import $ from 'jQuery'


class UserUpdateController {
    constructor() {
        $('#user_update').show(() => {
            user_service.get_user_update($('#user_id').val());
        });

        $('#user_update_btn').click(() => {
            user_service.update_user($('#user_id').val());
        });
    }
}

export default UserUpdateController;