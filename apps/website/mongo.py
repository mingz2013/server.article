# -*- coding:utf-8 -*-
__author__ = 'Van'

import os
import pymongo
import datetime
import time
import threading

# lock = threading.Lock()
# from bson import ObjectId

MONGODB_HOST = os.getenv("MONGODB_HOST", '127.0.0.1')
MONGODB_PORT = os.getenv("MONGODB_PORT", 27017)
mongodb_client_db = pymongo.MongoClient(MONGODB_HOST, MONGODB_PORT).forads


class ArticleDB(object):
    def __init__(self):
        pass


class UserDB(object):
    def __init__(self):
        pass