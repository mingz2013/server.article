# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import Blueprint, jsonify

from ...services.api.article_api_service import ArticleAPIService

api = Blueprint('article_api_controller', __name__, url_prefix='/article')


@api.route('/', methods=['GET'])
def index():
    return 'article index'


@api.route('/list', methods=['GET'])
def list():
    article_list = ArticleAPIService.get_article_list()
    return jsonify(article_list)


@api.route('/detail/<article_id>', methods=['GET'])
def detail(article_id):
    article = ArticleAPIService.get_article_detail(article_id)
    return jsonify(article)


@api.route('/add', methods=['POST'])
def add():
    return jsonify({"retcode": 0, "errors": "", "success": "True"})


@api.route('/remove/<article_id>', methods=['DELETE'])
def remove(article_id):
    return jsonify({"retcode": 0, "errors": "", "success": "True"})


@api.route('/update', methods=['PUT'])
def add():
    return jsonify({"retcode": 0, "errors": "", "success": "True"})
