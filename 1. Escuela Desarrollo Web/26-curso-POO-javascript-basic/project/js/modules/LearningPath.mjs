export default class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this._name = name;
        this.courses = courses;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.includes("Sausage")) {
            console.error(newName, '    <- newName must not include Sausage');
        } else {
            this._name = newName;
            
        }
    }
}