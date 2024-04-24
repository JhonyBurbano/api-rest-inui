import { getConnection } from "../config/database.js";

const DB = getConnection();

const createNewNote = async (newNotes) => {
  try {
    DB.data.notes.push(newNotes);
    await DB.write();
    const recordNotesPatient = DB.data.notes.filter((notes)=> notes.patientId === newNotes.patientId);
    return recordNotesPatient
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error
    }
  }
}

const getNotesOfPatient = async (patientId) => {
  const isAlreadyNote = DB.data.notes.find((note) => note.patientId === patientId);
  try {
    if (!isAlreadyNote) {
      return [];
    }
    const recordNotesPatient = DB.data.notes.filter((notes)=> notes.patientId === patientId);
     
    return recordNotesPatient;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error
    }
  }
}

export { createNewNote, getNotesOfPatient }