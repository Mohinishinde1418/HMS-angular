-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2023 at 07:41 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hms`
--

-- --------------------------------------------------------

--
-- Table structure for table `master_table`
--

CREATE TABLE `master_table` (
  `pid` int(10) NOT NULL,
  `pname` varchar(200) NOT NULL,
  `page` int(10) NOT NULL,
  `paddress` varchar(200) NOT NULL,
  `pdesic` varchar(200) NOT NULL,
  `mobile` int(30) NOT NULL,
  `altmobile` int(30) NOT NULL,
  `doctor` varchar(200) NOT NULL,
  `medical` int(10) NOT NULL,
  `account` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `master_table`
--

INSERT INTO `master_table` (`pid`, `pname`, `page`, `paddress`, `pdesic`, `mobile`, `altmobile`, `doctor`, `medical`, `account`) VALUES
(4, 'geeta namdev kapale', 20, 'Nashik', 'small accd', 6767676, 45445454, '100 TB acid', 540, 1100),
(6, 'Ramdas', 23, 'Beed', 'headeach', 88888, 99999, 'doctor text', 100, 500),
(8, 'Ramdas', 23, 'Beed', 'headeach', 88888, 99999, 'doctor text', 100, 500),
(9, 'Akita', 112, 'Nashik', 'corona', 1111, 222222, 'Paracetamol', 10, 500),
(14, 'Akita', 112, 'Nashik', 'corona', 1111, 222222, 'Paracetamol', 10, 3333),
(15, 'Akita', 112, 'Nashik', 'corona', 1111, 222222, 'Paracetamol', 10, 500),
(16, 'Akita', 112, 'Nashik', 'corona', 1111, 222222, 'tablet', 60, 500),
(17, 'Sham row', 23, 'Pune', 'headeach ', 3333, 222, 'crosine 20', 1000, 0),
(18, 'Sachil Lande', 30, 'Aurangabad', 'maleriya', 9898989, 787878, 'xyz-tablrt', 2000, 0),
(19, 'Nikhil Kudale', 29, 'Deccon', 'eye-flue', 666666, 55555, 'rrr-200', 567, 1017),
(20, 'ArjunDeep', 99, 'Nanded', 'Pagalpan', 777777, 22222, '20-ttt ,30-t,234-df', 5000, 5550);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `master_table`
--
ALTER TABLE `master_table`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `master_table`
--
ALTER TABLE `master_table`
  MODIFY `pid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
