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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'deep thoughts, I see','2019-12-19 07:45:10.773944',0,4,'dcef2e07-ed5f-44f9-a86d-e693d7025ca6'),(2,'YASS!!!','2019-12-19 07:53:43.896847',0,4,'357093e3-0a37-4209-a6bb-d562ca4137a7'),(3,'Sssssssss','2019-12-19 08:35:37.567559',0,4,'c2a0e302-bb5a-4372-96bd-bc9a48726fc6'),(4,'reshen e','2019-12-19 09:18:53.884003',0,1,'f16b53c5-754a-47d4-9b59-8202c798f10c');
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (1,'Account with username TheBoss has been created','2019-12-19 07:08:37.456876'),(2,'Account with username best_team has been created','2019-12-19 07:13:33.388984'),(3,'Account with username Rossen has been created','2019-12-19 07:26:21.522296'),(4,'Account with username Stoyan has been created','2019-12-19 07:31:01.715956'),(5,'Account with username NadetoOo has been created','2019-12-19 07:37:08.067680'),(6,'User NadetoOo has followed user Rossen','2019-12-19 07:40:46.508020'),(7,'User NadetoOo has followed user Stoyan','2019-12-19 07:40:52.238756'),(8,'User NadetoOo has followed user best_team','2019-12-19 07:41:01.520133'),(9,'User Rossen has followed user Stoyan','2019-12-19 07:41:18.920225'),(10,'User Rossen has followed user NadetoOo','2019-12-19 07:41:22.256447'),(11,'User Rossen has followed user best_team','2019-12-19 07:41:27.168932'),(12,'User Stoyan has followed user NadetoOo','2019-12-19 07:41:42.919193'),(13,'User Stoyan has followed user Rossen','2019-12-19 07:41:45.444257'),(14,'User TheBoss has followed user best_team','2019-12-19 07:51:34.987635'),(15,'User TheBoss has followed user Rossen','2019-12-19 07:51:38.324867'),(16,'User TheBoss has followed user Stoyan','2019-12-19 07:51:42.574902'),(17,'User TheBoss has followed user NadetoOo','2019-12-19 07:51:46.571221'),(18,'User best_team has followed user Rossen','2019-12-19 09:00:09.494020'),(19,'User TheBoss has followed user Stoyan','2019-12-19 09:20:49.952085');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post-likes`
--

LOCK TABLES `post-likes` WRITE;
/*!40000 ALTER TABLE `post-likes` DISABLE KEYS */;
INSERT INTO `post-likes` VALUES (1,'2019-12-19 07:43:39.010416',1,4,'970f3268-4f16-43c7-9b99-5cf56bd8ac21'),(2,'2019-12-19 07:43:42.921589',1,4,'2177f1fc-c2f3-4beb-af22-9638641d23a5'),(3,'2019-12-19 07:43:45.668622',0,4,'15627da3-2e1a-4fb9-9076-a953fa7d1cee'),(4,'2019-12-19 07:43:50.091681',0,4,'f3c145ae-bcaf-4c66-8cd8-64522b121810'),(5,'2019-12-19 07:43:52.498050',0,4,'bc70485b-07de-4650-a686-1c8975d4baf6'),(6,'2019-12-19 07:43:55.895031',0,4,'54916185-88a7-4b74-8603-bd51b51fe2d2'),(7,'2019-12-19 07:43:59.822962',1,4,'6e2af3e6-ca9d-45e5-9f40-5e168e3cbcca'),(8,'2019-12-19 07:44:04.951178',1,4,'582279d3-e6f4-4947-9c7d-9ae1f78e635a'),(9,'2019-12-19 07:44:06.969887',1,4,'e328c971-273f-42ec-baee-ef2518468dae'),(10,'2019-12-19 07:44:09.362616',0,4,'2e875241-da9b-4370-a8f2-de3c09c17dcf'),(11,'2019-12-19 07:45:41.903683',1,5,'2e875241-da9b-4370-a8f2-de3c09c17dcf'),(12,'2019-12-19 07:45:44.117859',1,5,'582279d3-e6f4-4947-9c7d-9ae1f78e635a'),(13,'2019-12-19 07:45:48.995184',1,5,'54916185-88a7-4b74-8603-bd51b51fe2d2'),(14,'2019-12-19 07:45:52.545295',0,5,'2177f1fc-c2f3-4beb-af22-9638641d23a5'),(15,'2019-12-19 07:45:54.184000',0,5,'15627da3-2e1a-4fb9-9076-a953fa7d1cee'),(16,'2019-12-19 07:45:57.249896',0,5,'bc70485b-07de-4650-a686-1c8975d4baf6'),(17,'2019-12-19 07:53:23.332887',1,6,'357093e3-0a37-4209-a6bb-d562ca4137a7'),(18,'2019-12-19 07:53:53.252008',1,4,'357093e3-0a37-4209-a6bb-d562ca4137a7'),(19,'2019-12-19 08:04:48.807545',1,1,'e328c971-273f-42ec-baee-ef2518468dae'),(20,'2019-12-19 08:05:02.831317',0,1,'357093e3-0a37-4209-a6bb-d562ca4137a7'),(21,'2019-12-19 08:14:49.011929',1,1,'c78ac5bf-d326-4d07-b107-43db95cda8f8'),(22,'2019-12-19 08:35:33.617988',1,4,'c2a0e302-bb5a-4372-96bd-bc9a48726fc6'),(23,'2019-12-19 08:38:14.592652',1,1,'aedc27ed-1875-4bb5-b02c-3b279f5332cc'),(24,'2019-12-19 08:38:20.266727',1,1,'65cbea6e-c854-4377-b170-7a31d5fc325a'),(25,'2019-12-19 09:00:11.905196',1,3,'13a3e56d-ffb4-41f4-9a18-cf89d1007aef'),(26,'2019-12-19 09:18:39.922588',1,1,'f16b53c5-754a-47d4-9b59-8202c798f10c'),(27,'2019-12-19 09:19:29.443022',1,1,'48af1eb4-5d10-4576-ab9c-8d9a11b9ee9b'),(28,'2019-12-19 09:19:44.081104',1,1,'8c9ab81c-0e84-40cd-800d-a9e106e9e6c8');
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
  `description` varchar(1500) NOT NULL DEFAULT '',
  `photoUrl` varchar(255) NOT NULL,
  `keywords` varchar(255) DEFAULT NULL,
  `postedOn` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `isPrivate` tinyint(4) NOT NULL DEFAULT '0',
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ae05faaa55c866130abef6e1fee` (`userId`),
  CONSTRAINT `FK_ae05faaa55c866130abef6e1fee` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES ('108de686-ba00-4b70-95a4-a9d631cab19f','soft code','https://i.imgur.com/odTYIns.png',NULL,'2019-12-19 07:20:38.743739',0,0,3),('13a3e56d-ffb4-41f4-9a18-cf89d1007aef','hihi','https://i.imgur.com/xVXMdCi.png',NULL,'2019-12-19 08:59:31.991305',0,0,4),('14325298-465f-4125-8a49-10f821f759ec','it worked yesterday . . .','https://i.imgur.com/eek8WdE.png',NULL,'2019-12-19 07:18:48.916102',0,0,3),('1469c68d-3498-4951-96ea-b451811fce8c','abstraction','https://i.imgur.com/TM7aXPR.png',NULL,'2019-12-19 07:18:25.919015',0,0,3),('15627da3-2e1a-4fb9-9076-a953fa7d1cee','like and follow','https://i.imgur.com/2s6HoyZ.png',NULL,'2019-12-19 07:33:45.511057',0,0,5),('1fd9a1f0-4563-4420-87dc-f8f2a6acb329','peace of mind','https://i.imgur.com/AO75bpx.png',NULL,'2019-12-19 07:29:25.670177',0,0,4),('1fe18ca4-2d9a-4dfd-a246-c51a7f9c2049','seems interesting','https://i.imgur.com/ldS6s9E.png',NULL,'2019-12-19 08:58:06.953994',0,0,3),('2177f1fc-c2f3-4beb-af22-9638641d23a5','. . .','https://i.imgur.com/ooFc7zX.png',NULL,'2019-12-19 07:34:13.841724',0,0,5),('2afca612-427e-49f8-8ece-45df96b55e2f','deep','https://i.imgur.com/FrcNGMH.png',NULL,'2019-12-19 07:31:32.668910',1,0,5),('2baba4e0-edfd-4eef-be60-e0937cbacd88','break;','https://i.imgur.com/bePUwm9.png',NULL,'2019-12-19 07:17:58.406453',0,0,3),('2bc95425-f5b1-43c2-b590-e7216312e390','','https://i.imgur.com/LicMRtM.png',NULL,'2019-12-19 07:16:21.712559',0,0,3),('2e875241-da9b-4370-a8f2-de3c09c17dcf','should read !','https://i.imgur.com/ETcY3qU.png',NULL,'2019-12-19 07:43:29.177492',1,0,4),('32237316-70ae-4f02-a81f-9dc6ecbbc4cd','Harry...','https://i.imgur.com/NM8KeTT.png',NULL,'2019-12-19 07:32:10.024560',0,0,5),('33069ffe-9419-44fc-8869-c9f6a0e23106','trygna','https://i.imgur.com/oe6T2Ar.png',NULL,'2019-12-19 07:17:09.415622',0,0,3),('357093e3-0a37-4209-a6bb-d562ca4137a7','TOP','https://i.imgur.com/lFGJGFv.png',NULL,'2019-12-19 07:53:21.091306',0,0,6),('3736126a-7fe2-41cc-90e0-392c4ac8b8cf','balance','https://i.imgur.com/E8aGrrM.png',NULL,'2019-12-19 07:28:36.711114',0,0,4),('391aaa49-2e90-45c9-b92c-ed71bb6d212b','','https://i.imgur.com/FlSYTZO.png',NULL,'2019-12-19 07:15:47.249671',0,0,3),('461f1e2e-9920-4f95-8149-89e3b3bb8cbb','<pending>','https://i.imgur.com/l0SsiAZ.png',NULL,'2019-12-19 07:20:08.533858',0,0,3),('48af1eb4-5d10-4576-ab9c-8d9a11b9ee9b','Opa','https://i.imgur.com/tAnsRmy.png',NULL,'2019-12-19 08:58:33.568281',0,0,3),('54916185-88a7-4b74-8603-bd51b51fe2d2','Dune is that cool!1!','https://i.imgur.com/SuO7ApW.png',NULL,'2019-12-19 07:36:29.147928',0,0,5),('56af81ce-7372-4d5d-90a3-7e799f88ef18','After the project defenses...','https://i.imgur.com/Ag57phj.png',NULL,'2019-12-19 08:13:11.462639',1,0,1),('582279d3-e6f4-4947-9c7d-9ae1f78e635a','me.','https://i.imgur.com/tOk7OKG.png',NULL,'2019-12-19 07:39:09.509751',0,0,6),('5f3ad573-507d-4e59-b07a-99f90dd69336','Duo','https://i.imgur.com/XVf2We8.png',NULL,'2019-12-19 08:57:39.849730',0,0,3),('60f724cb-92cf-42bf-99f6-f9edecfeafce','passion','https://i.imgur.com/KpCctXU.png',NULL,'2019-12-19 07:28:50.576134',0,0,4),('613733e3-9ad7-4448-91cc-6efbdd79b13e','killing it','https://i.imgur.com/gPBJDLx.png',NULL,'2019-12-19 07:19:14.931346',0,0,3),('65cbea6e-c854-4377-b170-7a31d5fc325a',':onFocus','https://i.imgur.com/6bQy4Q3.png',NULL,'2019-12-19 07:16:07.737797',0,0,3),('68eec2c0-8d0b-4385-a5a5-073470c4f1a6','targeting','https://i.imgur.com/kmanQNV.png',NULL,'2019-12-19 07:23:50.627343',0,0,3),('6e2af3e6-ca9d-45e5-9f40-5e168e3cbcca','check this out! <3 by Ivo Ivanov','https://i.imgur.com/zVu1sjL.png',NULL,'2019-12-19 07:38:53.355417',0,0,6),('73981bb7-8f06-4564-baa2-1de3e6f68255','winning','https://i.imgur.com/72zS7wH.png',NULL,'2019-12-19 07:23:09.908659',0,0,3),('7a99414e-9d1a-47ac-9b16-895b84862f0b','a break at 2 am','https://i.imgur.com/z8Cgz6W.png',NULL,'2019-12-19 07:21:42.286610',0,0,3),('7be916ed-888f-491b-9a1a-0252733fb7fa','','https://i.imgur.com/AIodkWt.png',NULL,'2019-12-19 09:54:54.835059',0,0,2),('7e7bda20-33dc-4310-9e8c-7fa4013feae2','Merry ChristmasssSs','https://i.imgur.com/FI32xUj.png',NULL,'2019-12-19 07:24:35.684156',0,0,3),('8c9ab81c-0e84-40cd-800d-a9e106e9e6c8','me','https://i.imgur.com/0F73Xhs.png',NULL,'2019-12-19 08:38:51.744287',0,0,1),('924e1989-4338-426c-9dbf-eba5cbd7f647','Doggo','https://i.imgur.com/gfyIrKn.png',NULL,'2019-12-19 07:12:01.833304',0,0,2),('970f3268-4f16-43c7-9b99-5cf56bd8ac21','looks familiar','https://i.imgur.com/VQreL1a.png',NULL,'2019-12-19 07:37:53.599947',0,0,6),('9e798206-1fb2-40bd-a05d-584a40a30df5','Doggo','https://i.imgur.com/xkLSftJ.png',NULL,'2019-12-19 07:51:29.700305',0,0,1),('9e7a158e-9365-4356-9ebf-2601163a69f8','tuka ei tyi','https://i.imgur.com/J7DfXhx.png',NULL,'2019-12-19 08:59:02.660390',0,0,3),('a09961d1-8791-4cfa-86a1-8ed5cd9469c0','Aiii','https://i.imgur.com/94HG9B3.png',NULL,'2019-12-19 08:56:53.747053',0,0,3),('a45f5b9b-d313-4b57-8150-630bbba1fdf5','how we feel about it.','https://i.imgur.com/efyQi40.png',NULL,'2019-12-19 07:22:11.184133',0,0,3),('a5085164-6573-4c4d-b71c-d83a42d5d5bb','','https://i.imgur.com/xsKcUIM.png',NULL,'2019-12-19 09:19:13.798831',0,0,1),('aedc27ed-1875-4bb5-b02c-3b279f5332cc','love','https://i.imgur.com/Gua6PZe.png',NULL,'2019-12-19 07:15:19.661480',1,0,3),('bc70485b-07de-4650-a686-1c8975d4baf6','o.m.g','https://i.imgur.com/G0GMfJd.png',NULL,'2019-12-19 07:32:35.779657',0,0,5),('c2a0e302-bb5a-4372-96bd-bc9a48726fc6','Ssssss','https://i.imgur.com/z9iLm49.png',NULL,'2019-12-19 08:35:16.297171',1,0,5),('c78ac5bf-d326-4d07-b107-43db95cda8f8','YESSSS!!!','https://i.imgur.com/QOh4z4f.png',NULL,'2019-12-19 07:29:55.702047',0,0,4),('ca73a5d6-e845-4822-b5ce-12b0dd83bf41','hehe','https://i.imgur.com/OWbiuKi.png',NULL,'2019-12-19 08:36:59.885172',0,0,2),('dcef2e07-ed5f-44f9-a86d-e693d7025ca6','#hard code','https://i.imgur.com/8V2qKTY.png',NULL,'2019-12-19 07:17:37.038886',0,0,3),('e328c971-273f-42ec-baee-ef2518468dae','do I need to say anything else?','https://i.imgur.com/vH9DQtU.png',NULL,'2019-12-19 07:39:47.367940',1,0,6),('ec3f1d3e-6296-4468-bee1-9a98fe1a6152','Last moment fixes','https://i.imgur.com/teOUHLs.png',NULL,'2019-12-19 08:56:23.079248',0,0,3),('f16b53c5-754a-47d4-9b59-8202c798f10c','Roska... problem','https://i.imgur.com/Qzszac3.png',NULL,'2019-12-19 09:00:00.300845',0,0,3),('f3c145ae-bcaf-4c66-8cd8-64522b121810','precision','https://i.imgur.com/hCccqGI.png',NULL,'2019-12-19 07:32:54.293095',0,0,5),('fe737119-8d99-4dc3-9a5c-ca56001bb8b9','peer programming','https://i.imgur.com/qJvfDEb.png',NULL,'2019-12-19 07:16:46.255955',0,0,3);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'TheBoss','$2a$10$CrkkCg1SCFTW71W.M43Kfe.0NFFMKlCnc2IrWhO3aHcWRkdgUgu9e','theBoss@main.com','2019-12-19 07:08:37.443003',0,'Gery','Bulgaria',NULL,'Zesty','https://i.imgur.com/T1fcEVr.jpg'),(2,'Administrator','$2a$10$gY2nksH4ZRJ.czRdSVM5R.9GBnuxmdxOeJ.KD6HvH9p9/RdV8C1IK','administrator@abv.bg','2019-12-19 07:12:01.787483',0,NULL,NULL,NULL,NULL,'https://i.imgur.com/u7vqjQs.jpg'),(3,'best_team','$2a$10$CkfCY0gbGAiA8D0yD38Yl.4GxBYWyDl1mdQXbPbUIxDthz8gIbS.W','telerik@academy.com','2019-12-19 07:13:33.321543',0,'Alpha 14','Bulgaria',NULL,'Good people + Better trainers = the Best team','https://i.imgur.com/wOLQRlD.png'),(4,'Rossen','$2a$10$goDcPAgIa5tZECKZ2T3mkubU.2dmft9sVLgJVKjivRtt1A231wbIu','roskata@mail.com','2019-12-19 07:26:21.510645',0,'Roskata','Bulgaria',NULL,'Идеята е следна....\nСупер! Супер! Супер .... x33','https://i.imgur.com/r1sZCLa.jpg'),(5,'Stoyan','$2a$10$AkB0UPDd7g9viegcco2/UuzNlu7RiuExJoKbwF7rgnqqLwns9n3Yy','stoyan@mail.com','2019-12-19 07:31:01.708858',0,'Hehe','',NULL,'и да и не\n.. зависи!','https://i.imgur.com/SnYI8tq.png'),(6,'NadetoOo','$2a$10$zQOxeRl7X/u659X//pMZtOfjX5YBAyKZ7GZJs.35oKEKW7cxD1ISy','nadetu@mail.com','2019-12-19 07:37:08.060093',0,'Nadejda','Bulgaria',NULL,'Trrrrrr....rrrr','https://i.imgur.com/bboxCDY.jpg');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_followed_users`
--

LOCK TABLES `users_followed_users` WRITE;
/*!40000 ALTER TABLE `users_followed_users` DISABLE KEYS */;
INSERT INTO `users_followed_users` VALUES (1,3),(1,4),(1,5),(1,6),(3,4),(4,3),(4,5),(4,6),(5,4),(5,6),(6,3),(6,4),(6,5);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_followers_users`
--

LOCK TABLES `users_followers_users` WRITE;
/*!40000 ALTER TABLE `users_followers_users` DISABLE KEYS */;
INSERT INTO `users_followers_users` VALUES (3,1),(3,4),(3,6),(4,1),(4,3),(4,5),(4,6),(5,1),(5,4),(5,6),(6,1),(6,4),(6,5);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles_roles`
--

LOCK TABLES `users_roles_roles` WRITE;
/*!40000 ALTER TABLE `users_roles_roles` DISABLE KEYS */;
INSERT INTO `users_roles_roles` VALUES (1,1),(1,2),(2,1),(2,2),(3,2),(4,2),(5,2),(6,2);
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

-- Dump completed on 2019-12-19 12:20:30
