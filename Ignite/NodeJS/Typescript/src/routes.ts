import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseServer';




export function createCourse(req: Request, res: Response) {
   
    CreateCourseService.execute({
        educator: "Matteus",
        name: "NodeJS",
        // duration: 10, (vai utilizar o número default que é 4 )
    });

    CreateCourseService.execute({
        educator: "Varlesse",
        name: "PHP",
        duration: 2,
    });
    
    return res.send()
}