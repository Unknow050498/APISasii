import { getConnection } from "../db/database";

// [GET]
const getVendedores = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM vendedores");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [GET:id] 
const getVendedor = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM vendedores WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [POST]
const addVendedor = async (req, res) => {
    try {
        const {claveVendedor, nombre, puesto, salario} = req.body;

        if(claveVendedor==undefined || nombre==undefined || puesto==undefined || salario==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const vendedores = {clave, provedor, correo, telefono} ;
        const connection = await getConnection();
        await connection.query("INSERT INTO vendedores SET ?", vendedores);
        res.send("Agregado con éxito.");
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[PUT:id]
const putVendedor = async (req, res) => {
    try {
        const {id} = req.params;
        const {claveVendedor, nombre, puesto, salario} = req.body;

        if(id == undefined || claveVendedor==undefined || nombre==undefined || puesto==undefined || salario==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const vendedores = {id, claveVendedor, nombre, puesto, salario};
        const connection = await getConnection();
        await connection.query("UPDATE vendedores SET ? WHERE Id = ?", [vendedores, id]);
        res.send("Actualización exitosa.");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[DELETE:id]
const deleteVendedor = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM vendedores WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getVendedores,
    getVendedor,
    addVendedor,
    putVendedor,
    deleteVendedor
};