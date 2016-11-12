# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import Blueprint, current_app, request, jsonify, render_template, url_for, redirect, session

# import json
# from ..mongo import EventDB, ClusterDB, UserDB, QQBindCodeDB, AdminUserDB, ClubDB, AdminDB
# from threading import Thread
# import time, datetime, random
# from ..utils import model2dict, require_value_from_dict, get_value_from_dict
# from ..mredis import RedisClient
# from ..models import Event
from ...services.admin_service import AdminService

api = Blueprint('admin_controller', __name__, url_prefix='/admin')


@api.route('/', methods=['GET'])
def index():
    if AdminService.check_is_need_init():
        return redirect(url_for('init_controller.index'))
    if not AdminService.check_is_login():
        return redirect(url_for('.login'))
    return render_template("admin/main.html")


@api.route('/login', methods=['GET'])
def login():
    return render_template("admin/login.html")


@api.route('/user/list', methods=['GET'])
def user_list():
    return render_template("admin/user/list.html")


@api.route('/user/add', methods=['GET'])
def user_add():
    return render_template("admin/user/add.html")


@api.route('/user/detail/<user_id>', methods=['GET'])
def user_detail(user_id):
    return render_template("admin/user/detail.html", user_id=user_id)


@api.route('/article/list', methods=['GET'])
def article_list():
    return render_template("admin/article/list.html")
