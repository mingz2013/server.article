/**
 * Created by zhaojm on 15/11/2016.
 */
import user_service from '../../services/user_service'

import $ from 'jQuery'


class UserAddController {
    constructor() {
        $('#user_add').show(() => {
            user_service.display_user_list();
        });

        $('#user_add_btn').click(() => {
            user_service.add_user();
        });

    }
}

export default UserAddController;