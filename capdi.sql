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
INSERT INTO `capdi_users` VALUES ('','','$2a$10$r5igTy5b//AnIsFIGwRfueu3Dp10XZw4HLpew.HCb81.caVmfuX8K'),('a','a','$2a$10$udD6H/snE7Vw4SZczEwjXe/MUjiB224JN8G/L8dCr07Go.NfTHLwq'),('a1111111111','ㅁ','$2a$10$bGUMU8nLxm4ri49rj6WWh.Qmb1Pp5uLMylAfXOfsXyAkm3yU9j.uy'),('a12345678','ㅁ','$2a$10$DKYipUz71TWYATBEpTpCsuZb1wbIvAaQc.D2rwlCy93Q6IRw1dQA6'),('a222222222','ㅁ','$2a$10$L5r.QzRrxgQ6O0zT11JdKOsBqz16aq.PMQxNVZdy36pcUjs3UKbTC'),('a45678978','ㅁ','$2a$10$rqjU/PVSv1/q80.Qvyz82uDQEvV2ixGDa1xOHE1AYYMwWPao/Uxly'),('a55555555','ㅁ','$2a$10$ZW33M3G8k3SOtHJLwWV/Aeuc9GfIh0JAaMti9YpzQ7o4uQfRBRHxW'),('a7777777','ㅁ','$2a$10$sOxHUTYY25.ZgIaEFV27WOXNObn5sX1tMZbw4DDyddMVBG6e0FvVu'),('a9999999','ㅁ','$2a$10$fb5tRfZEmg/W86Ie3Z6sye0vNmy4uiUtykRfkXAjM4g4T8I0UUos6'),('aa','aa','$2a$10$yN2i6SKaw8sjp4EZHEglHOVh0xYUn0AOtuKEWsgjyA5zlvqOnna7a'),('aaa11','ㅁ','$2a$10$53HhmtH75ky8//9y6YZ.H.2iYCAQaR.47cTvBxEtVmjjKfnKhQERm'),('aaaa','박훈성','$2a$10$BXNhX5ksFYtuYkt7BKZYYueHQw2uPXSk2UaOA1OSbr.nGyuUWziLK'),('aaaaa','','$2a$10$.wHCnFlRLF.M19JKS8EENOpFBNd1CKSAvbMqf7JtUt9jV3pau97fu'),('aaaaa12','ㄱ','$2a$10$LLStEcsqP0pi1n4wvHzFv.oZrPhswnXn90uvHX60TNgaqOSeJRczW'),('aaaaaaa','aaa','$2a$10$z0BL16zcT8d/eOp0BSWx0eFaskoNQX78lv5Oca7QHvQZD/FS9VtIq'),('aaaaaaaa','ㄱ','$2a$10$3xqLYjVDMMqlzoGPYyRie.ORuzK.YgBTThYRkJA4MLssJQajHunbW'),('aaaaaaaaa','','$2a$10$4WHZ2jdjHMw5JeYVHhY.yuMp.SNDDYoIwP23nzAXUcnvgaZVzCPpK'),('aaaaaaaaaa178','ㅁ','$2a$10$ZxtlPuaSQeY4v.5JNoPZB.JgA6HDBhiaGBL4dw4bYVDDNFxSnjFD2'),('alsks','ㅁ','$2a$10$wUEJT8wWi7IqckQbolcATOaWX69D3AL36kWM7C5TL5TgxzBDykIbK'),('apq12','ㅁ','$2a$10$lcc4sOqHmJR/OzD.uf7F5e2pQj4h10Cm8kvfuV9XgEKfa3eIkPsrm'),('asz','as','$2a$10$tl/VlgfJ3n740575m33KE.6dLEqOiVv5dv.5ZYcJlxp9jZRkM1oOK'),('ay','y','$2a$10$2lbgZOywoNjivsZTgS.cLOUsd3Xj4PpCg1DeVsIcI7SAfr5SZJ8US'),('b','a','$2a$10$TP/y0cp.7WDQ9.xF5/NveuHEn06ux0OdecklYTjKHt81bN7siHnXy'),('b1111111','ㅁ','$2a$10$6rvM/kJ/bheW3e1BjfVq2uoRHhf51W8XWiQB3FGb/u0Aru.V02Fle'),('b222222222','ㅁ','$2a$10$XeSBSHIOtxN3KSQkUvX4NOQ7RERlfONbcCUvFGo2AkqzPn.BfiQH.'),('bd987','ㅁ','$2a$10$XrfPxDWrwr9FAUPt2xePle8lBkfz462m7mIiA6A0s.sbuSFRjCC6K'),('c','c','$2a$10$SP8QigiTR5Ka0PERxiEH5.tQPCDGTQXVIAgRK5gN6ThGXmPEhRqbe'),('DIDI451','김찬웅','$2a$10$4gIQDstwZhK0qKkAzDNX7.f5uctdEzKRthhiQBHLpN2Uxn365dgnO'),('didi45112','ㅁ','$2a$10$spREKNw9NFTY1AYn7AE6QuAih5ZT4HbCWLzzg9P9hXKngAdpSOmvS'),('didi45125','김찬웅','$2a$10$z1Rlq4rDZzvZlUPYt4EyhOg9oZ.M9HcQM/imQX1.HHI30fvIi4YCO'),('didi45178','','$2a$10$jng8CPm4noT9ZLhz14CxneAXVjZzuO/7A.8UivBG0l6GQmoaFqKvu'),('didi4517987','ㅁ','$2a$10$8xURzrKgsm/vwhFLKuHyo.Qa30bZ5ziwury665oLgsQHkdYp/APxG'),('q','q','$2a$10$GSA7zft9be./5bvJR7GJJuNZzylrpuX1IkqUNhSk0cwFTbbf5lDCW'),('qw','qw','$2a$10$Zxi6rh3oSPRZmaVJHfK2nO8GLGGFXz6FeQvEVsuU3O8/sGI0maAdK'),('qwert','ㅁ','$2a$10$tAu.99OaO5u030e0if8Boes85n22RgywYF8Et1lbtvFreCX3D9ziq'),('ttttttttt12','ㅁ','$2a$10$3FwRT7A3XHuCidXazTg5v.7156hGXtpzYWMfMADLLy.cOUOIft4Yi'),('ㅁㅁㅁ','aaaaa','$2a$10$fNxGyDviNUfCEHzcr5PfiO2S9iMUuwSkhhfdNh96YaO1oUHS8nKPG'),('효','ㅁ','$2a$10$jvk6YwvK5HxSbJ.C94.gp.1SziLimXpunP0T5kteprXu593fxxpsy');
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
  `name` varchar(5) DEFAULT NULL,
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
  `name` varchar(5) DEFAULT NULL,
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
  `name` varchar(5) DEFAULT NULL,
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

-- Dump completed on 2020-04-07 22:45:50
