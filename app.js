const mainDiv = document.querySelector("main");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const createButton = document.querySelector("#createItem");
const updateName= document.querySelector("#updateName");
const updateAge= document.querySelector("#updateAge");
const updateFormButton= document.querySelector("#updateitem")
// const deleteButton = document.querySelector("#deleteItem");

// const people = [
//     // {name:"deep",age:30},
//     // {name:"swathi",age:27},
//     // {name:"john",age:34},
//     // {name:"Sandra",age:36},
//     // {name:"Ria",age:31}
// ];
const people =[];
const createData = ()=> {
    const name = nameInput.value
    const age = ageInput.value
    const newPerson = {name,age}
    people.push(newPerson)
    renderData()
}
const renderData = ()=> {
    
   mainDiv.innerHTML="";

    people.forEach(function(person,index){
        const personH1 = document.createElement("h1");
        const buttonContainer = document.createElement("aside");
        console.log(buttonContainer);
        const deleteButton = document.createElement("button");
        deleteButton.id = index
        deleteButton.innerText="Delete";
        deleteButton.addEventListener("click", e => {
            people.splice(index,1)
            renderData()
        })
        buttonContainer.appendChild(deleteButton);
        const updateButton = document.createElement("button");
        updateButton.id = index;
        updateButton.innerText="Update";
        updateButton.addEventListener("click",e =>{
            updateName.value=person.name;
            updateAge.value=person.age;
            updateFormButton.setAttribute("toupdate",index)
        })
        buttonContainer.appendChild(updateButton)
        personH1.innerText = `${person.name} is ${person.age} years old`;
        mainDiv.appendChild(personH1);
        mainDiv.appendChild(buttonContainer)
        console.log(mainDiv);
    })
}

const updateData = event=> {
    const index = event.target.getAttribute("toupdate")
    const name = updateName.value
    const age = updateAge.value
    people[index] = {name,age}
    renderData()
}
renderData();
createButton.addEventListener("click",createData);
updateFormButton.addEventListener("click",updateData);