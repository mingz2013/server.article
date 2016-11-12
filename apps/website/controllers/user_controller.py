# -*- coding:utf-8 -*-
__author__ = 'Van'
from flask import request, Blueprint, current_app, jsonify

# from ..utils import model2dict
# from ..mongo import UserDB, QQBindCodeDB, ClusterDB
# import json

api = Blueprint('users_controller', __name__, url_prefix='')
