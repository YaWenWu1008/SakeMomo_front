<template>
  <div class="contactImg">
    <h1>聯絡我們</h1>
  </div>
  <v-container>
    <v-row class="contactRow">
      <v-col>
        <p data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1500">
          如果您有任何意見或建議，歡迎您與我們聯繫，下方有我們的連絡資訊，我們收到您的來信後，將儘速於 3～5 日內回覆，我們會認真聆聽您的想法，為您提供更好的服務。謝謝您的支持，我們期待著您的光臨！</p>
      </v-col>
    </v-row>
    <v-row class="contactRow2">
      <v-col cols="12" md="6" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <h4>聯絡信箱</h4>
        <p data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="2000">sakemomo90124256@gmail.com</p>
      </v-col>
      <v-col cols="12" md="6" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <h4>聯絡電話</h4>
        <p>02 2703 7507</p>
      </v-col>
      <v-col cols="12" md="6" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <h4>聯絡地址</h4>
        <p>106台北市大安區光復南路456巷6號 (信義安和步行約5分鐘)</p>
      </v-col>
      <v-col cols="12" md="6" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <h4>營業時間</h4>
        <p>禮拜五、禮拜六:18:00 - 1:00</p>
        <p>禮拜日~禮拜一:18:00 - 00:00</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init()
  }
}
</script>
