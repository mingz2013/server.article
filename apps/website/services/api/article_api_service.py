# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from ...mongo_db.article_db import ArticleDB
from ...mongo_db.user_db import UserDB


class ArticleAPIService(object):
    def __init__(self):
        pass

    @staticmethod
    def get_article_list():
        article_list = ArticleDB.get_article_list()
        i = 0
        article_list_copy = []
        for article in article_list:
            article_copy = {}
            article_copy.update(article)
            article_copy.update({
                "index": i,
                "author": UserDB.get_author_info_by_id(article['user_id'])
            })
            article_list_copy.append(article_copy)
            i += 1

        return article_list_copy

    @staticmethod
    def get_article_detail(article_id):
        article = ArticleDB.get_article_by_id(article_id)
        article_copy = {}
        article_copy.update(article)
        article_copy.update({
            "author": UserDB.get_author_info_by_id(article['user_id'])
        })
        return article_copy

    @staticmethod
    def remove_article(article_id):
        ArticleDB.remove_article_by_id(article_id)

    @staticmethod
    def add_article(article):
        ArticleDB.add_article(article)

    @staticmethod
    def update_article(article):
        ArticleDB.update_article(article)
