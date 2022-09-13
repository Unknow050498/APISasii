import { getConnection } from "../db/database";

// [GET]
const getFolios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM folios");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [GET:id] 
const getFolio = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM folios WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [POST]
const addFolio = async (req, res) => {
    try {
        const {noFolio} = req.body;

        if(noFolio==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const folio = {noFolio} ;
        const connection = await getConnection();
        await connection.query("INSERT INTO folios SET ?", folio);
        res.send("Folio agregado.");
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[PUT:id]
const putFolio = async (req, res) => {
    try {
        const {id} = req.params;
        const {noFolio} = req.body;

        if(id == undefined || noFolio==undefined){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const folio = {id, noFolio};
        const connection = await getConnection();
        await connection.query("UPDATE folios SET ? WHERE Id = ?", [folio, id]);
        res.send("Actualización exitosa.");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[DELETE:id]
const deleteFolio = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM folios WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getFolios,
    getFolio,
    addFolio,
    putFolio,
    deleteFolio
};