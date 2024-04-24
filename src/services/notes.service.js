import { v4 } from "uuid"
import {getNotesOfPatient, createNewNote} from "../models/notes.models.js"

const DateNow = new Date();

const getNotesPatient = async(patientId) => {
  try {
    return getNotesOfPatient(patientId)
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
}

const create = async(note) => {
  const dataNewNote = {
    id: v4(),
    patientId: note.patientId,
    description: note.description,
    created_at: DateNow
  }
  try {

    const allNotesCreated = await createNewNote(dataNewNote);
    return allNotesCreated;
    
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
}

export { getNotesPatient, create }