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
INSERT INTO `capdi_users` VALUES ('','','$2a$10$r5igTy5b//AnIsFIGwRfueu3Dp10XZw4HLpew.HCb81.caVmfuX8K'),('a','a','$2a$10$udD6H/snE7Vw4SZczEwjXe/MUjiB224JN8G/L8dCr07Go.NfTHLwq'),('a1111111111','ㅁ','$2a$10$bGUMU8nLxm4ri49rj6WWh.Qmb1Pp5uLMylAfXOfsXyAkm3yU9j.uy'),('a12345678','ㅁ','$2a$10$DKYipUz71TWYATBEpTpCsuZb1wbIvAaQc.D2rwlCy93Q6IRw1dQA6'),('a222222222','ㅁ','$2a$10$L5r.QzRrxgQ6O0zT11JdKOsBqz16aq.PMQxNVZdy36pcUjs3UKbTC'),('a45678978','ㅁ','$2a$10$rqjU/PVSv1/q80.Qvyz82uDQEvV2ixGDa1xOHE1AYYMwWPao/Uxly'),('a55555555','ㅁ','$2a$10$ZW33M3G8k3SOtHJLwWV/Aeuc9GfIh0JAaMti9YpzQ7o4uQfRBRHxW'),('a7777777','ㅁ','$2a$10$sOxHUTYY25.ZgIaEFV27WOXNObn5sX1tMZbw4DDyddMVBG6e0FvVu'),('a9999999','ㅁ','$2a$10$fb5tRfZEmg/W86Ie3Z6sye0vNmy4uiUtykRfkXAjM4g4T8I0UUos6'),('aa','aa','$2a$10$yN2i6SKaw8sjp4EZHEglHOVh0xYUn0AOtuKEWsgjyA5zlvqOnna7a'),('aaa11','ㅁ','$2a$10$53HhmtH75ky8//9y6YZ.H.2iYCAQaR.47cTvBxEtVmjjKfnKhQERm'),('aaaa','박훈성','$2a$10$BXNhX5ksFYtuYkt7BKZYYueHQw2uPXSk2UaOA1OSbr.nGyuUWziLK'),('aaaaa','','$2a$10$.wHCnFlRLF.M19JKS8EENOpFBNd1CKSAvbMqf7JtUt9jV3pau97fu'),('aaaaa12','ㄱ','$2a$10$LLStEcsqP0pi1n4wvHzFv.oZrPhswnXn90uvHX60TNgaqOSeJRczW'),('aaaaaaa','aaa','$2a$10$z0BL16zcT8d/eOp0BSWx0eFaskoNQX78lv5Oca7QHvQZD/FS9VtIq'),('aaaaaaaa','ㄱ','$2a$10$3xqLYjVDMMqlzoGPYyRie.ORuzK.YgBTThYRkJA4MLssJQajHunbW'),('aaaaaaaaa','','$2a$10$4WHZ2jdjHMw5JeYVHhY.yuMp.SNDDYoIwP23nzAXUcnvgaZVzCPpK'),('alsks','ㅁ','$2a$10$wUEJT8wWi7IqckQbolcATOaWX69D3AL36kWM7C5TL5TgxzBDykIbK'),('apq12','ㅁ','$2a$10$lcc4sOqHmJR/OzD.uf7F5e2pQj4h10Cm8kvfuV9XgEKfa3eIkPsrm'),('asz','as','$2a$10$tl/VlgfJ3n740575m33KE.6dLEqOiVv5dv.5ZYcJlxp9jZRkM1oOK'),('ay','y','$2a$10$2lbgZOywoNjivsZTgS.cLOUsd3Xj4PpCg1DeVsIcI7SAfr5SZJ8US'),('b','a','$2a$10$TP/y0cp.7WDQ9.xF5/NveuHEn06ux0OdecklYTjKHt81bN7siHnXy'),('b1111111','ㅁ','$2a$10$6rvM/kJ/bheW3e1BjfVq2uoRHhf51W8XWiQB3FGb/u0Aru.V02Fle'),('b222222222','ㅁ','$2a$10$XeSBSHIOtxN3KSQkUvX4NOQ7RERlfONbcCUvFGo2AkqzPn.BfiQH.'),('bd987','ㅁ','$2a$10$XrfPxDWrwr9FAUPt2xePle8lBkfz462m7mIiA6A0s.sbuSFRjCC6K'),('c','c','$2a$10$SP8QigiTR5Ka0PERxiEH5.tQPCDGTQXVIAgRK5gN6ThGXmPEhRqbe'),('DIDI451','김찬웅','$2a$10$4gIQDstwZhK0qKkAzDNX7.f5uctdEzKRthhiQBHLpN2Uxn365dgnO'),('didi45112','ㅁ','$2a$10$spREKNw9NFTY1AYn7AE6QuAih5ZT4HbCWLzzg9P9hXKngAdpSOmvS'),('didi45125','김찬웅','$2a$10$z1Rlq4rDZzvZlUPYt4EyhOg9oZ.M9HcQM/imQX1.HHI30fvIi4YCO'),('didi45178','','$2a$10$jng8CPm4noT9ZLhz14CxneAXVjZzuO/7A.8UivBG0l6GQmoaFqKvu'),('didi4517987','ㅁ','$2a$10$8xURzrKgsm/vwhFLKuHyo.Qa30bZ5ziwury665oLgsQHkdYp/APxG'),('q','q','$2a$10$GSA7zft9be./5bvJR7GJJuNZzylrpuX1IkqUNhSk0cwFTbbf5lDCW'),('qw','qw','$2a$10$Zxi6rh3oSPRZmaVJHfK2nO8GLGGFXz6FeQvEVsuU3O8/sGI0maAdK'),('qwert','ㅁ','$2a$10$tAu.99OaO5u030e0if8Boes85n22RgywYF8Et1lbtvFreCX3D9ziq'),('ttttttttt12','ㅁ','$2a$10$3FwRT7A3XHuCidXazTg5v.7156hGXtpzYWMfMADLLy.cOUOIft4Yi'),('ㅁㅁㅁ','aaaaa','$2a$10$fNxGyDviNUfCEHzcr5PfiO2S9iMUuwSkhhfdNh96YaO1oUHS8nKPG'),('효','ㅁ','$2a$10$jvk6YwvK5HxSbJ.C94.gp.1SziLimXpunP0T5kteprXu593fxxpsy');
/*!40000 ALTER TABLE `capdi_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-27 19:49:11
