import { body } from "express-validator";

export const createUserValidators = [
    body("email").exists().withMessage("Email is required")
    .isEmail().withMessage("Must be a valid email"),
    
    body("password").exists().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must be atleast 6 characters"),
    
    body("role").optional().isIn(["admin","user"]).withMessage("Role must be 'admin' or 'user'"),
];
