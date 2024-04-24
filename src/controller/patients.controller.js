//import { // handleHttp } from "../utils/error.handle";
import {
  getPatient,
  getPatients,
  create,
  update,
  remove,
} from "../services/patients.service.js";
import { handleHttp } from "../utils/error.handle.js";

const getOnePatient = async (req, res) => {
  try {
    const { id } = req.params
    const response = await getPatient(id);
    res.send({status: 'OK', data: response})
  } catch (error) {
    handleHttp(res, error, "ERROR_GET_PATIENT")
  }
};

const getAllPatients = async (req, res) => {
  try {
    const patients = await getPatients();

    res.send({status: 'OK', data: patients})
  } catch (error) {
    handleHttp(res, error, "ERROR_GET_LIST_PATIENTS")
  }
};

const createPatient = async (req, res) => {
  try {
    const body = req.body
    const response = await create(body);
    res.send({status: 'OK', data: response})
  } catch (error) {
    handleHttp(res, error, "ERROR_CREATE_PATIENT")
  }
};

const updatePatient = async (req, res) => {
  try {
    const {id} = req.params
    const body = req.body
    const response = await update(id, body);
    res.send({status: 'OK', data: response})
  } catch (error) {
    handleHttp(res, error, "ERROR_UPDATE_PATIENT")
  }
};

const removePatient = async (req, res) => {
  try {
    const {id} = req.params
    const response = await remove(id);
    res.send({status: 'OK', data: response})
  } catch (error) {
    handleHttp(res, error, "ERROR_REMOVE_PATIENT")
  }
};

export { getOnePatient, getAllPatients, createPatient, updatePatient, removePatient };