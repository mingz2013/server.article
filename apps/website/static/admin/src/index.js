/**
 * Created by zhaojm on 13/11/2016.
 */

import '../css/style.css'

import user_service from './services/user_service'
import article_service from './services/article_service'

import $ from 'jQuery'

//window.$ = $; // TODO 没用??
//window.user_service = user_service;
//window.article_service = article_service;


$(document).ready(() => {

    $('#user_list').show(() => {
        user_service.display_user_list();
    });

    $('#add_user').onclick = user_service.add_user();

    $('#user_detail').show(() => {
        user_service.get_user('{{ user_id }}');
    });


    $('#user_edit').onclick = () => {
        location.href = "/admin/user/update/" + '{{ user_id }}'
    };
    $('#user_remove').onclick = user_service.remove_user('{{ user_id }}');


    $('#user_update').show(() => {
        user_service.get_user_update('{{ user_id }}');
    });

    $('#update').onclick = user_service.update_user('{{ user_id }}');


});






