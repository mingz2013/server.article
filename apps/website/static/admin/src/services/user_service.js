/**
 * Created by zhaojm on 13/11/2016.
 */

import user_api from '../api/user_api'
import $ from 'jQuery'

class UserService {
    constructor() {
    }

    display_user_list() {

        user_api.get_user_list().then((data) => {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {

                let user_list = data.result;

                Promise.resolve(user_list);

                let html_str = '<table><tr><td>index</td><td>username</td><td>permission</td></tr>';

                user_list.forEach(({_id, username, permission}, index) => {

                    html_str += '<tr>' +
                        '<td>' + index + '</td>' +
                        '<td><a href="/admin/user/detail/' + _id + '">' + username + '</a></td>' +
                        '<td>' + permission + '</td>' +
                        '<td><a href="/admin/user/update/' + _id + '">edit</a></td>' +
                        '<td><a href="javascript:void(0);" onclick="window.user_service.remove_user(\'' + _id + '\')">remove</a></td>' +
                        '</tr>';

                });

                html_str += '</table>';

                $('#user_list').html(html_str);


            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    };

    remove_user(_id) {
        user_api.remove_user_by_id(_id).then((data) => {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {
                console.log("remove success..");
                location.href = "/admin/user/list";
            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    }

    add_user() {
        var user = {
            "username": $('#username').val(),
            "password": $('#password').val(),
            "email": $('#email').val(),
            "mobile": $('#mobile').val(),
            "sex": $('#sex').val(),
            "permission": $('#permission').val()
        };
        user_api.add_user(user).then((data) => {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {
                console.log("add success..");
                location.href = "/admin/user/list";
            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    }

    get_user(user_id) {
        user_api.get_user(user_id).then((data) => {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {
                console.log("add success..");
                var user = data.result;

                $('#username').text(user.username);
                $('#email').text(user.email);
                $('#mobile').text(user.mobile);
                $('#sex').text(user.sex);
                $('#permission').text(user.permission);
                $('#create_time').text(user.create_time);

            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    }

    update_user(user_id) {
        var user = {
            "_id": user_id,
            "username": $('#username').val(),
            "password": $('#password').val(),
            "email": $('#email').val(),
            "mobile": $('#mobile').val(),
            "sex": $('#sex').val(),
            "permission": $('#permission').val(),
        };
        user_api.update_user(user).then((data) => {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {
                console.log("update success..");
                location.href = "/admin/user/detail/" + user_id;
            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    }

    get_user_update(user_id) {
        user_api.get_user(user_id).then((data) => {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {
                console.log("add success..");
                var user = data.result;

                $('#username').val(user.username);
                $('#email').val(user.email);
                $('#mobile').val(user.mobile);
                $('#sex').val(user.sex);
                $('#permission').val(user.permission);
                $('#create_time').val(user.create_time);

            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    }
}

let user_service = new UserService();
export default user_service;
