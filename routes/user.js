
import express from 'express';

import {getAllUsers,addUser, getUserById, updateUser, deleteUser} 
    from '../controllers/user.js'
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);

router.get('/:id', getUserById);

router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);



export default router