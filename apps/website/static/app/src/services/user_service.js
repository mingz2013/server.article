/**
 * Created by zhaojm on 13/11/2016.
 */

import UserAPI from '../api/user_api'

class UserService {
    constructor() {
        this.user_api = new UserAPI()
    }

    display_user_list() {
        this.user_api.get_user_list().then(function (ResultJson) {
            //通过拿到的数据渲染页面
            console.log(ResultJson);
        }).catch(function (ErrMsg) {
            //获取数据失败时的处理逻辑
            console.log(ErrMsg)
        })
    }
}

export default new UserService()
