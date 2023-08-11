<template>
  <v-container-fliud>
    <v-row>
      <v-col cols="12" class="homeTopImg">
      </v-col>
    </v-row>
  </v-container-fliud>
  <div class="space"></div>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center homeText" data-aos="fade-up" data-aos-duration="1000">
        <p>酒桃取名諧音「石頭」</p>
        <p>正是期許能像石頭在歷經長時間的歲月風雨後</p>
        <p>變得更加堅韌和耐久</p>
        <p>創業者也需要在時間的考驗中</p>
        <p>不斷磨練自己</p>
        <p>將打造清酒界的「酒桃」烏托邦</p>
      </v-col>
    </v-row>
  </v-container>
  <div class="space"></div>
  <v-container class="homeInformation text-center">
    <v-row class="homeInformationRow">
      <v-col cols="12" md="6">
        <img src="../../assets/cheers.jpg" class="image1" data-aos="flip-left" data-aos-easing="ease-in-sine"
          data-aos-duration="1000">
      </v-col>
      <v-col cols="12" md="6">
        <p>我們沒有限制喝酒時間，建議提前訂位，確保有位子，當天位子保留10分鐘。</p>
        <v-btn to="/reservation" color="secondary" data-aos="fade-right">點我訂位</v-btn>
      </v-col>
    </v-row>
    <v-row class="flex-wrap flex-md-wrap-reverse homeInformationRow">
      <v-col cols="12" md="6" class="order-sm-0">
        <img src="../../assets/cheers.jpg" class="image1" data-aos="flip-left" dara-aos-offset="500"
          data-aos-easing="ease-in-sine" data-aos-duration="1500">
      </v-col>
      <v-col cols="12" md="6" class=" order-md-first order-lg-first">
        <p>我們沒有限制喝酒時間，建議提前訂位，確保有位子，當天位子保留10分鐘。</p>
        <v-btn to="/menu" color="secondary" data-aos="fade-right">精選佳餚</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <h1 class="text-center mb-3">相片集</h1>
  <!-- <v-carousel hide-delimiters class="homeCarousel">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
  </v-carousel> -->
  <swiper ref="{swiperRef}" :slidesPerView="3" :centeredSlides="true" :spaceBetween="100" :pagination="{
    type: 'fraction',
  }" :navigation="true" :modules="modules" class="mySwiper">
    <SwiperSlide><img
        src="https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/336891575_1240432073573017_3181944242916118974_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=LS4fDAxVhTwAX8Ydosy&_nc_ht=scontent.ftpe7-3.fna&oh=00_AfBI8rLT4SYbAkC27LvpEsBta6XnQaMq_cUHOA19niJ-8A&oe=64D66B01">
    </SwiperSlide>
    <SwiperSlide><img
        src="https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/336657706_786152522844676_4485048786605593330_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=yJdhO2WA53sAX-WISm8&_nc_ht=scontent.ftpe7-4.fna&oh=00_AfCgttRG4a5iasvwLUYwMEioqBro62PvfF1A7ygnhcYHzw&oe=64D63E73">
    </SwiperSlide>
    <SwiperSlide><img
        src="https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/336509186_4095991213960004_3995454075499257439_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=PZeZj1n6XYkAX-Ydjno&_nc_ht=scontent.ftpe7-3.fna&oh=00_AfB6n5BBuggHuhvW9oCO9dj0xEiiKgj_5YT_ePLvHG0Lig&oe=64D5E65F">
    </SwiperSlide>
    <SwiperSlide><img
        src="https://lh3.googleusercontent.com/p/AF1QipMq5PAP38N8LkbwAvcQPywXQjJdoGnOLS4rylJG=s680-w680-h510">
    </SwiperSlide>
    <SwiperSlide><img
        src="https://lh3.googleusercontent.com/p/AF1QipNNPyFF3T5UzrsnqcVyt9jP1_QQgg0T1PSlh5JH=s680-w680-h510">
    </SwiperSlide>
    <SwiperSlide><img
        src="https://lh3.googleusercontent.com/p/AF1QipPuw1P0XigDQmxM1bXgN0uppwrinq6itgSCLOQx=s680-w680-h510">
    </SwiperSlide>
  </swiper>
  <!-- <p class="append-buttons"></p> -->

  <h1 class="text-center mb-3">INFORMATION</h1>
  <v-container class="homeInformation2">
    <v-row class="homeInformation2Row">
      <v-col class="homeInformation2Col">
        <span>address</span>
        <span>台北市大安區光復南路456巷6號</span>
      </v-col>
      <v-col class="homeInformation2Col">
        <span>TEL</span>
        <span>02 2703 7507</span>
      </v-col>
      <v-col class="homeInformation2Col">
        <span>營業時間</span>
        <div class="homeTime">
          <span>FRI-SAT : 18:00 ~ 1:00</span>
          <span>SUN-THU : 18:00 ~ 00:00</span>
        </div>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

export default {
  mounted() {
    AOS.init()
  },
  // data() {
  //   return {
  //     items: [
  //       {
  //         src: 'https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/336891575_1240432073573017_3181944242916118974_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=LS4fDAxVhTwAX8Ydosy&_nc_ht=scontent.ftpe7-3.fna&oh=00_AfBI8rLT4SYbAkC27LvpEsBta6XnQaMq_cUHOA19niJ-8A&oe=64D66B01'
  //       },
  //       {
  //         src: 'https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/336657706_786152522844676_4485048786605593330_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=yJdhO2WA53sAX-WISm8&_nc_ht=scontent.ftpe7-4.fna&oh=00_AfCgttRG4a5iasvwLUYwMEioqBro62PvfF1A7ygnhcYHzw&oe=64D63E73'
  //       },
  //       {
  //         src: 'https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/336509186_4095991213960004_3995454075499257439_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=PZeZj1n6XYkAX-Ydjno&_nc_ht=scontent.ftpe7-3.fna&oh=00_AfB6n5BBuggHuhvW9oCO9dj0xEiiKgj_5YT_ePLvHG0Lig&oe=64D5E65F'
  //       },
  //       {
  //         src: 'https://lh3.googleusercontent.com/p/AF1QipMq5PAP38N8LkbwAvcQPywXQjJdoGnOLS4rylJG=s680-w680-h510'
  //       },
  //       {
  //         src: 'https://lh3.googleusercontent.com/p/AF1QipNNPyFF3T5UzrsnqcVyt9jP1_QQgg0T1PSlh5JH=s680-w680-h510'
  //       },
  //       {
  //         src: 'https://lh3.googleusercontent.com/p/AF1QipPuw1P0XigDQmxM1bXgN0uppwrinq6itgSCLOQx=s680-w680-h510'
  //       }
  //     ]
  //   }
  // }
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  }
}

</script>
