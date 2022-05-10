export default class Course {
    constructor({
        name,
        lessons = [],
    }) {
        this.name = name;
        this.lessons = lessons;
    }
}