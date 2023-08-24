import { prisma } from "../db";
import { Request, Response } from "express";

async function cadastrarCurso(request: Request, response: Response) {
    const { name, teacher, category, description, image, idUser } = request.body;

    prisma.public_tb_courses.create({
        data: {
            name_course: name,
            teacher_course: teacher,
            category_course: category,
            description_course: description,
            image_course: image,
            activated_course: true,
            fk_id_user: idUser
        }

    }).then((data) => {
        return response.status(201).json(data);

    }).catch((err) => {
        return response.status(500).json(err);
    });

}

export default cadastrarCurso;