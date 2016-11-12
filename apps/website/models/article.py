# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

import time

from base0 import Base0
from ..utils.utils import require_value_from_dict


class Article(Base0):
    """
    文章
    """

    def __init__(self, obj):
        Base0.__init__(self)

        self.title = require_value_from_dict(obj, 'title')
        self.content = require_value_from_dict(obj, 'content')

        self.user_id = require_value_from_dict(obj, 'user_id')

        self.create_time = time.time()
        self.update_time = time.time()

        self.category_id = require_value_from_dict(obj, 'category_id')
        self.tag_ids = require_value_from_dict(obj, 'tag_ids')

        self.status = 0  # -1: 删除, 0: 草稿, 1:发布
        self.publish_time = None

        self.view_times = 0


class Category(Base0):
    """
    文章类别
    """

    def __init__(self, title):
        Base0.__init__(self)

        self.title = title
        self.status = 0  # 0: 正常, -1: 删除
        self.create_time = time.time()
        self.update_time = time.time()
        pass


class Tag(Base0):
    """
    文章标签
    """

    def __init__(self, title):
        Base0.__init__(self)

        self.title = title

        self.create_time = time.time()
        self.update_time = time.time()
        pass
