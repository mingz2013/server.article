/**
 * Created by zhaojm on 13/11/2016.
 */

import '../css/style.css'

import ArticleController from './controller/article_controller'
import UserController from './controller/user_controller'
import CategoryController from './controller/category_controller'

import $ from 'jQuery'

import user_service from './services/user_service'
window.user_service = user_service;

$(document).ready(() => {
    new ArticleController();
    new UserController();
    new CategoryController();
});










