-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: user
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `fila_signup`
--

DROP TABLE IF EXISTS `fila_signup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fila_signup` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(250) NOT NULL,
  `user_birth` varchar(16) NOT NULL,
  `user_gender` varchar(10) NOT NULL,
  `user_hp` varchar(20) NOT NULL,
  `user_id` varchar(40) NOT NULL,
  `user_pw` varchar(100) NOT NULL,
  `user_email` varchar(256) NOT NULL,
  `user_addr` varchar(250) NOT NULL,
  `user_agree` varchar(250) NOT NULL,
  `gaib_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`,`user_id`,`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fila_signup`
--

LOCK TABLES `fila_signup` WRITE;
/*!40000 ALTER TABLE `fila_signup` DISABLE KEYS */;
INSERT INTO `fila_signup` VALUES (1,'45','45','45','45','45','45','45','45','45','2023-06-06 07:22:06'),(2,'홍성민','19970527','남자','01027646281','cshong123','carfly88^^','cshong123@naver.com','03721 서울 서대문구 봉원사2길 10-2  (신촌동) ㅂㅈㄷ','이용약관(필수), 개인정보의 수집 및 이용에 관한 동의(필수), 개인정보수집 및 활용에 대한 동의(선택), 혜택 알림 이메일, 문자 수신 동의(선택), SMS 수신동의, 이메일 수신동의','2023-06-06 07:25:17'),(3,'최용석','19970527','남자','01027646281','cshong123','carfly88^^','cshong123@naver.com','03721 서울 서대문구 봉원사2길 10-2  (신촌동) ㅂㅈㄷ','이용약관(필수), 개인정보의 수집 및 이용에 관한 동의(필수), 개인정보수집 및 활용에 대한 동의(선택), 혜택 알림 이메일, 문자 수신 동의(선택), SMS 수신동의, 이메일 수신동의','2023-06-06 07:26:23'),(4,'박준호','19970527','남자','01027646281','cshong123','carfly88^^','cshong123@naver.com','03721 서울 서대문구 봉원사2길 10-2  (신촌동) ㅂㅈㄷ','이용약관(필수), 개인정보의 수집 및 이용에 관한 동의(필수), 개인정보수집 및 활용에 대한 동의(선택), 혜택 알림 이메일, 문자 수신 동의(선택), SMS 수신동의, 이메일 수신동의','2023-06-06 07:26:37'),(5,'김홍비','19970527','여자','01027646281','cshong123','carfly88^^','cshong123@naver.com','03721 서울 서대문구 봉원사2길 10-2  (신촌동) ㅂㅈㄷ','이용약관(필수), 개인정보의 수집 및 이용에 관한 동의(필수), 개인정보수집 및 활용에 대한 동의(선택), 혜택 알림 이메일, 문자 수신 동의(선택), SMS 수신동의, 이메일 수신동의','2023-06-06 07:26:48');
/*!40000 ALTER TABLE `fila_signup` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-06 16:30:32
