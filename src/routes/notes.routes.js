import { Router } from "express";
import { createNote, getListNotesPatient, remoteNote } from "../controller/notes.controller.js";

const router = Router();

router.post("/", createNote)
router.delete("/:id", remoteNote)

export { router }