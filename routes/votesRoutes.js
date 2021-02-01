import express from 'express';
import {getVotes} from '../controllers/votesControllers.js'

const router = express.Router();

// api/matches
router.route('/').get(getVotes)

export default router;