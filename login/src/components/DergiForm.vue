<template>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <div class="yeni-yazi-form container mt-5">
      <h2 class="mb-4">YENİ GÖNDERİ</h2>
      <form @submit.prevent="submitForm">
        <!-- Form Grupları için Bootstrap sınıfları -->
        <div class="form-group mt-4">
        <label class="h5 mb-3" for="baslik">Yazının Başlığını giriniz*:</label>
          <input type="text" id="baslik" class="form-control" v-model="yazi.baslik" required>
        </div>
        <hr> 
        <div class="form-group mt-4">
        <label class="h5 mb-3" for="tip">Yazının tipini giriniz:</label>
          <input type="text" id="tip" class="form-control" v-model="yazi.tip">
        </div>
        <hr> 
        <div class="form-group mt-4">
        <label class="h5 mb-3" for="ozet">Özet*:</label>
          <textarea id="ozet" v-model="yazi.ozet" class="form-control"  required></textarea>
        </div>
        <hr> 
        <div class="form-group mt-4">
        <label class="h5 mb-3" for="anahtarKelimeler">Anahtar kelimeler *:</label>
          <input type="text" id="anahtarKelimeler" class="form-control"  v-model="yazi.anahtarKelimeler" required>
          <p class="text-muted">Virgül ile ayırınız.</p>

        </div>
        <hr> 

        <div class="form-group mt-4">
        <label class="h5 mb-3">Alan*:</label>
        <div class="radio-group">
          <div>
            <input type="radio" id="science" value="Doğa bilimleri" v-model="yazi.alan" required>
            <label for="science">Doğa bilimleri</label>
          </div>
          <div>
            <input type="radio" id="engineering"   value="Mühendislik Bilimleri" v-model="yazi.alan" required>
            <label for="engineering">Mühendislik Bilimleri</label>
          </div>
        </div>
      </div>
      <hr> 
      <div class="form-group mt-4">
        <label class="h5 mb-3" for="mesaj">Mesajınız:</label>
          <textarea id="mesaj" class="form-control"  v-model="yazi.mesaj"></textarea>
        </div>
        <hr>   
        <div class="form-group mt-4">
        <label class="h5 mb-3">Lütfen referans önerin*:</label>
        <p class="text-muted">En az bir tane girilmeli</p>

            <div v-for="(referans, index) in yazi.referanslar" :key="`referans-${index}`" class="d-flex mb-2">
            <input type="text" class="form-control mr-2" v-model="referans.isim" placeholder="Ref. adı" required>
            <input type="email" class="form-control mr-2" v-model="referans.email" placeholder="Ref. E-Mail" required>
            <input type="text" class="form-control mr-2" v-model="referans.uni" placeholder="İlgili Üniversite-Enstitü" required>
            <button type="button" class="btn btn-danger" @click="kaldirRef(index)">X</button>
            </div>
            <button type="button" class="btn btn-primary" @click="ekleRef">Referans Ekle</button>
        </div>
        <hr> 
        <div class="form-group">
          <input type="checkbox" id="gozlemci" v-model="yazi.gozlemci">
          <label for="gozlemci">Dergide gözlemci olmayı onaylıyorum</label>
        </div>
        <hr> 
        <div class="form-group mt-4">
        <label class="h3 mb-3">Yazar ekle:</label><br>
        <label class="h5 mb-3">Varolan yazarlardan ekle:</label>
            <select class="form-control" v-model="secilmisYazarId">
                <option v-for="yazar in yazarlar" :value="yazar.id" :key="yazar.id">{{ yazar.isim }}</option>
            </select>
            <button type="button" class="btn btn-primary" @click="ekleSecilmisYazar">Seçili Yazarı Ekle</button>
        </div>
        <hr> 
        <div class="form-group">
            <input type="text" class="form-control" v-model="yeniYazarIsım" placeholder="Yeni yazar ismi girin">
            <button type="button" class="btn btn-secondary mt-2" @click="ekleYeniYazar">Yeni Yazarı Ekle</button>
        </div>
        <hr> 
        <div class="form-group mt-4">
        <label class="h5 mb-3">Seçilen Yazarlar:</label>
        <div v-if="yazi.eklenmisYazars.length > 0" class="list-group">
          <div v-for="(yazar, index) in yazi.eklenmisYazars" :key="yazar.id" class="list-group-item d-flex justify-content-between align-items-center">
            {{ yazar.isim }}
            <div>
              <input type="checkbox" class="form-check-input me-2" :id="`sorumlu-${yazar.id}`" :value="yazar.id" :checked="yazar.id === yazi.sorumluYazar" @change="setSorumluYazar(yazar.id)">
              <label class="form-check-label" :for="`sorumlu-${yazar.id}`">Sorumlu</label>
              <button type="button" class="btn btn-danger btn-sm" @click="removeAddedYazar(index)">X</button>
            </div>
          </div>
        </div>
        <p v-else class="text-muted">Henüz yazar eklenmedi.</p>
      </div>

  
      <div class="form-group mt-4">
        <label class="h3 mb-3">Yazıyı yükleyin* :</label>
        <p class="text-muted">(Word dosyası, en fazla 5MB)</p>

          <input type="file" @change="handleFileUpload" accept=".doc, .docx" required>
        </div>
        <hr> 
        <div class="form-group mt-4">
        <label class="h3 mb-3">Etik standartlara uyum beyanı*:</label><br>
          <input type="radio" id="etikYes" value="Evet" v-model="yazi.etik" required>
          <label for="etikYes">Evet  </label> <br>
          <input type="radio" id="etikNo" value="Hayır" v-model="yazi.etik" required>
          <label for="etikNo">Hayır</label>
        </div>
        <hr> 
        <div class="form-group mt-4" v-if="yazi.etik === 'Evet'">
          <label  class="h3 mb-3">Cevabınız evet ise beyanınızı yükleyin :</label>
          <p class="text-muted">(max 5MB, PDF dosyası.)</p>

          <input type="file" @change="handleComplianceFileUpload" accept="application/pdf" required>
        </div>
        <hr> 
         <button type="submit" class="btn btn-success">Gönder</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YaziForm',
    data() {
      return {
        secilmisYazarId: null, // Seçilen yazarın ID'si için
      yeniYazarIsım: '', // Yeni yazar ismi için,
        yazi: {
          baslik: '',
          tip: '',
          ozet: '',
          anahtarKelimeler: '',
          alan: '',
          mesaj: '',
          referanslar: [
            { isim: '', email: '', uni: '' }
          ],
          gozlemci: false,
          eklenmisYazars: [], // Eklenen yazarlar listesi
          sorumluYazar: null, // İlgili yazar
          etik: '',
          belge: null,
          etikBelge: null,
        },
        yazarlar: [
          { id: 'yazar1', isim: 'Yazar 1' },
          { id: 'yazar2', isim: 'Yazar 2' },
          // Daha fazla yazar
        ],
      };
    },
    methods: {
      submitForm() {
        if (!this.yazi.sorumluYazar) {
        alert("Lütfen sorumlu bir yazar seçin.");
        return;
      }
      if (!this.yazi.etik) {
        alert("Lütfen etik standartlara uyum beyanınızı belirtin.");
        return;
      }
      console.log("Form submitted", this.yazi);
    },
    ekleRef() {
      this.yazi.referanslar.push({ isim: '', email: '', uni: '' });
    },
    kaldirRef(index) {
      this.yazi.referanslar.splice(index, 1);
    },
    ekleSecilmisYazar() {
      const secilmisYazar = this.yazarlar.find(yazar => yazar.id === this.secilmisYazarId);
      if (secilmisYazar && !this.yazi.eklenmisYazars.includes(secilmisYazar)) {
        this.yazi.eklenmisYazars.push(secilmisYazar);
      }
    },
    ekleYeniYazar() {
      if (this.yeniYazarIsım.trim()) {
        const yeniYazar = { id: `yeni-yazar-${Date.now()}`, isim: this.yeniYazarIsım };
        this.yazarlar.push(yeniYazar); // Opsiyonel: Yeni yazarı genel listeye ekle
        this.yazi.eklenmisYazars.push(yeniYazar);
        this.yeniYazarIsım = '';
      }
    },
    setSorumluYazar(yazarId) {
      // Checkbox işaretlendiğinde sorumlu yazarı güncelle
      this.yazi.sorumluYazar = this.yazi.sorumluYazar === yazarId ? null : yazarId;
    },
    removeAddedYazar(index) {
      // Eğer çıkarılan yazar sorumlu yazar ise, sorumlu yazarı sıfırla
      if (this.yazi.eklenmisYazars[index].id === this.yazi.sorumluYazar) {
        this.yazi.sorumluYazar = null;
      }
      this.yazi.eklenmisYazars.splice(index, 1);
    },


      handleFileUpload(event) {
        this.yazi.belge = event.target.files[0];
      },
      handleComplianceFileUpload(event) {
        this.yazi.etikBelge = event.target.files[0];
      },
    },
  };
  </script>
  
  <style scoped>
  .yeni-yazi-form{

    margin: 2rem;
  
  }

.form-group {
    margin: 1rem;
  margin-bottom: 1rem;
}
.referans-group{
    display:flex;
}
.radio-group > div {
  align-items: center; /* İçerikleri dikey olarak ortala */
  margin-right: 1rem; /* Sağdaki her radio buton grubu arasında boşluk bırak */
}
  input[type="text"],
  input[type="email"],
  textarea,
  select {
    width: 100%;
    padding: 0.375rem 0.75rem;
    margin-top: 0.375rem;
    margin-bottom: 0.375rem;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  </style>
  