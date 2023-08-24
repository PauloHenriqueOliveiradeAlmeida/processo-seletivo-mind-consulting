import { prisma } from "../db";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { Request, Response } from "express";

async function cadastrarUsuario(request: Request, response: Response) {
    const { name, email, password } = request.body;

    prisma.public_tb_users.create({
        data: {
            name_user: name,
            email_user: email,
            password_user: hashPassword(password)
        }

    }).then((data) => {
        return response.status(201).json({token: signJWTToken(data.id)});
        
    }).catch((err) => {
        return response.status(500).json(err);
    });


}

function hashPassword(password: string) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12.3));
}

function signJWTToken(id: number) {
    return sign({id}, process.env.JWT_SECRET!, {
        expiresIn: 60 * 60 * 24
    });
}

export default cadastrarUsuario;