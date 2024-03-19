<template>
  <div class="login-container d-flex justify-content-center align-items-center">
    <form @submit.prevent="login" class="border p-5 rounded">
      <h2 class="text-center mb-4">Giriş Formu</h2>
      <div class="form-group">
        <label for="k_adi">Kullanıcı Adı:</label>
        <input id="k_adi" v-model="k_adi" type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="sifre">Şifre:</label>
        <input id="sifre" v-model="sifre" type="password" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="guvenlik">Güvenlik kodu:</label>
        <img :src="require('@/assets/guvenlik.jpg')" alt="Güvenlik Kodu" width="80" class="img-fluid mb-2"/> 
        <input id="guvenlik" v-model="guvenlik" type="text" class="form-control" placeholder="Güvenlik kodunu giriniz..." required>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Giriş</button>
      <p v-if="girisBasarili" class="text-success mt-3">Giriş Başarılı!</p>
      <p v-else-if="girisDeneme" class="text-danger mt-3">Giriş Başarısız. Lütfen tekrar deneyin.</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      k_adi: '',
      sifre: '',
      girisBasarili: false,
      girisDeneme: false // Kullanıcı giriş yapmayı denedi mi?
    };
  },
  methods: {
    login() {
      this.girisDeneme = true; // Giriş denemesini işaretler
      if (this.k_adi === 'kilicresul@gmail.com' && this.sifre === 'kilic123'  && this.guvenlik === '2CCEX' ) { // girdilerin doğruluğunu kontrol eder
        this.girisBasarili = true;
      } else {
        this.girisBasarili = false;
      }
    }
  }
}
</script>
