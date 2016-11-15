/**
 * Created by zhaojm on 14/11/2016.
 */

import article_service from '../services/article_service'
import category_service from '../services/category_service'

import $ from 'jQuery'

class ArticleController {

    constructor() {

        $('#article_list').show(() => {
            article_service.display_article_list();
        });

        $('#article_add_btn').click(() => {
            article_service.add_article();
        });

        $('#article_detail').show(() => {
            article_service.get_article($('#article_id').val());
        });

        $('#article_edit_btn').click(() => {
            location.href = "/admin/article/update/" + $('#article_id').val();
        });
        $('#article_remove_btn').click(() => {
            article_service.remove_article($('#article_id').val());
        });


        $('#article_update').show(() => {
            article_service.get_article_update($('#article_id').val());
        });

        $('#article_update_btn').click(() => {
            article_service.update_article($('#article_id').val());
        });

        $('#category_add_switch').click(() => {
            $('#category_add_box').toggle();
        });

        $('#category_add').click(() => {
            category_service.add_category();
        });

    }
}

export default ArticleController