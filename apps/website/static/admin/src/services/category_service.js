/**
 * Created by zhaojm on 15/11/2016.
 */
import article_api from '../api/article_api'
import category_api from '../api/category_api'
import user_api from '../api/user_api'
import $ from 'jQuery'

class CategoryService {
    constructor() {
    }

    add_category() {
        let category = $('#category_add').val();
        category_api.add_category(category).then(function (data) {
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

let category_service = new CategoryService();

export default new category_service;