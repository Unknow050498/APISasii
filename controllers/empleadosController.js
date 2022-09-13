import { getConnection } from "../db/database";

// [GET]
const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleados");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [GET:id] 
const getEmpleado = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleados WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [POST]
const addEmpleado = async (req, res) => {
    try {
        const {Nombre, Apellido, Telefono, Email, Rol, Sede} = req.body;

        if(Nombre==undefined || Apellido==undefined || Telefono==undefined || Email==undefined || Rol==undefined || Sede==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const empleado = {Nombre, Apellido, Telefono, Email, Rol, Sede} ;
        const connection = await getConnection();
        await connection.query("INSERT INTO empleados SET ?", empleado);
        res.send("Empleado agregado.");
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[PUT:id]
const putEmpleado = async (req, res) => {
    try {
        const {id} = req.params;
        const {Nombre, Apellido, Telefono, Email, Rol, Sede} = req.body;

        if(id == undefined || Nombre==undefined || Apellido==undefined || Telefono==undefined || Email==undefined || Rol==undefined || Sede==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const empleado = {id, Nombre, Apellido, Telefono, Email, Rol, Sede};
        const connection = await getConnection();
        await connection.query("UPDATE empleados SET ? WHERE Id = ?", [empleado, id]);
        res.send("Actualización exitosa.");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[DELETE:id]
const deleteEmpleado = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM empleados WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getEmpleados,
    getEmpleado,
    addEmpleado,
    putEmpleado,
    deleteEmpleado
};