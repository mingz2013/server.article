/**
 * Created by zhaojm on 13/11/2016.
 */

import ArticleAPI from '../api/article_api'
import UserAPI from '../api/user_api'
import $ from 'jQuery'

class ArticleService {
    constructor() {
        this.article_api = new ArticleAPI();
        this.user_api = new UserAPI();
    }

    display_article_list() {
        this.article_api.get_article_list().then(function (ResultJson) {
            //通过拿到的数据渲染页面
        }).catch(function (ErrMsg) {
            //获取数据失败时的处理逻辑
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
        this.article_api.add_article(article).then(function (data) {
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

    display_author_list() {
        this.user_api.get_user_list().then(function (data) {
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

export default new ArticleService()
