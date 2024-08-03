import express from 'express';
import { getUsers, createUser, getUserId, deleteUser, updateUserId } from '../controllers/users.js';
const router = express.Router();


router.get('/', getUsers);

// post route

router.post('/', createUser );

// route for getting a specific user with id 
router.get('/:id', getUserId );


// route for deleting a user with id
router.delete('/:id', deleteUser );


// route for updating a user with id
router.patch('/:id',updateUserId);

 
export default router; 