-- MySQL dump 10.17  Distrib 10.3.17-MariaDB, for Linux (x86_64)
--
-- Host: plus-market-db.cuypzfyecqxg.ap-northeast-2.rds.amazonaws.com    Database: capdi
-- ------------------------------------------------------
-- Server version	5.7.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attendance` (
  `att_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_idx` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `title` varchar(8) NOT NULL DEFAULT '체크완료!',
  PRIMARY KEY (`att_id`),
  KEY `capdi_users_attendance_user_idx` (`user_idx`),
  CONSTRAINT `capdi_users_attendance_user_idx` FOREIGN KEY (`user_idx`) REFERENCES `capdi_users` (`user_idx`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `board` (
  `board_id` int(11) NOT NULL AUTO_INCREMENT,
  `board_name` varchar(10) NOT NULL,
  PRIMARY KEY (`board_id`),
  UNIQUE KEY `board_name` (`board_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,'board');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `capdi_users`
--

DROP TABLE IF EXISTS `capdi_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `capdi_users` (
  `user_idx` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(64) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rating` varchar(5) DEFAULT '일반회원',
  `point` int(11) DEFAULT '0',
  PRIMARY KEY (`user_idx`),
  UNIQUE KEY `userid` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `capdi_users`
--

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `ca_id` int(11) NOT NULL AUTO_INCREMENT,
  `ca_name` varchar(10) NOT NULL,
  PRIMARY KEY (`ca_id`),
  UNIQUE KEY `ca_name` (`ca_name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (4,'cartoon'),(3,'food'),(1,'free'),(5,'music'),(6,'notice'),(2,'tour');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_detail`
--

DROP TABLE IF EXISTS `category_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_detail` (
  `ca_id` int(11) DEFAULT NULL,
  `ca_name` varchar(10) DEFAULT NULL,
  `ca_detail` varchar(100) DEFAULT NULL,
  KEY `category_category_detail_ca_id` (`ca_id`),
  CONSTRAINT `category_category_detail_ca_id` FOREIGN KEY (`ca_id`) REFERENCES `category` (`ca_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_detail`
--

LOCK TABLES `category_detail` WRITE;
/*!40000 ALTER TABLE `category_detail` DISABLE KEYS */;
INSERT INTO `category_detail` VALUES (1,'자유','자유게시판 설명'),(2,'여행','여행 게시판 설명'),(3,'음식','음식 게시판 설명'),(4,'만화','만화 게시판 설명'),(5,'음악','음악 게시판 설명');
/*!40000 ALTER TABLE `category_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `cm_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `user_idx` int(11) NOT NULL,
  `contents` varchar(500) NOT NULL,
  `write_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`cm_id`),
  KEY `capdi_users_comment_user_idx_cascade` (`user_idx`),
  KEY `post_comment_post_id_cascade` (`post_id`),
  CONSTRAINT `capdi_users_comment_user_idx_cascade` FOREIGN KEY (`user_idx`) REFERENCES `capdi_users` (`user_idx`) ON DELETE CASCADE,
  CONSTRAINT `post_comment_post_id_cascade` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

--
-- Table structure for table `comment_like`
--

DROP TABLE IF EXISTS `comment_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment_like` (
  `cm_id` int(11) NOT NULL,
  `user_idx` int(11) NOT NULL,
  `cm_like` tinyint(1) NOT NULL,
  UNIQUE KEY `uk_like` (`cm_id`,`user_idx`),
  KEY `user_idx` (`user_idx`),
  CONSTRAINT `capdi_users_comment_like_user_idx_cascade` FOREIGN KEY (`user_idx`) REFERENCES `capdi_users` (`user_idx`) ON DELETE CASCADE,
  CONSTRAINT `comment_comment_like_cm_id_cascade` FOREIGN KEY (`cm_id`) REFERENCES `comment` (`cm_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_like`
--

--
-- Table structure for table `deep`
--

DROP TABLE IF EXISTS `deep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deep` (
  `deep_id` int(11) NOT NULL,
  `cm_id` int(11) NOT NULL,
  KEY `comment_deep_cm_id_cascade` (`cm_id`),
  KEY `comment_deep_deep_id_cascade` (`deep_id`),
  CONSTRAINT `comment_deep_cm_id_cascade` FOREIGN KEY (`cm_id`) REFERENCES `comment` (`cm_id`) ON DELETE CASCADE,
  CONSTRAINT `comment_deep_deep_id_cascade` FOREIGN KEY (`deep_id`) REFERENCES `comment` (`cm_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deep`
--

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `board_id` int(11) NOT NULL,
  `ca_id` int(11) NOT NULL,
  `user_idx` int(11) NOT NULL,
  `contents` varchar(1000) NOT NULL,
  `title` varchar(25) NOT NULL,
  `write_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `hit` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `board_post_board_id` (`board_id`),
  KEY `category_post_ca_id` (`ca_id`),
  KEY `capdi_users_post_user_idx` (`user_idx`),
  CONSTRAINT `board_post_board_id` FOREIGN KEY (`board_id`) REFERENCES `board` (`board_id`) ON DELETE CASCADE,
  CONSTRAINT `capdi_users_post_user_idx` FOREIGN KEY (`user_idx`) REFERENCES `capdi_users` (`user_idx`) ON DELETE CASCADE,
  CONSTRAINT `category_post_ca_id` FOREIGN KEY (`ca_id`) REFERENCES `category` (`ca_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

--
-- Table structure for table `post_file`
--

DROP TABLE IF EXISTS `post_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_file` (
  `pf_id` int(11) NOT NULL AUTO_INCREMENT,
  `ori_filename` varchar(30) NOT NULL,
  `server_filename` varchar(50) NOT NULL,
  `size` int(11) NOT NULL,
  `type` varchar(15) DEFAULT NULL,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`pf_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_file`
--

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-05  1:28:04
