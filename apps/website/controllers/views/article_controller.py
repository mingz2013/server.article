# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import Blueprint, render_template

from ...services.api.article_api_service import ArticleAPIService
from ...services.api.category_api_service import CategoryAPIService

api = Blueprint('article_controller', __name__, url_prefix='/article')


@api.route('/', methods=['GET'])
def index():
    return 'article index'


@api.route('/article/list', methods=['GET'])
def article_list_all():
    category_list = CategoryAPIService.get_category_list()
    article_list = ArticleAPIService.get_article_list()
    return render_template("home/article/list.html", category_list=category_list, article_list=article_list)


@api.route('/article/category/<category>', methods=['GET'])
def article_list_by_category(category):
    category_list = CategoryAPIService.get_category_list()
    article_list = ArticleAPIService.get_article_list(category=category)
    return render_template("home/article/list.html", category_list=category_list, article_list=article_list)


@api.route('/article/tag/<tag>', methods=['GET'])
def article_list_by_tag(tag):
    category_list = CategoryAPIService.get_category_list()
    article_list = ArticleAPIService.get_article_list(tag=tag)
    return render_template("home/article/list.html", category_list=category_list, article_list=article_list)


@api.route('/article/month/<month>', methods=['GET'])
def article_list_by_month(month):
    category_list = CategoryAPIService.get_category_list()
    article_list = ArticleAPIService.get_article_list(month=month)
    return render_template("home/article/list.html", category_list=category_list, article_list=article_list)


@api.route('/article/detail/<article_id>', methods=['GET'])
def article_detail(article_id):
    category_list = CategoryAPIService.get_category_list()
    article = ArticleAPIService.get_article_detail(article_id)
    return render_template("home/article/detail.html", category_list=category_list, article=article)
