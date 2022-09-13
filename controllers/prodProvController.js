import { getConnection } from "../db/database";

// [GET]
const getProdsProvs = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM prod_prov");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [GET:id] 
const getProdProv = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM prod_prov WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// [POST]
const addProdProv = async (req, res) => {
    try {
        const {cProv, cProd} = req.body;

        if(cProv==undefined || cProd==undefined ){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const prodProv = {cProd, cProv} ;
        const connection = await getConnection();
        await connection.query("INSERT INTO prod_prov SET ?", prodProv);
        res.send("Agregado con éxito.");
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[PUT:id]
const putProdProv = async (req, res) => {
    try {
        const {id} = req.params;
        const {cProd, cProv} = req.body;

        if(id == undefined || cProd==undefined || cProv==undefined ){
            res.status(400).json({message: "Mala petición. Porfavor llena todos los campos."})
        }

        const prodProv = {id, cProd, cProv};
        const connection = await getConnection();
        await connection.query("UPDATE prod_prov SET ? WHERE Id = ?", [prodProv, id]);
        res.send("Actualización exitosa.");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//[DELETE:id]
const deleteProdProv = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM prod_prov WHERE Id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getProdsProvs,
    getProdProv,
    addProdProv,
    putProdProv,
    deleteProdProv
};