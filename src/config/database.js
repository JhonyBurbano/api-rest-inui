import { JSONFilePreset } from "lowdb/node";

let db;

const createConnection = async () => {
  const defaultData = {patients: [], notes: []}
  db = await JSONFilePreset("db.json", defaultData)

  await db.write()
}

const getConnection = () => db

export { createConnection, getConnection }