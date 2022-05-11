import User from "./User.mjs";

export default class StudentBasic extends User {
    constructor(
        props,
    ) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}