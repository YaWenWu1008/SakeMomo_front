<template>
  <div class="aboutImg">
    <h1>關於我們</h1>
  </div>
  <v-container>
    <v-row>
      <v-col class="aboutCol homeText" data-aos="fade-up" data-aos-duration="1000">
        <p>創業之路</p>
        <p>有時會像攀登一座高山</p>
        <p>艱難陡峭</p>
        <p>充滿未知和風險</p>
        <p>但就像石頭中蘊含著珍貴的寶石</p>
        <p>酒桃不論遇到多少困難和挑戰</p>
        <p>都會因為它們變得更加堅韌和成熟</p>
        <p>酒桃取名諧音「石頭」</p>
        <p>正是期許能像石頭在歷經長時間的歲月風雨後</p>
        <p>變得更加堅韌和耐</p>
        <p>創業者也需要在時間的考驗中</p>
        <p>不斷磨練自己</p>
        <p>將打造清酒界的「酒桃」烏托邦</p>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row class="text-center aboutRow">
      <v-col class="aboutCol2">
        <h1>來店須知</h1>
        <p data-aos="fade-up" data-aos-duration="1000">
          我們建議您提前預約座位，以確保有足夠的位置供您和您的伴侶或朋友用餐。您可以通過電話或網上平台進行預約。</p>
        <p data-aos="fade-up" data-aos-duration="1000">
          如果您有任何特殊的飲食需求或過敏情況，請在預約時提前告知我們，我們將盡力滿足您的需求。</p>
        <p data-aos="fade-up" data-aos-duration="1000">
          如果您對清酒不太了解，不要擔心！我們的服務人員會樂意為您解釋不同的清酒類型、風味和選擇，幫助您做出適合您口味的選擇。</p>
      </v-col>
      <v-col class="aboutCol2"><img src="../../assets/cheers.jpg" data-aos="zoom-in" data-aos-easing="ease-in-sine"
          data-aos-duration="1000"></v-col>
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
