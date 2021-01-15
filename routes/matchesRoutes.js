import express from 'express';
import {getMatches, addMatch} from '../controllers/matchesControllers.js'

const router = express.Router();

// api/matches
router.route('/').get(getMatches).post(addMatch)

export default router;