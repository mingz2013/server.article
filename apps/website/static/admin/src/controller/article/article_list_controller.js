/**
 * Created by zhaojm on 15/11/2016.
 */
import article_service from '../../services/article_service'
import category_service from '../../services/category_service'

import $ from 'jQuery'

class ArticleListController {

    constructor() {

        $('#article_list').show(() => {
            article_service.display_article_list();
        });


        $('#article_detail_btn').click(() => {
            location.href = "/admin/article/detail/" + $('#article_id').val();
        });

        $('#article_edit_btn').click(() => {
            location.href = "/admin/article/update/" + $('#article_id').val();
        });
        $('#article_remove_btn').click(() => {
            article_service.remove_article($('#article_id').val());
        });


    }
}

export default ArticleListController