# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import Blueprint, render_template

api = Blueprint('article_controller', __name__, url_prefix='/article')


@api.route('/', methods=['GET'])
def index():
    return 'article index'


@api.route('/article/list', methods=['GET'])
def article_list():
    return render_template("home/article/list.html")


@api.route('/article/detail', methods=['GET'])
def article_detail():
    return render_template("home/article/detail.html")
