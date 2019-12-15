-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: socialdb
-- ------------------------------------------------------
-- Server version	5.7.27-log

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(300) NOT NULL,
  `postedOn` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  `userId` int(11) DEFAULT NULL,
  `postId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_7e8d7c49f218ebb14314fdb3749` (`userId`),
  KEY `FK_e44ddaaa6d058cb4092f83ad61f` (`postId`),
  CONSTRAINT `FK_7e8d7c49f218ebb14314fdb3749` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_e44ddaaa6d058cb4092f83ad61f` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'Yuppy','2019-12-14 10:03:26.021100',1,2,'ac397733-bf12-4022-8c2b-d27e479cc6a0'),(2,'Commenting is fun!','2019-12-14 10:03:36.376662',1,2,'ac397733-bf12-4022-8c2b-d27e479cc6a0'),(3,'So cool! ','2019-12-14 10:03:48.835527',1,2,'ac397733-bf12-4022-8c2b-d27e479cc6a0'),(4,'Eyeyeyeyeyey!','2019-12-14 10:10:38.076789',0,2,'d80df9bc-b1f0-4363-a153-b0a2c95a5b3c'),(5,'Cute pup','2019-12-14 10:10:57.193767',0,2,'12d3e087-4598-4f10-ae70-7a702f9d3745'),(6,'Long Story short -\n6 months in','2019-12-14 10:23:18.387530',0,2,'ac397733-bf12-4022-8c2b-d27e479cc6a0'),(7,'Commenting is hard','2019-12-14 10:36:47.413330',1,2,'af4b0ecd-0453-4d19-aecf-550e5821a66d'),(8,'.onChange()','2019-12-15 14:41:52.213130',0,2,'30ec0901-473b-42a3-bb89-c1193d580784'),(9,'....','2019-12-15 14:42:38.277334',0,2,'ebe8235c-10bf-4af8-b371-7effdc47ac2b'),(10,'.........','2019-12-15 14:42:46.603012',0,2,'ebe8235c-10bf-4af8-b371-7effdc47ac2b'),(11,'...............','2019-12-15 14:42:51.734263',0,2,'ebe8235c-10bf-4af8-b371-7effdc47ac2b'),(12,'........................','2019-12-15 14:42:56.516861',0,2,'ebe8235c-10bf-4af8-b371-7effdc47ac2b'),(14,'hihihih','2019-12-15 17:37:33.987196',0,2,'ff8e2d7f-7e93-4188-bc1c-a823e196aa6d'),(15,'baby','2019-12-15 17:40:08.515767',0,2,'82cbc6a8-6ba4-4c91-a40a-ba25063e8d85'),(16,'Adorable!!!','2019-12-15 17:43:06.995555',0,3,'82cbc6a8-6ba4-4c91-a40a-ba25063e8d85'),(17,'Cutie <3','2019-12-15 19:19:18.387985',0,4,'f91e7647-b04f-4e8a-9281-76cc07946ffc');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(300) NOT NULL,
  `postedOn` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (1,'Account with username Admin has been created','2019-12-13 11:42:44.031194'),(2,'Account with username Unicorn has been created','2019-12-13 11:43:07.496003'),(3,'User Unicorn has followed user Admin','2019-12-13 11:43:14.064069'),(4,'User Unicorn has followed user Administrator','2019-12-13 11:43:16.854063'),(5,'User Admin has followed user Administrator','2019-12-13 11:52:35.046551'),(6,'User Admin has followed user Unicorn','2019-12-13 12:46:58.717349'),(7,'User Admin has followed user Administrator','2019-12-13 12:47:59.207563'),(8,'User Admin has followed user Administrator','2019-12-13 13:02:05.556764'),(9,'User Admin has followed user Administrator','2019-12-13 13:02:42.534001'),(10,'User Admin has followed user Administrator','2019-12-13 18:00:25.893958'),(11,'User Admin has followed user Administrator','2019-12-13 18:03:04.317511'),(12,'User Admin has followed user Administrator','2019-12-13 18:03:14.106288'),(13,'User Admin has followed user Administrator','2019-12-13 18:03:15.489141'),(14,'Account with username best_team has been created','2019-12-13 19:23:51.658996'),(15,'User best_team has followed user Admin','2019-12-13 19:23:58.968923'),(16,'User Admin has followed user best_team','2019-12-13 19:43:46.025702'),(17,'User Admin has followed user best_team','2019-12-13 20:14:30.912160'),(18,'User Admin has followed user Administrator','2019-12-13 20:14:59.095698'),(19,'User Admin has followed user Administrator','2019-12-13 20:15:00.651798'),(20,'User Admin has followed user Administrator','2019-12-13 20:15:05.463058'),(21,'User Admin has followed user Administrator','2019-12-15 15:29:10.132852'),(22,'User Admin has followed user best_team','2019-12-15 15:54:18.257606'),(23,'User Admin has followed user best_team','2019-12-15 15:54:39.989934'),(24,'User Admin has followed user best_team','2019-12-15 17:09:22.311508'),(25,'User Unicorn has followed user best_team','2019-12-15 17:58:07.383874'),(26,'Account with username JohnWick has been created','2019-12-15 18:56:18.947224'),(27,'User JohnWick has followed user Admin','2019-12-15 19:07:08.627297'),(28,'User best_team has followed user JohnWick','2019-12-15 19:07:30.830938');
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(300) NOT NULL,
  `postedOn` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `isRead` tinyint(4) NOT NULL,
  `followedByUserId` varchar(255) DEFAULT NULL,
  `postId` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_692a909ee0fa9383e7859f9b406` (`userId`),
  CONSTRAINT `FK_692a909ee0fa9383e7859f9b406` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post-likes`
--

DROP TABLE IF EXISTS `post-likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post-likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `postedOn` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `isLiked` tinyint(4) NOT NULL DEFAULT '0',
  `userId` int(11) DEFAULT NULL,
  `postId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_168ef75f790ea16727ba347bc2d` (`userId`),
  KEY `FK_edf2f001f38b1d5fb21920d9812` (`postId`),
  CONSTRAINT `FK_168ef75f790ea16727ba347bc2d` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_edf2f001f38b1d5fb21920d9812` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post-likes`
--

LOCK TABLES `post-likes` WRITE;
/*!40000 ALTER TABLE `post-likes` DISABLE KEYS */;
INSERT INTO `post-likes` VALUES (1,'2019-12-13 11:43:22.830104',0,3,'ce849816-cd6f-4b9a-9029-43b8e4c19cd7'),(2,'2019-12-13 12:02:38.079771',1,2,'a566c414-643d-47ce-9202-1d7bf20f99f0'),(3,'2019-12-13 12:44:15.082963',1,2,'ce849816-cd6f-4b9a-9029-43b8e4c19cd7'),(4,'2019-12-13 15:05:17.328020',1,2,'ebc1bc4f-c4db-4c03-988f-f9221410d438'),(5,'2019-12-13 19:14:16.162650',1,2,'12d3e087-4598-4f10-ae70-7a702f9d3745'),(6,'2019-12-13 19:43:51.520554',0,2,'ac397733-bf12-4022-8c2b-d27e479cc6a0'),(7,'2019-12-13 19:44:17.430354',1,2,'9bf63991-dd27-45a3-9945-d3cf0813f2d6'),(8,'2019-12-13 19:44:27.843720',1,2,'d80df9bc-b1f0-4363-a153-b0a2c95a5b3c'),(9,'2019-12-13 19:58:56.698702',1,2,'790e2314-8a27-4c1d-a18d-e77f00726f4c'),(10,'2019-12-13 19:59:05.566497',1,2,'109a9c04-50e2-43af-b9bd-f84b2db7b673'),(11,'2019-12-14 09:46:49.678601',1,2,'b314fce1-4096-4f29-aa36-7d44b487fa96'),(12,'2019-12-14 09:47:12.432422',1,2,'c45c5d88-e5a9-49dc-85d4-8c3133db85e3'),(13,'2019-12-14 10:04:08.912319',1,2,'f96d6478-4f3b-4d8b-9434-e310d4d935fd'),(14,'2019-12-14 10:04:28.783124',1,2,'af4b0ecd-0453-4d19-aecf-550e5821a66d'),(15,'2019-12-14 10:04:32.541285',1,2,'41b96920-9778-4adc-ab02-98a0f7a65358'),(16,'2019-12-14 10:04:36.314943',1,2,'1d62b6cc-d67f-4a75-b7cb-5982442fa6c3'),(17,'2019-12-14 10:10:19.045693',1,2,'e625ac8f-8485-4815-8a86-316846eb8984'),(18,'2019-12-14 10:11:11.768254',0,2,'7e40f34f-8a07-462f-9ddb-eb7b2243cba0'),(19,'2019-12-14 11:24:15.669866',1,3,'f96d6478-4f3b-4d8b-9434-e310d4d935fd'),(20,'2019-12-14 11:24:48.426852',1,3,'b314fce1-4096-4f29-aa36-7d44b487fa96'),(21,'2019-12-15 12:47:36.361004',1,2,'033ea8e2-527d-4ae4-a0d8-e7c03bdf1f6c'),(22,'2019-12-15 14:40:10.648033',1,2,'30ec0901-473b-42a3-bb89-c1193d580784'),(23,'2019-12-15 14:52:35.223281',1,2,'ebe8235c-10bf-4af8-b371-7effdc47ac2b'),(24,'2019-12-15 17:40:03.627851',1,2,'82cbc6a8-6ba4-4c91-a40a-ba25063e8d85'),(25,'2019-12-15 17:42:56.134080',1,3,'82cbc6a8-6ba4-4c91-a40a-ba25063e8d85'),(26,'2019-12-15 19:18:53.049259',1,4,'109a9c04-50e2-43af-b9bd-f84b2db7b673'),(27,'2019-12-15 19:18:57.999029',1,4,'dc0600d1-b2da-4819-b14e-c0637d840e52'),(28,'2019-12-15 19:19:03.230585',1,4,'eca25a49-ba89-493d-9904-59286658c41f'),(29,'2019-12-15 19:19:10.694365',1,4,'f91e7647-b04f-4e8a-9281-76cc07946ffc'),(30,'2019-12-15 19:19:23.926244',1,4,'82cbc6a8-6ba4-4c91-a40a-ba25063e8d85'),(31,'2019-12-15 19:19:35.434931',1,4,'b314fce1-4096-4f29-aa36-7d44b487fa96'),(32,'2019-12-15 19:19:42.428276',1,4,'a566c414-643d-47ce-9202-1d7bf20f99f0');
/*!40000 ALTER TABLE `post-likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` varchar(36) NOT NULL,
  `description` varchar(300) NOT NULL,
  `photoUrl` varchar(255) NOT NULL,
  `keywords` varchar(255) DEFAULT NULL,
  `postedOn` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `isPrivate` tinyint(4) NOT NULL DEFAULT '0',
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ae05faaa55c866130abef6e1fee` (`userId`),
  CONSTRAINT `FK_ae05faaa55c866130abef6e1fee` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES ('033ea8e2-527d-4ae4-a0d8-e7c03bdf1f6c','break;','https://i.imgur.com/Wvtu8ej.png',NULL,'2019-12-13 19:32:53.018364',0,0,4),('109a9c04-50e2-43af-b9bd-f84b2db7b673','Soft code ;P','https://i.imgur.com/75gXN2A.png',NULL,'2019-12-13 19:30:34.809508',0,0,4),('12d3e087-4598-4f10-ae70-7a702f9d3745','Bau','https://i.imgur.com/ebrtBsj.png',NULL,'2019-12-13 12:50:25.424068',1,0,1),('1d62b6cc-d67f-4a75-b7cb-5982442fa6c3','waat','https://i.imgur.com/ZKNTeRt.png',NULL,'2019-12-13 19:40:06.714944',0,0,4),('2285e95f-ba07-4104-8e9a-0189777f7909','Mountains','https://i.imgur.com/ZQGK3r3.png',NULL,'2019-12-15 18:00:31.738896',0,0,2),('30ec0901-473b-42a3-bb89-c1193d580784','.onFocus()','https://i.imgur.com/DKLZXXl.png',NULL,'2019-12-13 19:39:22.783904',0,0,4),('32c8a4ee-ab8c-4214-9a80-9434ad7340a8','Test','https://i.imgur.com/T3AqIuH.png',NULL,'2019-12-15 14:40:52.348845',1,0,2),('41b96920-9778-4adc-ab02-98a0f7a65358','problem solvers','https://i.imgur.com/LaHpal0.png',NULL,'2019-12-13 19:40:39.238820',0,0,4),('4fb02b68-516d-41f0-901a-4c3076e398ba','Wow effect','https://i.imgur.com/Os59tuM.png',NULL,'2019-12-15 19:04:18.272317',0,0,5),('5cd353bf-5156-4b2e-82a6-a0701cce238b','Work balance','https://i.imgur.com/wLbG8JO.png',NULL,'2019-12-13 19:38:02.109717',0,0,4),('677bb7e8-9e14-4597-83e1-103a1fdd2683','Rest code','https://i.imgur.com/F3DTNVx.png',NULL,'2019-12-13 19:31:18.022077',0,0,4),('790e2314-8a27-4c1d-a18d-e77f00726f4c','eat;','https://i.imgur.com/lidcKEr.png',NULL,'2019-12-13 19:34:26.345756',0,0,4),('7e40f34f-8a07-462f-9ddb-eb7b2243cba0','it works!','https://i.imgur.com/eZm8cwe.png',NULL,'2019-12-13 19:38:41.100891',0,0,4),('82cbc6a8-6ba4-4c91-a40a-ba25063e8d85','The love of my life','https://i.imgur.com/oSxiFQD.png',NULL,'2019-12-15 17:39:53.722430',0,0,2),('9967a4f5-6b65-4285-adfb-d60d91efba01','Pending...','https://i.imgur.com/c8okqYB.png',NULL,'2019-12-13 19:37:25.946283',0,0,4),('9bf63991-dd27-45a3-9945-d3cf0813f2d6','Two types of code','https://i.imgur.com/BoU2V0K.png',NULL,'2019-12-13 19:32:09.631566',0,0,4),('a566c414-643d-47ce-9202-1d7bf20f99f0','Starring me','https://i.imgur.com/QH6KrfV.png',NULL,'2019-12-13 11:54:24.258890',0,0,2),('ac397733-bf12-4022-8c2b-d27e479cc6a0','Our place.','https://i.imgur.com/x4OKpeB.png',NULL,'2019-12-13 19:41:56.252667',0,0,4),('af4b0ecd-0453-4d19-aecf-550e5821a66d','finish;','https://i.imgur.com/UUXc36s.png',NULL,'2019-12-13 19:40:59.880020',0,0,4),('b314fce1-4096-4f29-aa36-7d44b487fa96','Cool','https://i.imgur.com/fB5RcWj.png',NULL,'2019-12-13 19:21:44.149877',1,0,2),('c1aad76b-6f6a-4ddf-8a3a-b8208628eca2','Doggo','https://i.imgur.com/gfyIrKn.png',NULL,'2019-12-13 12:42:50.881739',0,1,2),('c45c5d88-e5a9-49dc-85d4-8c3133db85e3','it worked yesterday.','https://i.imgur.com/Jkf4Jv1.png',NULL,'2019-12-13 19:34:54.681373',0,0,4),('ce849816-cd6f-4b9a-9029-43b8e4c19cd7','My very first post','https://i.imgur.com/gfyIrKn.png',NULL,'2019-12-13 11:40:54.776025',0,0,1),('d80df9bc-b1f0-4363-a153-b0a2c95a5b3c','Code is funnn!1!','https://i.imgur.com/sZW4gcl.png',NULL,'2019-12-13 19:24:39.707871',0,0,4),('dc0600d1-b2da-4819-b14e-c0637d840e52','yeah','https://i.imgur.com/HwdehFk.png',NULL,'2019-12-15 19:04:33.339404',0,0,5),('e625ac8f-8485-4815-8a86-316846eb8984','Hard Code!','https://i.imgur.com/d5Pztxk.png',NULL,'2019-12-13 19:30:08.287173',0,0,4),('ebc1bc4f-c4db-4c03-988f-f9221410d438','Hey','https://i.imgur.com/O0pJRCh.png',NULL,'2019-12-13 12:49:50.074969',0,0,1),('ebe8235c-10bf-4af8-b371-7effdc47ac2b','We do it wise','https://i.imgur.com/R6wS9s9.png',NULL,'2019-12-13 19:33:54.613860',0,0,4),('eca25a49-ba89-493d-9904-59286658c41f','na boinoto pole','https://i.imgur.com/CwR9zbP.png',NULL,'2019-12-15 19:03:44.315663',0,0,5),('f0701638-3aac-456d-ab03-553b5c0ab9c8','g','https://i.imgur.com/QAScXea.png',NULL,'2019-12-15 12:48:57.698559',0,0,2),('f91e7647-b04f-4e8a-9281-76cc07946ffc','Djina','https://i.imgur.com/RRZPxh3.png',NULL,'2019-12-15 18:54:59.945802',0,0,2),('f96d6478-4f3b-4d8b-9434-e310d4d935fd','rest','https://i.imgur.com/pGwL3sq.png',NULL,'2019-12-13 19:41:31.427118',0,0,4),('ff8e2d7f-7e93-4188-bc1c-a823e196aa6d','!fun','https://i.imgur.com/VNaI5jh.png',NULL,'2019-12-13 19:33:26.058740',0,0,4);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_648e3f5447f725579d7d4ffdfb` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'Basic');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `registered` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `avatarUrl` varchar(255) NOT NULL DEFAULT 'https://i.imgur.com/vVKl3kB.jpg',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Administrator','$2a$10$C2UtUyd2.l3rh1eBCZWVOuojTnxlaeoJk1kB0903sBsDys1.xlNv2','administrator@abv.bg','2019-12-13 11:40:54.759458',0,NULL,NULL,NULL,NULL,'https://i.imgur.com/vVKl3kB.jpg'),(2,'Admin','$2a$10$pdOTgICwUgVNOecMRbNRKeSGdfyc7lYY4jwrk0Za4d.DQV0Pffroq','boss@email.com','2019-12-13 11:42:44.008340',0,'Gery','Bulgaria',NULL,'Zesty.','https://i.imgur.com/ruRvI1z.jpg'),(3,'Unicorn','$2a$10$JTSeqqpqRMNuO76i3QnsL.8FX/0jS5uS1xuNAEvHvN7BUR/VG3YdW','uni@corn.com','2019-12-13 11:43:07.487530',0,NULL,NULL,NULL,NULL,'https://i.imgur.com/7lKuOw2.jpg'),(4,'best_team','$2a$10$Thfv33vOI42F0Oo63r4gmerTwIJOYI59.njKNsz9UL5WXc6oTBxnK','telerik@academy.com','2019-12-13 19:23:51.643159',0,'Alpha 14','Bulgaria',NULL,'Good people + Better trainers = Best experience','https://i.imgur.com/Y5zE3Jx.png'),(5,'JohnWick','$2a$10$gLU1ci5juKhdTJQM6dKr.Oq7zxiq4YPe1BllbWic/7NeGgvhz27qa','john_wick@mail.com','2019-12-15 18:56:18.859124',0,'mr. Cool',NULL,NULL,';)','https://i.imgur.com/3Muvcor.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_followed_users`
--

DROP TABLE IF EXISTS `users_followed_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_followed_users` (
  `usersId_1` int(11) NOT NULL,
  `usersId_2` int(11) NOT NULL,
  PRIMARY KEY (`usersId_1`,`usersId_2`),
  KEY `IDX_84f0c6acf8be2b4668009d667b` (`usersId_1`),
  KEY `IDX_17d16c6718a0ff1fbbda1e6470` (`usersId_2`),
  CONSTRAINT `FK_17d16c6718a0ff1fbbda1e64701` FOREIGN KEY (`usersId_2`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_84f0c6acf8be2b4668009d667b9` FOREIGN KEY (`usersId_1`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_followed_users`
--

LOCK TABLES `users_followed_users` WRITE;
/*!40000 ALTER TABLE `users_followed_users` DISABLE KEYS */;
INSERT INTO `users_followed_users` VALUES (2,1),(2,3),(2,4),(3,1),(3,2),(3,4),(4,2),(4,5),(5,2);
/*!40000 ALTER TABLE `users_followed_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_followers_users`
--

DROP TABLE IF EXISTS `users_followers_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_followers_users` (
  `usersId_1` int(11) NOT NULL,
  `usersId_2` int(11) NOT NULL,
  PRIMARY KEY (`usersId_1`,`usersId_2`),
  KEY `IDX_8d63f6043394b4d32343bdea11` (`usersId_1`),
  KEY `IDX_1433e3275a501bc09f5c33c7ca` (`usersId_2`),
  CONSTRAINT `FK_1433e3275a501bc09f5c33c7ca2` FOREIGN KEY (`usersId_2`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_8d63f6043394b4d32343bdea11d` FOREIGN KEY (`usersId_1`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_followers_users`
--

LOCK TABLES `users_followers_users` WRITE;
/*!40000 ALTER TABLE `users_followers_users` DISABLE KEYS */;
INSERT INTO `users_followers_users` VALUES (1,2),(1,3),(2,3),(2,4),(2,5),(3,2),(4,2),(4,3),(5,4);
/*!40000 ALTER TABLE `users_followers_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles_roles`
--

DROP TABLE IF EXISTS `users_roles_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_roles_roles` (
  `usersId` int(11) NOT NULL,
  `rolesId` int(11) NOT NULL,
  PRIMARY KEY (`usersId`,`rolesId`),
  KEY `IDX_df951a64f09865171d2d7a502b` (`usersId`),
  KEY `IDX_b2f0366aa9349789527e0c36d9` (`rolesId`),
  CONSTRAINT `FK_b2f0366aa9349789527e0c36d97` FOREIGN KEY (`rolesId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_df951a64f09865171d2d7a502b1` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles_roles`
--

LOCK TABLES `users_roles_roles` WRITE;
/*!40000 ALTER TABLE `users_roles_roles` DISABLE KEYS */;
INSERT INTO `users_roles_roles` VALUES (1,1),(1,2),(2,1),(2,2),(3,2),(4,2),(5,2);
/*!40000 ALTER TABLE `users_roles_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-15 21:48:48
