const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Dark or light images
function imageMode(color){
    image3.src = `./images/undraw_conceptual_idea_${color}.svg`;
    image2.src = `./images/undraw_feeling_proud_${color}.svg`;
    image1.src = `./images/undraw_proud_coder_${color}.svg`;
}


function toggleDarkLight(isLight){
    nav.style.backgroundColor =  isLight? 'rgb(255 225 225 /50%)':'rgb(0 0 0 /50%)';

    textBox.style.backgroundColor = isLight?'rgb(0 0 0/50%)':'rgb(255 225 2 /50%)';
    console.log(toggleIcon.children[1]);
   
    toggleIcon.children[0].textContent = isLight?"Light Mode":"Dark Mode";
   isLight?toggleIcon.children[1].classList.replace('fa-moon','fa-sun'):toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
   isLight?imageMode('light'):imageMode('dark');
}




/*function darkMode(){
    ;
    textBox.style.backgroundColor = 'rgb(225 225 2/50%)';
    console.log(toggleIcon.children[1]);
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    toggleDarkLight(false);
    
}
//light mode
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 225 225 /50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0/50%)';
    console.log(toggleIcon.children[1]);
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    toggleDarkLight(true);
}
*/
// Switch theme dynamically
function switchTheme(event){
   window.console.log(event.target.checked);
   if(event.target.checked){
       document.documentElement.setAttribute('data-theme','dark');
       localStorage.setItem('theme',"dark");
       toggleDarkLight(false);
   }else{
       document.documentElement.setAttribute('data-theme','light');
       localStorage.setItem('theme',"light");
       toggleDarkLight(true);
   }
}
// event listner
toggleSwitch.addEventListener('change',switchTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    console.log("I'm here");
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        toggleDarkLight(false);
    }
}