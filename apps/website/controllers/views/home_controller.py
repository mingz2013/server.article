# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import Blueprint, render_template
from ...services.api.category_api_service import CategoryAPIService
from ...services.api.tag_api_service import TagAPIService


api = Blueprint('home_controller', __name__, url_prefix='')


@api.route('/', methods=['GET'])
def index():
    category_list = CategoryAPIService.get_category_list()
    tag_list = TagAPIService.get_tag_list()
    return render_template("home/index.html", category_list=category_list, tag_list=tag_list)


@api.route('/about', methods=['GET'])
def about():
    return render_template("home/about.html")


@api.route('/contact', methods=['GET'])
def contact():
    return render_template("home/contact.html")


@api.route('/debug', methods=['GET'])
def debug():
    return render_template("home/debug.html")
