import {request} from "../request";

const getTableList = (params) => {

    return request({
        url: "/list" + params.url,
        method: params.method || 'get'
    })
}

export default getTableList