# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from mongo_client_db import mongo_client_db
from ..utils.utils import model2dict


class PermissionDB(object):
    def __init__(self):
        pass

    @staticmethod
    def remove_all_permissions():
        mongo_client_db.permissions.drop()

    @staticmethod
    def add_one_permission(permission):
        mongo_client_db.permissions.insert(model2dict(permission))

    @staticmethod
    def get_admin_permission_id():
        admin_permission = mongo_client_db.permissions.find_one({"title": "admin"}, {"_id": 1})
        if admin_permission:
            return admin_permission['_id']
        else:
            raise Exception('not have admin permission, need run init dbs')

    @staticmethod
    def get_auther_permission_id():
        pass


class UserDB(object):
    def __init__(self):
        pass

    @staticmethod
    def remove_all_users():
        mongo_client_db.users.drop()

    @staticmethod
    def add_one_user(user):
        mongo_client_db.users.insert(model2dict(user))

    @staticmethod
    def check_is_have_admin():
        admin_permission_id = PermissionDB.get_admin_permission_id()
        admin = mongo_client_db.users.find_one({"permission_id": admin_permission_id}, {"_id": 1})
        if admin:
            return True
        else:
            return False
