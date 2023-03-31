-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2023 at 10:45 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerceportal`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(5000) NOT NULL,
  `parent_id` varchar(100) NOT NULL DEFAULT '0',
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `category_description`, `parent_id`, `created_date`, `updated_date`) VALUES
(9, 'New Arrival', 'New Arrival product comes under this category', '0', '2023-03-19 07:47:07', '2023-03-19 07:47:07'),
(12, 'Laptop', 'Laptops come under this category', '0', '2023-03-19 08:09:21', '2023-03-19 08:09:21'),
(13, 'BestSeller', 'Best seller products', '0', '2023-03-19 09:41:37', '2023-03-19 09:41:37'),
(14, 'Featured Products', 'featured products in page', '0', '2023-03-23 10:49:54', '2023-03-23 10:49:54'),
(15, 'TV & Audio', 'tv & audio in this category', '0', '2023-03-23 11:18:50', '2023-03-23 11:18:50'),
(16, 'Trendding Products', 'trendding products are good', '0', '2023-03-23 12:28:36', '2023-03-23 12:28:36'),
(17, 'BestSellers', 'Bestsellers product comes under this category', '0', '2023-03-23 12:30:41', '2023-03-23 12:30:41'),
(18, 'Prime Vedio', 'Prime Vedio in Laptop List', '0', '2023-03-29 10:13:52', '2023-03-29 10:13:52'),
(19, 'Computers', 'Computers in laptop List', '0', '2023-03-29 10:14:37', '2023-03-29 10:14:37'),
(20, 'Electronics', 'Electronics in Laptop list', '0', '2023-03-29 10:15:30', '2023-03-29 10:15:30'),
(21, 'Chamcham', 'chamcham in TV & audio list', '0', '2023-03-29 10:17:17', '2023-03-29 10:17:17'),
(22, 'Sanai', 'sanai in TV & audio list', '0', '2023-03-29 10:17:45', '2023-03-29 10:17:45'),
(23, 'Meito', 'Meito in TV & Audio list', '0', '2023-03-29 10:18:29', '2023-03-29 10:18:29');

-- --------------------------------------------------------

--
-- Table structure for table `currency`
--

CREATE TABLE `currency` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `symbol` varchar(100) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `currency`
--

INSERT INTO `currency` (`id`, `name`, `symbol`, `created_date`) VALUES
(1, 'INR', 'RS.', '2023-03-19 08:11:55');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `slug` varchar(200) NOT NULL,
  `parent_id` varchar(100) NOT NULL,
  `image_url` varchar(100) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `title`, `description`, `slug`, `parent_id`, `image_url`, `created_date`, `updated_date`) VALUES
(2, 'lmn', 'gfdfghjiuytrfghytrdf', 'mnbv', '8', 'cvb', '2023-03-01 09:22:11', '2023-03-01 09:22:11'),
(3, 'hii', 'Parineeti is very preety girl', 'hdudgcvxb n', '6', 'dfghj', '2023-03-17 08:11:08', '2023-03-17 08:11:08');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(10000) NOT NULL,
  `image_url` varchar(100) NOT NULL,
  `sku` varchar(2000) NOT NULL,
  `quantity` varchar(200) NOT NULL,
  `price` varchar(100) NOT NULL,
  `discount_price` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL,
  `currency_id` int(11) NOT NULL DEFAULT 1,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `image_url`, `sku`, `quantity`, `price`, `discount_price`, `category_id`, `currency_id`, `created_date`, `updated_date`) VALUES
(6, 'First', 'dvfd', '1679218685683_5.jpg', 'cvbn', '123', '34666', '700', 9, 1, '2023-03-19 07:07:37', '2023-03-19 07:07:37'),
(8, 'Today Is A Good Day Framed Poster', '100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.', '1679213694774_1.jpg', 's5632s', '2333344', '23900', '1200', 9, 1, '2023-03-19 08:15:20', '2023-03-19 08:15:20'),
(10, 'Today Is A Good Day Framed Poster 12', ' field in both tables as the relationship between the two tables', '1679217370204_2.jpg', 'ssdf2132', '2343254', '23000', '100', 9, 1, '2023-03-19 09:19:43', '2023-03-19 09:19:43'),
(11, 'Accusantium dolorem1', 'Parineeti is very preety girl', '1679218605838_4.jpg', 'sdcsdfd23232', '8', '789', '100', 9, 1, '2023-03-19 09:37:08', '2023-03-19 09:37:08'),
(13, 'fghj', 'pari is a girl', '1679567763762_6.jpg', 'dcds', '5', '16000', '1200', 9, 1, '2023-03-23 10:36:29', '2023-03-23 10:36:29'),
(14, 'vbn', 'neetti maka', '1679567845121_3.jpg', 'cvbn', '2', '23900', '900', 9, 1, '2023-03-23 10:37:45', '2023-03-23 10:37:45'),
(15, 'best', 'aarti is a girl', '1679567972375_8.jpg', 'xdcdsc', '2', '34666', '666', 13, 1, '2023-03-23 10:39:49', '2023-03-23 10:39:49'),
(16, 'best', 'pari is a girl', '1679568092482_9.jpg', 'dcds', '8', '26892', '892', 13, 1, '2023-03-23 10:42:01', '2023-03-23 10:42:01'),
(17, 'best', 'pari is a girl', '1679568177592_11.jpg', 'xdcdsc', '21', '24656', '656', 13, 1, '2023-03-23 10:43:27', '2023-03-23 10:43:27'),
(18, 'best', 'aarti is a girl', '1679568250687_10.jpg', 'xcdsc', '6', '45222', '222', 13, 1, '2023-03-23 10:44:33', '2023-03-23 10:44:33'),
(19, 'best', 'aarti is a girl', '1679568250687_10.jpg', 'xcdsc', '6', '45222', '222', 13, 1, '2023-03-23 10:44:34', '2023-03-23 10:44:34'),
(20, 'best', 'pari is a girl', '1679568300595_12.jpg', 'dcds', '3', '34666', '666', 13, 1, '2023-03-23 10:45:25', '2023-03-23 10:45:25'),
(21, 'featured', 'aarti is a girl', '1679569290096_3.jpg', 'cvbn', '10', '23155', '155', 14, 1, '2023-03-23 11:02:00', '2023-03-23 11:02:00'),
(22, 'featured', 'neetti maka', '1679569354320_5.jpg', 'cvbn', '2', '23900', '900', 14, 1, '2023-03-23 11:03:01', '2023-03-23 11:03:01'),
(23, 'featured', 'aarti is a girl', '1679569417585_7.jpg', 's5632s', '8', '789', '89', 14, 1, '2023-03-23 11:03:57', '2023-03-23 11:03:57'),
(24, 'featured', 'hbdcywgdchb', '1679569471288_9.jpg', 'xcdsc', '7', '34666', '666', 14, 1, '2023-03-23 11:04:57', '2023-03-23 11:04:57'),
(25, 'featured', 'pari is a girl', '1679569530667_11.jpg', 'dcds', '12', '23900', '900', 14, 1, '2023-03-23 11:05:54', '2023-03-23 11:05:54'),
(26, 'featured', 'neetti maka', '1679569611632_12.jpg', 'dcds', '23', '65000', '2000', 14, 1, '2023-03-23 11:07:10', '2023-03-23 11:07:10'),
(27, 'computers', 'pari is a girl', '1679571425709_1.jpg', 'dcds', '11', '55445', '445', 12, 1, '2023-03-23 11:37:54', '2023-03-23 11:37:54'),
(28, 'laptops', 'aarti is a girl', '1679571634361_2.jpg', 'cvbn', '2', '23000', '200', 12, 1, '2023-03-23 11:41:02', '2023-03-23 11:41:02'),
(29, 'computers', 'prempal ', '1679571826692_3.jpg', 'xdcdsc', '9', '8999', '999', 12, 1, '2023-03-23 11:44:13', '2023-03-23 11:44:13'),
(30, 'computer', 'Parineeti is very preety girl', '1679571902174_4.jpg', 'xcdsc', '1', '59235', '235', 12, 1, '2023-03-23 11:45:38', '2023-03-23 11:45:38'),
(31, 'laptops', 'neetti maka', '1679572090253_5.jpg', 's5632s', '3', '7895', '95', 12, 1, '2023-03-23 11:47:14', '2023-03-23 11:47:14'),
(32, 'computers', 'pari is a girl', '1679572158798_8.jpg', 'xcdsc', '6', '23452', '452', 12, 1, '2023-03-23 11:50:04', '2023-03-23 11:50:04'),
(33, 'tv', 'aarti is a girl', '1679573526676_3.jpg', 'dcds', '3', '5923', '923', 15, 1, '2023-03-23 12:12:36', '2023-03-23 12:12:36'),
(34, 'tv', 'neetti maka', '1679575174079_5.jpg', 'xcdsc', '2', '7895', '95', 15, 1, '2023-03-23 12:39:47', '2023-03-23 12:39:47'),
(35, 'audio', 'neetti maka', '1679575231011_7.jpg', 'xdcdsc', '3', '789', '89', 15, 1, '2023-03-23 12:40:55', '2023-03-23 12:40:55'),
(36, 'tv', 'Parineeti is very preety girl', '1679575512755_9.jpg', 'xcdsc', '5', '34666', '666', 15, 1, '2023-03-23 12:42:04', '2023-03-23 12:42:04'),
(37, 'tv', 'aarti is a girl', '1679575429138_11.jpg', 's5632s', '6', '23900', '900', 15, 1, '2023-03-23 12:43:59', '2023-03-23 12:43:59'),
(38, 'tdgbn', 'prempal ', '1679575559676_1.jpg', 'xdcdsc', '5', '55445', '445', 15, 1, '2023-03-23 12:46:36', '2023-03-23 12:46:36'),
(39, 'trendding', 'pari is a girl', '1679576423122_2.jpg', 'xcdsc', '6', '23000', '100', 16, 1, '2023-03-23 13:00:39', '2023-03-23 13:00:39'),
(40, 'trendding', 'Parineeti is very preety girl', '1679576482377_4.jpg', 'xcdsc', '5', '59235', '235', 16, 1, '2023-03-23 13:01:31', '2023-03-23 13:01:31'),
(41, 'trendding', 'prempal ', '1679576572403_6.jpg', 's5632s', '2', '16000', '200', 16, 1, '2023-03-23 13:03:03', '2023-03-23 13:03:03'),
(42, 'trendding', 'hbdcywgdchb', '1679576619922_8.jpg', 'cvbn', '1', '23452', '452', 16, 1, '2023-03-23 13:04:05', '2023-03-23 13:04:05'),
(43, 'trendding', 'Parineeti is very preety girl', '1679826486771_7.jpg', '', '', '45222', '', 16, 1, '2023-03-23 13:05:18', '2023-03-23 13:05:18'),
(44, 'trendding', 'neetti maka', '1679576762850_12.jpg', 'cvbn', '5', '34666', '666', 16, 1, '2023-03-23 13:06:19', '2023-03-23 13:06:19'),
(45, 'best', 'pari is a girl', '1679576841550_11.jpg', 'xdcdsc', '2', '24656', '656', 17, 1, '2023-03-23 13:07:49', '2023-03-23 13:07:49'),
(46, 'best', 'pari is a girl', '1679576966351_7.jpg', 'dcds', '3', '789', '89', 17, 1, '2023-03-23 13:09:36', '2023-03-23 13:09:36'),
(47, 'best', 'hbdcywgdchb', '1679826585684_6.jpg', '', '', '34666', '', 17, 1, '2023-03-23 13:10:24', '2023-03-23 13:10:24'),
(48, 'best', 'Parineeti is very preety girl', '1679577082831_5.jpg', 's5632s', '1', '7895', '95', 17, 1, '2023-03-23 13:11:35', '2023-03-23 13:11:35'),
(49, 'best', 'prempal ', '1679577139660_7.jpg', 'ssdf2132', '7', '789', '89', 17, 1, '2023-03-23 13:12:29', '2023-03-23 13:12:29'),
(50, 'best', 'neetti maka', '1679577196713_11.jpg', 's5632s', '8', '23900', '900', 17, 1, '2023-03-23 13:13:27', '2023-03-23 13:13:27'),
(51, 'prime video', 'Parineeti is very preety girl', '1680085452271_1.jpg', 'dcds', '6', '34666', '666', 18, 1, '2023-03-29 10:24:41', '2023-03-29 10:24:41'),
(52, 'videos', 'prempal ', '1680085577862_2.jpg', 'xcdsc', '5', '7895', '95', 18, 1, '2023-03-29 10:26:47', '2023-03-29 10:26:47'),
(53, 'Prime V', 'pari is a girl', '1680085622909_3.jpg', 's5632s', '8', '8659', '59', 18, 1, '2023-03-29 10:27:50', '2023-03-29 10:27:50'),
(54, 'PVideo', 'pari is a girl', '1680085689696_4.jpg', 'cvbn', '3', '34666', '666', 18, 1, '2023-03-29 10:29:09', '2023-03-29 10:29:09'),
(55, 'laptop prime videos', 'hbdcywgdchb', '1680085765093_5.jpg', 'xdcdsc', '9', '16000', '450', 18, 1, '2023-03-29 10:30:23', '2023-03-29 10:30:23'),
(56, 'priime videos', 'hbdcywgdchb', '1680085875956_6.jpg', 'ssdf2132', '3', '7895', '95', 18, 1, '2023-03-29 10:31:33', '2023-03-29 10:31:33'),
(57, 'video prime ', 'neetti maka', '1680085903856_7.jpg', 'xcdsc', 'undefined', '789', '89', 18, 1, '2023-03-29 10:32:22', '2023-03-29 10:32:22'),
(58, 'videoprime ', 'Parineeti is very preety girl', '1680085976955_8.jpg', 'cvbn', '8', '8956', '56', 18, 1, '2023-03-29 10:33:26', '2023-03-29 10:33:26'),
(59, 'laptopprime', 'hbdcywgdchb', '1680086053022_9.jpg', 'xcdsc', '3', '34666', '666', 18, 1, '2023-03-29 10:35:30', '2023-03-29 10:35:30'),
(60, 'computers', 'aarti is a girl', '1680086293059_1.jpg', 'cvbn', '9', '65565', '565', 19, 1, '2023-03-29 10:38:56', '2023-03-29 10:38:56'),
(61, 'comp', 'neetti maka', '1680086404968_2.jpg', 's5632s', '5', '7895', '95', 19, 1, '2023-03-29 10:40:21', '2023-03-29 10:40:21'),
(62, 'computer laptop', 'hbdcywgdchb', '1680086473174_3.jpg', 'xdcdsc', '2', '16000', '89', 19, 1, '2023-03-29 10:41:31', '2023-03-29 10:41:31'),
(63, 'laptop computer', 'Parineeti is very preety girl', '1680086563363_4.jpg', 's5632s', '7', '34666', '666', 19, 1, '2023-03-29 10:43:11', '2023-03-29 10:43:11'),
(64, 'laptop comp', 'neetti maka', '1680086707765_5.jpg', 'xdcdsc', '2', '7895', '95', 19, 1, '2023-03-29 10:45:31', '2023-03-29 10:45:31'),
(65, 'cmplaptop', 'hbdcywgdchb', '1680086804288_6.jpg', 'ssdf2132', '3', '16000', '200', 19, 1, '2023-03-29 10:47:38', '2023-03-29 10:47:38'),
(66, 'comlaptop', 'neetti maka', '1680086902528_7.jpg', 's5632s', '5', '789', '89', 19, 1, '2023-03-29 10:48:40', '2023-03-29 10:48:40'),
(67, 'lapcomputers', 'hbdcywgdchb', '1680086969238_8.jpg', 'xdcdsc', '6', '17000', '200', 19, 1, '2023-03-29 10:49:58', '2023-03-29 10:49:58'),
(68, 'laptopcomputers', 'Parineeti is very preety girl', '1680087315765_9.jpg', 'ssdf2132', '6', '34666', '666', 19, 1, '2023-03-29 10:55:34', '2023-03-29 10:55:34'),
(69, 'electronics', 'hbdcywgdchb', '1680087392833_1.jpg', 'xcdsc', '6', '37895', '895', 20, 1, '2023-03-29 10:57:16', '2023-03-29 10:57:16'),
(70, 'electronicslap', 'pari is a girl', '1680087543942_2.jpg', 's5632s', '5', '16000', '100', 20, 1, '2023-03-29 10:59:53', '2023-03-29 10:59:53'),
(71, 'laptop elecronic', 'neetti maka', '1680087704383_3.jpg', 'cvbn', '8', '7895', '95', 20, 1, '2023-03-29 11:02:00', '2023-03-29 11:02:00'),
(72, 'elecr laptop', 'hbdcywgdchb', '1680087793793_4.jpg', 'ssdf2132', '3', '34666', '666', 20, 1, '2023-03-29 11:03:29', '2023-03-29 11:03:29'),
(73, 'laptopele', 'prempal ', '1680087861046_5.jpg', 'cvbn', '5', '16000', '200', 20, 1, '2023-03-29 11:05:41', '2023-03-29 11:05:41'),
(74, 'electronics lap', 'prempal ', '1680088071069_6.jpg', 'xdcdsc', '5', '16000', '300', 20, 1, '2023-03-29 11:08:12', '2023-03-29 11:08:12'),
(75, 'elec laptop', 'hbdcywgdchb', '1680088201426_7.jpg', 's5632s', '8', '789', '89', 20, 1, '2023-03-29 11:10:13', '2023-03-29 11:10:13'),
(76, 'laptop elel', 'Parineeti is very preety girl', '1680088278519_8.jpg', 'xdcdsc', '2', '23900', '900', 20, 1, '2023-03-29 11:14:13', '2023-03-29 11:14:13'),
(77, 'lap electronic', 'neetti maka', '1680088546019_9.jpg', 'xcdsc', '6', '23000', '100', 20, 1, '2023-03-29 11:16:09', '2023-03-29 11:16:09'),
(78, 'chamcham', 'Parineeti is very preety girl', '1680088650707_11.jpg', 'xcdsc', '2', '23900', '500', 21, 1, '2023-03-29 11:18:28', '2023-03-29 11:18:28'),
(79, 'laptop cham', 'hbdcywgdchb', '1680088803401_12.jpg', 'cvbn', '2', '23000', '100', 21, 1, '2023-03-29 11:20:23', '2023-03-29 11:20:23'),
(80, 'chamcham laptop', 'Parineeti is very preety girl', '1680088890218_10.jpg', 'ssdf2132', '3', '34666', '666', 21, 1, '2023-03-29 11:22:40', '2023-03-29 11:22:40'),
(81, 'laptopcham', 'neetti maka', '1680089019515_7.jpg', 'xdcdsc', '8', '789', '89', 21, 1, '2023-03-29 11:23:56', '2023-03-29 11:23:56'),
(82, 'chamlaptop', 'neetti maka', '1680089101471_4.jpg', 'xdcdsc', '23', '34666', '666', 21, 1, '2023-03-29 11:25:21', '2023-03-29 11:25:21'),
(83, 'chamchamlap', 'pari is a girl', '1680089218258_1.jpg', 's5632s', '8', '45896', '896', 21, 1, '2023-03-29 11:27:16', '2023-03-29 11:27:16'),
(84, 'laptopchamcham', 'pari is a girl', '1680089324292_3.jpg', 'ssdf2132', '88', '7895', '95', 21, 1, '2023-03-29 11:29:04', '2023-03-29 11:29:04'),
(85, 'laptopcham', 'Parineeti is very preety girl', '1680089416081_6.jpg', 's5632s', '2', '16000', '200', 21, 1, '2023-03-29 11:30:39', '2023-03-29 11:30:39'),
(86, 'laptopchamchamh n', 'neetti maka', '1680089528090_2.jpg', 'ssdf2132', '6', '23900', '900', 21, 1, '2023-03-29 11:32:26', '2023-03-29 11:32:26'),
(87, 'sanai', 'Parineeti is very preety girl', '1680089812943_1.jpg', 'dcds', '3', '34666', '666', 22, 1, '2023-03-29 11:37:29', '2023-03-29 11:37:29'),
(88, 'sanai laptop', 'hbdcywgdchb', '1680089933116_2.jpg', 'dcds', '6', '16000', '100', 22, 1, '2023-03-29 11:39:29', '2023-03-29 11:39:29'),
(89, 'laptop tv', 'neetti maka', '1680090028612_3.jpg', 'cvbn', '8', '16000', '100', 22, 1, '2023-03-29 11:41:01', '2023-03-29 11:41:01'),
(90, 'tv & Audio', 'pari is a girl', '1680090091737_4.jpg', 'dcds', '23', '45895', '895', 22, 1, '2023-03-29 11:42:52', '2023-03-29 11:42:52'),
(91, 'sanai tv & audio', 'aarti is a girl', '1680090233999_5.jpg', 'ssdf2132', '6', '19000', '200', 22, 1, '2023-03-29 11:44:15', '2023-03-29 11:44:15'),
(92, 'sania audio', 'neetti maka', '1680090302114_7.jpg', 'xcdsc', '3', '789', '89', 22, 1, '2023-03-29 11:45:17', '2023-03-29 11:45:17'),
(93, 'audio sanai', 'prempal ', '1680090356612_8.jpg', 'ssdf2132', '5', '56200', '200', 22, 1, '2023-03-29 11:47:04', '2023-03-29 11:47:04'),
(94, 'tv & Audio Sanai', 'hbdcywgdchb', '1680090497006_5.jpg', 'dcds', '23', '15000', '300', 22, 1, '2023-03-29 11:48:36', '2023-03-29 11:48:36'),
(95, 'sanai tv & audio', 'neetti maka', '1680090557635_11.jpg', 'xdcdsc', '16', '25455', '455', 22, 1, '2023-03-29 11:49:53', '2023-03-29 11:49:53'),
(96, 'meito', 'aarti is a girl', '1680090693783_1.jpg', 'xdcdsc', '6', '34666', '666', 23, 1, '2023-03-29 11:52:23', '2023-03-29 11:52:23'),
(97, 'tv meito', 'Parineeti is very preety girl', '1680090786171_2.jpg', 'ssdf2132', '3', '16000', '100', 23, 1, '2023-03-29 11:53:40', '2023-03-29 11:53:40'),
(98, ' meito audio', 'neetti maka', '1680090895030_3.jpg', 'cvbn', '8', '16600', '600', 23, 1, '2023-03-29 11:55:10', '2023-03-29 11:55:10'),
(99, 'tv sanai & Audio', 'hbdcywgdchb', '1680090947466_4.jpg', 's5632s', '5', '46562', '562', 23, 1, '2023-03-29 11:56:22', '2023-03-29 11:56:22'),
(100, 'meito tv ', 'neetti maka', '1680091036840_5.jpg', 'cvbn', '2', '19000', '95', 23, 1, '2023-03-29 11:57:45', '2023-03-29 11:57:45'),
(101, 'audio meito', 'pari is a girl', '1680091104587_6.jpg', 'dcds', '6', '16000', '100', 23, 1, '2023-03-29 11:59:13', '2023-03-29 11:59:13'),
(102, 'aeito audio & Tv', 'pari is a girl', '1680091204579_7.jpg', 'xcdsc', '8', '789', '89', 23, 1, '2023-03-29 12:00:20', '2023-03-29 12:00:20'),
(103, 'tv meito audio', 'hbdcywgdchb', '1680091265268_8.jpg', 'xdcdsc', '2', '34666', '666', 23, 1, '2023-03-29 12:01:21', '2023-03-29 12:01:21'),
(104, 'vnmnbvbn', 'Parineeti is very preety girl', '1680091309203_9.jpg', 'xdcdsc', '3', '39123', '123', 23, 1, '2023-03-29 12:02:08', '2023-03-29 12:02:08');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) NOT NULL,
  `rolename` varchar(50) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `city` varchar(100) NOT NULL,
  `zip` varchar(10) NOT NULL,
  `role_id` varchar(10) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `username`, `password`, `address`, `city`, `zip`, `role_id`, `created_date`, `updated_date`) VALUES
(1, 'Aarti', 'aarti@gmail.com', '9874563214', 'aarti0402', '123654', 'Wave city', 'Ghaziabad', '201002', '1', '2023-02-15 16:35:31', '2023-02-15 16:35:31'),
(4, 'Prempal', 'prem@gmail.com', '7896541345', 'pari2020', '789654', 'wave city', '', '', '1', '2023-02-28 18:16:28', '2023-02-28 18:16:28'),
(5, 'Prempal Singh', 'test@gmail.com', 'sadew', 'sdwed', 'dwe', 'dwe', 'sdfew', 'sdw', '1', '2023-03-01 19:01:17', '2023-03-01 19:01:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `currency`
--
ALTER TABLE `currency`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `currency`
--
ALTER TABLE `currency`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
