import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { UserRole, UserStatus } from "./user.enum";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
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
    return bcrypt.compare(enteredPassword, this.password);
};

const User = model("User", userSchema);
export default User;