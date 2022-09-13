import { getConnection } from "../db/database";

// [GET]
const getProvedores = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM provedores");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [GET:id] 
const getProvedor = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM provedores WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [POST]
const addProvedor = async (req, res) => {
    try {
        const {clave, provedor, correo, telefono} = req.body;

        if(clave==undefined || provedor==undefined || correo==undefined || telefono==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const provedores = {clave, provedor, correo, telefono} ;
        const connection = await getConnection();
        await connection.query("INSERT INTO provedores SET ?", provedores);
        res.send("Agregado con éxito.");
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[PUT:id]
const putProvedor = async (req, res) => {
    try {
        const {id} = req.params;
        const {clave, provedor, correo, telefono} = req.body;

        if(id == undefined || clave==undefined || provedor==undefined || correo==undefined || telefono==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const provedores = {id, clave, provedor, correo, telefono};
        const connection = await getConnection();
        await connection.query("UPDATE prod_prov SET ? WHERE Id = ?", [provedores, id]);
        res.send("Actualización exitosa.");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[DELETE:id]
const deleteProvedor = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM provedores WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getProvedores,
    getProvedor,
    addProvedor,
    putProvedor,
    deleteProvedor
};