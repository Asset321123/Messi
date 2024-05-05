let Messi = document.createElement("a")
    Messi.innerHTML = "Сделать немедленно!"
    Messi.setAttribute("onClick", "work1()")
    Messi.style.fontSize = "100px"
    Messi.style.padding = "15px"
    Messi.style.backgroundColor = "purple"
    Messi.style.borderRadius = "30px"

let gamebox = document.getElementById("gamebox"); 

function work(){ 
    let input = document.getElementById("Asset") 
    let name = input.value; 
    let newRonaldo = document.createElement("h2"); 
    newRonaldo.innerHTML = "Привет, " + name + "! В Алматы прилетела твердая душа Досаева(дороги сломаны),размером с Луну, твои действия:"; 
 
    let actions = document.createElement("input");
    actions.placeholder = "Твои действия";


    gamebox.appendChild(newRonaldo) 
    gamebox.appendChild(actions)
    gamebox.appendChild(Messi)
}


function work1(){
    let lose = document.createElement("h1")
    lose.innerHTML = "ХА-ХА!Ты проиграл, власть непобедима"
    gamebox.appendChild(lose)
}
// Get the image element
const image = document.querySelector('.punch-img');

// Function to punch the image
function punch() {
  image.classList.add('punched');
}

// Simulate a punch after 2 seconds (adjust as needed)
setTimeout(punch, 2000);
