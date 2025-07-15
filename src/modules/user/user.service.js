import { UserStatus } from "./user.enum"
import User from "./user.model";


export const createUser = async(payload) => {
    if (!payload.status) payload.status = UserStatus.ACTIVE;

    return User.create(payload);
}

export const findById = async (id) => User.findById(id);

export const findByEmail = async (email) => User.findOne({ email });

export const listUsers = async ({ page=1, limit =20 }) => {
    const skip = (page - 1) * limit;
    const users = await User.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
    const total = await User.countDocuments();
    return { users, total, page, limit };
}


