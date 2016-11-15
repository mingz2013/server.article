/**
 * Created by zhaojm on 15/11/2016.
 */
import article_service from '../../services/article_service'
import category_service from '../../services/category_service'

import $ from 'jQuery'

class ArticleDetailController {

    constructor() {
        let article_id = $('#article_id').val();
        article_service.get_article(article_id).then((article)=> {
            $('#username').text(article.username);
            $('#email').text(article.email);
            $('#mobile').text(article.mobile);
            $('#sex').text(article.sex);
            $('#permission').text(article.permission);
            $('#create_time').text(article.create_time);
        }).catch((errmsg)=> {
            console.log(errmsg);
        });


        $('#article_edit_btn').click(() => {
            location.href = "/admin/article/update/" + $('#article_id').val();
        });
        $('#article_remove_btn').click(() => {
            article_service.remove_article($('#article_id').val());
        });




    }
}

export default ArticleDetailController