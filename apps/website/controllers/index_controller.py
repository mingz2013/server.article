# coding: utf-8
__author__ = 'Van.zx'

from flask import Blueprint, render_template

api = Blueprint('index_controller', __name__, url_prefix='/')


@api.errorhandler(404)
def error_404():
    return render_template('404.html'), 404


@api.route('/', methods=['GET'])
def index():
    return render_template("index.html")


@api.route('/debug/', methods=['GET'])
def debug():
    return render_template("debug.html")
