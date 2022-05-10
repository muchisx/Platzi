import Student from "./modules/Student.js";
import LearningPath from "./modules/LearningPath.js";
import Course from "./modules/Course.js";
import Lessons from "./modules/Lessons.js";


const courseComposition = new Course({
    name: "Composition",
})
const courseColorTheory = new Course({
    name: "Color Theory",
})
const courseLayoutDesign = new Course({
    name: "Layout Design",
})
const courseArtHistory = new Course({
    name: "Art History",
})
const courseEquilibrium = new Course({
    name: "Equilibrium",
})
const courseFundamentalsChemistry = new Course({
    name: "Fundamentals of Chemistry",
})
const courseFoodChemistry = new Course({
    name: "Food Chemistry",
})
const courseCatering = new Course({
    name: "Catering",
})
const courseBiologyFundamentals = new Course({
    name: "Biology Fundamentals",
})
const courseInternationalCuisine = new Course({
    name: "International Cuisine",
})
const courseLighting = new Course({
    name: "Lighting",
})
const courseCameraFundamentals = new Course({
    name: "Camera Fundamentals",
})
const coursePhotographyHistory = new Course({
    name: "Photography History",
})
const courseHistogramEvaluation = new Course({
    name: "Histogram Evaluation",
})


const designSchool = new LearningPath({
    name: "Design School",
    courses: [
        courseComposition,
        courseColorTheory,
        courseLayoutDesign,
        courseArtHistory,
        courseEquilibrium,
    ],
})

const cookingSchool = new LearningPath({
    name: "Cooking School",
    courses: [
        courseFundamentalsChemistry,
        courseFoodChemistry,
        courseCatering,
        courseBiologyFundamentals,
        courseInternationalCuisine,
    ],
})

const photographySchool = new LearningPath({
    name: "Photography School",
    courses: [
        courseComposition,
        courseColorTheory,
        courseLighting,
        courseArtHistory,
        courseEquilibrium,
        courseCameraFundamentals,
        coursePhotographyHistory,
        courseHistogramEvaluation,
    ],
})


const pepe = new Student({
    name: "pepe",
    username: "pepex",
    email: "pepe@pepe.com",
    twitter: "pepetw",
    LearningPaths: [
        designSchool,
        cookingSchool,
    ],
})

const generic = new Student({
    name: "generic",
    username: "genericx",
    email: "generic@generic.com",
    instagram: "genericig",
    LearningPaths: [
        designSchool,
        photographySchool,
    ]

})

console.log(pepe, '    <- pepe');
console.log(generic, '    <- generic');

