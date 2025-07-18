import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { UserRole, UserStatus } from "./user.enum";
import { verifyValue } from "../../utils/auth.utils";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        lowercase: true,
        trim: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "Password must be atleast 6 characters"]
    },
    role: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.USER,
    },
    status: {
        type: String,
        enum: Object.values(UserStatus),
        default: UserStatus.PENDING,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: function() {
            return this.role === UserRole.USER;
        },
    },
}, { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.passwordMatch = function (enteredPassword) {
    return verifyValue(enteredPassword, this.password);
};

const User = model("User", userSchema);
export default User;