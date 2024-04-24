import { Router } from "express";
import { createNote } from "../controller/notes.controller.js";

const router = Router();

router.post("/", createNote)

export { router }