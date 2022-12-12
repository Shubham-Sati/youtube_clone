import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../config/verifyToken.js";

const router = express.Router();

//Update User
router.put("/:id", verifyToken, update);

//Delete User
router.delete("/:id", verifyToken, deleteUser);

//get a User
router.get("/find/:id", getUser);

//subscribe a User
router.put("/sub/:id", verifyToken, subscribe);

//unsubscribe User
router.put("/unsub/:id", verifyToken, unsubscribe);

//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a Video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
