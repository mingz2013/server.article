# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from mongo_client_db import mongo_client_db
from ..utils.utils import model2dict
from bson import ObjectId


class PermissionDB(object):
    def __init__(self):
        pass

    @staticmethod
    def remove_all_permissions():
        mongo_client_db.permissions.drop()

    @staticmethod
    def add_permission(permission):
        mongo_client_db.permissions.insert(model2dict(permission))

    @staticmethod
    def get_permission_title_by_id(id):
        permission = mongo_client_db.permissions.find_one({"_id": ObjectId(id)}, {"title": 1})
        return permission['title']

    @staticmethod
    def get_admin_permission_id():
        admin_permission = mongo_client_db.permissions.find_one({"title": "admin"}, {"_id": 1})
        if admin_permission:
            return admin_permission['_id']
        else:
            raise Exception('not have admin permission, need run init dbs')

    @staticmethod
    def get_auther_permission_id():
        author_permission = mongo_client_db.permissions.find_one({"title": "auther"}, {"_id": 1})
        if author_permission:
            return author_permission['_id']
        else:
            raise Exception('not have admin permission, need run init dbs')


class UserDB(object):
    def __init__(self):
        pass

    @staticmethod
    def remove_all_users():
        mongo_client_db.users.drop()

    @staticmethod
    def add_user(user):
        mongo_client_db.users.insert(model2dict(user))

    @staticmethod
    def get_user_list():
        users = mongo_client_db.users.find({}, {"permission_id": 1, "username": 1})
        return users

    @staticmethod
    def get_user_by_id(user_id):
        user = mongo_client_db.users.find_one({"_id": ObjectId(user_id)},
                                              {"username": 1, "email": 1, "mobile": 1, "sex": 1, "create_time": 1,
                                               "update_time": 1, "permission_id": 1})
        return user

    @staticmethod
    def remove_user_by_id(user_id):
        mongo_client_db.users.remove({"_id": ObjectId(user_id)})

    @staticmethod
    def update_user(user):
        mongo_client_db.users.update({"_id": user._id}, user)

    @staticmethod
    def check_is_have_admin_user():
        admin_permission_id = PermissionDB.get_admin_permission_id()
        admin = mongo_client_db.users.find_one({"permission_id": admin_permission_id}, {"_id": 1})
        if admin:
            return True
        else:
            return False

    @staticmethod
    def get_author_info_by_id(user_id):
        user = mongo_client_db.users.find_one({"_id": ObjectId(user_id)}, {"username": 1, "permission_id": 1})
        return user
