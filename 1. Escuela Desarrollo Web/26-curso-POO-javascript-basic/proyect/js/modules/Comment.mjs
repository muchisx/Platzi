export default class Comment {
    constructor({
        content,
        userName,
        userRole = "Student",
    }) {
        this.content = content;
        this.userName = userName;
        this.userRole = userRole;
    }

    postComment() {
        console.log(`${this.userName} - ${this.userRole}`);
        console.log(`${this.content}`);
    }
}