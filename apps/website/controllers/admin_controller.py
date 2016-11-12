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
from ..services.admin_service import AdminService

api = Blueprint('admin_controller', __name__, url_prefix='/admin')


@api.route('/', methods=['GET'])
def index():
    if AdminService.check_is_need_init():
        return redirect(url_for('init_controller.index'))
    if AdminService.check_is_login():
        return redirect(url_for('.login'))
    return render_template("admin/main.html")


@api.route('/login', methods=['GET'])
def login():
    return render_template("admin/login.html")


@api.route('/users', methods=['GET'])
def users():
    return render_template("admin/users.html")


@api.route('/articles', methods=['GET'])
def articles():
    return render_template("admin/articles.html")
