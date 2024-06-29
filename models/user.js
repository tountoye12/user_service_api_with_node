
import {sequelize} from '../db.js';

import {DataTypes, UUIDV4} from 'sequelize'

import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const User  = sequelize.define('User',{
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER
    }
});




// sequelize.sync()
//     .then( () => console.log("User table created successfully!"))
//     .catch((err) => console.error("Unable to create table : ", err));

export default User;