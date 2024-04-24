import { v4 } from "uuid";
import { getRecordForPatient, getRecordPatients, createNewPatient, updateRecordPatient, removeRecordPatient } from "../models/patients.models.js";

const DateNow = new Date();

const create = async (patient) => {
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

const getPatient = async (id) => {
  try {
    const patient = getRecordForPatient(id);
    return patient;
    
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
};

const getPatients = () => {
  try {
    return getRecordPatients(); 
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
};

const update = async (id, patient) => {
  try {
    const resultUpdate = updateRecordPatient(id, patient);
    return resultUpdate;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
};

const remove = async (id) => {
  try {
    const removeRecord = removeRecordPatient(id);
    return removeRecord;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
};

export { create, getPatient, getPatients, update, remove };