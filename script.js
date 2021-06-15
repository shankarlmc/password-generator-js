// Set the characters
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = uppercase.toLowerCase();
const numbers = '0123456789';
const specials = '~!@#$%^&*()_-+={}:"<>?\|;./`';

const characters = uppercase + lowercase + numbers + specials;

// Set regex for weak, medium and strong password
const weakPattern = /(?=.*[a-z])[a-z]/;
const mediumPattern = /(?=.*[0-9].*[0-9])(?=.*[A-Z].*[A-Z])[A-Z0-9]/;
const strongPattern = /(?=.*[!@#$%^&*{}.:;?/|"()<>].*[!@#$%^&*{}.:;?/|"()<>])[!@#$%^&*{}.:;?/|"()<>]/;

// Select all the indicators
const indicator = document.querySelector('.indicator');
const weak = indicator.querySelector('.weak');
const medium = indicator.querySelector('.medium');
const strong = indicator.querySelector('.strong');
const result = document.querySelector('.result');


let output = document.querySelector("#output");

function randomValue(value){
    return Math.floor(Math.random()*value);
}

function generatePassword(){
    let length = document.getElementById('length').value;
    document.getElementById("length-val").textContent = length;

    let str = '';

    for(let i = 0; i < length ; i++){
        let random = randomValue(characters.length);
        str += characters.charAt(random);
    }
    checkPassword(str);
    output.value = str;

}

function checkPassword(password){

    indicator.style.display = "block";
    indicator.style.display = "flex";
    result.style.display = "block";

    if((password.match(weakPattern) || password.match(mediumPattern) || password.match(strongPattern))){
        
        weak.classList.add('active');
        result.classList.add('weak');
        result.textContent = "Password strength is too weak.";

    }
    if((password.match(weakPattern) && password.match(mediumPattern)) ||
    (password.match(mediumPattern) && password.match(strongPattern)) || 
    (password.match(weakPattern) && password.match(strongPattern))){

        medium.classList.add('active');
        result.classList.add('medium');
        result.textContent = "Password strength is medium.";

    } else {
        medium.classList.remove('active');
        result.classList.remove('medium');
    }
    if(password.match(weakPattern) && password.match(mediumPattern) && password.match(mediumPattern)){
        medium.classList.add('active');
        strong.classList.add('active');
        result.classList.add('strong');
        result.textContent = "Password strength is strong.";

    } else {
        strong.classList.remove('active');
        result.classList.remove('strong');
    }
}
function copyClipboard(){
    output.select();
    document.execCommand('copy');
}
generatePassword();
// my details
detail = [
    {
        "first_name": "Shankar",
        "last_name": "Lamichhane",
        "email": "shankarlmc012@gmail.com",
        "facebook": "https://facebook.com/shankarlmc012",
        "twitter": "https://twitter.com/sha_n_kar_lmc",
        "github": "https://github.com/shankarlmc",
        "instagram": "https://www.instagram.com/sha_n_kar_lamichhane/",
        "linkedin": "https://www.linkedin.com/in/shankarlmc/",
        "website": "https://shankarlamichhane.com.np",
    },
]