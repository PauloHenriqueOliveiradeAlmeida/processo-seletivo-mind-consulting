import { prisma } from "../db";
import { Request, Response } from "express";

async function buscarCursoNome(request: Request, response: Response) {
    const name = request.query.name?.toString();
    prisma.public_tb_courses.findMany({
        select: {
            id_course: true,
            name_course: true,
            teacher_course: true,
            category_course: true,
            description_course: true,
            image_course: true
        },
        where: {
            name_course: {
                contains: name,
                mode: "insensitive"
            }
        },
        orderBy: [
            {
                activated_course: "desc"
            },
            {
                name_course: "asc"
            }
        ]

    }).then((data) => {
        return response.status(200).json(data);

    }).catch((err) => {
        return response.status(500).json(err);
    });

}

export default buscarCursoNome;