import {
  Home
} from './home-model.js';
var home = new Home();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    name: 'deng',
    banner_list: {},
    product_list: {},
    show: true,
    loadingHidden:false
  },
  lifetimes: {
    attached() {
      let that = this;
      // console.log('============attached开始执行============');
      // 在组件实例进入页面节点树时执行
      that._attached();
      this.setData({
        show:false,
        loadingHidden:true
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
      // console.log('detached===在组件实例被从页面节点树移除时执行');
    },
    show() {
      // 页面被展示xx
      console.log('show')
    },
    created() {
      // console.log('created=组件实例刚刚被创建好时=');
    }
  },
  methods: {
    demo() {
      console.log('demoo')
    },
    _attached() {
      this.setData({
        name: '元素'
      });
      // 获取Banner轮播图片
      home.getBannerList((res) => {
        this.setData({
          banner_list: res.data.data
        });
      });

      // 获取产品列表
      home.getProductList((res) => {
        this.setData({
          product_list: res.data.data
        })
      })

    },
    OnProductId:function(event){
      var id = event.currentTarget.dataset.id;
      var url = '../product/show/show?id=' + id;
      console.log(url)
      this.triggerEvent('myevent', { demo_name: 'demo测试使用' });
      // 跳转到产品详情页面
      wx.navigateTo({
        url: url,
      })

    }
  }

})