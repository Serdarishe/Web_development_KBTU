import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Смартфоны' },
      { id: 2, name: 'Ноутбуки' },
      { id: 3, name: 'Наушники' },
      { id: 4, name: 'Планшеты' }
    ];
  }

  getProducts(): Product[] {
    return [
      // ── Смартфоны (categoryId: 1) ──
      {
        id: 1,
        categoryId: 1,
        likes: 0,
        name: 'Apple iPhone 15 128GB Black',
        description: 'Смартфон с чипом A16 Bionic и 48 Мп основной камерой. Дисплей Super Retina XDR 6.1", поддержка Dynamic Island и USB-C.',
        price: 319990,
        rating: 4.8,
        image: 'https://object.pscloud.io/cms/cms/Photo/img_0_81_3858_2_1_320.webp',
        images: [
          'https://object.pscloud.io/cms/cms/Photo/img_0_81_3858_2_1_320.webp',
          'https://itechh.kz/image/cache/catalog/15iPhone/30069420bb1.jpg-600x600.png',
          'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_gsm_apple_iphone_15_pro_128gb_81286148_black_titanium_mtuv3_274402_1.jpg'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
      },
      {
        id: 2,
        categoryId: 1,
        likes: 0,
        name: 'Samsung Galaxy S24 256GB Onyx Black',
        description: 'Флагманский смартфон с Galaxy AI, чипом Exynos 2400 и тройной камерой 50+12+10 Мп. Экран Dynamic AMOLED 2X, 6.2".',
        price: 289990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium',
          'https://api.technodom.kz/f3/api/v1/images/800/800/smartfon_samsung_galaxy_s24_5g_256gb_onyx_black_277507_4.jpg',
          'https://api.technodom.kz/f3/api/v1/images/smartfon_samsung_galaxy_s24_5g_256gb_onyx_black_277507_7.jpg'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000'
      },
      {
        id: 3,
        categoryId: 1,
        likes: 0,
        name: 'Xiaomi Redmi Note 13 Pro+ 256GB',
        description: 'Смартфон с камерой 200 Мп и быстрой зарядкой 120 Вт. AMOLED дисплей 6.67", защита IP68, аккумулятор 4600 мАч.',
        price: 149990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p3f/pdd/15562937.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000'
      },
      {
        id: 4,
        categoryId: 1,
        likes: 0,
        name: 'Samsung Galaxy A55 5G 256GB',
        description: 'Смартфон с защитой IP67, AMOLED дисплеем 6.6" 120 Гц и тройной камерой 50+12+5 Мп. Аккумулятор 5000 мАч.',
        price: 189990,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h5f/hb0/85428543684638.jpg?format=gallery-large'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'
      },
      {
        id: 5,
        categoryId: 1,
        likes: 0,
        name: 'Apple iPhone 14 128GB Midnight',
        description: 'Смартфон с чипом A15 Bionic, дисплеем Super Retina XDR 6.1", двойной камерой 12+12 Мп и режимом экшн.',
        price: 249990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/ha8/h64/86042949713950.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hd4/h92/86042949746718.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000'
      },

      // ── Ноутбуки (categoryId: 2) ──
      {
        id: 6,
        categoryId: 2,
        likes: 0,
        name: 'Apple MacBook Air 13 M2 8/256GB',
        description: 'Ноутбук на чипе Apple M2 с 8-ядерным CPU и 8-ядерным GPU. Дисплей Liquid Retina 13.6", 18 часов автономной работы.',
        price: 569990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
      },
      {
        id: 7,
        categoryId: 2,
        likes: 0,
        name: 'ASUS VivoBook 15 Core i5 16/512GB',
        description: 'Ноутбук с процессором Intel Core i5-12500H, 16 ГБ ОЗУ и дисплеем 15.6" Full HD IPS. SSD 512 ГБ, Windows 11.',
        price: 299990,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pea/p77/53467074.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pea/p77/53467074.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pb1/p77/53467076.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p95/p77/53467077.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1502va-bq1274-15-6-16-gb-ssd-512-gb-bez-os-90nb10t2-m01th0-142645394/?c=750000000&tab=reviews'
      },
      {
        id: 8,
        categoryId: 2,
        likes: 0,
        name: 'Lenovo IdeaPad 5 Ryzen 5 16/512GB',
        description: 'Ноутбук с AMD Ryzen 5 5500U, 16 ГБ ОЗУ и IPS экраном 15.6" Full HD. Тихая работа, долгая батарея, Windows 11.',
        price: 279990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p2c/86342785.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pb7/p2c/86342785.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p9b/p2c/86342786.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p9b/p2c/86342786.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-5-16-16-gb-ssd-512-gb-win-11-83hw000krk-152135433/?c=750000000'
      },
      {
        id: 9,
        categoryId: 2,
        likes: 0,
        name: 'HP Pavilion 15 Core i7 16/512GB',
        description: 'Производительный ноутбук с Intel Core i7-1255U, 16 ГБ ОЗУ, SSD 512 ГБ и экраном FHD IPS 15.6". Windows 11 Home.',
        price: 349990,
        rating: 4.4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h1c/63979696963614.jpg?format=preview-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h3e/h1c/63979696963614.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hac/h2c/63979697225758.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h64/h74/63979697487902.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh2025ci-6e483ea-106958647/'
      },
      {
        id: 10,
        categoryId: 2,
        likes: 0,
        name: 'Samsung Galaxy Book3 360 Core i5 8/256GB',
        description: 'Ноутбук-трансформер с сенсорным AMOLED дисплеем 13.3", Intel Core i5-1340P и поддержкой стилуса S Pen.',
        price: 469990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/he8/63979891810334.jpg?format=preview-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h88/he8/63979891810334.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h52/h87/63979892072478.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h21/hb1/63979892334622.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-book3-360-np730qfg-ka1kz-113115789/'
      },

      // ── Наушники (categoryId: 3) ──
      {
        id: 11,
        categoryId: 3,
        likes: 0,
        name: 'Apple AirPods Pro 2 USB-C',
        description: 'Беспроводные наушники с активным шумоподавлением H2 и адаптивным звуком. До 6 часов работы, MagSafe зарядка.',
        price: 129990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h5e/84166498705438.jpg?format=preview-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hb5/h5e/84166498705438.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hac/hac/84166498967582.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hf2/h6c/84166499229726.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-mwp22zm-a-belyj-113006279/'
      },
      {
        id: 12,
        categoryId: 3,
        likes: 0,
        name: 'Bose QuietComfort 45 Black',
        description: 'Накладные наушники с активным шумоподавлением и звуком TriPort. Режимы Quiet и Aware, 24 часа работы, Bluetooth 5.1.',
        price: 159990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/he8/63979891810334.jpg?format=preview-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h88/he8/63979891810334.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h52/h87/63979892072478.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h21/hb1/63979892334622.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-chernyj-106527151/'
      },
      {
        id: 13,
        categoryId: 3,
        likes: 0,
        name: 'Sony WH-1000XM5 Black',
        description: 'Топовые беспроводные наушники с лучшим в классе шумоподавлением, 30 часами работы и мультиточечным подключением.',
        price: 189990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h4c/65105501872158.jpg?format=preview-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h3a/h4c/65105501872158.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h19/hf4/65105502134302.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h08/h1a/65105502396446.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyj-107025179/'
      },
      {
        id: 14,
        categoryId: 3,
        likes: 0,
        name: 'Samsung Galaxy Buds2 Pro White',
        description: 'TWS наушники с умным шумоподавлением, Hi-Fi звуком 24-бит и интеграцией с Galaxy устройствами. Защита IPX7.',
        price: 79990,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/hd4/82760680120350.jpg?format=preview-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h15/hd4/82760680120350.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h4c/hbb/82760680382494.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h78/h1e/82760680644638.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-belyj-111141073/'
      },
      {
        id: 15,
        categoryId: 3,
        likes: 0,
        name: 'JBL Tune 770NC Black',
        description: 'Беспроводные накладные наушники с активным шумоподавлением, 70 часами работы и поддержкой Bluetooth 5.3. Складная конструкция.',
        price: 49990,
        rating: 4.4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h5c/63820994732062.jpg?format=preview-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hdc/h5c/63820994732062.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h78/hc4/63820994994206.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hbc/h59/63820995256350.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/jbl-tune-770nc-chernyj-113191077/'
      },

      // ── Планшеты (categoryId: 4) ──
      {
        id: 16,
        categoryId: 4,
        likes: 0,
        name: 'Apple iPad Air 5 64GB Wi-Fi Space Gray',
        description: 'Планшет с чипом M1, дисплеем Liquid Retina 10.9" и поддержкой Apple Pencil 2. USB-C, 12 Мп камера, Touch ID.',
        price: 249990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h1c/63979696963614.jpg?format=preview-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h3e/h1c/63979696963614.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hac/h2c/63979697225758.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h64/h74/63979697487902.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-air-5-64gb-wi-fi-kosmicheskij-seryj-106524747/'
      },
      {
        id: 17,
        categoryId: 4,
        likes: 0,
        name: 'Samsung Galaxy Tab S9 128GB Wi-Fi Beige',
        description: 'Флагманский планшет с AMOLED дисплеем 11" 120 Гц, чипом Snapdragon 8 Gen 2 и защитой IP68. Включает S Pen.',
        price: 329990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p2c/86342785.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pb7/p2c/86342785.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/h64/83004746145822.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h79/h6e/83004746407966.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-128gb-wi-fi-bejzovyj-112041889/'
      },
      {
        id: 18,
        categoryId: 4,
        likes: 0,
        name: 'Xiaomi Pad 6 256GB Wi-Fi',
        description: 'Планшет с IPS дисплеем 11" 144 Гц, процессором Snapdragon 870, 8 ГБ ОЗУ и стереодинамиками Dolby Atmos.',
        price: 149990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pea/p77/53467074.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pea/p77/53467074.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb8/hac/64144685760542.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9f/hf5/64144686022686.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-256gb-wi-fi-seryjj-113126647/'
      },
      {
        id: 19,
        categoryId: 4,
        likes: 0,
        name: 'Apple iPad mini 6 64GB Wi-Fi Purple',
        description: 'Компактный планшет с чипом A15 Bionic и дисплеем Liquid Retina 8.3". USB-C, Touch ID на боковой кнопке, поддержка Apple Pencil 2.',
        price: 219990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h5e/84166498705438.jpg?format=preview-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hb5/h5e/84166498705438.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hac/hac/84166498967582.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hf2/h6c/84166499229726.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-mini-6-64gb-wi-fi-fioletovyj-106524907/'
      },
      {
        id: 20,
        categoryId: 4,
        likes: 0,
        name: 'Lenovo Tab P12 Pro 256GB Wi-Fi',
        description: 'Планшет с AMOLED дисплеем 12.6" 120 Гц, процессором Snapdragon 870, 8 ГБ ОЗУ и аккумулятором 10200 мАч.',
        price: 289990,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h4c/65105501872158.jpg?format=preview-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h3a/h4c/65105501872158.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h19/hf4/65105502134302.jpg?format=preview-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h08/h1a/65105502396446.jpg?format=preview-medium'
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-pro-tb-q706z-256gb-wi-fi-seryjj-106959747/'
      }
    ];
  }
}
