import axios from 'axios'
import queryString from 'queryString'
const baseURL = "http://www.easy-mock.com/mock/59a4d1a29d8ef6191d08330e/novel/"

var CancelToken = axios.CancelToken;
var source = CancelToken.source();
var HTTP = axios.create({
    baseURL,
    timeout: 0,
    responseType: 'json',
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function(data) {
        return queryString.stringify(data);
    }],
    transformResponse: [function(data) {
        return data;
    }],
    cancelToken: source.token
})
HTTP.interceptors.request.use(function(config) {
    //在发送请求之前做某事
    if ('token') {
        config.headers.Authorization = 'token'
    }
    return config;
}, function(error) {
    //请求错误时做些事
    return Promise.reject(error);
});

export default function get(url, params = {}) {
    return HTTP.get(url, params).catch(error => {
        if (axios.isCancel(error)) {
            console.log(error.message);
            source.cancel('操作被用户取消,因为时间太长了')
        } else {
            console.log(error)
        }
    })

}