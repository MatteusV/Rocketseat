"use strict";
// 
// name - string 
// duration - number
// educator - string
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ duration = 4, name, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
