DROP TABLE IF EXISTS `comment_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment_like` (
  `cm_id` int(11) NOT NULL,
  `user_idx` int(11) NOT NULL,
  `cm_like` tinyint(1) NOT NULL,
  UNIQUE KEY `uk_like` (`cm_id`,`user_idx`),
  KEY `user_idx` (`user_idx`),
  CONSTRAINT `comment_like_ibfk_1` FOREIGN KEY (`cm_id`) REFERENCES `comment` (`cm_id`),
  CONSTRAINT `comment_like_ibfk_2` FOREIGN KEY (`user_idx`) REFERENCES `capdi_users` (`user_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
