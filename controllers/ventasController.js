import { getConnection } from "../db/database";

// [GET]
const getVentas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM ventas");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [GET:id] 
const getVenta = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM ventas WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [POST]
const addVenta = async (req, res) => {
    try {
        const {vendedor, folioAsociado} = req.body;

        if(vendedor==undefined || folioAsociado==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const ventas = {vendedor, folioAsociado} ;
        const connection = await getConnection();
        await connection.query("INSERT INTO ventas SET ?", ventas);
        res.send("Agregado con éxito.");
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[PUT:id]
const putVenta = async (req, res) => {
    try {
        const {id} = req.params;
        const {vendedor, folioAsociado} = req.body;

        if(id==undefined || vendedor==undefined || folioAsociado==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const ventas = {id, vendedor, folioAsociado};
        const connection = await getConnection();
        await connection.query("UPDATE ventas SET ? WHERE Id = ?", [ventas, id]);
        res.send("Actualización exitosa.");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[DELETE:id]
const deleteVenta = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM ventas WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getVentas,
    getVenta,
    addVenta,
    putVenta,
    deleteVenta
};