const register_name = document.querySelector(".register_name");
const input_name = register_name.querySelector("input");

const NAME_LS = "name";


function getName(){
    register_name.addEventListener("submit" , handleName);  
}


function greetings(name){

    input_name.remove();
    register_name.innerText = `Hello! ${name}`;
}

function saveName(){
    if(localStorage.getItem(NAME_LS) === null ){
        getName();

    } else { 
        // 보여주면 됨. 
        greetings(localStorage.getItem(NAME_LS));      
    }
}

function handleName(event){
    event.preventDefault();
    const currentUser = input_name.value;
    localStorage.setItem(NAME_LS, currentUser);
    greetings(currentUser);

}

function init(){
    saveName();
    console.log(register_name);
}

init();