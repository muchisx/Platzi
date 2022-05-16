


// Recursivity for deep Copying Objects

function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copy;
  
    if (Array.isArray(subject)) {
      copy = [];
    } else if (typeof subject === "object") {
      copy = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      copy[key] = deepCopy(subject[key]);
    }
  
    return copy;
}


// Abstraction and encapsulation without prototypes

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};


const muchis = deepCopy(studentBase)
console.log(muchis, '    <- muchis');

// Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

Object.seal(muchis);

// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

Object.freeze(muchis);


// Factory patterns

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  return {
    name,
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };
}

const muchis2 = createStudent({
  name: "muchis2",
  email: "muchis2email",
  age: 15,
})

console.log(muchis, '    <- muchis');



// Module Pattern y namespaces: private properties in JS


function createStudent2({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    readName() {
      return private["_name"];
    },
    changeName(newName) {
      private["_name"] = newName;
    },
  };

  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });
  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

const muchis3 = createStudent2({ email: "muchis3@frijoles.co", name: "muchis3" });
console.log(muchis3, '    <- muchis3');



// Getters & Setters

function createStudent3({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
 }
 return public;
};

const muchis4 = createStudent3({ email: "muchis4@frijoles.co", name: "muchis4" });
console.log(muchis4, '    <- muchis4');


// Duck Typing


function createLearningPath({
  name = requiredParam("name"),
  courses = [],
}) {
  const private = {
    "_name": name,
    "_courses": courses,
  };

  const public = {
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get courses() {
      return private["_courses"];
    },
  };

  return public;
}




function createStudent4({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
    "_learningPaths": learningPaths,
  };

  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get learningPaths() {
      return private["_learningPaths"];
    },
    set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn("Tu LP no tiene la propiedad name");
        return;
      }

      if (!newLP.courses) {
        console.warn("Tu LP no tiene courses");
        return;
      }

      if (!isArray(newLP.courses)) {
        console.warn("Tu LP no es una lista (*de cursos)");
        return;
      }
      
      private["_learningPaths"].push(newLP);
    },
  };

  return public;
}

const muchis5 = createStudent4({
  name: "muchis5",
  email: "muchis5email"
})


// Instance of in JS with instances and prototypes



function LearningPath({
  name = requiredParam("name"),
  courses = [],
}) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  if (isArray(learningPaths)) {
    this.learningPaths = [];
    
    for (learningPathIndex in learningPaths) {
      if (learningPaths[learningPathIndex] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[learningPathIndex]);
      }
    }
  }
}

const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });

const muchis6 = new Student({
  email: "muchis6",
  name: "muchis6",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

console.log(muchis6, '    <- muchis6');


// Private Attributes and Methods in prototypes


function LearningPath2({
  name = requiredParam("name"),
  courses = [],
}) {
  this.name = name;
  this.courses = courses;

}


function Student2({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    "_learningPaths": [],
  };

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private["_learningPaths"];
    },
    set(newLp) {
      if (newLp instanceof LearningPath2) {
        private["_learningPaths"].push(newLp);
      } else {
        console.warn("Alguno de los LPs no es una instancia dell prototipo LearningPath2");
      }
    },
  });

  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
}


const escuelaWeb2 = new LearningPath2({ name: "Escuela de WebDev" });
const escuelaData2 = new LearningPath2({ name: "Escuela de Data Science" });
const muchix7 = new Student({
  email: "muchix7ito@frijoles.co",
  name: "muchix7",
  learningPaths: [
    escuelaWeb2,
    escuelaData2,
  ],
});

console.log(muchix7, '    <- muchix7');


// Creating Static methods in Javascript


function SuperObject() {}

SuperObject.isObject = function (subject) {
  return typeof subject == "object";
}
SuperObject.deepCopy = function (subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
}



function LearningPath3({
  name = requiredParam("name"),
  courses = [],
}) {
  this.name = name;
  this.courses = courses;
}



function Student3({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    "_learningPaths": [],
  };

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private["_learningPaths"];
    },
    set(newLp) {
      if (newLp instanceof LearningPath3) {
        private["_learningPaths"].push(newLp);
      } else {
        console.warn("Alguno de los LPs no es una instancia dell prototipo LearningPath3");
      }
    },
  });

  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
}

const escuelaWeb3 = new LearningPath3({ name: "Escuela de WebDev" });
const escuelaData3 = new LearningPath3({ name: "Escuela de Data Science" });
const muchis8 = new Student3({
  email: "juanito@frijoles.co",
  name: "Juanito",
  learningPaths: [
    escuelaWeb3,
    escuelaData3,
  ],
});

