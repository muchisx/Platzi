import Comment from "./Comment.mjs";

export default class User {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this._name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    postUserComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            userName: this._name,
        });
        comment.postComment();
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if(newName.length <= 3) {
            console.error(newName, '    <- newName Must be greater than 3 characters');
        } else {
            this._name = newName;
        }
        
    }
}

