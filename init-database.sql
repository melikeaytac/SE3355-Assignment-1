
CREATE TABLE IF NOT EXISTS slider (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  image TEXT
);

INSERT INTO slider (title, image) VALUES
('Premium Özel', 'https://r.resimlink.com/2STrp.webp'),
('Kozmetik Ürünlerinde 200TL indirim', 'https://r.resimlink.com/SPiZx2q.webp'),
('Lego Yapım Setlerinde İndirim', 'https://r.resimlink.com/_jdNC-qicz.webp'),
('Cildine Kore Dokunuşu', 'https://r.resimlink.com/xCFzvLTs.webp'),
('Kotonda %60a Varan İndirim ', 'https://r.resimlink.com/_Y2EQ9CFIHfU.webp'),
('Cep Telefonlarında Şok İndirim', 'https://r.resimlink.com/nasxEUlJumB8.webp'),
('Moda Haftası Seçkisi', 'https://r.resimlink.com/b-8HygGFEmSi.webp'),
('Küçük Ev Aletlerinde Özel Fiyatlar', 'https://r.resimlink.com/uZ8e-tXBgxK.webp'),
('Spor Ekipmanları', 'https://r.resimlink.com/kM1vC9.webp'),
('Garanti BBVA Kartına 150TL İndirim', 'https://r.resimlink.com/r2jYH.webp');


CREATE TABLE IF NOT EXISTS electronics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  price INTEGER,
  image TEXT,
  link TEXT
);

INSERT INTO electronics (title, price, image, link) VALUES
('Samsung Galaxy S25 Edge', 29999, 'https://r.resimlink.com/kxpRn.jpeg', 'https://www.samsung.com/tr/smartphones/galaxy-s25-edge'),
('Huawei MateBook D16 Intel Core i5 Laptop', 19999, 'https://r.resimlink.com/UtVTJ.webp', 'https://consumer.huawei.com/tr/laptops/matebook-d-16-2024/buy/'),
('MSI 27" Gaming Monitor', 5128, 'https://r.resimlink.com/h0_T7lNV.webp', 'https://tr.msi.com/Monitor/G27C4X');

CREATE TABLE IF NOT EXISTS recommendations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  price INTEGER,
  image TEXT,
  rating REAL
);

INSERT INTO recommendations (title, price, image, rating) VALUES
('Maybelline Lash Sensational Maskara', 199.90, 'https://r.resimlink.com/Y8zkMxXiJrp.jpg', 4.7),
('L’Oréal Paris Infallible Fondöten', 289.95, 'https://r.resimlink.com/i3j97.webp', 4.6),
('Golden Rose Velvet Matte Ruj 02', 109.50, 'https://r.resimlink.com/SFZKNDqOy2.jpg', 4.4),
('Pastel Profashion Kapatıcı', 139.90, 'https://r.resimlink.com/7STZm.jpg', 4.5),
('Revolution Far Paleti Reloaded', 289.00, 'https://r.resimlink.com/AzdD1R4U.jpg', 4.8),
('Flormar Silk Matte Likit Ruj 05', 129.90, 'https://r.resimlink.com/jN5cUEGya9v.jpg', 4.3),
('NYX Epic Ink Eyeliner', 209.90, 'https://r.resimlink.com/or5PjTNg.jpg', 4.6),
('Farmasi BB Krem Light to Medium', 169.95, 'https://r.resimlink.com/17VpsXTqfN.jpg', 4.2),
('Rimmel London Stay Matte Pudra', 99.90, 'https://r.resimlink.com/zICiMe.jpg', 4.4),
('Note Love At First Sight Allık', 129.00, 'https://r.resimlink.com/lM3k6E0XVofq.jpg', 4.5),
('Essence Make Me Brow Kaş Jeli', 75.90, 'https://r.resimlink.com/In8VKyDLrW.png', 4.1),
('Maybelline Super Stay Matte Ink 65', 149.90, 'https://r.resimlink.com/Vbft_oSn.jpg', 4.6);

CREATE TABLE IF NOT EXISTS campaigns (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  badge TEXT,
  image TEXT,
  category TEXT
);

INSERT INTO campaigns (badge, image, category) VALUES
('Bu Fiyatlar Kaçmaz', 'https://r.resimlink.com/lcMeDP-Uz.png', 'Elektronik'),
('Acele Et Kaçırma', 'https://r.resimlink.com/dR-4Z.png', 'Alışverişe Başla'),
('3 Al 2 Öde', 'https://r.resimlink.com/2zMPrxT46.png', 'Kişisel Bakım'),
('Fırsatları Kaçırma', 'https://r.resimlink.com/O0a-3.png', 'Moda'),
('Uygun Fırsatlar', 'https://r.resimlink.com/IxhDgv6pOV.png', 'Saat & Aksesuar'),
('Serinleten Fırsatlar', 'https://r.resimlink.com/AaX1y3usSZ.png', 'Ev Elektroniği'),
('Sadece Bugün', 'https://r.resimlink.com/80L5c.png', 'Temizlik Ürünleri'),
('Kaçmaz', 'https://r.resimlink.com/01NdMQA.png', 'Market'),
('Haftanın Ürünü', 'https://r.resimlink.com/ySshPZoEfd.png', 'Bahçe & Balkon'),
('Yeni Sezon', 'https://r.resimlink.com/fZinrq.png', 'Kadın Giyim');

