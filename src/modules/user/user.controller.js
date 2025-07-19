import { errorWrapper } from "../../middleware/errorWrapper";
import { responseUtils } from "../../utils/response.utils";
import { UserRole } from "./user.enum";
import { createUser, findByEmail, findById, listUsers } from "./user.service";
import { stripUserData } from "./user.utils";
 
export const addUser = errorWrapper(async (req, res) => {
    const adminId = req.user.sub;
    const { email, password, role = UserRole.USER } = req.body;

    if (role === UserRole.ADMIN) throw { statusCode: 403, message: "Cannot create another admin" };

    if (await findByEmail(email)) throw { statusCode: 409, message: "Email already exists" };

    const user = await createUser({
        email,
        password,
        role,
        createdBy: adminId
    });

    responseUtils.success(res, {
        status: 201,
        data: stripUserData(user),
    });
});

export const getUsers = errorWrapper(async (req, res) => {
    const {
        users,
        total,
        page,
        limit
    } = await listUsers(req.query);

    responseUtils.success(res, {
        status: 200,
        data: {
            users: users.map(stripUserData), total, page, limit
        },
    });
});

export const getUser = errorWrapper(async (req, res) => {
    const user = await findById(req.params.id);

    if(!user) throw {
        statusCode: 404,
        message: "User not found"
    };

    responseUtils.success(res, {
        status: 200,
        data: stripUserData(user),
    });
});