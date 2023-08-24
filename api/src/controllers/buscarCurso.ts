import { prisma } from "../db";
import { Request, Response } from "express";

async function buscarCurso(_request: Request, response: Response) {
    prisma.public_tb_courses.findMany({
        select: {
            id_course: true,
            name_course: true,
            teacher_course: true,
            category_course: true,
            description_course: true,
            image_course: true,
            activated_course: true
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

export default buscarCurso;