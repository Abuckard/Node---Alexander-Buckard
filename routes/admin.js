import { Router } from "express";
import nedb from 'nedb-promises';

const adminDB = new nedb({ filename: 'admin.db', autoload: true });
const router = Router();

const admin = [
    { id: 1, username: 'admin', password: 'admin', admin: true },
];

const initializeAdminUser = async () => {
    const existingAdmin = await adminDB.findOne({ username: 'admin' });

    if (!existingAdmin) {
        await adminDB.insert(admin);
        console.log("Admin user created");
    } else {
        console.log("Admin user already exists");
    }
};

// För att lägga till en ny admin så ändrar man ovan i const admin och sen aktiverar man funktionen initializeAdminUser
// initializeAdminUser();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log("Received login request with:", { username, password });

    const user = await adminDB.findOne({ username, password });
    console.log("User found:", user);

    if (!user) {
        return res.status(401).send('Invalid credentials');
    }

    global.currentUser = user;  // Spara inloggad användare i globalt tillstånd
    res.send('Login successful');
});

export default router;