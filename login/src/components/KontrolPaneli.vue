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
  
        <!-- Sayfa içeriği -->
    <div id="icerik-wrapper">
      <div class="container-fluid">
        <h1 class="mt-4">Kontrol Paneli</h1>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="card bg-primary text-white mb-4">
              <div class="card-body">Kart-1</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card bg-warning text-white mb-4">
              <div class="card-body">Kart-2</div>
            </div>
          </div>
          <!-- Diğer içerikler -->
        </div>
      </div>
    </div>
    <!-- /#icerik-wrapper -->
  </div>
</template>
  <script>
  export default {
    name: 'KontrolPaneli',
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
