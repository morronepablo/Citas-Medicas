-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-10-2023 a las 08:51:16
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `citas_medicas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor_schedule_hours`
--

CREATE TABLE `doctor_schedule_hours` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hour_start` varchar(50) NOT NULL,
  `hour_end` varchar(50) NOT NULL,
  `hour` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `doctor_schedule_hours`
--

INSERT INTO `doctor_schedule_hours` (`id`, `hour_start`, `hour_end`, `hour`, `created_at`, `updated_at`) VALUES
(1, '08:00:00', '08:15:00', '08', NULL, NULL),
(2, '08:15:00', '08:30:00', '08', NULL, NULL),
(3, '08:30:00', '08:45:00', '08', NULL, NULL),
(4, '08:45:00', '09:00:00', '08', NULL, NULL),
(5, '09:00:00', '09:15:00', '09', NULL, NULL),
(6, '09:15:00', '09:30:00', '09', NULL, NULL),
(7, '09:30:00', '09:45:00', '09', NULL, NULL),
(8, '09:45:00', '10:00:00', '09', NULL, NULL),
(9, '10:00:00', '10:15:00', '10', NULL, NULL),
(10, '10:15:00', '10:30:00', '10', NULL, NULL),
(11, '10:30:00', '10:45:00', '10', NULL, NULL),
(12, '10:45:00', '11:00:00', '10', NULL, NULL),
(13, '11:00:00', '11:15:00', '11', NULL, NULL),
(14, '11:15:00', '11:30:00', '11', NULL, NULL),
(15, '11:30:00', '11:45:00', '11', NULL, NULL),
(16, '11:45:00', '12:00:00', '11', NULL, NULL),
(17, '12:00:00', '12:15:00', '12', NULL, NULL),
(18, '12:15:00', '12:30:00', '12', NULL, NULL),
(19, '12:30:00', '12:45:00', '12', NULL, NULL),
(20, '12:45:00', '13:00:00', '12', NULL, NULL),
(21, '13:00:00', '13:15:00', '13', NULL, NULL),
(22, '13:15:00', '13:30:00', '13', NULL, NULL),
(23, '13:30:00', '13:45:00', '13', NULL, NULL),
(24, '13:45:00', '14:00:00', '13', NULL, NULL),
(25, '14:00:00', '14:15:00', '14', NULL, NULL),
(26, '14:15:00', '14:30:00', '14', NULL, NULL),
(27, '14:30:00', '14:45:00', '14', NULL, NULL),
(28, '14:45:00', '15:00:00', '14', NULL, NULL),
(29, '15:00:00', '15:15:00', '15', NULL, NULL),
(30, '15:15:00', '15:30:00', '15', NULL, NULL),
(31, '15:30:00', '15:45:00', '15', NULL, NULL),
(32, '15:45:00', '16:00:00', '15', NULL, NULL),
(33, '16:00:00', '16:15:00', '16', NULL, NULL),
(34, '16:15:00', '16:30:00', '16', NULL, NULL),
(35, '16:30:00', '16:45:00', '16', NULL, NULL),
(36, '16:45:00', '17:00:00', '16', NULL, NULL),
(37, '17:00:00', '17:15:00', '17', NULL, NULL),
(38, '17:15:00', '17:30:00', '17', NULL, NULL),
(39, '17:30:00', '17:45:00', '17', NULL, NULL),
(40, '17:45:00', '18:00:00', '17', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `doctor_schedule_hours`
--
ALTER TABLE `doctor_schedule_hours`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `doctor_schedule_hours`
--
ALTER TABLE `doctor_schedule_hours`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
