# -*- coding:utf-8 -*-
__author__ = 'zhaojm'


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
        pass

    @staticmethod
    def create_default_permissions():
        pass

    @staticmethod
    def init_dbs():
        InitService.create_default_permissions()
        InitService.create_default_users()
        InitService.create_default_state_types()
        InitService.create_default_tags()
        InitService.create_detault_categories()
        pass
