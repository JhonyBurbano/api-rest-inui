import { v4 } from "uuid";
import { getRecordForPatient, getRecordPatients, createNewPatient, updateRecordPatient, removeRecordPatient } from "../models/patients.models.js";

const DateNow = new Date();

const getOnePatient = async (id) => {
  try {
    const patient = getRecordForPatient(id);
    return patient;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
};

const getAllPatients = () => {
  try {
    return getRecordPatients(); 
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
};

const createPatient = async (patient) => {
  const newPatient = {
    id: v4(),
    ...patient,
    created_at: DateNow
  };
  try {
    await createNewPatient(newPatient)
    return newPatient;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
};

const updatePatient = async (id, patient) => {
  try {
    const resultUpdate = updateRecordPatient(id, patient);
    return resultUpdate;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
};

const removePatient = async (id) => {
  try {
    const removeRecord = removeRecordPatient(id);
    return removeRecord;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
};

export { getOnePatient, getAllPatients, createPatient, updatePatient, removePatient };