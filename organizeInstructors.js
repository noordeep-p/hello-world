const organizeInstructors = function(instructors) {
  let instrucIos = [];
  let instrucWeb = [];
  let instrucBlockchain = [];
  let orgInstruc = {};
  for(instructor of instructors){
    if(instructor.course === "iOS"){
      instrucIos.push(instructor.name)
      orgInstruc.iOS = instrucIos;
    }
    if(instructor.course === "Web"){
      instrucWeb.push(instructor.name);
      orgInstruc.Web = instrucWeb;
    }
    if(instructor.course === "Blockchain"){
      instrucBlockchain.push(instructor.name);
      orgInstruc.Blockchain = instrucBlockchain;
    }    
  }
  return orgInstruc;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));