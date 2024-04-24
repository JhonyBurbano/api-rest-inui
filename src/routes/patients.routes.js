import { Router } from "express";
import {
  getOnePatient,
  getAllPatients,
  createPatient,
  removePatient,
  updatePatient,
} from "../controller/patients.controller.js";
import { getListNotesPatient } from "../controller/notes.controller.js";
import { checkValidation } from "../middleware/validate.middleware.js";
import { createSchema } from "../schemas/Patients/createPatient.schema.js";

const router = Router();

router.get("/", getAllPatients);
router.get("/:id", getOnePatient);
router.post("/", checkValidation(createSchema),createPatient);
router.put("/:id", updatePatient);
router.delete("/:id", removePatient);
router.get("/:id/notes", getListNotesPatient);

export { router };