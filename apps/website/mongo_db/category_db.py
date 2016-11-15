# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from bson import ObjectId

from mongo_client_db import mongo_client_db


class CategoryDB(object):
    def __init__(self):
        pass

    @staticmethod
    def get_category_list():
        category_list = mongo_client_db.category.find()
        return category_list

    @staticmethod
    def add_category():
        pass
