import { getNotesPatient, create } from "../services/notes.service.js";
import { handleHttp } from "../utils/error.handle.js";

const getListNotesPatient = async (req, res) => {
  try {
    const { id } = req.params
    const response = await getNotesPatient(id);
    res.send({status: 'OK', data: response})
  } catch (error) {
    handleHttp(res, error, "ERROR_GET_PATIENT")
  }
};

const createNote = async (req, res) => {
  try {
    const { body } = req;
    const response = await create(body);
    res.send({status: 'OK', data: response})
  } catch (error) {
    handleHttp(res, error, "ERROR_CREATE_NOTES")
  }
}

export {
  getListNotesPatient,
  createNote
}