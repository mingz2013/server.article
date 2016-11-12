# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import request, Blueprint, jsonify

from ...services.api.user_api_service import UserAPIService

api = Blueprint('user_api_controller', __name__, url_prefix='/api/user')


# TODO 前端用js获取 和 操作数据, 调用这里的接口
@api.route('/', methods=['GET'])
def index():
    return "user index"


@api.route('/list', methods=['GET'])
def list():
    try:
        user_list = UserAPIService.get_user_list()
        return jsonify({'retcode': 0, 'errmsg': "", 'result': user_list})
    except Exception, e:
        return jsonify({'retcode': -1, 'errmsg': e.message, 'result': ""})


@api.route('/detail/<user_id>', methods=['GET'])
def detail(user_id):
    try:
        user = UserAPIService.get_user_detail(user_id)
        return jsonify({'retcode': 0, 'errmsg': "", 'result': user})
    except Exception, e:
        return jsonify({'retcode': -1, 'errmsg': e.message, 'result': ""})


@api.route('/add', methods=['POST'])
def add():
    try:
        user = request.form['user']
        UserAPIService.add_user(user)
        return jsonify({'retcode': 0, 'errmsg': "", 'result': user})
    except Exception, e:
        return jsonify({'retcode': -1, 'errmsg': e.message, 'result': ""})


@api.route('/remove/<user_id>', methods=['DELETE'])
def remove(user_id):
    try:
        UserAPIService.remove_user(user_id)
        return jsonify({'retcode': 0, 'errmsg': "", 'result': "success"})
    except Exception, e:
        return jsonify({'retcode': -1, 'errmsg': e.message, 'result': ""})


@api.route('/update', methods=['PUT'])
def update():
    user = request.form['user']
    try:
        UserAPIService.update_user(user)
        return jsonify({'retcode': 0, 'errmsg': "", 'result': "success"})
    except Exception, e:
        return jsonify({'retcode': -1, 'errmsg': e.message, 'result': ""})
