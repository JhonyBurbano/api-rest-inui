import app from "./app.js";
import { createConnection } from "./config/database.js";

const PORT = process.env.PORT || 3001;
createConnection()
app.listen(PORT, () => console.log(`[APP] Corriendo en el puesto ${PORT}`))