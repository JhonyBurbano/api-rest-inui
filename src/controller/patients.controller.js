//import { // handleHttp } from "../utils/error.handle";
import * as PatientService from "../services/patients.service.js";
import { handleHttp } from "../utils/error.handle.js";

const getOnePatient = async (req, res) => {
  try {
    const { id } = req.params
    const patient = await PatientService.getOnePatient(id);
    res.send({status: 'OK', data: patient})
  } catch (error) {
    handleHttp(res, error, "ERROR_GET_PATIENT")
  }
};

const getAllPatients = async (req, res) => {
  try {
    const patients = await PatientService.getAllPatients();
    res.send({status: 'OK', data: patients})
  } catch (error) {
    handleHttp(res, error, "ERROR_GET_LIST_PATIENTS")
  }
};

const createPatient = async (req, res) => {
  try {
    const body = req.body
    const response = await PatientService.createPatient(body);
    res.send({status: 'OK', data: response})
  } catch (error) {
    handleHttp(res, error, "ERROR_CREATE_PATIENT")
  }
};

const updatePatient = async (req, res) => {
  try {
    const {id} = req.params
    const body = req.body
    const response = await PatientService.updatePatient(id, body);
    res.send({status: 'OK', data: response})
  } catch (error) {
    handleHttp(res, error, "ERROR_UPDATE_PATIENT")
  }
};

const removePatient = async (req, res) => {
  try {
    const {id} = req.params
    const response = await PatientService.removePatient(id);
    res.send({status: 'OK', data: response})
  } catch (error) {
    handleHttp(res, error, "ERROR_REMOVE_PATIENT")
  }
};

export { getOnePatient, getAllPatients, createPatient, updatePatient, removePatient };