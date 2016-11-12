# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import request, Blueprint, current_app, jsonify

# from ..utils import model2dict
# from ..mongo import UserDB, QQBindCodeDB, ClusterDB
# import json

api = Blueprint('user_api_controller', __name__, url_prefix='/user')


# TODO 前端用js获取 和 操作数据, 调用这里的接口
@api.route('/', methods=['GET'])
def index():
    return "user index"


@api.route('/remove/<user_id>', methods=['GET'])
def user_remove(user_id):
    return jsonify({"retcode": 0, "errors": "", "success": "True"})


@api.route('/user/list', methods=['GET'])
def user_list():
    users = AdminService.get_user_list()
    return render_template("admin/user/list.html", users=users)


@api.route('/user/add', methods=['GET'])
def user_add():
    return render_template("admin/user/add.html")


@api.route('/user/detail/<user_id>', methods=['GET'])
def user_detail(user_id):
    user = AdminService.get_one_user(user_id)
    return render_template("admin/user/detail.html", user=user)
