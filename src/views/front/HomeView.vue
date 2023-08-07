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
      <v-col cols="12" class="text-center">
        <p>酒桃取名諧音「石頭」，正是期許能像石頭在歷經長時間的歲月風雨後，變得更加堅韌和耐久，創業者也需要在時間的考驗中，不斷磨練自己，將打造清酒界的「酒桃」烏托邦。</p>
      </v-col>
    </v-row>
  </v-container>
  <div class="space"></div>
  <v-container class="homeInformation text-center">
    <v-row class="homeInformationRow">
      <v-col cols="12" md="6">
        <img src="../../assets/cheers.jpg">
      </v-col>
      <v-col cols="12" md="6">
        <p>我們沒有限制喝酒時間，建議提前訂位，確保有位子，當天位子保留10分鐘。</p>
      </v-col>
    </v-row>
    <v-row class="flex-wrap-reverse homeInformationRow">
      <v-col cols="12" md="6">
        <img src="../../assets/cheers.jpg" alt="">
      </v-col>
      <v-col cols="12" md="6" class="order-md-first order-lg-first">
        <p>我們沒有限制喝酒時間，建議提前訂位，確保有位子，當天位子保留10分鐘。</p>
      </v-col>
    </v-row>
  </v-container>

  <h1 class="text-center mb-3">相片集</h1>
  <v-carousel hide-delimiters class="homeCarousel">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
  </v-carousel>

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
        <div class="d-flex flex-wrap ">
          <span>FRI-SAT : 18:00 ~ 1:00</span>
          <span>SUN-THU : 18:00 ~ 00:00</span>
        </div>
      </v-col>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9583868108703!2d121.55445587600065!3d25.03548623823055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab22532c8b1b%3A0x5456aa82472b085!2z6YWS5qGDU2FrZSBtb21v!5e0!3m2!1szh-TW!2stw!4v1691407659694!5m2!1szh-TW!2stw"
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/336891575_1240432073573017_3181944242916118974_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=LS4fDAxVhTwAX8Ydosy&_nc_ht=scontent.ftpe7-3.fna&oh=00_AfBI8rLT4SYbAkC27LvpEsBta6XnQaMq_cUHOA19niJ-8A&oe=64D66B01'
        },
        {
          src: 'https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/336657706_786152522844676_4485048786605593330_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=yJdhO2WA53sAX-WISm8&_nc_ht=scontent.ftpe7-4.fna&oh=00_AfCgttRG4a5iasvwLUYwMEioqBro62PvfF1A7ygnhcYHzw&oe=64D63E73'
        },
        {
          src: 'https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/336509186_4095991213960004_3995454075499257439_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=PZeZj1n6XYkAX-Ydjno&_nc_ht=scontent.ftpe7-3.fna&oh=00_AfB6n5BBuggHuhvW9oCO9dj0xEiiKgj_5YT_ePLvHG0Lig&oe=64D5E65F'
        },
        {
          src: 'https://lh3.googleusercontent.com/p/AF1QipMq5PAP38N8LkbwAvcQPywXQjJdoGnOLS4rylJG=s680-w680-h510'
        },
        {
          src: 'https://lh3.googleusercontent.com/p/AF1QipNNPyFF3T5UzrsnqcVyt9jP1_QQgg0T1PSlh5JH=s680-w680-h510'
        },
        {
          src: 'https://lh3.googleusercontent.com/p/AF1QipPuw1P0XigDQmxM1bXgN0uppwrinq6itgSCLOQx=s680-w680-h510'
        }
      ]
    }
  }
}
</script>
