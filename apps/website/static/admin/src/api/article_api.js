/**
 * Created by zhaojm on 12/11/2016.
 */

import $ from 'jQuery'

class ArticleAPI {
    get_article_list() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "GET",
                url: "/api/article/list"
            }).then(resolve, reject);
        })
    }

    remove_article_by_id(article_id) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "DELETE",
                url: "/api/article/remove/" + article_id
            }).then(resolve, reject);
        })
    }

    add_article(article) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                data: article,
                url: "/api/article/add"
            }).then(resolve, reject);
        })
    }

    get_article(article_id) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "GET",
                url: "/api/article/detail/" + article_id
            }).then(resolve, reject);
        })
    }

    update_article(article) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "PUT",
                data: article,
                url: "/api/article/update"
            }).then(resolve, reject);
        })
    }

}

export default ArticleAPI