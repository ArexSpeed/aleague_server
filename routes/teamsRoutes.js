import express from 'express';
import {addTeam, getTeams, showTeam, editTeam} from '../controllers/teamsControllers.js'
const router = express.Router();

// /api/teams
router.route('/').get(getTeams).post(addTeam)
router.route('/:id').get(showTeam).put(editTeam)

export default router;
