
// Rectangle

const rectangleLengthInput = document.getElementById('rectangleLengthInput');
const rectangleWidthInput = document.getElementById('rectangleWidthInput');

const rectangleResult = document.getElementById('rectangle-result');


function launchCalculateRectangleArea() {
    const rectangleWidthInputToNumber = parseInt(rectangleWidthInput.value);
    const rectangleLengthInputToNumber = parseInt(rectangleLengthInput.value);
    calculateRectangleArea(rectangleLengthInputToNumber, rectangleWidthInputToNumber);
}

function launchCalculateRectanglePerimeter() {
    const rectangleWidthInputToNumber = parseInt(rectangleWidthInput.value);
    const rectangleLengthInputToNumber = parseInt(rectangleLengthInput.value);
    calculateRectanglePerimeter(rectangleLengthInputToNumber, rectangleWidthInputToNumber);
}

function launchCalculateRectangleDiagonal() {
    const rectangleWidthInputToNumber = parseInt(rectangleWidthInput.value);
    const rectangleLengthInputToNumber = parseInt(rectangleLengthInput.value);
    calculateRectangleDiagonal(rectangleLengthInputToNumber, rectangleWidthInputToNumber);
}




function calculateRectangleArea(rectangleSideLength, rectangleSideWidth) {
    let rectangleArea = rectangleSideWidth * rectangleSideLength;
    rectangleResult.innerText = `Area: ${rectangleArea}`;

}

function calculateRectanglePerimeter(rectangleSideLength, rectangleSideWidth) {
    let rectanglePerimeter = 2*(rectangleSideWidth + rectangleSideLength);
    rectangleResult.innerText = `Perimeter: ${rectanglePerimeter}`;

}

function calculateRectangleDiagonal(rectangleSideLength, rectangleSideWidth) {
    let rectangleDiagonal = Math.sqrt(rectangleSideWidth**2 + rectangleSideLength**2);
    rectangleResult.innerText = `Diagonal: ${rectangleDiagonal}`;
}





// Triangle

const triangleSideAInput = document.getElementById('triangleSideAInput');
const triangleSideBInput = document.getElementById('triangleSideBInput');
const triangleSideCInput = document.getElementById('triangleSideCInput');

const triangleResult = document.getElementById('triangle-result');


function launchCalculateTriangleArea() {
    const triangleSideAInputToNumber = parseInt(triangleSideAInput.value);
    const triangleSideBInputToNumber = parseInt(triangleSideBInput.value);
    const triangleSideCInputToNumber = parseInt(triangleSideCInput.value);
    calculateTriangleArea(triangleSideAInputToNumber, triangleSideBInputToNumber, triangleSideCInputToNumber);
}

function launchCalculateTrianglePerimeter() {
    const triangleSideAInputToNumber = parseInt(triangleSideAInput.value);
    const triangleSideBInputToNumber = parseInt(triangleSideBInput.value);
    const triangleSideCInputToNumber = parseInt(triangleSideCInput.value);
    calculateTrianglePerimeter(triangleSideAInputToNumber, triangleSideBInputToNumber, triangleSideCInputToNumber);
}


function calculateTriangleArea(triangleSideA, triangleSideB, triangleSideC) {
    let triangleSemiPerimeter = (triangleSideA + triangleSideB + triangleSideC)/2;
    let triangleArea = Math.sqrt(triangleSemiPerimeter*(triangleSemiPerimeter - triangleSideA)*(triangleSemiPerimeter - triangleSideB)*(triangleSemiPerimeter - triangleSideC))
    triangleResult.innerText = `Area: ${triangleArea}`;
}

function calculateTrianglePerimeter(triangleSideA, triangleSideB, triangleSideC) {
    let trianglePerimeter = triangleSideA + triangleSideB + triangleSideC;
    triangleResult.innerText = `Perimeter: ${trianglePerimeter}`;
}



// let triangleHeight =  2 * (triangleArea / triangleSideBase);
// triangleHeight;



// Circle


const circleRadiusInput = document.getElementById('circleRadiusInput');


const circleResult = document.getElementById('circle-result');

function launchCalculateCircleArea() {
    const circleRadiusInputToNumber = parseInt(circleRadiusInput.value);
    calculateCircleArea(circleRadiusInputToNumber);
}

function launchCalculateCircleCircumference() {
    const circleRadiusInputToNumber = parseInt(circleRadiusInput.value);
    calculateCircleCircumference(circleRadiusInputToNumber);
}

function launchCalculateCircleDiameter() {
    const circleRadiusInputToNumber = parseInt(circleRadiusInput.value);
    calculateCircleDiameter(circleRadiusInputToNumber);
}


function calculateCircleArea(cirlceRadius) {
    let circleArea = Math.PI*cirlceRadius**2;
    circleResult.innerText = `Area: ${circleArea}`;
}

function calculateCircleCircumference(cirlceRadius) {
    let circleCircumference =  2 * (Math.PI*cirlceRadius);
    circleResult.innerText = `Circumference: ${circleCircumference}`;
}

function calculateCircleDiameter(cirlceRadius) {
    let circleDiameter =  cirlceRadius / 2;
    circleResult.innerText = `Diameter: ${circleDiameter}`;
}






