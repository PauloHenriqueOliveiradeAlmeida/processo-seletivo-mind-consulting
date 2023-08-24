import { prisma } from "../db";
import { Request, Response } from "express";

async function desativarCurso(request: Request, response: Response) {
    const { id, activated } = request.body;
    prisma.public_tb_courses.update({
        where: {
            id_course: id
        },
        data: {
            activated_course: !activated
        }

    }).then((data) => {
        return response.status(200).json(data);

    }).catch((err) => {
        return response.status(500).json(err);
    });

}

export default desativarCurso;