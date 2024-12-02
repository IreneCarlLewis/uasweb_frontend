import User from "../models/userModel.js";
import bcrypt from 'bcrypt';


export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hash password dengan bcrypt
        const saltRounds = 10; // Tingkat kesulitan hashing
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Buat user baru dengan password yang sudah di-hash
        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword 
        });

        await newUser.save();
        res.status(201).json({ 
            message: 'User created successfully!', 
            user: { name: newUser.name, email: newUser.email } // Jangan kirim password ke response
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
