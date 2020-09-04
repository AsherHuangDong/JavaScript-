type NameOrNameArray = string | string[];

function createName(name: NameOrNameArray) {
  if (typeof name === "string") {
    return name;
  } else {
    return name.join(" ");
  }
}

let greetingMessage = `Greetings, ${createName(["Sam", "Smith"])}`;
console.log(greetingMessage);
