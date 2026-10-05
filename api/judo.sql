-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Paź 05, 2026 at 08:19 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `judo`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `post`
--

CREATE TABLE `post` (
  `id` varchar(30) NOT NULL,
  `caption` tinytext NOT NULL,
  `permaLink` tinytext NOT NULL,
  `mediaURL` tinytext NOT NULL,
  `mediaType` enum('IMAGE','VIDEO','CAROUSEL_ALBUM') NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `caption`, `permaLink`, `mediaURL`, `mediaType`, `timestamp`) VALUES
('18111966797090506', 'Czy zastanawiałeś się, czemu wszędzie nie jest stosowany Wordpress, bo jest najwygodniejszy dla zwykłego użytkownika, lub czysty HTML, gdyż jest najprostszy? W tym filmiku przedstawiamy, jaką technologię dla jakiej sytuacji wybrać', 'https://www.instagram.com/reel/Ddj90IQBI2d/', 'https://scontent-waw2-1.cdninstagram.com/o1/v/t2/f2/m86/AQNKDnvpRH5Qu5tU36DE4Z6wmBpTQN6-pf4LMpo7f2EWbfah-yBPa7T5cAF5ZF5_GlLt4HwtnOPQIGpcAbf88rOAabcG-BV7GF0Smkc.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_ohc=-1wix54IN-wQ7kNv', 'VIDEO', '2026-09-21 17:58:57'),
('18118725886901911', 'Czy zastanawiasz się, co powinieneś zrobić na swojej stronie? Oto trzy rzeczy, które warto rozważyć', 'https://www.instagram.com/reel/DeDISOdh1jC/', 'https://scontent-waw2-2.cdninstagram.com/o1/v/t2/f2/m86/AQOPiaq4HxCPkQsF-8MFMkZ8y0Dvl6nO-1UAFQ4NcphAGnjD5_smhp1jKhRX8OpOz7oWPWK0zWC2E4rbDjkHgFYM234jKlfATtE17po.mp4?_nc_cat=102&_nc_sid=5e9851&_nc_ht=scontent-waw2-2.cdninstagram.com&_nc_ohc=7KkDMm51_pAQ7kNv', 'VIDEO', '2026-10-03 20:26:55'),
('18135266818631260', 'Czy płaciłeś kiedyś kartą na stronie internetowej i zastanawiało Cię, jaki mechanizm za tym stoi? W tym filmiku omawiamy jak wygląda proces płatności kartą na stronie internetowej.', 'https://www.instagram.com/reel/Dd1sIxuBelQ/', 'https://scontent-waw2-2.cdninstagram.com/o1/v/t2/f2/m86/AQNMCZQr06syjJbBwRSe0i4Zu-Lu4ZDWM1942mc6uPGiqD6IZywtLe4NeyEnLdFJLiENuzev_zuGoxL0WTOtwvmkwTutNqbBIZNwwug.mp4?_nc_cat=105&_nc_sid=5e9851&_nc_ht=scontent-waw2-2.cdninstagram.com&_nc_ohc=azX68Z9GGyUQ7kNv', 'VIDEO', '2026-09-28 15:10:53'),
('18157287910505460', 'Czy słysząc pojęcie API nie wiesz, o co chodzi i czym to jest? W tym filmiku omawiamy temat API, wyjaśniamy czym jest i gdzie jest ono wykorzystywane', 'https://www.instagram.com/reel/DdeFbRvBfU2/', 'https://scontent-waw2-2.cdninstagram.com/o1/v/t2/f2/m86/AQNLMe5bU8dTaxvQay7VPGhEuyJ2WdWzQQU88OPmtg438c4OmgG_LKuxE5Lu5eeACNZV97dIo0KS5O5BFHjGC4fYgV5fhn3bE178khE.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent-waw2-2.cdninstagram.com&_nc_ohc=-titLX1rWlQQ7kNv', 'VIDEO', '2026-09-19 11:10:17'),
('18472533994113351', 'Czy posiadasz stronę internetową i zastanawiasz się, czemu działa płynnie i wydajnie na komputerze, ale na telefonie już niekoniecznie? W tym filmiku odpowiemy na twoje pytanie.', 'https://www.instagram.com/reel/DdwJk7GBWOY/', 'https://scontent-waw2-1.cdninstagram.com/o1/v/t2/f2/m86/AQPNmnceZcempuGkoVZYoy6dE7hZ104snWjZupmpu1iOERlyW01M6GKCSnWBSAS3fFUsJw7fhoQrU4tUpJFlA-rDKeNvoFgQQtEF-7o.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_ohc=UbL4oGSKxsgQ7kNv', 'VIDEO', '2026-09-26 11:32:39');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `postadditionlogs`
--

CREATE TABLE `postadditionlogs` (
  `id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `caption` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `postadditionlogs`
--

INSERT INTO `postadditionlogs` (`id`, `timestamp`, `caption`) VALUES
(3, '2026-10-05 17:49:53', 'Dodano post na godzinę'),
(7, '2026-10-05 19:00:25', 'Brak nowych postów');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indeksy dla tabeli `postadditionlogs`
--
ALTER TABLE `postadditionlogs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `postadditionlogs`
--
ALTER TABLE `postadditionlogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
