import express from "express";
import morgan from "morgan";
import empleadosR from "./routes/empleadosRouter";
import inventarioR from "./routes/inventarioRouter";
import direccionR from "./routes/direccionRouter";
import foliosR from "./routes/foliosRouter";
import prodProvR from "./routes/prodProvRouter";
import provedoresR from "./routes/provedoresRouter";
import vendedoresR from "./routes/vendedoresRouter";
import ventasR from "./routes/ventasRouter";

const cors = require('cors');
const app = express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }
}

app.use(cors(
    config.application.cors.server
  ));


app.set("port", 5000);

app.use(morgan("dev"));
app.use(express.json());


app.use('/api/direccion', direccionR);
app.use('/api/empleados', empleadosR);
app.use('/api/folios', foliosR);
app.use('/api/inventario', inventarioR);
app.use('/api/prodprov', prodProvR);
app.use('/api/provedores', provedoresR);
app.use('/api/vendedores', vendedoresR);
app.use('/api/ventas', ventasR);

export default app;