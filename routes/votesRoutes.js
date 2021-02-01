import express from 'express';
import {addVotes, getVotes} from '../controllers/votesControllers.js'

const router = express.Router();

// api/votes
router.route('/').get(getVotes).post(addVotes)


export default router;