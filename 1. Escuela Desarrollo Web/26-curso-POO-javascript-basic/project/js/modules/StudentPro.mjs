import User from "./User.mjs";

export default class StudentPro extends User {
    constructor(
        props,
    ) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
        console.log(newCourse, '    <- newCourse Pro Certificate available!');
    }
}