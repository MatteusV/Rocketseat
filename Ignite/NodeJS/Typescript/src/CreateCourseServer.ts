// 
// name - string 
// duration - number
// educator - string

interface Course {
    name: string,
    duration?: number,
    educator: string
}

class CreateCourseService {

    execute({ duration = 4, name, educator }:Course) {
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService();