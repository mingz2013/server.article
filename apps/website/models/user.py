# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from base0 import Base0


class User(Base0):
    """
    用户
    """

    def __init__(self):
        Base0.__init__(self)

        self.username = None
        self.password = None

        self.email = None
        self.mobile = None
        self.sex = None

        self.create_time = None
        self.update_time = None

        self.permission_id = None


class Permission(Base0):
    """
    用户权限
    """

    def __init__(self):
        Base0.__init__(self)

        self.sign = None
