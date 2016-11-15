/**
 * Created by zhaojm on 15/11/2016.
 */
import user_service from '../../services/user_service'

import $ from 'jQuery'


class UserListController {
    constructor() {
        $('#user_list').show(() => {
            user_service.display_user_list();
        });
    }
}

export default UserListController;