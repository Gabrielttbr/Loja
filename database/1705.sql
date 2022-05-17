CREATE DATABASE  IF NOT EXISTS `osmeninos` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `osmeninos`;
-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: osmeninos
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Dumping data for table `caixa`
--

LOCK TABLES `caixa` WRITE;
/*!40000 ALTER TABLE `caixa` DISABLE KEYS */;
INSERT INTO `caixa` VALUES (1,'2022-05-13','150','150','150','fran'),(2,'2022-05-13','100','120','pix','fran'),(3,'2022-05-13','20','160','190','Gabriel'),(4,'2022-05-14','2000','1600','10','Alisson'),(5,'2022-05-16','100','100','100','eu'),(6,'2022-05-16','100','100','100','eu'),(7,'2022-05-16','100','100','100','eu'),(8,'2022-05-16','100','100','100','eu'),(9,'2022-05-16','100','100','100','eu');
/*!40000 ALTER TABLE `caixa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `fiado`
--

LOCK TABLES `fiado` WRITE;
/*!40000 ALTER TABLE `fiado` DISABLE KEYS */;
INSERT INTO `fiado` VALUES (3,'gabriel','PEguie macarrão com peixe, uma salada,  uma água'),(4,'gabriel','PEguie macarrão com peixe, uma salada,  uma água');
/*!40000 ALTER TABLE `fiado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'higoroliveria@gmail.com','higor','oliveria','$2b$10$qymEspp0lc/9JlI2hT3rj.642GuiRnx1NND07NyAJMtryLFqCteYy'),(2,'admin@admin.com.br','admin','adminadmin','$2b$10$lQCIoH/okbe2aCwiBWSfRe3BPfbhOzJ4mfdNmJaaj1RyusChPDkqG');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-17 12:07:28
