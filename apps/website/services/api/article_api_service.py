# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from ...mongo_db.article_db import ArticleDB
from ...models.article import Article


class ArticleAPIService(object):
    def __init__(self):
        pass

    @staticmethod
    def get_article_list():
        article_list = ArticleDB.get_article_list()
        # i = 0
        # article_list_copy = []
        # for artile in article_list:
        #     user_copy = {}
        #     user_copy.update(artile)
        #     user_copy.update({
        #         "index": i,
        #         "permission_title": PermissionDB.get_permission_title_by_id(user['permission_id'])
        #     })
        #     user_list.append(user_copy)
        #     i += 1
        # return user_list

    @staticmethod
    def get_article_detail(article_id):
        # user = UserDB.get_one_user_by_id(user_id)
        # user_copy = {}
        # user_copy.update(user)
        # user_copy.update({
        #     "permission_title": PermissionDB.get_permission_title_by_id(user['permission_id'])
        # })
        # return user_copy
        pass

    @staticmethod
    def remove_article(article_id):
        pass

    @staticmethod
    def add_article(article):
        pass

    @staticmethod
    def update_article(article):
        pass
