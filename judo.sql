-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Paź 06, 2026 at 02:53 PM
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
  `mediaURL` mediumtext NOT NULL,
  `mediaType` enum('IMAGE','VIDEO','CAROUSEL_ALBUM') NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `caption`, `permaLink`, `mediaURL`, `mediaType`, `timestamp`) VALUES
('17916260736240066', 'Link do kanału: https://youtube.com/@barweb-tworzeniestroninterneto?si=7t-Bo7AoUjmuzKSg', 'https://www.instagram.com/p/DcwG01WDbUY/', 'https://scontent-waw2-1.cdninstagram.com/v/t51.82787-15/789925498_18084938420440544_5021722418094916322_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=Id6TboNPNjkQ7kNvwGbXCp6&_nc_oc=AdoRP9MC4jvOZLYwtfHmOWxAerfdZrbUM41uZ1CpauxWpVz_4scwnQlAodt9_X8UDAI&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=8SQfx6E_9dAT3u9XiG2dog&_nc_tpa=Q5bMBQJcZRKtlPM_yCptHuY6FpztfAXKpnOKzrMuji3WVemiNIILB8Zexfshq6HiuaNZ6QBJm2ZgzkuyPg&oh=00_AQNzGq5uwxjhDiC4FL321ZykPkqogGV5DyK2XjVPiy4W5g&oe=6ACA7485', 'IMAGE', '2026-09-01 14:36:55'),
('17994423870037589', 'Nie wiesz co zrobić, żeby twoja strona przyciągała większą ilość klientów? W tej rolce znajdziesz 5 rzeczy, które możesz zrobić żeby to zmienić.', 'https://www.instagram.com/reel/Dc_5-aThLzD/', 'https://scontent-waw2-2.cdninstagram.com/o1/v/t2/f2/m86/AQP1xw77L02j8D2asQ3rVClCy8PIrF1M9KrmBVi5n2p17EqN05aL0zGW1x7VWcL3n_KYabury907Iw00vwvqd1KHt89GMQjzVfjdAvc.mp4?_nc_cat=100&_nc_sid=5e9851&_nc_ht=scontent-waw2-2.cdninstagram.com&_nc_ohc=14IjbztFZCkQ7kNvwEEc67s&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTczNjE5NDU0NDI3MTUxOCwiYXNzZXRfYWdlX2RheXMiOjI4LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=b7bcba9a2ad9c092&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC84NDQzMkY2Q0NENzZGNjg5RDgzNEJBRUY4NDA5Q0VCNF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzc0NEE4MTBFRjk3RTc5RkQ1NEIwQUJFNDA4QThCRkFGX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACa8gpSx6cOVBhUCKAJDMywXQD0VP3ztkWgYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=8SQfx6E_9dAT3u9XiG2dog&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQJZryOVdDO9MJhJHogsG_aecUrIx0DoiyxfcsGUFMT2BTACi6Tgm84YwAfrHfasWOfsMVHBIypoVg&oh=00_AQP-x-oQnY6Jb4y0nqId5qSJ_9oPChaPW2NFxvecuw0Qqg&oe=6AC6B6AD', 'VIDEO', '2026-09-07 17:52:48'),
('18094896371647490', 'Słyszysz pojęcia backend, frontend i nie wiesz co one oznaczają? W tej rolce wyjaśniamy ich znaczenie i różnicę pomiędzy nimi.', 'https://www.instagram.com/reel/DdKZt0nB8Oi/', 'https://scontent-waw2-1.cdninstagram.com/o1/v/t2/f2/m86/AQN48_7H4EjpOhWgsv0T89jQFS9l4BRB0AUQCA2ig9_EoEHHoAjAfl1jnybX8jNs11ex9cAEaausN8-a6PCPhh2rTQtv55uHKxP6G2k.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_ohc=pgQSQT6mmf4Q7kNvwGTwbj4&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6OTg0OTU4ODM0NjE2NDIzLCJhc3NldF9hZ2VfZGF5cyI6MjQsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoyMiwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=ead3f1eb609158ec&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC84RTQ3M0M2RDA5ODU1MTkxNUU5MDc4NUVGMjE0NUJBOV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzdCNENBRTdFNjkxOUE5ODUxN0UwRTVDMkY5NDUyNDlBX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACbOoaWXk_S_AxUCKAJDMywXQDbVP3ztkWgYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=8SQfx6E_9dAT3u9XiG2dog&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQLkb5wvzoJSiObc_FEGrTr6H8rafe08KTkfbZ7jVNLPOrHccYXjvtjT0aBfJOrjiA6wwWnoOgl0pA&oh=00_AQMXJgHNilY8FXluDhVdXHqXsFpNpT7yOdOhRCgW5N9sOQ&oe=6AC6B34F', 'VIDEO', '2026-09-11 19:42:32'),
('18111966797090506', 'Czy zastanawiałeś się, czemu wszędzie nie jest stosowany Wordpress, bo jest najwygodniejszy dla zwykłego użytkownika, lub czysty HTML, gdyż jest najprostszy? W tym filmiku przedstawiamy, jaką technologię dla jakiej sytuacji wybrać', 'https://www.instagram.com/reel/Ddj90IQBI2d/', 'https://scontent-waw2-1.cdninstagram.com/o1/v/t2/f2/m86/AQNKDnvpRH5Qu5tU36DE4Z6wmBpTQN6-pf4LMpo7f2EWbfah-yBPa7T5cAF5ZF5_GlLt4HwtnOPQIGpcAbf88rOAabcG-BV7GF0Smkc.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_ohc=-1wix54IN-wQ7kNvwFe9g0z&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Mjk2OTgzMTI3MzM1MDQxOCwiYXNzZXRfYWdlX2RheXMiOjE0LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjAsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=3e001ec069b4125e&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC85OTQxOEMzMjc2RjlBNkU0QTQ4MUFEMTU4OUZDMzNBOV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzJBNEVERDkwRDYxRDc4N0Q4REZBMTczNkQzM0NCOEI5X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACaklLqh98LGChUCKAJDMywXQDQAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=-ClfvWeMxwGX1uGffL7z8Q&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQL77hO4lvolTz5saI4rTQ7CuIpFy8yGWp0K4Tkdf98zhce4W-bw187hxa63UwmXT4WzvSij2m_eEw&oh=00_AQPGfZ0cy7RMlJPt0nLPta49x7PyJ2Rhctl6QYtHllaoSQ&oe=6AC69CC2', 'VIDEO', '2026-09-21 17:58:57'),
('18113120632820951', 'Link do rolki: https://www.youtube.com/shorts/GR0HykXnw8g', 'https://www.instagram.com/p/DdE5Bj5Dj85/', 'https://scontent-waw2-1.cdninstagram.com/v/t51.82787-15/801439370_18086644187440544_524209140592473138_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=m0Q6oVmX388Q7kNvwEByzTS&_nc_oc=AdoTCN6kjFF124OxUqnKqtRXv9SV9fFXDS0lD1LIsZbJPvXz2rd8jvCXRVxmggO1bVk&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=8SQfx6E_9dAT3u9XiG2dog&_nc_tpa=Q5bMBQKHx0y5Yv1XmSNkq9CE8TNZeApZSrqPluq3EwW-EDPVX4cGjXSM669u5HALphbL-3oLTCxsrt0h1Q&oh=00_AQPwvHdjyE8BJvFwzWIFXbvT97_H4MGnmrWQn3fY860BYw&oe=6ACA94CF', 'IMAGE', '2026-09-09 16:20:22'),
('18118329283951941', 'HTML, CSS i Javascript - dużo osób używa tych nazw a wiele nie wie czemu tak właściwie służą. W tej rolce rozwiewamy te wątpliwości i wyjaśniamy któro za co odpowiada.', 'https://www.instagram.com/reel/DdRZ6yyhJIZ/', 'https://scontent-waw2-2.cdninstagram.com/o1/v/t2/f2/m86/AQNu6ufxQBQ-t_-e9pIv6yZEGcIMqsMBXazByaM0SMkEirU6Yk0PEe36p88Y8CnNk_ZW4zuTnPxVaEybfsTy88OlgVVNCh2LAAtascc.mp4?_nc_cat=100&_nc_sid=5e9851&_nc_ht=scontent-waw2-2.cdninstagram.com&_nc_ohc=kD6ayk5qy9YQ7kNvwFpmIn9&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQ0MDI4NjU5Nzk4MzYxMiwiYXNzZXRfYWdlX2RheXMiOjIxLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjEsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=59d44b01b658524e&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8wMjQwQzdCNDcxNjI2MDYyMjc3RTdFRTQ4MEQ0NTFBQV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzI0NEJBRURGMDdFQzhFREQ0MTQwMDgzNTQxNDM3NDk2X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACb4teGw2_uOBRUCKAJDMywXQDV1P3ztkWgYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=8SQfx6E_9dAT3u9XiG2dog&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQIS39dOVw_Gy3__dv3BW1msMIrr6z0sKBEW67A1Rd3B88o_JcG8SJ0MxIarEXYQKE0vekfF3cJ7gQ&oh=00_AQMEzD1XjGKLZhAAC7iEMSibPdA__R6wks1Nhr8Yll_ZJA&oe=6AC69A45', 'VIDEO', '2026-09-14 12:59:00'),
('18118725886901911', 'Czy zastanawiasz się, co powinieneś zrobić na swojej stronie? Oto trzy rzeczy, które warto rozważyć', 'https://www.instagram.com/reel/DeDISOdh1jC/', 'https://scontent-waw2-2.cdninstagram.com/o1/v/t2/f2/m86/AQOPiaq4HxCPkQsF-8MFMkZ8y0Dvl6nO-1UAFQ4NcphAGnjD5_smhp1jKhRX8OpOz7oWPWK0zWC2E4rbDjkHgFYM234jKlfATtE17po.mp4?_nc_cat=102&_nc_sid=5e9851&_nc_ht=scontent-waw2-2.cdninstagram.com&_nc_ohc=7KkDMm51_pAQ7kNvwEfqTHZ&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6OTc1NzI5NTE4ODkxMDg2LCJhc3NldF9hZ2VfZGF5cyI6MiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjIwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=34d6b984abe7814d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80QjZDQUQyN0MzODg0RTBCQjdERjg4QjNFM0E2RDMzM192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0ZERDAyRDhDNEQ5MzRCMjFCNUExQkM0Qjc2RDA0NzlEX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACacwfa199q7AxUCKAJDMywXQDQAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=-ClfvWeMxwGX1uGffL7z8Q&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQJ8oVy9sRHise7it1MU6AXx0XKjZGbvwThA-ZzveX_Jwn19FRW0CDTP2LSLn3r2Ml-qogLF4GzF3Q&oh=00_AQPV66CMK4k1WiHDC6-1uoOt44KSnvWpAhs3326qMQStlA&oe=6AC6818F', 'VIDEO', '2026-10-03 20:26:55'),
('18135266818631260', 'Czy płaciłeś kiedyś kartą na stronie internetowej i zastanawiało Cię, jaki mechanizm za tym stoi? W tym filmiku omawiamy jak wygląda proces płatności kartą na stronie internetowej.', 'https://www.instagram.com/reel/Dd1sIxuBelQ/', 'https://scontent-waw2-2.cdninstagram.com/o1/v/t2/f2/m86/AQNMCZQr06syjJbBwRSe0i4Zu-Lu4ZDWM1942mc6uPGiqD6IZywtLe4NeyEnLdFJLiENuzev_zuGoxL0WTOtwvmkwTutNqbBIZNwwug.mp4?_nc_cat=105&_nc_sid=5e9851&_nc_ht=scontent-waw2-2.cdninstagram.com&_nc_ohc=azX68Z9GGyUQ7kNvwEl4WgO&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQzMTI3MDIyNTczNDc1NywiYXNzZXRfYWdlX2RheXMiOjcsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoyOCwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=131fad3b2e147ac6&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC82RTQ4ODcyRTk1REE3Qzc2NTM4RjFCQTk4NTBENjRBQ192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0VCNDIxRDQ1QTEyOUMyQjkxRTA3RUVEMTI1MTA2OUE1X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACbKsY-W8u6KBRUCKAJDMywXQDwAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=-ClfvWeMxwGX1uGffL7z8Q&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQJb0CX5oXMlXaajftkx6PYVP_eJIf4LzCO3LSke1WBxMV4cLIJmBwgAp_ewWOadFDUZNieEWCpUZA&oh=00_AQOaqyxuA_Hciojr3mdBMPgsqKCy_ZiXCrDXtkeJ8oyJ0w&oe=6AC6862E', 'VIDEO', '2026-09-28 15:10:53'),
('18146633698479528', 'Czy zastanawiałeś się nad zrobieniem strony z pomocą WordPress? W tym filmiku przedstawiamy sytuację, w której opłaca się zakup WordPress jak i sytuację, w której się to nie opłaca', 'https://www.instagram.com/reel/Dc3pyxhBT68/', 'https://scontent-waw2-1.cdninstagram.com/o1/v/t2/f2/m86/AQMNw9fcYXdzJ2ed0IKqHGELfYNBg_AbC6mWL_n-h-CIiIVRU3RIp8-l3DWgVXgxUhjzGVqfF15NzEeLCwRBQTRvL6c7kt18s0UkYHM.mp4?_nc_cat=108&_nc_sid=5e9851&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_ohc=qteCAKgntjMQ7kNvwHQUDBn&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjU5Njc3NTY4MDg0MjAwMywiYXNzZXRfYWdlX2RheXMiOjMxLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjEsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=62aa4947ad07a0ab&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC83MjQ0NjdCOERCOUU3QzlGRUQ5RjY4MDZCMUNFQkI4QV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0I4NDFCQ0M5QzkxM0NFMEE5NTFFNEE1RDU4QkFENzlCX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACam5KTAnvCcCRUCKAJDMywXQDVAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=8SQfx6E_9dAT3u9XiG2dog&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQKBIfwogxmq2NWtcZXw2gVEG6rkXF1G3BU8ATGr7-Lm12SEl9XE55HbrJHXRDeCdY3ZywsTmTOv_Q&oh=00_AQORpBz2bARVgef1ZdVU_aIbn3hfkSOesB3l3OX4zZunZQ&oe=6AC68F9D', 'VIDEO', '2026-09-04 12:57:28'),
('18157287910505460', 'Czy słysząc pojęcie API nie wiesz, o co chodzi i czym to jest? W tym filmiku omawiamy temat API, wyjaśniamy czym jest i gdzie jest ono wykorzystywane', 'https://www.instagram.com/reel/DdeFbRvBfU2/', 'https://scontent-waw2-2.cdninstagram.com/o1/v/t2/f2/m86/AQNLMe5bU8dTaxvQay7VPGhEuyJ2WdWzQQU88OPmtg438c4OmgG_LKuxE5Lu5eeACNZV97dIo0KS5O5BFHjGC4fYgV5fhn3bE178khE.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent-waw2-2.cdninstagram.com&_nc_ohc=-titLX1rWlQQ7kNvwGO4003&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTY2Mjg3NzEwODczNTA3OCwiYXNzZXRfYWdlX2RheXMiOjE2LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjQsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=bfb03cf3d5553252&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xMTQzMUQyODlBMTBBRDJGODc1RjdEREYyQzRGNTdCRl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0RFNEYwQzk4OUI4NjhDREJDOEZEOThGNTBDRjQzQUFDX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACbMsfj1l5j0BRUCKAJDMywXQDgAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=-ClfvWeMxwGX1uGffL7z8Q&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQLgXs0TEq39SJabyuGrEeVJ3V1cUBtVZTIQm1f6AccDzZ0V9PgDkigrDh0eaPx4Z5-nq5OmWap8MQ&oh=00_AQM2dW4R_H6lfHkBwI4Whbk8gNisH9pAn4GKuUAXatmS8g&oe=6AC6A0D2', 'VIDEO', '2026-09-19 11:10:17'),
('18472533994113351', 'Czy posiadasz stronę internetową i zastanawiasz się, czemu działa płynnie i wydajnie na komputerze, ale na telefonie już niekoniecznie? W tym filmiku odpowiemy na twoje pytanie.', 'https://www.instagram.com/reel/DdwJk7GBWOY/', 'https://scontent-waw2-1.cdninstagram.com/o1/v/t2/f2/m86/AQPNmnceZcempuGkoVZYoy6dE7hZ104snWjZupmpu1iOERlyW01M6GKCSnWBSAS3fFUsJw7fhoQrU4tUpJFlA-rDKeNvoFgQQtEF-7o.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_ohc=UbL4oGSKxsgQ7kNvwFTF2tQ&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTgyNjM1OTE1NTAyMzMyMiwiYXNzZXRfYWdlX2RheXMiOjksInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoyOCwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=5c463b5b09211091&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yMjRBMDQ5QzlCODNFNDY3NTc3QkM1OEZFMjg0QzNCRV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzk2NEMwRjAwMzVBNzkyRkFCNzU3QzVFODlBMDU1QzkwX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACa099aKjMS-BhUCKAJDMywXQDwAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=-ClfvWeMxwGX1uGffL7z8Q&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQLlDfhL9hcuhBN0YZqRgf0NHzSEDhTGrxf3dbwTUtmUYy4DJSs3R-t3QInQ0ETCG7wyuUQJNFzL3w&oh=00_AQPNpOLotScif398MocPMLBbVHMCD46NrYpYDzL_Kv6iWg&oe=6AC68A66', 'VIDEO', '2026-09-26 11:32:39');

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
(6, '2026-10-06 10:00:00', 'Brak nowych postów'),
(7, '2026-10-06 11:00:38', 'Brak nowych postów'),
(8, '2026-10-06 11:00:10', 'Brak nowych postów'),
(9, '2026-10-06 11:00:02', 'Brak nowych postów'),
(10, '2026-10-06 13:00:42', 'Brak nowych postów'),
(11, '2026-10-06 13:00:24', 'Brak nowych postów'),
(12, '2026-10-06 13:00:10', 'Brak nowych postów');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `refreshtokenlogs`
--

CREATE TABLE `refreshtokenlogs` (
  `id` int(11) NOT NULL,
  `addedDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `caption` tinytext NOT NULL,
  `expirationDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `refreshtokenlogs`
--

INSERT INTO `refreshtokenlogs` (`id`, `addedDate`, `caption`, `expirationDate`) VALUES
(1, '2026-10-06 12:49:48', 'Wygenerowano nowy token', '2026-12-05 12:20:31');

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
-- Indeksy dla tabeli `refreshtokenlogs`
--
ALTER TABLE `refreshtokenlogs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `postadditionlogs`
--
ALTER TABLE `postadditionlogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `refreshtokenlogs`
--
ALTER TABLE `refreshtokenlogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
