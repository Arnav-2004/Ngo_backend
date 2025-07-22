import { UserStatus } from "./user.enum"
import User from "./user.model";


export const createUser = async(payload) => {
    if (!payload.status) payload.status = UserStatus.ACTIVE;

    return User.create(payload);
}

export const findById = async (id) => User.findById(id);

export const findByEmail = async (email) => User.findOne({ email });

export const listUsers = async ({ page=1, limit =20 }) => {
    const p = parseInt(page, 20) || 1;
    const l = parseInt(limit, 10) || 20;
    const skip = (page - 1) * l;
    const users = await User.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(l);
    const total = await User.countDocuments();
    return { users, total, page: p, limit: l };
}


