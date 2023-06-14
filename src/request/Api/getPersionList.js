import {request} from "../request";

const getPersionList = (config) => {
    return request({
        url: config.url,
        method: config.method ||"get"
    })
}

export {
    getPersionList
}