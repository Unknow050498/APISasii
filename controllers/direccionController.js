import { getConnection } from "../db/database";

// [GET]
const getDirecciones = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM direccion");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [GET:id] 
const getDireccion = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM direccion WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [POST]
const addDireccion = async (req, res) => {
    try {
        const {dirLocal, correo} = req.body;

        if(dirLocal==undefined || correo==undefined ){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const direccion = {dirLocal, correo} ;
        const connection = await getConnection();
        await connection.query("INSERT INTO direccion SET ?", direccion);
        res.send("Dirección agregada.");
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[PUT:id]
const putDireccion = async (req, res) => {
    try {
        const {id} = req.params;
        const {dirLocal, correo} = req.body;

        if(id == undefined || dirLocal==undefined || correo==undefined ){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const direccion = {id, dirLocal, correo};
        const connection = await getConnection();
        await connection.query("UPDATE direccion SET ? WHERE Id = ?", [direccion, id]);
        res.send("Actualización exitosa.");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[DELETE:id]
const deleteDireccion = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM direccion WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getDirecciones,
    getDireccion,
    addDireccion,
    putDireccion,
    deleteDireccion
};