# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from ...mongo_db.user_db import UserDB
from ...utils.utils import model2dict


class UserAPIService(object):
    def __init__(self):
        pass

    @staticmethod
    def get_user_list():
        user_list = UserDB.get_user_list()
        user_list_copy = []
        for user in user_list:
            user_list_copy.append(model2dict(user))
        return user_list_copy

    @staticmethod
    def get_user_detail(user_id):
        user = UserDB.get_user_by_id(user_id)
        return user

    @staticmethod
    def remove_user(user_id):
        UserDB.remove_user_by_id(user_id)

    @staticmethod
    def add_user(user):
        UserDB.add_user(user)

    @staticmethod
    def update_user(user):
        UserDB.update_user(user)
