/**
 * Created by zhaojm on 15/11/2016.
 */
class CategoryAPI {
    constructor() {

    }

    add_category(category) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "PUT",
                data: category,
                url: "/api/category/add"
            }).then(resolve, reject);
        })
    }


}

let category_api = new CategoryAPI();

export default category_api;