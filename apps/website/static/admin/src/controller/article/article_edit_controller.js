/**
 * Created by zhaojm on 15/11/2016.
 */
import article_service from '../../services/article_service'
import category_service from '../../services/category_service'

import $ from 'jQuery'

class ArticleEditController {

    constructor() {


        article_service.get_article_update($('#article_id').val());


        $('#article_update_btn').click(() => {
            article_service.update_article($('#article_id').val());
        });

    }
}

export default ArticleEditController