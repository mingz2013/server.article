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


$(document).ready(function () {

    $('#user_list').show(function () {
        //console.log('user_list...');
        user_service.display_user_list();
    });


});






