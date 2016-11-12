# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from ..mongo_db.user_db import UserDB, PermissionDB


class UserService(object):
    def __init__(self):
        pass

    @staticmethod
    def get_user_list():
        users = UserDB.get_user_list()
        i = 0
        user_list = []
        for user in users:
            user_copy = {}
            user_copy.update(user)
            user_copy.update({
                "index": i,
                "permission_title": PermissionDB.get_permission_title_by_id(user['permission_id'])
            })
            user_list.append(user_copy)
            i += 1
        return user_list

    @staticmethod
    def get_one_user(user_id):
        user = UserDB.get_one_user_by_id(user_id)
        user_copy = {}
        user_copy.update(user)
        user_copy.update({
            "permission_title": PermissionDB.get_permission_title_by_id(user['permission_id'])
        })
        return user_copy
