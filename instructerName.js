const instructorWithLongestName = function(instructors) {
  let nameLong = 0;
  let longestName = {
    name: '',
    course: ''
  };

  for (const instructor of instructors) {
    if (instructor.name.length > nameLong) {
      nameLong = instructor.name.length;
      longestName.name = instructor.name;
      longestName.course = instructor.course;
    }
  } return longestName;
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));