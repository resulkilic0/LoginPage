

<template>
    <div class="d-flex" id="wrapper">
      <!-- Yan menü (sidebar) -->
      <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Kontrol Paneli Menü</div>
        <div class="list-group list-group-flush">
          <div v-for="(item, index) in menuItems" :key="index" class="menu-item">
            <div @click="toggleSubmenu(index)" class="menu-link">{{ item.name }}</div>
            <div v-if="item.submenu && item.isSubmenuOpen" class="submenu list-group">
              <div 
                v-for="(subItem, subIndex) in item.submenu" 
                :key="`sub-${subIndex}`" 
                class="submenu-item">
                {{ subItem.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /#sidebar-wrapper -->
<!--
Giriş sayfasından yönlendirme için projeye Router eklendi. (src/router/index.js) (nmp install vue-router)
Kontrol paneli sayfası oluşturuldu. (src/components/KontrolPaneli.vue)
Konrol paneli sayfası için yan menü oluşturuldu.
2 derinlikli bir menü yapısı oluşturuldu. Alt menü öğeleri için bir veri dizisi oluşturuldu. 
Görsel arayüz için bootstrap kullanıldı. Projeye bootstrap eklendi. (npm install bootstrap)
Temsilen kartlar eklendi.
-->

        <!-- Sayfa içeriği -->
    <div id="icerik-wrapper">
      <div class="container-fluid">
        <h1 class="mt-4">Kontrol Paneli</h1>
        <dergi-form></dergi-form>

      </div>
    </div>
    <!-- /#icerik-wrapper -->
  </div>
</template>
  <script>
  import dergiForm from './DergiForm.vue'; 

  export default {
    name: 'KontrolPaneli',
    components: {
    dergiForm, // Komponenti tanımla
  },
    data() {
      return { // Yan menü öğeleri
        menuItems: [
          {
            name: 'Ana Sayfa',
            submenu: null,
          },
          {
            name: 'Profil',
            submenu: [
              { name: 'Alt Menü 1' },
              { name: 'Alt Menü 2' },
            ],
            isSubmenuOpen: false,
          },
          {
            name: 'Ayarlar',
            submenu: [
              { name: 'Alt Menü 1' },
              { name: 'Alt Menü 2' },
              { name: 'Alt Menü 3' },
            ],
            isSubmenuOpen: false,
          },
        ],
      };
    },
    methods: {
      toggleSubmenu(index) {
        if (this.menuItems[index].submenu) {
          this.menuItems[index].isSubmenuOpen = !this.menuItems[index].isSubmenuOpen;
        }
      },
    },
  };
  </script>
  


<style scoped>
/* Yan menü CSS */
#sidebar-wrapper {
  width: 20rem;
  min-height: 100vh;
  transition: margin 0.25s ease-out;
}

/* başlık CSS */
.sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
  background: #1367c0; 
  color: white;
}

.menu-item {
  width: 100%;
}

.menu-link {
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  color: #220101; /* Özelleştirilebilir */
  display: block;
  width: 100%;
  font-weight: 500;
  text-decoration: none;
  background-color: #f8f9fa;
}

.menu-link:hover {
  background-color: #dbdbdb; /* Hover efekti için  */
}


#sidebar-wrapper .submenu-item:hover {
  background-color: #e9e9e9; /* Hover efekti için  */
}

/* içerik CSS */
#icerik-wrapper {
  width: 100%;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }
}

.card-body {
  padding: 2rem;
  font-size: 1.2rem;
}
#sidebar-wrapper .list-group-item {
  width: 100%;
  font-size: 1.1rem; /* Ana öğeler için yazı boyutu */
}

/* Alt menü öğeleri için stil */
#sidebar-wrapper .submenu-item {
    padding: 0.25rem 1.5rem;
  color: #495057; 
  cursor: pointer;
  font-size: 0.9rem; /* Alt öğeler için daha küçük yazı boyutu */
  margin-left: 5px; /* Hafifçe içe doğru boşluk */
  background-color: #fafafa; /*  açık arka plan rengi */
}
</style>
