/**
 * Created by zhaojm on 12/11/2016.
 */

import $ from 'jQuery'

class UserAPI {
    get_user_list() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "GET",
                url: "/api/user/list"
            }).then(resolve, reject);
        })
    }

    remove_user_by_id(_id) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "DELETE",
                url: "/api/user/remove/" + _id
            }).then(resolve, reject);
        })
    }

}

export default UserAPI
