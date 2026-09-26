(() => {
  "use strict";

  /* =========================================================
     CONFIGURAÇÃO
  ========================================================= */

  window.API_BASE_URL = "https://milho-flakes.onrender.com";


  /* =========================================================
     FOTOS PRINCIPAIS
  ========================================================= */

  window.REAL_PHOTOS = {
    "iphone-x-64":
      "https://www.apple.com/newsroom/images/product/iphone/standard/iPhone_X_family_line_up_big.jpg.large.jpg",

    "iphone-xr-64":
      "https://www.apple.com/newsroom/images/product/iphone/standard/iPhone-XR-family-line-up-09122018_big.jpg.large.jpg",

    "iphone-xs-64":
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-Xs-combo-gold-09122018_big.jpg.large.jpg",

    "iphone-xs-max-64":
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-Xs-combo-gold-09122018_big.jpg.large.jpg",

    "iphone-11-64":
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg",

    "iphone-11-pro-64":
      "https://spacenet.tn/39176-large_default/iphone-11-pro-64-go-gold.jpg",

    "iphone-11-pro-max-64":
      "https://fixlygsm.ro/cdn/shop/files/res_f6e3f004b5a9a0d36fd4f1db3b157e4d.jpg?v=1744040823",

    "iphone-12-64":
      "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020_big.jpg.large.jpg",

    "iphone-12-mini-64":
      "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020_big.jpg.large.jpg",

    "iphone-12-pro-128":
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg",

    "iphone-12-pro-max-128":
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg",

    "iphone-13-128":
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg",

    "iphone-13-mini-128":
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg",

    "iphone-13-pro-128":
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg",

    "iphone-13-pro-max-128":
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg",

    "iphone-14-128":
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg",

    "iphone-14-plus-128":
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg",

    "iphone-14-pro-128":
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg",

    "iphone-14-pro-max-128":
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg",

    "iphone-15-128":
      "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-design-230912_big.jpg.large.jpg",

    "iphone-15-plus-128":
      "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-design-230912_big.jpg.large.jpg",

    "iphone-15-pro-128":
      "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",

    "iphone-15-pro-max-256":
      "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",

    "iphone-16-128":
      "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",

    "iphone-16-plus-128":
      "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",

    "iphone-16-pro-128":
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg",

    "iphone-16-pro-max-256":
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg",

    "iphone-17e-256":
      "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/geo/Apple-iPhone-17e-hero-geo-260302_big.jpg.large.jpg",

    "iphone-17e-512":
      "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/geo/Apple-iPhone-17e-hero-geo-260302_big.jpg.large.jpg",

    "iphone-17-256":
      "https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/geo/article/Apple-iPhone-17-hero-250909_inline.jpg.large.jpg",

    "iphone-17-512":
      "https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/geo/article/Apple-iPhone-17-hero-250909_inline.jpg.large.jpg",

    "iphone-air-256":
      "https://www.apple.com/newsroom/images/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/article/Apple-iPhone-Air-hero-250909_big.jpg.large.jpg",

    "iphone-air-512":
      "https://www.apple.com/newsroom/images/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/article/Apple-iPhone-Air-hero-250909_big.jpg.large.jpg",

    "iphone-air-1tb":
      "https://www.apple.com/newsroom/images/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/article/Apple-iPhone-Air-hero-250909_big.jpg.large.jpg",

    "iphone-17-pro-256":
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg",

    "iphone-17-pro-max-256":
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg",

    "iphone-18-pro-256":
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/geo/Apple-iPhone-18-Pro-2up-Geo-260909_inline.jpg.large.jpg",

    "iphone-18-pro-max-256":
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/geo/Apple-iPhone-18-Pro-2up-Geo-260909_inline.jpg.large.jpg"
  };


  /* =========================================================
     GALERIAS
  ========================================================= */

  window.REAL_GALLERIES = {
    "iphone-xs-64": [
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-Xs-combo-gold-09122018_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-Xs-line-up-09122018_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-Xs-line-up-front-face-09122018_inline.jpg.large.jpg"
    ],

    "iphone-xs-max-64": [
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-Xs-combo-gold-09122018_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-Xs-line-up-09122018_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-Xs-line-up-front-face-09122018_inline.jpg.large.jpg"
    ],

    "iphone-12-pro-128": [
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone12pro-stainless-steel-gold_10132020_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone12pro-pacific-blue_10132020_Full-Bleed-Image.jpg.large.jpg"
    ],

    "iphone-12-pro-max-128": [
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone12pro-stainless-steel-gold_10132020_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone12pro-pacific-blue_10132020_Full-Bleed-Image.jpg.large.jpg"
    ],

    "iphone-13-pro-128": [
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Colors_09142021_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg"
    ],

    "iphone-13-pro-max-128": [
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Colors_09142021_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg"
    ],

    "iphone-14-pro-128": [
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907-geo_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg"
    ],

    "iphone-14-pro-max-128": [
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907-geo_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg"
    ],

    "iphone-15-pro-128": [
      "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-geo-230912_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-Pro-lineup-design-230912_big.jpg.large.jpg"
    ],

    "iphone-15-pro-max-256": [
      "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-geo-230912_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-Pro-lineup-design-230912_big.jpg.large.jpg"
    ],

    "iphone-16-pro-128": [
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-finish-lineup-240909_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-camera-system-240909_inline.jpg.large.jpg"
    ],

    "iphone-16-pro-max-256": [
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-finish-lineup-240909_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-camera-system-240909_inline.jpg.large.jpg"
    ],

    "iphone-17e-256": [
      "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/geo/Apple-iPhone-17e-hero-geo-260302_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/geo/Apple-iPhone-17e-family-lineup-ROW-260302_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/article/Apple-iPhone-17e-accessories-260302_big.jpg.large.jpg"
    ],

    "iphone-17e-512": [
      "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/geo/Apple-iPhone-17e-hero-geo-260302_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/geo/Apple-iPhone-17e-family-lineup-ROW-260302_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/article/Apple-iPhone-17e-accessories-260302_big.jpg.large.jpg"
    ],

    "iphone-17-pro-256": [
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg"
    ],

    "iphone-17-pro-max-256": [
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg"
    ],

    "iphone-18-pro-256": [
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/geo/Apple-iPhone-18-Pro-2up-Geo-260909_inline.jpg.large.jpg"
    ],

    "iphone-18-pro-max-256": [
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/geo/Apple-iPhone-18-Pro-2up-Geo-260909_inline.jpg.large.jpg"
    ]
  };


  /* =========================================================
     CORES
  ========================================================= */

  window.FAMILY_COLORS = {
    "iphone-xs-64": ["Dourado", "Cinza-espacial", "Prateado"],
    "iphone-xs-max-64": ["Dourado", "Cinza-espacial", "Prateado"],
    "iphone-11-64": ["Roxo", "Verde", "Amarelo", "Preto", "Branco", "(PRODUCT)RED"],
    "iphone-11-pro-64": ["Verde meia-noite", "Cinza-espacial", "Prateado", "Dourado"],
    "iphone-11-pro-max-64": ["Verde meia-noite", "Cinza-espacial", "Prateado", "Dourado"],
    "iphone-12-64": ["Azul", "Verde", "Preto", "Branco", "(PRODUCT)RED"],
    "iphone-12-mini-64": ["Azul", "Verde", "Preto", "Branco", "(PRODUCT)RED"],
    "iphone-12-pro-128": ["Grafite", "Prateado", "Dourado", "Azul-Pacífico"],
    "iphone-12-pro-max-128": ["Grafite", "Prateado", "Dourado", "Azul-Pacífico"],
    "iphone-13-128": ["Rosa", "Azul", "Meia-noite", "Estelar", "(PRODUCT)RED"],
    "iphone-13-mini-128": ["Rosa", "Azul", "Meia-noite", "Estelar", "(PRODUCT)RED"],
    "iphone-13-pro-128": ["Grafite", "Dourado", "Prateado", "Azul-Sierra"],
    "iphone-13-pro-max-128": ["Grafite", "Dourado", "Prateado", "Azul-Sierra"],
    "iphone-14-128": ["Meia-noite", "Azul", "Estelar", "Roxo", "(PRODUCT)RED"],
    "iphone-14-plus-128": ["Meia-noite", "Azul", "Estelar", "Roxo", "(PRODUCT)RED"],
    "iphone-14-pro-128": ["Preto-espacial", "Prateado", "Dourado", "Roxo escuro"],
    "iphone-14-pro-max-128": ["Preto-espacial", "Prateado", "Dourado", "Roxo escuro"],
    "iphone-15-128": ["Rosa", "Amarelo", "Verde", "Azul", "Preto"],
    "iphone-15-plus-128": ["Rosa", "Amarelo", "Verde", "Azul", "Preto"],
    "iphone-15-pro-128": ["Titânio natural", "Titânio azul", "Titânio branco", "Titânio preto"],
    "iphone-15-pro-max-256": ["Titânio natural", "Titânio azul", "Titânio branco", "Titânio preto"],
    "iphone-16-128": ["Preto", "Branco", "Rosa", "Verde-acinzentado", "Ultramarino"],
    "iphone-16-plus-128": ["Preto", "Branco", "Rosa", "Verde-acinzentado", "Ultramarino"],
    "iphone-16-pro-128": ["Titânio preto", "Titânio natural", "Titânio branco", "Titânio-deserto"],
    "iphone-16-pro-max-256": ["Titânio preto", "Titânio natural", "Titânio branco", "Titânio-deserto"],
    "iphone-17e-256": ["Preto", "Branco", "Rosa-pálido"],
    "iphone-17e-512": ["Preto", "Branco", "Rosa-pálido"],
    "iphone-17-256": ["Preto", "Lavanda", "Azul-névoa", "Sálvia", "Branco"],
    "iphone-17-512": ["Preto", "Lavanda", "Azul-névoa", "Sálvia", "Branco"],
    "iphone-air-256": ["Preto-espacial", "Branco-nuvem", "Dourado-claro", "Azul-céu"],
    "iphone-air-512": ["Preto-espacial", "Branco-nuvem", "Dourado-claro", "Azul-céu"],
    "iphone-air-1tb": ["Preto-espacial", "Branco-nuvem", "Dourado-claro", "Azul-céu"],
    "iphone-17-pro-256": ["Azul-intenso", "Laranja-cósmico", "Prateado"],
    "iphone-17-pro-max-256": ["Azul-intenso", "Laranja-cósmico", "Prateado"],
    "iphone-18-pro-256": ["Preto", "Prateado", "Glacial", "Bordô"],
    "iphone-18-pro-max-256": ["Preto", "Prateado", "Glacial", "Bordô"]
  };


  /* =========================================================
     PRODUTOS
  ========================================================= */

  window.LOCAL_PRODUCTS = [
    {"id":"iphone-x-64","name":"iPhone X","storage":"64 GB","referencePrice":849,"discount":30,"price":594.3},
    {"id":"iphone-xr-64","name":"iPhone XR","storage":"64 GB","referencePrice":879,"discount":30,"price":615.3},
    {"id":"iphone-xs-64","name":"iPhone XS","storage":"64 GB","referencePrice":979,"discount":30,"price":685.3},
    {"id":"iphone-xs-max-64","name":"iPhone XS Max","storage":"64 GB","referencePrice":1059,"discount":30,"price":741.3},
    {"id":"iphone-11-64","name":"iPhone 11","storage":"64 GB","referencePrice":1150,"discount":30,"price":805},
    {"id":"iphone-11-pro-64","name":"iPhone 11 Pro","storage":"64 GB","referencePrice":1439,"discount":30,"price":1007.3},
    {"id":"iphone-11-pro-max-64","name":"iPhone 11 Pro Max","storage":"64 GB","referencePrice":1700,"discount":30,"price":1190},
    {"id":"iphone-12-64","name":"iPhone 12","storage":"64 GB","referencePrice":2049,"discount":30,"price":1434.3},
    {"id":"iphone-12-mini-64","name":"iPhone 12 mini","storage":"64 GB","referencePrice":1864,"discount":30,"price":1304.8},
    {"id":"iphone-12-pro-128","name":"iPhone 12 Pro","storage":"128 GB","referencePrice":2200,"discount":30,"price":1540},
    {"id":"iphone-12-pro-max-128","name":"iPhone 12 Pro Max","storage":"128 GB","referencePrice":2570,"discount":30,"price":1799},
    {"id":"iphone-13-128","name":"iPhone 13","storage":"128 GB","referencePrice":2616,"discount":30,"price":1831.2},
    {"id":"iphone-13-mini-128","name":"iPhone 13 mini","storage":"128 GB","referencePrice":1999,"discount":30,"price":1399.3},
    {"id":"iphone-13-pro-128","name":"iPhone 13 Pro","storage":"128 GB","referencePrice":2801,"discount":30,"price":1960.7},
    {"id":"iphone-13-pro-max-128","name":"iPhone 13 Pro Max","storage":"128 GB","referencePrice":3299,"discount":30,"price":2309.3},
    {"id":"iphone-14-128","name":"iPhone 14","storage":"128 GB","referencePrice":3299,"discount":30,"price":2309.3},
    {"id":"iphone-14-plus-128","name":"iPhone 14 Plus","storage":"128 GB","referencePrice":3399,"discount":30,"price":2379.3},
    {"id":"iphone-14-pro-128","name":"iPhone 14 Pro","storage":"128 GB","referencePrice":3599,"discount":30,"price":2519.3},
    {"id":"iphone-14-pro-max-128","name":"iPhone 14 Pro Max","storage":"128 GB","referencePrice":5606,"discount":30,"price":3924.2},
    {"id":"iphone-15-128","name":"iPhone 15","storage":"128 GB","referencePrice":4299,"discount":30,"price":3009.3},
    {"id":"iphone-15-plus-128","name":"iPhone 15 Plus","storage":"128 GB","referencePrice":3798,"discount":30,"price":2658.6},
    {"id":"iphone-15-pro-128","name":"iPhone 15 Pro","storage":"128 GB","referencePrice":4628,"discount":30,"price":3239.6},
    {"id":"iphone-15-pro-max-256","name":"iPhone 15 Pro Max","storage":"256 GB","referencePrice":5999,"discount":30,"price":4199.3},
    {"id":"iphone-16-128","name":"iPhone 16","storage":"128 GB","referencePrice":4499,"discount":30,"price":3149.3},
    {"id":"iphone-16-plus-128","name":"iPhone 16 Plus","storage":"128 GB","referencePrice":6349,"discount":30,"price":4444.3},
    {"id":"iphone-16-pro-128","name":"iPhone 16 Pro","storage":"128 GB","referencePrice":6799,"discount":30,"price":4759.3},
    {"id":"iphone-16-pro-max-256","name":"iPhone 16 Pro Max","storage":"256 GB","referencePrice":7999,"discount":30,"price":5599.3},
    {"id":"iphone-17e-256","name":"iPhone 17e","storage":"256 GB","referencePrice":4229,"discount":30,"price":2960.3},
    {"id":"iphone-17e-512","name":"iPhone 17e","storage":"512 GB","referencePrice":5099,"discount":30,"price":3569.3},
    {"id":"iphone-17-256","name":"iPhone 17","storage":"256 GB","referencePrice":5593,"discount":30,"price":3915.1},
    {"id":"iphone-17-512","name":"iPhone 17","storage":"512 GB","referencePrice":6290,"discount":30,"price":4403},
    {"id":"iphone-air-256","name":"iPhone Air","storage":"256 GB","referencePrice":6839,"discount":30,"price":4787.3},
    {"id":"iphone-air-512","name":"iPhone Air","storage":"512 GB","referencePrice":7019,"discount":30,"price":4913.3},
    {"id":"iphone-air-1tb","name":"iPhone Air","storage":"1 TB","referencePrice":7559,"discount":30,"price":5291.3},
    {"id":"iphone-17-pro-256","name":"iPhone 17 Pro","storage":"256 GB","referencePrice":8699,"discount":30,"price":6089.3},
    {"id":"iphone-17-pro-max-256","name":"iPhone 17 Pro Max","storage":"256 GB","referencePrice":8813,"discount":30,"price":6169.1},
    {"id":"iphone-18-pro-256","name":"iPhone 18 Pro","storage":"256 GB","referencePrice":10799,"discount":30,"price":7559.3},
    {"id":"iphone-18-pro-max-256","name":"iPhone 18 Pro Max","storage":"256 GB","referencePrice":11699,"discount":30,"price":8189.3}
  ];


  /* =========================================================
     FUNÇÕES DO CATÁLOGO
  ========================================================= */

  const money = (value) =>
    Number(value || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });


  function fallbackImage(product) {
    return `assets/products/${product.id}-front.svg`;
  }


  function productImage(product) {
    return (
      window.REAL_PHOTOS[product.id] ||
      fallbackImage(product)
    );
  }


  function galleryFor(product) {
    return (
      window.REAL_GALLERIES[product.id] ||
      [productImage(product)]
    );
  }


  let products = Array.isArray(window.LOCAL_PRODUCTS)
    ? [...window.LOCAL_PRODUCTS]
    : [];


  /* =========================================================
     RENDERIZAÇÃO
  ========================================================= */

  function render(list) {
    const grid = document.getElementById("products");
    const count = document.getElementById("count");

    if (!grid) {
      return;
    }

    if (!Array.isArray(list) || list.length === 0) {
      grid.innerHTML =
        '<div class="empty">Nenhum iPhone encontrado.</div>';

      if (count) {
        count.textContent = "0 modelos";
      }

      return;
    }

    if (count) {
      count.textContent = `${list.length} opções`;
    }

    grid.innerHTML = list.map((p) => {
      const gallery = galleryFor(p);

      return `
        <article class="product-card">

          <a
            class="product-image"
            href="produto.html?id=${encodeURIComponent(p.id)}"
          >
            <span class="sale">
              ${p.discount || 30}% OFF
            </span>

            <img
              src="${productImage(p)}"
              alt="${p.name} ${p.storage}"
              loading="lazy"
              onerror="this.onerror=null;this.src='${fallbackImage(p)}'"
            >
          </a>

          <div class="product-info">

            <h3>${p.name}</h3>

            <p class="storage">
              ${p.storage}
            </p>

            <div class="trust-badges">
              <span>✓ NOVO</span>
              <span>✓ TESTADO</span>
            </div>

            <div class="old">
              De ${money(p.referencePrice)}
            </div>

            <div class="price">
              ${money(p.price)}
            </div>

            <div class="shipping">
              Frete grátis • Full até 7 dias úteis
            </div>

            <div class="mini-gallery">
              ${gallery.slice(0, 3).map((src) => `
                <img
                  src="${src}"
                  alt="${p.name}"
                  loading="lazy"
                  onerror="this.style.display='none'"
                >
              `).join("")}
            </div>

            <a
              class="buy"
              href="produto.html?id=${encodeURIComponent(p.id)}"
            >
              Ver produto
            </a>

          </div>

        </article>
      `;
    }).join("");
  }


  /* =========================================================
     PESQUISA
  ========================================================= */

  function setupSearch() {
    const search = document.getElementById("search");

    if (!search) {
      return;
    }

    search.addEventListener("input", (event) => {
      const query = event.target.value
        .trim()
        .toLowerCase();

      const filtered = products.filter((product) =>
        `${product.name} ${product.storage}`
          .toLowerCase()
          .includes(query)
      );

      render(filtered);
    });
  }


  /* =========================================================
     CATÁLOGO DA API
  ========================================================= */

  async function loadCatalog() {
    const grid = document.getElementById("products");

    if (!grid) {
      return;
    }

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 6000);

    try {
      const response = await fetch(
        `${window.API_BASE_URL}/api/products`,
        {
          cache: "no-store",
          signal: controller.signal
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message ||
          `HTTP ${response.status}`
        );
      }

      if (
        Array.isArray(data.products) &&
        data.products.length > 0
      ) {
        products = data.products;
      }

    } catch (error) {

      const status =
        document.getElementById("catalogStatus");

      if (status) {
        status.textContent =
          "Catálogo local carregado.";
      }

    } finally {

      clearTimeout(timeout);

      render(products);
    }
  }


  /* =========================================================
     INICIALIZAÇÃO
  ========================================================= */

  setupSearch();

  render(products);

  loadCatalog();

})();
