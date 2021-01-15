import express from 'express';
import {getMatches, addMatch, editMatch} from '../controllers/matchesControllers.js'

const router = express.Router();

// api/matches
router.route('/').get(getMatches).post(addMatch)
router.route('/:id').put(editMatch)

export default router;