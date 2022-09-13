import { getConnection } from "../db/database";

// [GET]
const getInventarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM inventario");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [GET:id] 
const getInventario = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM inventario WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [POST]
const addInventario = async (req, res) => {
    try {
        const {clave, producto, presentacion, precio, costo, montounit, cantidad, limite_inferior, iva} = req.body;

        if(clave==undefined || producto==undefined || presentacion==undefined || precio==undefined || costo==undefined ||montounit==undefined || cantidad==undefined || limite_inferior==undefined || iva==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const inventario = {clave, producto, presentacion, precio, costo, montounit, cantidad, limite_inferior, iva} ;
        const connection = await getConnection();
        await connection.query("INSERT INTO inventario SET ?", inventario);
        res.send("Producto agregado.");
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[PUT:id]
const putInventario = async (req, res) => {
    try {
        const {id} = req.params;
        const {clave, producto, presentacion, precio, costo, montounit, cantidad, limite_inferior, iva} = req.body;

        if(id==undefined || clave==undefined || producto==undefined || presentacion==undefined || precio==undefined || costo==undefined ||montounit==undefined || cantidad==undefined || limite_inferior==undefined || iva==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const inventario = {clave, producto, presentacion, precio, costo, montounit, cantidad, limite_inferior, iva};
        const connection = await getConnection();
        await connection.query("UPDATE inventario SET ? WHERE Id = ?", [inventario, id]);
        res.send("Actualización exitosa.");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[DELETE:id]
const deleteInventario = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM inventario WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getInventarios,
    getInventario,
    addInventario,
    putInventario,
    deleteInventario
};