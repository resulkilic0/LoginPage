Vue Login

Vue.js kullanılarak hazırlandı.

Kullanıcı Adı: kilicresul@gmail.con

Şifre: kilic123

Proje gereklilik: npm install

Proje Çalıştırma: npm run serve

Ekran Görüntüleri

![giriş sayfası](https://github.com/resulkilic0/LoginPage/assets/164054772/30586889-ea10-4682-ba54-3e00c8605139)


![giriş basarısız](https://github.com/resulkilic0/LoginPage/assets/164054772/3d2f3974-7f51-4572-b366-2e908d35eb47)

DASHBOARD

Giriş sayfasından yönlendirme için projeye Router eklendi. (src/router/index.js) (nmp install vue-router)

Kontrol paneli sayfası oluşturuldu. (src/components/KontrolPaneli.vue)

Konrol paneli sayfası için yan menü oluşturuldu.

2 derinlikli bir menü yapısı oluşturuldu. Alt menü öğeleri için bir veri dizisi oluşturuldu. 

Görsel arayüz için bootstrap kullanıldı. Projeye bootstrap eklendi. (npm install bootstrap)

Temsilen kartlar eklendi.

![Ekran görüntüsü 2024-03-24 005318](https://github.com/resulkilic0/LoginPage/assets/164054772/c06911f0-71ab-4e0a-b4a3-1f8f1b4ccb14)

New Submission

Vue.js kullanılarak bir form komponenti (YaziGonderimFormu) oluşturuldu. Bu komponent, form verilerini tutan ve yöneten data özelliğini içerir.

Kullanıcının gireceği bilgiler için çeşitli form alanları (input, textarea, select, checkbox, radio) tanımlandı. Bu alanlar Vue.js'in v-model direktifi ile veri modeline bağlandı.

Referans ve yazar bilgileri gibi dinamik olarak eklenebilir ve çıkarılabilir form elemanları için Vue.js'in v-for direktifi kullanıldı.

Form gönderilmeden önce, zorunlu alanların doldurulup doldurulmadığını kontrol eden ve uygun olmayan durumlarda kullanıcıyı bilgilendiren doğrulama işlemleri eklendi.

Kullanıcı tarafından girilen verilerin sunucuya gönderilmesi işlemi için bir gönderim (submit) metodu  tanımlandı.

Formun görsel açıdan daha çekici hale getirilmesi için CSS ile özel stil tanımlamaları yapıldı ve Bootstrap sınıfları kullanılarak düzenlemeler gerçekleştirildi.

Sayfanın başında Bootstrap stil dosyasını ekleyerek, form elemanları için hazır stil şablonlarından yararlanıldı.

Komponent router aracılığıyla dergi-form sayfasında gösterildi, ayrıca test amacıyla kontrol paneline de eklendi.

![1](https://github.com/resulkilic0/LoginPage/assets/164054772/8dc202f6-a829-4916-b523-fb31b63a7cb3)

![2](https://github.com/resulkilic0/LoginPage/assets/164054772/fbcd26bf-5821-432a-9e81-75367eeb2ea1)

![3](https://github.com/resulkilic0/LoginPage/assets/164054772/26a62db9-f73b-4b82-a70d-c7c45250933a)



