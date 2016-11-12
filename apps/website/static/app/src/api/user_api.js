/**
 * Created by zhaojm on 12/11/2016.
 */

import $ from 'jQuery'

class UserAPI {
    get_user_list() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "get",
                url: "/api/user/list"
            }).then(resolve, reject);
        })
    }

}

export default UserAPI
