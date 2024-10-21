const { Router } = require("express");
const schema = require("../models/Schema");
const bcrypt = require('bcrypt');
const route = Router();

var locusSignup = schema.LocusUserSignup;

route.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await locusSignup.findOne({ email });
        if (existingUser) {
            return res.status(409).send({ error: "User already exists" });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const locusUser = new locusSignup({ name, email, password: hashedPassword });
        await locusUser.save();
        res.send({ message: "Signup successful", response: "ok" });
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).send({ error: "An error occurred while signing up" });
    }
});


route.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await locusSignup.findOne({ email });
        if (!existingUser) {
            return res.status(404).send({ error: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordMatch) {
            return res.status(401).send({ error: "Invalid password" });
        }

        res.send({ message: "Login successful", response: "ok" });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send({ error: "An error occurred while logging in" });
    }
});

module.exports = route;


module.exports = route;
