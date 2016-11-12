# coding: utf-8
__author__ = 'Van.zx'

from flask import Blueprint, render_template

api = Blueprint('index_controller', __name__, url_prefix='/')


@api.route('/', methods=['GET'])
def index():
    return render_template("index/index.html")


@api.route('/about', methods=['GET'])
def about():
    return render_template("index/about.html")


@api.route('/contact', methods=['GET'])
def contact():
    return render_template("index/contact.html")


@api.route('/debug/', methods=['GET'])
def debug():
    return render_template("index/debug.html")
