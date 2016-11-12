# coding:utf-8
__author__ = 'zhaojm'

from flask import Blueprint, current_app, request, jsonify

# import json
# from ..mongo import ArticleDB
# from threading import Thread
# import time, datetime
# from ..utils import model2dict
# from ..mredis import RedisClient

api = Blueprint('article_controller', __name__, url_prefix='/article')


@api.route('/', methods=['GET'])
def index():
    return 'article index'
