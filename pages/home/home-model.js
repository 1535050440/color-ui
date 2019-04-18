import {
  Base
} from '../../utils/base.js';
var base = new Base();
class Home {
  constructor() {

  }

  // 获取banner轮播图
  getBannerList(callBack) {
    // console.log('2.----进入到home-model模型mvc中')
    var params = {
      url: '/banner_all',
      callBack: callBack
    }
    base.request(params);
  }
  // 获取所有产品列表
  getProductList(callBack) {
    var params = {
      url: '/product_all',
      callBack:callBack
    }
    base.request(params);
  }

  getDemo(){
    console.log('demo')
  }
}
export {
  Home
}