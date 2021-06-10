-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost
-- Üretim Zamanı: 10 Haz 2021, 20:37:40
-- Sunucu sürümü: 10.4.17-MariaDB
-- PHP Sürümü: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `myportfolio`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `TBL_AUTHOR`
--

CREATE TABLE `TBL_AUTHOR` (
  `id` int(11) NOT NULL,
  `name` varchar(250) COLLATE utf8_turkish_ci DEFAULT NULL,
  `about` text COLLATE utf8_turkish_ci DEFAULT NULL,
  `image` varchar(250) COLLATE utf8_turkish_ci NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `TBL_AUTHOR`
--

INSERT INTO `TBL_AUTHOR` (`id`, `name`, `about`, `image`, `created_at`) VALUES
(1, 'Suat Bayır', 'Suat Bayır, 2020 yılında Kahramanmaraş Sütçü İmam Üniversitesi Bilgisayar Mühendisliği bölümünden birincilikle mezun olmuştur. 2020 yılından beri özel sektörde veri bilimi ve web tabanlı projeler üzerinde çalışmaktadır. Araştırmacı, yenilikçi ve yeni teknolojilere karşı iştahlı bir kişiliğe sahiptir. ', '', '2021-04-11 10:40:53');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `TBL_CATEGORY`
--

CREATE TABLE `TBL_CATEGORY` (
  `id` int(11) NOT NULL,
  `category_name` varchar(200) COLLATE utf8_turkish_ci DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `TBL_CATEGORY`
--

INSERT INTO `TBL_CATEGORY` (`id`, `category_name`, `created_at`) VALUES
(1, 'Makine Öğrenmesi', '2021-04-03 16:41:16'),
(2, 'Derin Öğrenme', '2021-04-03 16:41:31'),
(3, 'Bilgisayarlı Görü', '2021-04-03 17:19:22'),
(4, 'Yapay Zeka', '2021-04-03 17:19:32'),
(5, 'Python', '2021-04-03 17:20:46'),
(6, 'PHP', '2021-04-03 17:20:55'),
(7, 'React.js', '2021-04-03 17:21:04'),
(8, 'Vue.js', '2021-04-03 17:21:13');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `TBL_COMMENT`
--

CREATE TABLE `TBL_COMMENT` (
  `id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `name` varchar(250) COLLATE utf8_turkish_ci DEFAULT NULL,
  `reply_id` int(11) DEFAULT NULL,
  `email` varchar(250) COLLATE utf8_turkish_ci DEFAULT NULL,
  `website` varchar(250) COLLATE utf8_turkish_ci DEFAULT NULL,
  `message` text COLLATE utf8_turkish_ci DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `TBL_MESSAGE`
--

CREATE TABLE `TBL_MESSAGE` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_turkish_ci DEFAULT NULL,
  `email` varchar(250) COLLATE utf8_turkish_ci DEFAULT NULL,
  `subject` varchar(250) COLLATE utf8_turkish_ci DEFAULT NULL,
  `message` text COLLATE utf8_turkish_ci DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `status` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `TBL_MESSAGE`
--

INSERT INTO `TBL_MESSAGE` (`id`, `name`, `email`, `subject`, `message`, `created_at`, `status`) VALUES
(1, NULL, NULL, NULL, NULL, '2021-03-30 22:01:48', 0),
(2, 'asd', 'a@a.com', 'asasd', 'ad', '2021-03-30 22:01:48', 0),
(3, NULL, NULL, NULL, NULL, '2021-03-30 22:01:58', 0),
(4, 'asd', 'a@a.com', 'asasd', 'ad', '2021-03-30 22:01:59', 0),
(5, NULL, NULL, NULL, NULL, '2021-03-30 22:04:41', 0),
(6, 'asd', 'a@a.com', 'asasd', 'ad', '2021-03-30 22:04:41', 0),
(7, NULL, NULL, NULL, NULL, '2021-03-30 22:05:11', 0),
(8, 'asd', 'a@a.com', 'asasd', 'ad', '2021-03-30 22:05:11', 0),
(9, NULL, NULL, NULL, NULL, '2021-03-30 22:06:00', 0),
(10, 'asd', 'a@a.com', 'asasd', 'ad', '2021-03-30 22:06:00', 0),
(11, NULL, NULL, NULL, NULL, '2021-03-30 22:06:08', 0),
(12, 'asd', 'a@a.com', 'asasd', 'ad', '2021-03-30 22:06:08', 0),
(13, NULL, NULL, NULL, NULL, '2021-03-30 22:06:36', 0),
(14, 'asd', 'a@a.com', 'asd', 'sad', '2021-03-30 22:06:36', 0),
(15, NULL, NULL, NULL, NULL, '2021-03-30 22:07:39', 0),
(16, 'asd', 'a@a.com', 'asd', 'asdf', '2021-03-30 22:07:39', 0),
(17, NULL, NULL, NULL, NULL, '2021-03-30 22:08:20', 0),
(18, 'asd', 'a@a.com', 'asd', 'asd', '2021-03-30 22:08:20', 0),
(19, NULL, NULL, NULL, NULL, '2021-03-31 20:24:29', 0),
(20, 'ali veli', 'ali@a.com', 'sad', 'sad', '2021-03-31 20:24:29', 0);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `TBL_POST`
--

CREATE TABLE `TBL_POST` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `post_name` varchar(250) COLLATE utf8_turkish_ci DEFAULT NULL,
  `abstract` text COLLATE utf8_turkish_ci DEFAULT NULL,
  `author` int(250) DEFAULT NULL,
  `content` text COLLATE utf8_turkish_ci DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `TBL_POST`
--

INSERT INTO `TBL_POST` (`id`, `category_id`, `post_name`, `abstract`, `author`, `content`, `created_at`) VALUES
(23, NULL, NULL, NULL, NULL, NULL, '2021-04-11 14:23:45'),
(24, 1, 'Yapay Zekaya Giriş', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 1, '<p style=\"text-align:justify;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: Open Sans\", Arial, sans-serif;\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span><br></p>\n', '2021-04-11 14:23:45'),
(25, 2, 'Deneme', 'asdf', 1, '<p>asdfasdfsadf</p>\n', '2021-04-11 17:05:40'),
(26, 3, 'Deneme Başlık 3', 'asdf', 1, '<p>asdfasdfsadf</p>\n', '2021-04-11 17:05:46'),
(27, 1, 'sadf', 'asdf', 1, '<p>asdfasdfsadf</p>\n', '2021-04-11 17:05:51'),
(28, 1, 'sdfgh', 'asdf', 1, '<p>asdfasdfsadf</p>\n', '2021-04-11 17:05:55');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `TBL_AUTHOR`
--
ALTER TABLE `TBL_AUTHOR`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `TBL_CATEGORY`
--
ALTER TABLE `TBL_CATEGORY`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `TBL_COMMENT`
--
ALTER TABLE `TBL_COMMENT`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `TBL_MESSAGE`
--
ALTER TABLE `TBL_MESSAGE`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `TBL_POST`
--
ALTER TABLE `TBL_POST`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `TBL_AUTHOR`
--
ALTER TABLE `TBL_AUTHOR`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `TBL_CATEGORY`
--
ALTER TABLE `TBL_CATEGORY`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Tablo için AUTO_INCREMENT değeri `TBL_COMMENT`
--
ALTER TABLE `TBL_COMMENT`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `TBL_MESSAGE`
--
ALTER TABLE `TBL_MESSAGE`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Tablo için AUTO_INCREMENT değeri `TBL_POST`
--
ALTER TABLE `TBL_POST`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
