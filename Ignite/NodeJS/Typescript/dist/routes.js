"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseServer_1 = __importDefault(require("./CreateCourseServer"));
function createCourse(req, res) {
    CreateCourseServer_1.default.execute({
        educator: "Matteus",
        name: "NodeJS",
        // duration: 10, (vai utilizar o número default que é 4 )
    });
    CreateCourseServer_1.default.execute({
        educator: "Varlesse",
        name: "PHP",
        duration: 2,
    });
    return res.send();
}
exports.createCourse = createCourse;
