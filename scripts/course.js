const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const certificate = document.querySelector(".certificate");
const h2 = document.querySelector(".certificate_h2");

allButton = document.createElement("button");
cseButton = document.createElement("button");

wddButton = document.createElement("button");
buttonDiv = document.createElement("div");


allButton.textContent = "All";
cseButton.textContent = "CSE";
wddButton.textContent = "WDD";

buttonDiv.append(allButton, cseButton, wddButton)
certificate.appendChild(buttonDiv)
courseFigure = document.createElement("figure");

function DisplayCourses(courses){
    courses.forEach((course) => {
        courseSubject = document.createElement("p");
        courseCredits = document.createElement("p");

        courseNumber = document.createElement("p");
        courseDiv = document.createElement("div");

        courseSubject.textContent = course.subject;
        courseNumber.textContent = `${course.number}`;
        courseNumber.classList.add("number");

        courseCredits.textContent = `credits: ${course.credits}`;
        courseCredits.classList.add("credits");

        courseDiv.append(courseSubject, courseNumber, courseCredits);
        courseDiv.classList.add("courses");

        if (course.completed){
            courseDiv.style.backgroundColor = "rgb(112, 202, 214)"
        }
        else{
            courseDiv.style.backgroundColor = "rgb(204, 209, 209)"
        }
        courseFigure.append(courseDiv);
    });
certificate.appendChild(courseFigure)
};

function clear(element){
    element.innerHTML = "";
}

allButton.addEventListener("click", () =>{
    clear(courseFigure);
    DisplayCourses(courses);
});

cseButton.addEventListener("click", () =>{
    const filteredCourses = courses.filter((course) => course.subject == 'CSE')
    clear(courseFigure);
    DisplayCourses(filteredCourses);
});

wddButton.addEventListener("click", () =>{
    const filteredCourses = courses.filter((course) => course.subject == 'WDD')
    clear(courseFigure);
    DisplayCourses(filteredCourses);
});

DisplayCourses(courses);