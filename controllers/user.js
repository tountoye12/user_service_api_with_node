

import User from '../models/user.js'

import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export const addUser =  async (req, res) => {

    const {firstName, lastName, age} = req.body;
    const newUser = User.build(
        {   
            'id': uuidv4(),
            'firstName': firstName,
            'lastName': lastName,
            'age': age
        }
    )
    await newUser.save();
    res.status(201).send(newUser); 
}

export const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.status(200).send(users);
};

export const getUserById = async (req, res) => {
    const {id}  = req.params;
    const  user = await User.findOne({
        where: {
            id: id
        }
    });
    console.log(user);
    res.status(200).send(user)
}

export const deleteUser = (req, res) => {
    res.send(" user deleted")
}

export const updateUser = (req, res) => {
    res.send("user updated id")
}