# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import Blueprint, current_app, request, jsonify, render_template, url_for, redirect

# import json
# from ..mongo import EventDB, ClusterDB, UserDB, QQBindCodeDB, AdminUserDB, ClubDB, AdminDB
# from threading import Thread
# import time, datetime, random
# from ..utils import model2dict, require_value_from_dict, get_value_from_dict
# from ..mredis import RedisClient
# from ..models import Event

api = Blueprint('admin_controller', __name__, url_prefix='/admin')


@api.route('/', methods=['GET'])
def index():
    return render_template("home/admin.html")
