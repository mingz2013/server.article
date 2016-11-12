# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from website.services.init_service import InitService


def init_dbs():
    InitService.init_dbs()
    pass


if __name__ == "__main__":
    init_dbs()
    pass
