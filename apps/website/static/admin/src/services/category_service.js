/**
 * Created by zhaojm on 15/11/2016.
 */
import ArticleAPI from '../api/article_api'
import CategoryAPI from '../api/category_api'
import UserAPI from '../api/user_api'
import $ from 'jQuery'

class CategoryService {
    constructor() {
        this.category_api = new CategoryAPI();
    }

    add_category() {
        let category = $('#category_add').val();
        this.category_api.add_category(category).then(function (data) {
            //通过拿到的数据渲染页面
            console.log(data);
            if (data.retcode == 0) {
                console.log("add success..");
                //location.href = "/admin/article/list";

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

export default new CategoryService();