const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function(email) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: "Please enter a valid email address"
        }
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
        trim: true,
        minlength: [3, "Username must be at least 3 characters long"],
        maxlength: [30, "Username must be less than 30 characters"]
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    }
}, {
    timestamps: true // This will add createdAt and updatedAt fields
});

// Hash password before saving
userSchema.pre("save", async function(next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified("password")) return next();
    
    try {
        // Hash password with cost of 12
        this.password = await bcrypt.hash(this.password, 12);
        next();
    } catch (error) {
        next(error);
    }
});

// Instance method to check password
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
userSchema.methods.toJSON = function() {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
};

module.exports = mongoose.model("User", userSchema);