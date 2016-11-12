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

        self.state_type_id = None

        self.view_times = None


class StateType(Base0):
    """
    文章状态, 草稿,发布,删除
    """

    def __init__(self):
        Base0.__init__(self)

        self.title = None
        self.sign = None


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
