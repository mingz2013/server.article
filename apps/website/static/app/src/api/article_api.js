/**
 * Created by zhaojm on 12/11/2016.
 */

import $ from 'jQuery'

class ArticleAPI {
    get_article_list() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "get",
                url: "index.aspx",
                success: function (data) {
                    if (data.Status == "1") {
                        resolve(data.ResultJson); //在异步操作成功时调用
                    } else {
                        reject(data.ErrMsg); //在异步操作失败时调用
                    }
                }
            });
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

}

export default ArticleAPI