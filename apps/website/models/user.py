# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from base0 import Base0

import datetime
import time

class User(Base0):
    """
    用户
    """

    def __init__(self, username, password, email, mobile, sex, permission_id):
        Base0.__init__(self)
        if not username or not password or not email or not mobile or not sex or not permission_id:
            raise Exception('some params is None')
        self.username = username
        self.password = password

        self.email = email
        self.mobile = mobile
        self.sex = sex

        self.create_time = time.time()
        self.update_time = time.time()

        self.permission_id = permission_id


class Permission(Base0):
    """
    用户权限
    """

    def __init__(self, title, sign):
        Base0.__init__(self)
        if not title or not sign:
            raise Exception('title or sign is None')
        self.title = title
        self.sign = sign
