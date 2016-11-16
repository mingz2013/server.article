# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from ...mongo_db.article_db import ArticleDB
from ...mongo_db.user_db import UserDB


class ArticleAPIService(object):
    def __init__(self):
        pass

    @staticmethod
    def get_article_list(category=None, tag=None, month=None):
        if category:
            article_list = ArticleDB.get_article_list_by_category(category)
        elif tag:
            article_list = ArticleDB.get_article_list_by_tag(tag)
        elif month:
            article_list = ArticleDB.get_article_list_by_month(month)
        else:
            article_list = ArticleDB.get_article_list()
        i = 0
        article_list_copy = []
        for article in article_list:
            article_copy = {}

            user = UserDB.get_author_info_by_id(article['user_id'])
            author = {
                "_id": user.get("id"),
                "username": user.get("username")
            }

            article_copy.update({
                "_id": str(article.get("_id")),
                "title": article.get("title"),
                "content": article.get("content"),
                "category": article.get("category"),
                "tags": article.get("tags"),
                "author": author,
                "create_time": article.get("create_time"),
                "update_time": article.get("update_time"),
                "publish_time": article.get("publish_time"),
                "status": article.get("status"),
                "view_times": article.get("view_times")
            })
            article_list_copy.append(article_copy)
            i += 1

        return article_list_copy

    @staticmethod
    def get_article_detail(article_id):
        article = ArticleDB.get_article_by_id(article_id)
        user = UserDB.get_author_info_by_id(article['user_id'])
        author = {
            "_id": user.get("id"),
            "username": user.get("username")
        }

        article_copy = {}
        article_copy.update({
            "_id": str(article.get("_id")),
            "title": article.get("title"),
            "content": article.get("content"),
            "category": article.get("category"),
            "tags": article.get("tags"),
            "author": author,
            "create_time": article.get("create_time"),
            "update_time": article.get("update_time"),
            "publish_time": article.get("publish_time"),
            "status": article.get("status"),
            "view_times": article.get("view_times")
        })
        return article_copy

    @staticmethod
    def remove_article(article_id):
        ArticleDB.remove_article_by_id(article_id)

    @staticmethod
    def add_article(article):
        return ArticleDB.add_article(article)

    @staticmethod
    def update_article(article):
        ArticleDB.update_article(article)
