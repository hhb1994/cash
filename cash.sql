-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cash
-- ------------------------------------------------------
-- Server version	5.7.22-log

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
-- Table structure for table `cash_in`
--

DROP TABLE IF EXISTS `cash_in`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cash_in` (
  `ciid` int(11) NOT NULL AUTO_INCREMENT,
  `cash_in_date` varchar(45) NOT NULL,
  `cash_in_type` varchar(45) NOT NULL,
  `cash_in_amount` varchar(45) NOT NULL,
  PRIMARY KEY (`ciid`),
  UNIQUE KEY `ciid_UNIQUE` (`ciid`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cash_in`
--

LOCK TABLES `cash_in` WRITE;
/*!40000 ALTER TABLE `cash_in` DISABLE KEYS */;
INSERT INTO `cash_in` VALUES (1,'2018-05-30','房费','2'),(2,'2018-05-26','房费','1'),(3,'2018-05-26','押金','1'),(4,'2018-05-26','押金','1'),(5,'2018-05-26','房费','1'),(6,'2018-05-26','房费','100'),(7,'2018-05-26','押金','20'),(8,'2018-05-26','房费','200'),(9,'2018-05-26','押金','100'),(10,'2018-05-26','商品购买','12'),(11,'2018-05-26','商品购买','190'),(12,'2018-05-26','房费','1000'),(13,'2018-05-26','押金','100'),(14,'2018-05-26','商品购买','10'),(15,'2018-05-28','房费','1'),(16,'2018-05-28','押金','1'),(17,'2018-05-28','商品购买','100'),(18,'2018-05-28','商品购买','12'),(19,'2018-05-28','商品购买','122'),(20,'2018-05-28','房费','12'),(21,'2018-05-28','押金','12'),(22,'2018-05-28','房费','288'),(23,'2018-05-28','押金','100'),(24,'2018-05-28','房费','123'),(25,'2018-05-28','押金','123'),(26,'2018-05-28','押金','200'),(27,'2018-05-28','房费','200'),(28,'2018-05-28','房费','1'),(29,'2018-05-28','押金','1'),(30,'2018-05-28','房费','1'),(31,'2018-05-28','押金','1');
/*!40000 ALTER TABLE `cash_in` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cash_out`
--

DROP TABLE IF EXISTS `cash_out`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cash_out` (
  `coid` int(11) NOT NULL AUTO_INCREMENT,
  `cash_out_date` varchar(45) NOT NULL,
  `cash_out_type` varchar(45) NOT NULL,
  `cash_out_amount` varchar(45) NOT NULL,
  PRIMARY KEY (`coid`),
  UNIQUE KEY `coid_UNIQUE` (`coid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cash_out`
--

LOCK TABLES `cash_out` WRITE;
/*!40000 ALTER TABLE `cash_out` DISABLE KEYS */;
INSERT INTO `cash_out` VALUES (1,'2018-05-26','商品采购','1'),(2,'2018-05-26','转账给:啊','122'),(3,'2018-05-26','单人房退押金','200'),(4,'2018-05-28','转账给:1','100'),(5,'2018-05-28','单人房退押金','1'),(6,'2018-05-28','商品采购','200'),(7,'2018-05-28','商品采购','1'),(8,'2018-05-28','商品采购','12'),(9,'2018-05-28','商品采购','1'),(10,'2018-05-28','商品采购','12'),(11,'2018-05-28','商品采购','12'),(12,'2018-05-28','转账给:12','12'),(13,'2018-05-28','大床房退押金','100'),(14,'2018-05-29','商务房退押金','100'),(15,'2018-05-29','商务房退押金','123'),(16,'2018-05-29','商务房退押金','123'),(17,'2018-05-29','商务房退押金','200'),(18,'2018-05-28','商务房退押金','1'),(19,'2018-05-28','商品采购','12'),(20,'2018-05-28','商品采购','12'),(21,'2018-05-28','商品采购','12');
/*!40000 ALTER TABLE `cash_out` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guest`
--

DROP TABLE IF EXISTS `guest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `guest` (
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `guest_name` varchar(45) NOT NULL,
  `guest_room_type` varchar(45) NOT NULL,
  `guest_id` varchar(45) NOT NULL,
  `guest_tel` varchar(45) NOT NULL,
  `guest_in` varchar(45) NOT NULL,
  `guest_out` varchar(45) NOT NULL,
  `guest_pay_a` varchar(45) NOT NULL,
  `guest_pay_b` varchar(45) NOT NULL,
  `guest_do` varchar(45) NOT NULL,
  `guest_note` varchar(45) DEFAULT NULL,
  `guest_ste` varchar(45) NOT NULL,
  PRIMARY KEY (`gid`),
  UNIQUE KEY `gid_UNIQUE` (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guest`
--

LOCK TABLES `guest` WRITE;
/*!40000 ALTER TABLE `guest` DISABLE KEYS */;
INSERT INTO `guest` VALUES (12,'张三','商务房','123456','321456','2018-05-28','2018-05-29','288','100','1','1','已结账'),(13,'12','商务房','123','123','2018-05-28','2018-05-29','123','123','123','123','已结账'),(14,'1','商务房','1','1','2018-05-28','2018-05-29','200','200','1','1','已结账'),(15,'1','商务房','1','1','2018-05-28','2018-05-28','1','1','1','1','已结账'),(16,'1','1','1','1','2018-05-28','2018-05-28','1','1','1','1','入住中');
/*!40000 ALTER TABLE `guest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `room_type` varchar(45) NOT NULL,
  `room_amount` varchar(45) NOT NULL,
  `room_price` varchar(45) NOT NULL,
  PRIMARY KEY (`rid`),
  UNIQUE KEY `rid_UNIQUE` (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,'商务房','1524','288'),(2,'大床房','05','198'),(3,'单人房','14','158'),(4,'套房','10','388'),(5,'1','11','40');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sell`
--

DROP TABLE IF EXISTS `sell`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sell` (
  `sid` int(11) NOT NULL,
  `sell_name` varchar(45) NOT NULL,
  `sell_amount` varchar(45) NOT NULL,
  `sell_price` varchar(45) NOT NULL,
  PRIMARY KEY (`sid`),
  UNIQUE KEY `sid_UNIQUE` (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sell`
--

LOCK TABLES `sell` WRITE;
/*!40000 ALTER TABLE `sell` DISABLE KEYS */;
INSERT INTO `sell` VALUES (1,'泡面','185137','5'),(2,'矿泉水','50010012','2'),(3,'纸巾','1002','1');
/*!40000 ALTER TABLE `sell` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `lv` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `userpwd` varchar(45) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uid_UNIQUE` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'1','admin1','admin1'),(2,'2','admin2','admin2');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-28 16:18:58
