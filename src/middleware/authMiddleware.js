import { decodeToken } from "../utils/auth.utils.js";
import { generateAPIError } from "../errors/apiError.js";
import { errorMessage } from "../constant/messages.js";
import User from "../modules/user/user.model.js";
import { UserStatus } from "../modules/user/user.enum.js";

const verifyTokenExists = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    const decoded = await decodeToken(req, res, next);
    if (decoded) {
      req.decodedToken = decoded;
      return next();
    }
  }

  return next();
};

const verifyUserRole = (allowedRoles) => {
  return async (req, res, next) => {
    const decoded = await decodeToken(req, res, next);

    if (decoded) {
      const user = await User.findOne({
        _id: decoded.userId,
        isDeleted: false,
      });

      if (!user) {
        return await generateAPIError(errorMessage.userNotFoundWithId, 404);
      }

      if (user?.status?.status === UserStatus.INACTIVE) {
        return await generateAPIError(errorMessage.userAccountBlocked, 403);
      }

      if (allowedRoles.length === 0) {
        req.user = user;
        req.user.currentRole = decoded.role;
        return next();
      }

      const hasAccess = allowedRoles.includes(decoded.role);

      if (hasAccess) {
        req.user = user;
        req.user.currentRole = decoded.role;
        return next();
      }

      res.status(401).send({ message: "Not Authorized" });
    }
  };
};

export { verifyTokenExists, verifyUserRole };
