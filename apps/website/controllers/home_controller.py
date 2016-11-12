# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import Blueprint, render_template

api = Blueprint('home_controller', __name__, url_prefix='/')


@api.route('/', methods=['GET'])
def home():
    return render_template("home/home.html")


@api.route('/about', methods=['GET'])
def about():
    return render_template("home/about.html")


@api.route('/contact', methods=['GET'])
def contact():
    return render_template("home/contact.html")


@api.route('/debug/', methods=['GET'])
def debug():
    return render_template("home/debug.html")
