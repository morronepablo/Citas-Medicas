-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-10-2023 a las 09:26:42
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
-- Estructura de tabla para la tabla `specialities`
--

CREATE TABLE `specialities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `state` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `specialities`
--

INSERT INTO `specialities` (`id`, `name`, `state`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Anestesiologías', 1, '2023-10-04 07:18:43', '2023-10-04 07:22:16', NULL),
(2, 'Anatomía Patológica', 1, '2023-10-04 07:22:58', '2023-10-04 07:22:58', NULL),
(3, 'Cardiología Intervencionista', 1, '2023-10-04 07:23:05', '2023-10-04 07:23:05', NULL),
(4, 'Cirugía Pediátrica', 1, '2023-10-04 07:23:09', '2023-10-04 07:23:09', NULL),
(5, 'Cirugía General', 1, '2023-10-04 07:23:14', '2023-10-04 07:23:14', NULL),
(6, 'Dermatología', 1, '2023-10-04 07:23:21', '2023-10-04 07:23:21', NULL),
(7, 'Gastroenterología', 1, '2023-10-04 07:23:28', '2023-10-04 07:23:28', NULL),
(8, 'Ginegología y Obstetricia', 2, '2023-10-04 07:23:57', '2023-10-04 07:25:14', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `specialities`
--
ALTER TABLE `specialities`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `specialities`
--
ALTER TABLE `specialities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
