/**
 * Created by zhaojm on 13/11/2016.
 */

import article_api from '../api/article_api'
import user_api from '../api/user_api'
import $ from 'jQuery'

class ArticleService {
    constructor() {

    }

    display_article_list() {
        article_api.get_article_list().then(function (ResultJson) {
            //通过拿到的数据渲染页面
        }).catch(function (ErrMsg) {
            //获取数据失败时的处理逻辑
        })
    }

    remove_article(_id) {
        article_api.remove_article_by_id(_id).then(function (data) {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {
                console.log("remove success..");
                location.href = "/admin/article/list";
            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    }

    add_article() {
        var article = {
            "user_id": $('#user_id').val(),
            "title": $('#title').val(),
            "content": $('#content').val(),
            "category": $('#category').val(),
            "tags": $('#tags').val(),
            "status": $('#status').val()
        };
        article_api.add_article(article).then(function (data) {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {
                console.log("add success..");
                location.href = "/admin/article/list";
            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    }

    get_article(article_id) {
        article_api.get_article(article_id).then(function (data) {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {
                console.log("add success..");
                var article = data.result;

                $('#username').text(article.username);
                $('#email').text(article.email);
                $('#mobile').text(article.mobile);
                $('#sex').text(article.sex);
                $('#permission').text(article.permission);
                $('#create_time').text(article.create_time);

            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    }

    update_article(article_id) {
        var article = {
            "_id": article_id,
            "username": $('#username').val(),
            "password": $('#password').val(),
            "email": $('#email').val(),
            "mobile": $('#mobile').val(),
            "sex": $('#sex').val(),
            "permission": $('#permission').val(),
        };
        article_api.update_article(article).then(function (data) {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {
                console.log("update success..");
                location.href = "/admin/article/detail/" + user_id;
            } else {
                console.log("error retcode...");
                Promise.reject(data.errmsg);
            }
        }).catch(function (errmsg) {
            //获取数据失败时的处理逻辑
            console.log(errmsg)
        })
    }

    get_article_update(article_id) {
        article_api.get_article(article_id).then(function (data) {
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

    display_author_list() {
        user_api.get_user_list().then(function (data) {
            //通过拿到的数据渲染页面
            console.log(data);

            if (data.retcode == 0) {
                console.log("get success..");
                //location.href = "/admin/article/list";
                var user_list = data.result;

                var html_str = '';

                user_list.forEach(({_id, username}, index) => {
                    html_str += '<option value="' + _id + '">' + username + '</option>'
                });
                $('#user_id').html(html_str);

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

let article_service = new ArticleService();
export default article_service;
