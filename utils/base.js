import { Config } from '../utils/config.js';
class Base {
  constructor() {
    // this.baseRequestUrl = 'https://api.myphp.vip/userapi/v1';
    this.baseRequestUrl = Config.restUrl;
  }

  request(params) {
    var url = this.baseRequestUrl + params.url;
    console.log(url);
    // 传参方式默认GET方式
    if (params.type) {
      params.method = 'GET';
    }

    // 发送网络请求
    wx.request({
      url: url,
      method: params.type,
      header: {
        'content-type': 'application/json',
        'token': 1
      },
      data:params.data,
      success: function(res) {
        // console.log('success进入到base.js中');
        if (params.callBack) {
          params.callBack(res.data);
        } else {
          return res.data;
        }

      },
      fail: function(err) {
        // console.log('进入到base,js中======error');
      }
    })
  }

  getDataSet(event, key){
    return event.currentTarget.dataset[key];
  }

  demo(){
    return 555;
  }
}
export {
  Base
};