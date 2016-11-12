# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import request, Blueprint, current_app, jsonify

# from ..utils import model2dict
# from ..mongo import UserDB, QQBindCodeDB, ClusterDB
# import json

api = Blueprint('user_controller', __name__, url_prefix='/user')


@api.route('/', methods=['GET'])
def index():
    return "user index"
