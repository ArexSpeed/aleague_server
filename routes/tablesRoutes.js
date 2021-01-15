import express from 'express';
import {getTable, addTable, editTable} from '../controllers/tablesControllers.js'

const router = express.Router();

// api/tables
router.route('/').get(getTable).post(addTable)
router.route('/:id').put(editTable)

export default router;
