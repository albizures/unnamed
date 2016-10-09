-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 09-10-2016 a las 14:23:35
-- Versión del servidor: 5.7.13-0ubuntu0.16.04.2
-- Versión de PHP: 7.0.8-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `unnamed`
--
CREATE DATABASE IF NOT EXISTS `unnamed` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `unnamed`;

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_del_sys_option` (IN `pid` INT)  MODIFIES SQL DATA
    DETERMINISTIC
BEGIN
DELETE FROM `sys_option` WHERE id_option = pid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_del_sys_org` (IN `pid` INT)  MODIFIES SQL DATA
    DETERMINISTIC
BEGIN
DELETE FROM `sys_org` WHERE id_org = pid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_del_sys_role` (IN `pid` INT)  MODIFIES SQL DATA
    DETERMINISTIC
BEGIN
	DELETE FROM `sys_role` WHERE id_role = pid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_del_sys_role_option` (IN `pid_role` INT, IN `pid_option` INT)  MODIFIES SQL DATA
    DETERMINISTIC
BEGIN
DELETE FROM `sys_role_option` 
WHERE id_role = pid_role AND id_option = pid_option;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_del_sys_state` (IN `pid` INT)  MODIFIES SQL DATA
    DETERMINISTIC
DELETE FROM `sys_state` WHERE id_state_db = pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_del_sys_type` (IN `pid` INT)  MODIFIES SQL DATA
    DETERMINISTIC
DELETE FROM `sys_type` WHERE id_type_db = pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_del_sys_user` (IN `pid` INT)  MODIFIES SQL DATA
    DETERMINISTIC
begin
    DELETE FROM `sys_user`
	   where id = pid;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ins_sys_role_option` (IN `pid_role` INT, IN `pid_option` INT)  NO SQL
INSERT INTO `sys_role_option`(`id_role`, `id_option`)  
VALUES (pid_role, pid_option)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_option` ()  NO SQL
SELECT a.id_option, a.name,a.title,a.order, a.description, b.id_state, c.id_type, c.name as type_name, b.name as state_name  
FROM `sys_option` a
JOIN sys_state b ON a.id_state = b.id_state_db
JOIN sys_type c ON c.id_type_db = a.id_type$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_option_id` (IN `pid` INT)  NO SQL
SELECT a.id_option, a.name, a.order, a.title, a.description, b.id_state, c.id_type
FROM `sys_option` a
JOIN sys_state b ON a.id_state = b.id_state_db
JOIN sys_type c ON c.id_type_db = a.id_type
WHERE a.id_option = pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_org` ()  NO SQL
SELECT a.id_org, a.name, a.description, b.id_state, c.id_type, c.name as type_name, b.name as state_name  FROM `sys_org` a
JOIN sys_state b ON a.id_state = b.id_state_db
JOIN sys_type c ON c.id_type_db = a.id_type$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_org_id` (`pid` INT)  NO SQL
SELECT a.id_org, a.name, a.description, b.id_state, c.id_type  FROM `sys_org` a
JOIN sys_state b ON a.id_state = b.id_state_db
JOIN sys_type c ON c.id_type_db = a.id_type
WHERE a.id_org = pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_role` ()  NO SQL
SELECT id_role, name, description FROM `sys_role`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_role_id` (IN `pid` INT)  MODIFIES SQL DATA
    DETERMINISTIC
BEGIN
    SELECT id_role, name, description FROM `sys_role`
    WHERE id_role = pid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_role_option` (IN `pid_role` INT)  NO SQL
BEGIN
DECLARE v_state_active INT;
SET v_state_active = fn_get_id_state_db(1, 'sys_option');
SELECT o.id_option, o.name, o.description, t.name as type_name, o.title, r.id_role
FROM sys_option o
LEFT JOIN sys_role_option r ON r.id_role = pid_role AND r.id_option = o.id_option
JOIN sys_type t ON o.id_type = t.id_type_db
WHERE o.id_state = v_state_active;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_state` ()  NO SQL
SELECT id_state_db, id_state, name, description, table_name FROM `sys_state`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_state_id` (IN `pid` INT)  MODIFIES SQL DATA
    DETERMINISTIC
SELECT id_state_db, id_state, name, description, table_name 
FROM `sys_state`
WHERE id_state_db = pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_state_table` (`ptable` VARCHAR(30))  NO SQL
SELECT id_state, name, description
FROM `sys_state`
WHERE table_name = ptable
ORDER BY name$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_type` ()  NO SQL
SELECT id_type_db, id_type, name, description, table_name FROM `sys_type`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_type_id` (IN `pid` INT)  MODIFIES SQL DATA
    DETERMINISTIC
SELECT id_type_db, id_type, name, description, table_name 
FROM `sys_type`
WHERE id_type_db = pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_type_table` (`ptable` VARCHAR(30))  NO SQL
SELECT id_type, name, description
FROM `sys_type`
WHERE table_name = ptable
ORDER BY name$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_user` ()  NO SQL
SELECT a.id_user, a.first_name, a.last_name ,a.email, b.id_state, c.id_role, c.name as role_name, b.name as state_name, d.id_org, d.name as org_name
FROM `sys_user` a
JOIN sys_state b ON b.id_state_db = a.id_state
JOIN sys_role c ON c.id_role = a.id_role
JOIN sys_org d ON d.id_org = a.id_org$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_user_email_password` (IN `pemail` VARCHAR(50))  NO SQL
SELECT a.id_user, a.email, a.pass
FROM `sys_user` a
WHERE a.email = pemail$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_user_id` (IN `pid` INT)  NO SQL
SELECT a.id_user, a.first_name, a.last_name, a.email, b.id_state, b.name as state_name, c.id_org, c.name as org_name, d.id_role, d.name as role_name
FROM `sys_user` a
JOIN sys_state b ON a.id_state = b.id_state_db
JOIN sys_org c ON c.id_org = a.id_org
JOIN sys_role d ON d.id_role = a.id_role
WHERE a.id_user = pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sel_sys_user_option` (IN `pid_user` INT)  NO SQL
BEGIN
DECLARE v_state_active INT;
SET v_state_active = fn_get_id_state_db(1, 'sys_option');

SELECT o.id_option, o.name, o.title, t.name as type_name, t.id_type
FROM sys_role_option AS ro
JOIN sys_option AS o ON ro.id_option = o.id_option AND o.id_state = v_state_active
JOIN sys_type AS t ON o.id_type = t.id_type_db
WHERE ro.id_role = (SELECT id_role FROM sys_user WHERE id_user = pid_user);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_upd_sys_option` (IN `pid` INT, IN `pname` VARCHAR(30), IN `ptitle` VARCHAR(30), IN `pdescription` VARCHAR(300), `porder` INT, `pid_state` INT, `pid_type` INT)  NO SQL
UPDATE `sys_option`
set 
name = pname,
description = pdescription,
title = ptitle,
`order` = porder,
id_type = fn_get_id_type_db(pid_type, 'sys_option'),
id_state = fn_get_id_state_db(pid_state, 'sys_option')
where id_option = pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_upd_sys_org` (IN `pid_org` INT, IN `pname` VARCHAR(30), IN `pdescription` VARCHAR(300), `pid_state` INT, `pid_type` INT)  NO SQL
UPDATE `sys_org`
set 
name = pname,
description = pdescription,
id_type = fn_get_id_type_db(pid_type, 'sys_org'),
id_state = fn_get_id_state_db(pid_state, 'sys_org')
where id_org = pid_org$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_upd_sys_role` (IN `pid_role` INT, IN `pname` VARCHAR(30), IN `pdescription` VARCHAR(300))  NO SQL
UPDATE `sys_role`
set 
name = pname,
description = pdescription
where id_role = pid_role$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_upd_sys_state` (IN `pid` INT, IN `pname` VARCHAR(30), IN `pdescription` VARCHAR(300), IN `ptable_name` VARCHAR(30))  NO SQL
UPDATE `sys_state`
SET
name = pname,
description = pdescription,
table_name = ptable_name
where id_state_db = pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_upd_sys_type` (IN `pid` INT, IN `pname` VARCHAR(30), IN `pdescription` VARCHAR(300), IN `ptable_name` VARCHAR(30))  NO SQL
UPDATE `sys_type`
SET
name = pname,
description = pdescription,
table_name = ptable_name
where id_type_db = pid$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_upd_sys_user` (IN `pid` INT, IN `pfirst_name` VARCHAR(30), IN `plast_name` VARCHAR(30), IN `pemail` VARCHAR(300), `pid_org` INT, `pid_state` INT, `pid_role` INT)  NO SQL
UPDATE `sys_user`
set 
first_name = pfirst_name,
last_name = plast_name,
email = pemail,
id_org = pid_org,
id_role = pid_role,
id_state = fn_get_id_state_db(pid_state, 'sys_user')
where id_user = pid$$

--
-- Funciones
--
CREATE DEFINER=`root`@`localhost` FUNCTION `fn_get_id_state_db` (`pid` INT, `ptable` VARCHAR(50)) RETURNS INT(11) NO SQL
BEGIN
DECLARE v_id int(11);
SELECT id_state_db INTO v_id
FROM `sys_state` 
WHERE id_state = pid AND table_name = ptable;

return v_id;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fn_get_id_type_db` (`pid` INT, `ptable` VARCHAR(50)) RETURNS INT(11) NO SQL
BEGIN
DECLARE v_id int(11);
SELECT id_type_db INTO v_id
FROM `sys_type` 
WHERE id_type = pid AND table_name = ptable;

return v_id;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fn_get_next_id_state` (`ptable` VARCHAR(50)) RETURNS INT(11) NO SQL
BEGIN
DECLARE v_next_id int(11);
SELECT id_state INTO v_next_id
FROM `sys_state` 
WHERE table_name = ptable
ORDER BY id_state DESC
LIMIT 1;

SELECT CASE 
WHEN v_next_id IS NULL THEN 1
ELSE v_next_id + 1 END
INTO v_next_id;

return v_next_id;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fn_get_next_id_type` (`ptable` VARCHAR(50)) RETURNS INT(11) NO SQL
BEGIN
DECLARE v_next_id int(11);
SELECT id_type INTO v_next_id
FROM `sys_type` 
WHERE table_name = ptable
ORDER BY id_type DESC
LIMIT 1;

SELECT CASE 
WHEN v_next_id IS NULL THEN 1
ELSE v_next_id + 1 END
INTO v_next_id;

return v_next_id;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fn_ins_sys_option` (`pname` VARCHAR(30), `ptitle` VARCHAR(30), `pdescription` VARCHAR(300), `porder` INT, `pid_type` INT, `pid_state` INT) RETURNS INT(11) MODIFIES SQL DATA
    DETERMINISTIC
begin
INSERT INTO `sys_option`(`name`, `title`, `description`, `order`, id_type, id_state)  
VALUES (pname, ptitle, pdescription, porder, fn_get_id_type_db(pid_type, 'sys_option'), fn_get_id_state_db(pid_state, 'sys_option'));
RETURN last_insert_id();
end$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fn_ins_sys_org` (`pname` VARCHAR(30), `pdescription` VARCHAR(300), `pid_type` INT, `pid_state` INT) RETURNS INT(11) MODIFIES SQL DATA
    DETERMINISTIC
begin
INSERT INTO `sys_org`(`name`, `description`, id_type, id_state)  
VALUES (pname, pdescription, fn_get_id_type_db(pid_type, 'sys_org'), fn_get_id_state_db(pid_state, 'sys_org'));
RETURN last_insert_id();
end$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fn_ins_sys_role` (`pname` VARCHAR(30), `pdescription` VARCHAR(300)) RETURNS INT(11) MODIFIES SQL DATA
    DETERMINISTIC
begin
	INSERT INTO `sys_role`( `name`, `description`)  VALUES (pname, pdescription);
	RETURN last_insert_id();
end$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fn_ins_sys_state` (`pname` VARCHAR(30), `pdescription` VARCHAR(30), `ptable_name` VARCHAR(300)) RETURNS INT(11) MODIFIES SQL DATA
    DETERMINISTIC
begin
INSERT INTO `sys_state`(id_state, `name`, description, table_name )  
VALUES (fn_get_next_id_state(ptable_name), pname, pdescription, ptable_name);
return last_insert_id(); 
end$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fn_ins_sys_type` (`pname` VARCHAR(30), `pdescription` VARCHAR(30), `ptable_name` VARCHAR(300)) RETURNS INT(11) MODIFIES SQL DATA
    DETERMINISTIC
begin
INSERT INTO `sys_type`(id_type, `name`, description, table_name )  
VALUES (fn_get_next_id_type(ptable_name), pname, pdescription, ptable_name);
return last_insert_id(); 
end$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fn_ins_sys_user` (`pfirst_name` VARCHAR(50), `plast_name` VARCHAR(50), `pemail` VARCHAR(50), `ppass` VARCHAR(200), `pid_org` INT, `pid_role` INT, `pid_state` INT) RETURNS INT(11) MODIFIES SQL DATA
    DETERMINISTIC
begin
INSERT INTO sys_user(first_name, last_name, email, id_org, pass, id_role, id_state, date_created)
VALUES (pfirst_name, plast_name, pemail, pid_org, ppass, pid_role, fn_get_id_state_db(pid_state, 'sys_user'), now());
return last_insert_id();
end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('HRcFdpa2FUgLlM3GM7z-CxfmtyMYwGMq', 1476119444, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"passport":{"user":2}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sys_option`
--

CREATE TABLE `sys_option` (
  `id_option` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `title` varchar(30) NOT NULL,
  `id_father` int(11) DEFAULT NULL,
  `id_type` int(11) NOT NULL,
  `order` int(11) DEFAULT NULL,
  `id_state` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sys_option`
--

INSERT INTO `sys_option` (`id_option`, `name`, `description`, `title`, `id_father`, `id_type`, `order`, `id_state`) VALUES
(1, 'sys', 'Da acceso a la administracion del sistema', 'Sistema', NULL, 4, 1, 8),
(2, 'odo.patients', 'Lista de pacientes', 'Pacientes', NULL, 4, 1, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sys_org`
--

CREATE TABLE `sys_org` (
  `id_org` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `id_type` int(11) NOT NULL,
  `id_state` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sys_org`
--

INSERT INTO `sys_org` (`id_org`, `name`, `description`, `id_type`, `id_state`) VALUES
(1, 'Odontologia 1 edit', 'Odontologia 1', 3, 6),
(2, 'Administracion', 'Administracion', 6, 6),
(3, 'Clinica San Bartolo', 'Clinica San Bartolo', 3, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sys_role`
--

CREATE TABLE `sys_role` (
  `id_role` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sys_role`
--

INSERT INTO `sys_role` (`id_role`, `name`, `description`) VALUES
(1, 'master', 'mastered'),
(2, 'paciente', 'paciente'),
(3, 'Doctor', 'Doctor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sys_role_option`
--

CREATE TABLE `sys_role_option` (
  `id_role` int(11) NOT NULL,
  `id_option` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sys_role_option`
--

INSERT INTO `sys_role_option` (`id_role`, `id_option`) VALUES
(1, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sys_state`
--

CREATE TABLE `sys_state` (
  `id_state_db` int(11) NOT NULL,
  `id_state` int(11) NOT NULL,
  `table_name` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sys_state`
--

INSERT INTO `sys_state` (`id_state_db`, `id_state`, `table_name`, `name`, `description`) VALUES
(6, 1, 'sys_org', 'Activo', 'Activo'),
(7, 2, 'sys_org', 'Inactivo', 'Inactivo'),
(8, 1, 'sys_option', 'Activo', 'Activo'),
(9, 2, 'sys_option', 'Inactivo', 'Inactivo'),
(10, 1, 'sys_user', 'Activo', 'Activo'),
(11, 2, 'sys_user', 'Inactivo', 'Inactivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sys_type`
--

CREATE TABLE `sys_type` (
  `id_type_db` int(11) NOT NULL,
  `id_type` int(11) NOT NULL,
  `table_name` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sys_type`
--

INSERT INTO `sys_type` (`id_type_db`, `id_type`, `table_name`, `name`, `description`) VALUES
(3, 1, 'sys_org', 'Clinica', 'Clinica'),
(4, 1, 'sys_option', 'Menu', 'Menu'),
(5, 2, 'sys_option', 'Submenu', 'Submenu'),
(6, 2, 'sys_org', 'Interna', 'Interna');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sys_user`
--

CREATE TABLE `sys_user` (
  `id_user` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `pass` varchar(200) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `id_role` int(11) NOT NULL,
  `id_org` int(11) NOT NULL,
  `id_state` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sys_user`
--

INSERT INTO `sys_user` (`id_user`, `first_name`, `last_name`, `pass`, `email`, `date_created`, `id_role`, `id_org`, `id_state`) VALUES
(2, 'Jose', 'Albizures', '$2a$10$rgIqQ45sWULFP8LoyNXSaeeqss5fmVJ2G5x0mJqM092niU.ejK0oK', 'albizures3601@gmail.com', '2016-10-02 18:06:27', 1, 2, 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `sys_option`
--
ALTER TABLE `sys_option`
  ADD PRIMARY KEY (`id_option`),
  ADD KEY `id_state` (`id_state`);

--
-- Indices de la tabla `sys_org`
--
ALTER TABLE `sys_org`
  ADD PRIMARY KEY (`id_org`),
  ADD KEY `id_type` (`id_type`),
  ADD KEY `id_state` (`id_state`);

--
-- Indices de la tabla `sys_role`
--
ALTER TABLE `sys_role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indices de la tabla `sys_role_option`
--
ALTER TABLE `sys_role_option`
  ADD PRIMARY KEY (`id_role`,`id_option`),
  ADD KEY `fk_id_option` (`id_option`);

--
-- Indices de la tabla `sys_state`
--
ALTER TABLE `sys_state`
  ADD PRIMARY KEY (`id_state_db`);

--
-- Indices de la tabla `sys_type`
--
ALTER TABLE `sys_type`
  ADD PRIMARY KEY (`id_type_db`);

--
-- Indices de la tabla `sys_user`
--
ALTER TABLE `sys_user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_role` (`id_role`),
  ADD KEY `id_org` (`id_org`),
  ADD KEY `id_state` (`id_state`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `sys_option`
--
ALTER TABLE `sys_option`
  MODIFY `id_option` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `sys_org`
--
ALTER TABLE `sys_org`
  MODIFY `id_org` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `sys_role`
--
ALTER TABLE `sys_role`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `sys_state`
--
ALTER TABLE `sys_state`
  MODIFY `id_state_db` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `sys_type`
--
ALTER TABLE `sys_type`
  MODIFY `id_type_db` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `sys_user`
--
ALTER TABLE `sys_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `sys_option`
--
ALTER TABLE `sys_option`
  ADD CONSTRAINT `sys_option_ibfk_1` FOREIGN KEY (`id_state`) REFERENCES `sys_state` (`id_state_db`);

--
-- Filtros para la tabla `sys_org`
--
ALTER TABLE `sys_org`
  ADD CONSTRAINT `sys_org_ibfk_1` FOREIGN KEY (`id_type`) REFERENCES `sys_type` (`id_type_db`),
  ADD CONSTRAINT `sys_org_ibfk_2` FOREIGN KEY (`id_state`) REFERENCES `sys_state` (`id_state_db`);

--
-- Filtros para la tabla `sys_role_option`
--
ALTER TABLE `sys_role_option`
  ADD CONSTRAINT `fk_id_option` FOREIGN KEY (`id_option`) REFERENCES `sys_option` (`id_option`),
  ADD CONSTRAINT `fk_id_role` FOREIGN KEY (`id_role`) REFERENCES `sys_role` (`id_role`);

--
-- Filtros para la tabla `sys_user`
--
ALTER TABLE `sys_user`
  ADD CONSTRAINT `sys_user_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `sys_role` (`id_role`),
  ADD CONSTRAINT `sys_user_ibfk_2` FOREIGN KEY (`id_org`) REFERENCES `sys_org` (`id_org`),
  ADD CONSTRAINT `sys_user_ibfk_3` FOREIGN KEY (`id_state`) REFERENCES `sys_state` (`id_state_db`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
