# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from ...models.user import User
from ...mongo_db.user_db import UserDB

import logging


class InitToolService(object):
    def __init__(self):
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
            User({
                "username": "mingz",
                "password": "123456",
                "email": "123456@qq.com",
                "mobile": "12345678900",
                "sex": "male"
            })
        ]
        for u in users:
            UserDB.add_user(u)
            logging.info("add user %s success..." % u.username)


    @staticmethod
    def init_dbs():
        InitToolService.create_default_users()
        InitToolService.create_default_tags()
        InitToolService.create_detault_categories()
        pass
