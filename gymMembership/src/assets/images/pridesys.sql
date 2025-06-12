-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pridesys
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `member_services`
--

DROP TABLE IF EXISTS `member_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_services` (
  `member_id` bigint NOT NULL,
  `service_type` enum('GROUP_CLASSES','PERSONAL_TRAINER','POOL_ACCESS','SAUNA_ACCESS') DEFAULT NULL,
  KEY `FK716t0v27cviieii00ndr58bnu` (`member_id`),
  CONSTRAINT `FK716t0v27cviieii00ndr58bnu` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_services`
--

LOCK TABLES `member_services` WRITE;
/*!40000 ALTER TABLE `member_services` DISABLE KEYS */;
INSERT INTO `member_services` VALUES (1,'POOL_ACCESS'),(1,'SAUNA_ACCESS'),(1,'GROUP_CLASSES'),(3,'PERSONAL_TRAINER'),(3,'SAUNA_ACCESS'),(4,'PERSONAL_TRAINER'),(4,'GROUP_CLASSES'),(5,'PERSONAL_TRAINER'),(5,'POOL_ACCESS'),(6,'PERSONAL_TRAINER'),(6,'GROUP_CLASSES'),(7,'PERSONAL_TRAINER'),(7,'GROUP_CLASSES'),(8,'PERSONAL_TRAINER'),(8,'SAUNA_ACCESS'),(9,'SAUNA_ACCESS'),(9,'POOL_ACCESS'),(9,'GROUP_CLASSES');
/*!40000 ALTER TABLE `member_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `dob` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `join_date` date DEFAULT NULL,
  `membership_type` enum('BRONZE','GOLD','PLATINUM','SILVER') DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'1990-05-15','john.doe@example.com','2025-06-10','PLATINUM','Johnathan Doe'),(2,'1997-06-16','mostofa.aminur.rezvi@gmail.com','2025-06-11','GOLD','Rezvi'),(3,'2002-10-17','rblannk@gmail.com','2025-06-11','PLATINUM','R Blannk'),(4,'2025-06-03','okay@gmail.com','2025-06-11','SILVER','CHILD D'),(5,'2010-06-06','demo@gmail.com','2025-06-12','BRONZE','Demo 01'),(6,'2006-06-06','demo1@gmail.com','2025-06-12','BRONZE','Demo'),(7,'2004-07-12','nusrat@gmail.com','2025-06-07','SILVER','nusrat'),(8,'1990-05-15','john@gmail.com','2025-06-10','GOLD','John'),(9,'2002-08-09','demo02@gmail.com','2025-06-08','SILVER','Demo 02');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` decimal(38,2) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `member_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtvbq19graff4nnoqpngbe762` (`member_id`),
  CONSTRAINT `FKtvbq19graff4nnoqpngbe762` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,2750.50,'2025-05-31',1),(2,12.00,'2025-06-11',1),(3,4500.00,'2025-06-12',1),(4,6000.00,'2025-06-12',2),(5,5000.00,'2025-06-05',7);
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `number` int NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','MEMBER') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Updated Dhaka','rezvi@gmail.com','Mostofa Rezvi',987654321,'$2a$12$.XVwp31L.rW2uoqjeMT7M.5uGlbHarJ89yd/HOo442Ay2izL4tM6K','ADMIN'),(2,'Dhaka','mostofa@gmail.com','Mostofa',123456789,'$2a$12$gf35I0t4GHz3RmRe3C1WOuLWcpnId4NTjODnYEfVt8hFbbOApNJCO','ADMIN');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-12 17:13:17
