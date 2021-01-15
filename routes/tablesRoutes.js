import express from 'express';
import {getTable, addTable} from '../controllers/tablesControllers.js'

const router = express.Router();

// api/tables
router.route('/').get(getTable).post(addTable)

export default router;
