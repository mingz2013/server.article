/**
 * Created by zhaojm on 15/11/2016.
 */

import ajax_promise from '../api/ajax_promise'


class CategoryService {
    constructor() {
    }

    add_category(category) {
        return ajax_promise({
            type: "PUT",
            data: category,
            url: "/api/category/add"
        })
    }


}

let category_service = new CategoryService();

export default category_service;