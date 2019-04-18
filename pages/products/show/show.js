import {
  Home
} from './show-model.js';
var home = new Home();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    name: 'deng',
    product_show: {},
    productCounts:1,
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    show: true,
    loadingHidden:true
  },
  lifetimes: {
    attached(options) {
      let that = this;
      // 在组件实例进入页面节点树时执行
      this._attached();
      this.setData({
        show: false
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
    show() {
      // 页面被展示xx
      console.log('show')
    },
    created() {
      console.log('created=组件实例刚刚被创建好时=');
    }
  },
  methods: {
    _attached() {
      this.setData({
        name: '元素'
      });
     

      // 获取产品列表
      home.getProductShow((res) => {
        this.setData({
          product_show: res.data
        })
      })

    },
    bindPickerChange(e)
    {
      console.log(e.detail.value)
      this.setData({
        productCounts: this.data.countsArray[e.detail.value]
      });
    }
  }
  

})