/**
 * Created by zhaojm on 13/11/2016.
 */

import ArticleAPI from '../api/article_api'

class ArticleService {
    constructor() {
        this.article_api = ArticleAPI()
    }

    display_article_list() {
        this.article_api.get_article_list().then(function (ResultJson) {
            //通过拿到的数据渲染页面
        }).catch(function (ErrMsg) {
            //获取数据失败时的处理逻辑
        })
    }
}

export default ArticleService()
