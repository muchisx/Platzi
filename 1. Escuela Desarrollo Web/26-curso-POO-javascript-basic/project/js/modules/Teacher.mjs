import User from "./User.mjs";
import Comment from "./Comment.mjs";

export default class Teacher extends User {
    constructor(
        props,
    ) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) this.approvedCourses.push(newCourse);
    }

    postUserComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            userName: this._name,
            userRole: "Teacher",
        });
        comment.postComment();
    }
}