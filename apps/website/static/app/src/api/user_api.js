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

    remove_user_by_id(user_id) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "DELETE",
                url: "/api/user/remove/" + user_id
            }).then(resolve, reject);
        })
    }

    add_user(user) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                data: user,
                url: "/api/user/add"
            }).then(resolve, reject);
        })
    }

    get_user(user_id) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "GET",
                url: "/api/user/detail/" + user_id
            }).then(resolve, reject);
        })
    }

}

export default UserAPI
