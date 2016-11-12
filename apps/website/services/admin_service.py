# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from ..mongo_db.user_db import UserDB


class AdminService(object):
    def __init__(self):
        pass

    @staticmethod
    def check_is_need_init():
        if UserDB.check_is_have_admin():
            return False
        else:
            return True

    @staticmethod
    def check_is_login():
        return True
