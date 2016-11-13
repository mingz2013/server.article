/**
 * Created by zhaojm on 13/11/2016.
 */

import ArticleAPI from '../api/article_api'

class ArticleService {
    constructor() {
        this.article_api = new ArticleAPI()
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
            "title": $('#title').val(),
            "author": $('#author').val(),
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
}

export default new ArticleService()
