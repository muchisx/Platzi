import User from "./modules/User.mjs";
import Comment from "./modules/Comment.mjs";
import StudentFree from "./modules/StudentFree.mjs";
import StudentBasic from "./modules/StudentBasic.mjs";
import StudentPro from "./modules/StudentPro.mjs";
import LearningPath from "./modules/LearningPath.mjs";
import Course from "./modules/Course.mjs";
import Lesson from "./modules/Lesson.mjs";
import Teacher from "./modules/Teacher.mjs";


const lessonThirds = new Lesson({
    name: "Rule of Thirds",
    videoID: "AAA123"
})

const lessonGoldenRatio = new Lesson({
    name: "The Golden Ratio",
    videoID: "AAA124"
})

const courseComposition = new Course({
    name: "Composition",
    lessons: [
        lessonThirds,
        lessonGoldenRatio,
    ],
})
const courseColorTheory = new Course({
    name: "Color Theory",
})
const courseLayoutDesign = new Course({
    name: "Layout Design",
    isFree: true,
})
const courseArtHistory = new Course({
    name: "Art History",
})
const courseEquilibrium = new Course({
    name: "Equilibrium",
    isFree: true,
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


const pepe = new StudentFree({
    name: "pepe",
    username: "pepex",
    email: "pepe@pepe.com",
    twitter: "pepetw",
    learningPaths: [
        designSchool,
        cookingSchool,
    ],
})

pepe.trialPeriod = "30 days"

pepe.approveCourse(courseEquilibrium);
pepe.approveCourse(courseLayoutDesign);

const mike = new StudentBasic({
    name: "mike",
    username: "mikex",
    email: "mike@mike.com",
    instagram: "mikeig",
    learningPaths: [
        designSchool,
        photographySchool,
    ]
})

const aTeacher = new Teacher({
    name: "A Teacher",
    username: "ateacherx",
    email: "ateacher@teacher.com",
    facebook: "dateacha"
})


pepe.postUserComment("I should be marked as a comment student")
aTeacher.postUserComment("I should be marked as a comment teacher")


mike.approveCourse(courseCameraFundamentals)
mike.approveCourse(courseHistogramEvaluation)

console.log(pepe, '    <- pepe');
console.log(mike, '    <- mike');
console.log(aTeacher, '    <- aTeacher');

