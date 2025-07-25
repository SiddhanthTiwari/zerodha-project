require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");

const {verifyToken}=require("./verifyToken");
const { createSecretToken } = require("./SecretToken");
const UserModel = require("./schemas/UserSchema");
const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors({
    origin: [
        "http://localhost:3001",
        "https://zerodha-frontend.onrender.com",
        "https://zerodha-dashboard-2cvo.onrender.com"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(" Database is connected");
    })
    .catch((err) => {
        console.error(" Database connection error:", err);
    });

// app.get("/addHoldings", async (req, res) => {
//     let tempHoldings = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];
//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingModel({
//             name: item.name,
//             qty:  item.qty,
//             avg:  item.avg,
//             price:  item.price,
//             net:  item.net,
//             day:  item.day,
//         });

//         newHolding.save();
//     });
//     res.send("Done!!");
// });

// app.get("/addPosition", async (req, res) => {
//     let tempPosition = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];
//     tempPosition.forEach((item)=>{
//     let newPosition=new PositionModel({
//         product: item.product,
//     name: item.name,
//     qty:item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss:item.isLoss,
//     });

//     newPosition.save();
//     });
//     res.send("Done");
// });

app.get("/allHoldings",verifyToken,async (req, res) => {
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions",verifyToken, async (req, res) => {
    let allPositions = await PositionModel.find({});
    res.json(allPositions);
});

app.get("/newOrder",verifyToken, async (req, res) => {
    let allOrders = await OrderModel.find({ type: "sell" });
    res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    await newOrder.save();

    res.send("Order is Saved!");
});

app.post("/signup", async (req, res) => {
    try {
        const { email, password, confirmPassword, username } = req.body;

        console.log("Signup data:", req.body);

        if (!email || !password || !confirmPassword || !username) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match",
                success: false
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters long",
                success: false
            });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                success: false
            });
        }

        // Create new user (password will be hashed automatically by pre-save hook)
        const user = await UserModel.create({
            email,
            password,
            username
        });

        // Generate token
        const token = createSecretToken(user._id);

        // Set cookie
        res.cookie("token", token, {
    withCredentials: true,
    httpOnly: true,
    secure: true,
    sameSite: "None", // important for cross-site cookies
    maxAge: 24 * 60 * 60 * 1000 // 24h
});

        // Send response (exclude password)
        const userResponse = {
            _id: user._id,
            email: user.email,
            username: user.username
        };

        res.status(201).json({
            message: "User signed up successfully",
            success: true,
            user: userResponse,
        });

    } catch (error) {
        console.error("Signup error:", error);

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                message: messages.join(', '),
                success: false
            });
        }

        // Handle duplicate key error
        if (error.code === 11000) {
            return res.status(400).json({
                message: "Email already exists",
                success: false
            });
        }

        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
});

app.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields are required', success: false })
        }
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ message: 'Incorrect password or email', success: false })
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.json({ message: 'Incorrect password or email', success: false })
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true,
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
        next()
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
});

app.listen(PORT, () => {
    console.log("Port is running");
})