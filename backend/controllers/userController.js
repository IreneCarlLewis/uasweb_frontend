import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import crypto from "crypto"

// Mengambil daftar semua pengguna
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params; // Ambil ID dari params

    try {
        // Cari user berdasarkan ID
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        // Hapus password dari response
        res.status(200).json({
            name: user.name,
            email: user.email,
        });
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
            return res.status(404).json({ message: "User not found!" });
        }

        // Verifikasi password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid password!" });
        }

        // Hasilkan token acak
        const token = crypto.randomBytes(16).toString("hex");

        // Kirimkan data user dan token ke client
        res.status(200).json({
            message: "Login successful!",
            user: { id: user.id, name: user.name, email: user.email, phone: user.phone, address: user.address },
            token, // Sertakan token dalam respons
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mengedit pengguna berdasarkan ID
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, phone, address } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        // Perbarui hanya field yang diberikan
        if (email) user.email = email;
        if (phone) user.phone = phone;
        if (address) user.address = address;

        const updatedUser = await user.save();
        res.status(200).json({
            message: "User updated successfully!",
            user: { name: updatedUser.name, email: updatedUser.email, phone: updatedUser.phone, address: updatedUser.address }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params; // Ambil ID dari params

    try {
        // Cari dan hapus pengguna berdasarkan ID
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        res.status(200).json({ message: "User deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};