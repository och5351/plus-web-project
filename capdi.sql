-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: capdi
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
  `board_id` varchar(15) NOT NULL,
  `board_name` varchar(10) NOT NULL,
  PRIMARY KEY (`board_id`),
  UNIQUE KEY `board_name` (`board_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES ('1','공지사항'),('2','커뮤니티');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `capdi_users`
--

DROP TABLE IF EXISTS `capdi_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `capdi_users` (
  `userid` varchar(15) NOT NULL,
  `name` varchar(5) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `capdi_users`
--

LOCK TABLES `capdi_users` WRITE;
/*!40000 ALTER TABLE `capdi_users` DISABLE KEYS */;
INSERT INTO `capdi_users` VALUES ('asdfg12','김조옹옹민','$2a$10$Dgli4UdVye4Uzc7IIHf.2.jbWB7BTTA39bh5dN5gGKy3zCMAyDq72'),('asdfg123','김종민','$2a$10$wrPykvOM8e4hq0W6lvS1oupAjJ0kkARwtsrygctncpFpkstEXHmwi'),('Operator','운영자','$2a$10$JZAWEP/914sFhE4Jo1XTRO76Mqr6XiJfsWG6W1MhJFmuOdSZFy47K');
/*!40000 ALTER TABLE `capdi_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `ca_id` varchar(40) NOT NULL,
  `ca_name` varchar(10) NOT NULL,
  PRIMARY KEY (`ca_id`),
  UNIQUE KEY `ca_name` (`ca_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('2','게임'),('5','그림'),('3','모바일'),('6','소설'),('7','여행/사진'),('1','음식'),('4','음악');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `cm_seq` int(11) NOT NULL AUTO_INCREMENT,
  `post_seq` int(11) NOT NULL,
  `deep_id` varchar(10) DEFAULT NULL,
  `userid` varchar(15) DEFAULT NULL,
  `name` varchar(9) DEFAULT NULL,
  `contents` varchar(500) NOT NULL,
  `write_date` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`cm_seq`),
  UNIQUE KEY `deep_id` (`deep_id`),
  KEY `post_seq` (`post_seq`),
  CONSTRAINT `post_seq` FOREIGN KEY (`post_seq`) REFERENCES `post` (`post_seq`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deep`
--

DROP TABLE IF EXISTS `deep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deep` (
  `deep_seq` int(11) NOT NULL AUTO_INCREMENT,
  `cm_seq` int(11) NOT NULL,
  `deep_id` varchar(15) DEFAULT NULL,
  `userid` varchar(15) DEFAULT NULL,
  `name` varchar(9) DEFAULT NULL,
  `contents` varchar(500) NOT NULL,
  `write_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`deep_seq`),
  KEY `cm_seq` (`cm_seq`),
  KEY `deep_id` (`deep_id`),
  CONSTRAINT `cm_seq` FOREIGN KEY (`cm_seq`) REFERENCES `comment` (`cm_seq`) ON DELETE CASCADE,
  CONSTRAINT `deep_id` FOREIGN KEY (`deep_id`) REFERENCES `comment` (`deep_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deep`
--

LOCK TABLES `deep` WRITE;
/*!40000 ALTER TABLE `deep` DISABLE KEYS */;
/*!40000 ALTER TABLE `deep` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `post_seq` int(11) NOT NULL AUTO_INCREMENT,
  `board_id` varchar(15) NOT NULL,
  `ca_id` varchar(40) NOT NULL,
  `userid` varchar(15) NOT NULL,
  `name` varchar(9) DEFAULT NULL,
  `contents` varchar(1000) NOT NULL,
  `title` varchar(50) NOT NULL,
  `write_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `hit` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`post_seq`),
  KEY `board_id` (`board_id`),
  KEY `ca_id` (`ca_id`),
  KEY `userid` (`userid`),
  CONSTRAINT `board_id` FOREIGN KEY (`board_id`) REFERENCES `board` (`board_id`) ON UPDATE CASCADE,
  CONSTRAINT `ca_id` FOREIGN KEY (`ca_id`) REFERENCES `category` (`ca_id`) ON UPDATE CASCADE,
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `capdi_users` (`userid`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('2NYhIo3cCBXloLBElPQbi5mgUlO63uIx',1580462653,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-10 17:35:35
