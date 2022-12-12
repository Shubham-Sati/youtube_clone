import express from "express";
import { verifyToken } from "../config/verifyToken.js";
import {
  addVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
} from "../controllers/video.js";

const router = express.Router();

// Create a video
router.post("/", verifyToken, addVideo);

// Update video
router.put("/:id", verifyToken, addVideo);

//Delete Video
router.delete("/:id", verifyToken, addVideo);

//Get Video
router.get("/find/:id", getVideo);

//Increase view of video
router.put("/view/:id", addView);

//Get Trending videos
router.get("/trend", trend);

//Get random videos
router.get("/random", random);

//Get subscribed videos
router.get("/sub", verifyToken, sub);

//get taged videos
router.get("/tags", getByTag);

//search a video by searchbar
router.get("/search", search);

export default router;
