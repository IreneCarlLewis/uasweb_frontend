import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

// Mengambil daftar semua pengguna
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Membuat pengguna baru
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

// Login user berdasarkan username dan password
export const loginUser = async (req, res) => {
    const { name, password } = req.body;

    try {
        // Cari user berdasarkan username
        const user = await User.findOne({ name });
        if (!user) {
            console.log("User not found in database.");
            return res.status(404).json({ message: "User not found!" });
        }
        console.log("User found in database:", user.name); // Log user yang ditemukan

        // Verifikasi password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            console.log("Password mismatch.");
            return res.status(400).json({ message: "Invalid password!" });
        }

        // Jika berhasil login
        res.status(200).json({ 
            message: "Login successful!", 
            user: { name: user.name, email: user.email } // Jangan kirim password ke response
        });
    } catch (error) {
        console.error("Error during login:", error); // Log error detail
        res.status(500).json({ message: error.message });
    }
};
