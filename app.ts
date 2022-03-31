console.clear();
const divElement = document.querySelector("#persons")!;

const maleNames = ["Antonio", "Manuel", "Nuno"];
const femaleNames = ["Maria", "Ana", "Carolina"];

const maleAges = [43, 15, 22];
const femaleAges = [35, 17, 5];

interface Obj {
  firstName: string;
  age: number;
}

// Sorted Logic
const merge = () => {
  const person: Obj[] = [];
  femaleNames.map((val, index) => {
    person.push({
      firstName: val,
      age: femaleAges[index],
    });
  });

  maleNames.map((val, index) => {
    person.push({
      firstName: val,
      age: maleAges[index],
    });
  });

  console.log(person);

  const adultTitle = document.createElement("h3");
  adultTitle.innerText = "Adults (Ages >= 18 years)";

  const listDivAdult = document.createElement("div");

  listDivAdult.appendChild(adultTitle);
  divElement.appendChild(listDivAdult);

  const childTitle = document.createElement("h3");
  childTitle.innerText = "Children (Ages < 18 years)";
  const listDivChild = document.createElement("div");
  listDivChild.appendChild(childTitle);
  divElement.appendChild(listDivChild);

  const adults = person
    .filter((_, i) => person[i].age >= 18)
    .forEach((adult) => {
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      const names = document.createTextNode(adult.firstName);
      li.appendChild(names);
      ul.appendChild(li);
      listDivAdult.appendChild(ul);
    });

  const children = person
    .filter((_, i) => person[i].age < 18)
    .forEach((children) => {
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      const names = document.createTextNode(children.firstName);
      li.appendChild(names);
      ul.appendChild(li);
      listDivChild.append(ul);
    });
};

merge();
