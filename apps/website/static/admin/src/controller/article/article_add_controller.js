/**
 * Created by zhaojm on 15/11/2016.
 */
import article_service from '../../services/article_service'
import category_service from '../../services/category_service'
import user_service from '../../services/user_service'

import $ from 'jQuery'

class ArticleAddController {

    constructor() {
        this.get_user_list();
        this.get_category_list();

        $('#article_add_btn').click(() => {

            let article = {
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

        $('#category_add_btn').click(() => {
            let title = $('#category_add').val();
            let category = {
                "title": title
            };
            category_service.add_category(category).then((result)=> {
                this.get_category_list();
                $('#category_add_box').toggle();
            }).catch((errmsg)=> {
                console.log(errmsg);
            });
        });

    }

    get_user_list() {
        user_service.get_user_list().then((user_list)=> {
            let html_str = '';

            user_list.forEach(({_id, username}, index) => {
                html_str += '<option value="' + _id + '">' + username + '</option>'
            });

            $('#author_list').html(html_str);

        }).catch((errmsg)=> {
            console.log(errmsg);
        });
    }

    get_category_list() {
        category_service.get_category_list().then((category_list)=> {
            let html_str = '';

            category_list.forEach(({title}, index) => {
                html_str += '<input type="radio" name="category" value="' + title + '" checked="checked" />' + title
            });

            $('#category_box').html(html_str);
        }).catch((errmsg)=> {
            console.log(errmsg);
        });
    }
}

export default ArticleAddController;