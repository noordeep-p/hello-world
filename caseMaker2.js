const camel = function(text) {
  let newCase = [];
  let index = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newCase.push(text[i + 1].toUpperCase());
      index.push(i + 1);
    } else {
      newCase.push(text[i]);
    }
  }
  for (let i = 0; i < index.length; i++) {
    newCase[index[i]] = "";
  }
  return (newCase.join(''));
};

const pascal = function(text) {
  let newCase = [];
  let index = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newCase.push(text[i + 1].toUpperCase());
      index.push(i + 1);
    } else {
      newCase.push(text[i]);
    }
  }
  for (let i = 0; i < index.length; i++) {
    newCase[index[i]] = "";
  }
  newCase[0] = newCase[0].toUpperCase();
  return (newCase.join(''));
};

const snake = function(text) {
  let newCase = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newCase.push('_');
    } else {
      newCase.push(text[i]);
    }
  }
  return (newCase.join(''));
};

const kebab = function(text) {
  let newCase = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newCase.push('-');
    } else {
      newCase.push(text[i]);
    }
  }
  return (newCase.join(''));
};

const title = function(text) {
  let newCase = [];
  let index = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newCase.push(text[i]);
      index.push(i + 1);
    } else {
      newCase.push(text[i]);
    }
  }
  for (let i = 0; i < index.length; i++) {
    newCase[index[i]] = newCase[index[i]].toUpperCase();
  }
  newCase[0] = newCase[0].toUpperCase();
  return (newCase.join(''));
};

const vowel = function(text) {
  let newCase = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
      newCase.push(text[i].toUpperCase());
    } else {
      newCase.push(text[i]);
    }
  }
  return (newCase.join(''));
};

const consonant = function(text) {
  let newCase = [];
  for (let i = 0; i < text.length; i++) {
    if (!(text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u")) {
      newCase.push(text[i].toUpperCase());
    } else {
      newCase.push(text[i]);
    }
  }
  return (newCase.join(''));
};

const upper = function(text) {
  return text.toUpperCase();
};

const lower = function(text) {
  return text.toLowerCase();
};

const makeCase = function(text, cases) {
  let returnText = text;
  let casingStyle = [];
  if (typeof(cases) !== "object") {
    casingStyle.push(cases);
  } else {
    casingStyle = cases;
  }
  if (casingStyle.length > 1) {
    const sortingArr = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
    casingStyle.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b));
  }

  for (const cases of casingStyle) {
    switch (cases) {
    case "camel":
      returnText = camel(returnText);
      break;
    case "pascal":
      returnText = pascal(returnText);
      break;
    case "snake":
      returnText = snake(returnText);
      break;
    case "kebab":
      returnText = kebab(returnText);
      break;
    case "title":
      returnText = title(returnText);
      break;
    case "vowel":
      returnText = vowel(returnText);
      break;
    case "consonant":
      returnText = consonant(returnText);
      break;
    case "upper":
      returnText = upper(returnText);
      break;
    case "lower":
      returnText = lower(returnText);
      break;
    }
  }
  return returnText;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
