const chooseRecipe = function(bakeryA, bakeryB, recipes){
  let matchingRec1 = false; 
  let matchingRec2 = false;
  for(const recipe of recipes){
    for(let j = 0; j < recipe.ingredients.length; j++){
      for(let k = 0; k < bakeryA.length; k++){
        if(bakeryA[k] === recipe.ingredients[j]){
          matchingRec1 = true;
        }
      }
      for(let m = 0; m < bakeryB.length; m++){
        if(bakeryB[m] === recipe.ingredients[j]){
          matchingRec2 = true;
        }
      } 
      if(matchingRec1 && matchingRec2){
        return recipe.name; 
      }     
    } 
    matchingRec2 = false;
    matchingRec1 = false;
  } 
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));