// pages/demo/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    name: '2',
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    },{
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._onLoad();
  },
  _onLoad:function(res){
    console.log('_onLoad');
  },
  callBack:function(res){
    console.log('------callback-----')
    console.log(res)
    console.log('------callback-----')
  }


})