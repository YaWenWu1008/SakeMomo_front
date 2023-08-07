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

  <v-carousel hide-delimiters class="homeCarousel">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" contain>
    </v-carousel-item>
  </v-carousel>
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
          src: 'https://lh3.googleusercontent.com/p/AF1QipPlIj_YBQ2N0_8rlVFcJYq_WAIuZn0PtyCFDwMd=s680-w680-h510'
        }
      ]
    }
  }
}
</script>
