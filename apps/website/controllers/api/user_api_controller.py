# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import request, Blueprint, current_app, jsonify

from ...services.api.user_api_service import UserAPIService

api = Blueprint('user_api_controller', __name__, url_prefix='/api/user')


# TODO 前端用js获取 和 操作数据, 调用这里的接口
@api.route('/', methods=['GET'])
def index():
    return "user index"


@api.route('/list', methods=['GET'])
def list():
    user_list = UserAPIService.get_user_list()
    return jsonify(user_list)


@api.route('/detail/<user_id>', methods=['GET'])
def detail(user_id):
    user = UserAPIService.get_user_detail(user_id)
    return jsonify(user)


@api.route('/add', methods=['POST'])
def add():
    return jsonify({"retcode": 0, "errors": "", "success": "True"})


@api.route('/remove/<user_id>', methods=['DELETE'])
def remove(user_id):
    return jsonify({"retcode": 0, "errors": "", "success": "True"})


@api.route('/update', methods=['PUT'])
def update():
    return jsonify({"retcode": 0, "errors": "", "success": "True"})
