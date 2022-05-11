export default class Course {
    constructor({
        name,
        lessons = [],
        isFree = false,
    }) {
        this._name = name;
        this.lessons = lessons;
        this.isFree = isFree;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.includes("Ilegal")) {
            console.error(newName, '    <- newName must not include Ilegal');
        } else {
            this._name = newName;
        }
    }
}