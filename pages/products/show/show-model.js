import {
  Base
} from '../../../utils/base.js';
var base = new Base();
class Home {
  constructor() {

  }

  // 获取banner轮播图
  getProductShow(callBack) {
    console.log('2.----进入到home-model模型mvc中')
    var params = {
      url: '/product_show',
      callBack: callBack
    }
    base.request(params);
  }
 
  getDemo() {
    console.log('demo')
  }
}
export {
  Home
}