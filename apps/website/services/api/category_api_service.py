# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from ...mongo_db.category_db import CategoryDB


class CategoryAPIService(object):
    def __init__(self):
        pass

    @staticmethod
    def get_category_list():
        category_list = CategoryDB.get_category_list()
        i = 0
        category_list_copy = []
        for category in category_list:
            category_copy = {}
            category_copy.update(category)
            category_copy.update({
                "index": i,
            })
            category_list_copy.append(category_copy)
            i += 1

        return category_list_copy

        # @staticmethod
        # def get_article_detail(article_id):
        #     article = ArticleDB.get_article_by_id(article_id)
        #     article_copy = {}
        #     article_copy.update(article)
        #     article_copy.update({
        #         "author": UserDB.get_author_info_by_id(article['user_id'])
        #     })
        #     return article_copy
        #
        # @staticmethod
        # def remove_article(article_id):
        #     ArticleDB.remove_article_by_id(article_id)
        #

    @staticmethod
    def add_article(article):
        CategoryDB.add_category(article)
        #
        # @staticmethod
        # def update_article(article):
        #     ArticleDB.update_article(article)
