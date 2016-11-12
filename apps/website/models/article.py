# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from base0 import Base0


class Article(Base0):
    """
    文章
    """

    def __init__(self):
        Base0.__init__(self)

        self.title = None
        self.content = None

        self.user_id = None

        self.create_time = None
        self.update_time = None

        self.category_id = None
        self.tag_ids = []

        self.status = 0  # -1: 删除, 0: 草稿, 1:发布

        self.view_times = None


class Category(Base0):
    """
    文章类别
    """

    def __init__(self):
        Base0.__init__(self)

        self.title = None

        self.create_time = None
        self.update_time = None

        pass


class Tag(Base0):
    """
    文章标签
    """

    def __init__(self):
        Base0.__init__(self)

        self.title = None

        self.create_time = None
        self.update_time = None

        pass
