import { Router } from "express";
import { readdirSync } from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

const clearName = (fileName) => {
  return fileName.split(".").shift();
}

readdirSync(__dirname).filter((fileName) => {
  const cleanFileName = clearName(fileName);
  if (cleanFileName !== "index") {
    import(`./${cleanFileName}.routes.js`).then((moduleRoute) => {
      router.use(`/${cleanFileName}`, moduleRoute.router);
    })
  }
});

export { router }