/**
 * Created by zhaojm on 15/11/2016.
 */
import article_service from '../../services/article_service'
import category_service from '../../services/category_service'

import $ from 'jQuery'

class ArticleAddController {

    constructor() {


        $('#article_add_btn').click(() => {

            var article = {
                "user_id": $('#user_id').val(),
                "title": $('#title').val(),
                "content": $('#content').val(),
                "category": $('#category').val(),
                "tags": $('#tags').val(),
                "status": $('#status').val()
            };

            article_service.add_article(article).then((article_id)=> {
                location.href = "/admin/article/detail/" + article_id;
            }).catch((errmsg)=> {
                console.log(errmsg);
            });

        });


        $('#category_add_switch').click(() => {
            $('#category_add_box').toggle();
        });

        $('#category_add').click(() => {
            category_service.add_category();
        });

    }
}

export default ArticleAddController;