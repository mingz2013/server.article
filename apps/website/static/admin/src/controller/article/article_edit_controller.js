/**
 * Created by zhaojm on 15/11/2016.
 */
import article_service from '../../services/article_service'
import category_service from '../../services/category_service'

import $ from 'jQuery'

class ArticleEditController {

    constructor() {
        let article_id = $('#article_id').val();

        article_service.get_article(article_id).then((article)=> {
            $('#username').val(article.username);
            $('#email').val(article.email);
            $('#mobile').val(article.mobile);
            $('#sex').val(article.sex);
            $('#permission').val(article.permission);
            $('#create_time').val(article.create_time);
        }).catch((errmsg)=> {
            console.log(errmsg);
        });


        $('#article_update_btn').click(() => {


            var article = {
                "_id": article_id,
                "username": $('#username').val(),
                "password": $('#password').val(),
                "email": $('#email').val(),
                "mobile": $('#mobile').val(),
                "sex": $('#sex').val(),
                "permission": $('#permission').val(),
            };

            article_service.update_article(article).then((result)=> {
                location.href = "/admin/article/detail/" + article_id;
            }).catch((errmsg)=> {
                console.log(errmsg);
            });
        });

    }
}

export default ArticleEditController