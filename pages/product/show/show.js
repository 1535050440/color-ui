import {Home} from '../show/show-model.js';
var home = new Home();
Page({
  data: {
    PageCur: 'basics',
    loadingHidden:true,
    name: '产品',
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    countNow: 1
  },
  onLoad(e){
    var id = e.id
    this._onLoad(id);
  },

  // 页面初始化需要加载的接口
  _onLoad(id) {
    console.log(id)

    // 加载-产品详情
    home.getProductFind(id,(res)=>{
      var product_find = res.data
      this.setData({
        product_find: product_find
      })
    })
    
    
  },
  updateCountNow(res){
    var countNow = res.detail.value;
    console.log(countNow)
    this.setData({
      countNow: countNow
    })
  }
})