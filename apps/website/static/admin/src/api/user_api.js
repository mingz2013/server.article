/**
 * Created by zhaojm on 12/11/2016.
 */

import $ from 'jQuery'

class UserAPI {
    get_user_list() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "/api/user/list"
            }).then(resolve, reject);
        })
    }

    remove_user_by_id(user_id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "DELETE",
                url: "/api/user/remove/" + user_id
            }).then(resolve, reject);
        })
    }

    add_user(user) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                data: user,
                url: "/api/user/add"
            }).then(resolve, reject);
        })
    }

    get_user(user_id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "/api/user/detail/" + user_id
            }).then(resolve, reject);
        })
    }

    update_user(user) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "PUT",
                data: user,
                url: "/api/user/update"
            }).then(resolve, reject);
        })
    }

}

let user_api = new UserAPI();

export default user_api;
