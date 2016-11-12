# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from ...models.user import Permission, User
from ...mongo_db.user_db import PermissionDB, UserDB

import logging


class InitService(object):
    def __init__(self):
        pass

    @staticmethod
    def create_default_state_types():
        pass

    @staticmethod
    def create_detault_categories():
        pass

    @staticmethod
    def create_default_tags():
        pass

    @staticmethod
    def create_default_users():
        UserDB.remove_all_users()
        users = [
            User("mingz", "123456", "123456@qq.com", "12345678900", "male", PermissionDB.get_admin_permission_id())
        ]
        for u in users:
            UserDB.add_one_user(u)
            logging.info("add user %s success..." % u.username)

    @staticmethod
    def create_default_permissions():
        PermissionDB.remove_all_permissions()

        permissions = [
            Permission("admin", "A"),
            Permission("author", "B")
        ]

        for p in permissions:
            PermissionDB.add_one_permission(p)
            logging.info("add permission %s: %s success..." % (p.title, p.sign))

    @staticmethod
    def init_dbs():
        InitService.create_default_permissions()
        InitService.create_default_users()
        InitService.create_default_state_types()
        InitService.create_default_tags()
        InitService.create_detault_categories()
        pass
