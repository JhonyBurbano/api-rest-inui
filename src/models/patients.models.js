import { getConnection } from "../config/database.js";

const DB = getConnection();

const getRecordForPatient = async (id) => {
  try {
    const record = DB.data.patients.find((record) => record.id === id);
    if(!record){
      throw {
        status: 400,
        message: `Can't find patient with the id ${id}`,
      };
    }
    return record;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error
    }
  }
}

const getRecordPatients = async () => {
  try {
    if (DB.data.patients.length < 0) {
      throw {
        status: 400,
        message: `Not found patients`,
      }
    }

    const data = DB.data.patients.map((item) => {
      const lastAttention = DB.data.notes.find((notes)=> notes.patientId === item.id);
      
      return {
        ...item,
        last_attention: lastAttention ? new Date(lastAttention.created_at).toLocaleDateString() : "No ha sido atendido"
      }
    })
    return data
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
}

const createNewPatient = async (newPatient) => {
  const isAlreadyAdded = DB.data.patients.findIndex((patient) => patient.document === newPatient.document) > -1
  
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Patient with document ${newPatient.document} already exists`,
    };
  }
  try {
    DB.data.patients.push(newPatient);
    await DB.write();
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
}

const updateRecordPatient = async (id, data) => {
  const record = DB.data.patients.find((record) => record.id === id);
  if(!record){
    throw {
      status: 400,
      message: `Can't find patient with the id ${id}`,
    };
  }
  
  record.firt_name = data.firt_name;
  record.last_name = data.last_name;
  record.type_doc = data.type_doc;
  record.birthday = data.birthday;
  record.phone = data.phone;
  record.landline = data.landline;
  record.occupation = data.occupation;
  record.address = data.address;
  record.entity = data.entity;
  record.type_attention = data.type_attention;
  record.status = data.status;
  
  DB.data.patients.map((item) => (item.id === id) ? record : item)
  await DB.write();
  return record;
}

const removeRecordPatient = async (id) => {
  try {
    const record = DB.data.patients.find((record) => record.id === id);
    if(!record){
      throw {
        status: 400,
        message: `Can't find patient with the id ${id}`,
      };
    }
    
    const newDataPatient = DB.data.patients.filter((record) => record.id !== id);
    DB.data.patients = newDataPatient;
    await DB.write()
    return newDataPatient;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error
    }
  }
}

export {
  getRecordForPatient,
  getRecordPatients,
  createNewPatient,
  updateRecordPatient,
  removeRecordPatient
};