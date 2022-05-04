

const submit = document.querySelector('.sub')
const formInputs = document.querySelectorAll('.input')
const emailInput = document.querySelector('.email_input')
const ageInput = document.querySelector('.age_input')

let radio = document.getElementsByName('gender')


function checkField(event){


    event.preventDefault();

    let emailVal = emailInput.value
    let ageVal = ageInput.value
    


    emptyInputs = Array.from(formInputs).filter(input => input.value === '')


    formInputs.forEach((input) => {
        if(input.value === ''){
            input.classList.add('error')
        }
        else{
            input.classList.remove('error')
        }
    })



    if (emptyInputs.length !==0){
        return false
    }

    if (ageVal <= 0){
        ageInput.classList.add('error')
        console.log('Incorrect age');
        return false;
    }
    else{
        ageInput.classList.remove('error')
    }
    
    

    if(!validateEmail(emailVal)){
        emailInput.classList.add('error')
        console.log('Incorrect email');
        return false;
    }else{
        emailInput.classList.remove('error')
        collectProps()
    }
}



function validateEmail(email){
    let regx =  /^[\w]+?.+\@[a-z]{3,8}\.[a-z]{2,5}$/i
    return regx.test(String(email).toLowerCase())
}



class User{
    constructor(fName,lName,age,email,gender){
        this.fName = fName
        this.lName = lName
        this.age = age
        this.email = email
        this.gender = gender
    }
}
const obj = new User()



function collectProps(){

    for(let i = 0; i < radio.length; i++){
        if (radio[i].checked) 
        {
            data = radio[i].value  
        }
    }



    const inputCollection = Array.from(document.getElementsByClassName('form_input'));

    console.log(inputCollection);

    inputCollection.forEach((elem) =>{
        obj[elem.name] = elem.value 
        obj.gender = data
    })
        
        console.log(obj);
    localStorage.setItem(`${obj.lName}`,JSON.stringify(obj))

    document.getElementById('form').reset()
}
submit.addEventListener('click', checkField)