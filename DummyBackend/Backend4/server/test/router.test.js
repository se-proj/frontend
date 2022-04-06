import mongoose from 'mongoose'
import express from 'express';

import PostMessage from '../models/postMessage.js'

const deleteAllDocuments = async (req, res) => {
    try {
        await PostMessage.deleteMany({}, function (err) {
            console.log("All Documents from collection PostMessage are deleted")
            res.status(200).json({message: "All Documents from collection PostMessage are deleted"});
        })
    }
    catch(err) {
        console.log("Something went wrong while deleting all documents")
        res.status(404).json({ message: err.message })
    }
}

const router = express.Router();
router.delete('/', deleteAllDocuments);

export default router;