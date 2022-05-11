import User from "./User.mjs";

export default class StudentFree extends User {
    constructor(
        props,
        trialPeriod,
    ) {
        super(props);
        this.trialPeriod = trialPeriod;
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) this.approvedCourses.push(newCourse);
        else console.warn(newCourse, '    <- newCourse is not a Free Course');
    }
}