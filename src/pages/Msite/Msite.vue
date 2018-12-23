<template>
    <section class="msite">
      <!--首页头部-->
      <NavHeader :title="address.address">
         <span class="header_search" slot="left">
              <i class="iconfont icon-sousuo"></i>
            </span>
        <span class="header_login" slot="right">
              <span class="header_login_text" @click="$router.push('/login')">登录|注册</span>
            </span>
      </NavHeader>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="categorys in categorysArr">
              <a href="javascript:" class="link_to_food" v-for="c in categorys">
                <div class="food_container">
                  <img :src="'https://fuss10.elemecdn.com' + c.image_url">
                </div>
                <span>{{c.title}}</span>
              </a>

            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList/>
      </div>
    </section>
</template>

<script>
  import ShopList from  '../../components/ShopList/ShopList'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import 'swiper/dist/js/swiper'
  export default {
    name: 'Msite',
    components: {
      ShopList
    },
    computed: {
      ...mapState(['address','categorys']),
      categorysArr(){
        console.log(this)
        const {categorys} = this
        let bigArr = []
        let smallArr = []
        categorys.forEach(category => {
          //  想把拿到的数据8个一组放进小数组，再把小数组放进大数组
          //  存储大数组
          if(smallArr.length === 0){
            bigArr.push(smallArr)
          }
          smallArr.push(category)
          if(smallArr.length === 8){
            smallArr = []
          }
        })
        return bigArr
      }
    },
    mounted(){
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys')
    },
    watch: {
      // 注意: vue在更新状态数据后 ==> 先调用监视的回调 ==> 异步更新界面
      categorys () { // categorys重新赋值了, 有数据了(状态数据更新了)
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
        this.$nextTick(() => {
          // 创建swiper对象的时机: 列表数据显示之后
          new Swiper('.swiper-container', { // 配置对象
            loop: true, // 循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
