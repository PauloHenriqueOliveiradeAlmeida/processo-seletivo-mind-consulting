import { prisma } from "../db";
import { Request, Response } from "express";

async function editarCurso(request: Request, response: Response) {
    const { id, name, teacher, category, description, image } = request.body;
    prisma.public_tb_courses.update({
        where: {
            id_course: id
        },
        data: {
            name_course: name,
            teacher_course: teacher,
            category_course: category,
            description_course: description,
            image_course: image
        }

    }).then((data) => {
        return response.status(200).json(data);

    }).catch((err) => {
        return response.status(500).json(err);
    });

}

export default editarCurso;