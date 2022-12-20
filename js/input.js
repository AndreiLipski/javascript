const form = document.querySelector('.main');
const checkbox1 = document.querySelector(".checkbox-1");
const checkbox2 = document.querySelector(".checkbox-2");
const inputCheck = document.forms.main;

console.log(inputCheck);

form.addEventListener('click', activeCheckbox);

function activeCheckbox(event) {
    if (event.target.closest(".checkbox-1")) {
        checkbox1.classList.toggle("checkbox_active");
    
        let a = checkbox1.className;
        // console.log(a);
        let b = a.includes('active');
        // console.log(b);
        if (b == true) {
            inputCheck.namecheckbox_1.checked = true;
        } else if (b != true) {
            inputCheck.namecheckbox_1.checked = false;
        }
            // console.log(inputCheck.namecheckbox_1.checked );  
    }    
        
    if (event.target.closest(".checkbox-2")) {
        checkbox2.classList.toggle("checkbox_active");
    
        let a = checkbox2.className;
        // console.log(a);
        let b = a.includes('active');
        // console.log(b);
        if (b == true) {
            inputCheck.namecheckbox_2.checked = true;
        } else if (b != true) {
            inputCheck.namecheckbox_2.checked = false;
        }
    // console.log(inputCheck.namecheckbox_1.checked );  
    }
}

const radio = inputCheck.nameradio;
console.log(radio);

const radiobuttons = document.querySelectorAll('.radiobuttons__item');
console.log(radiobuttons);

form.addEventListener('click', clickRadio);

function clickRadio (event) {

    if(event.target.closest(".radio-1")) {
        radiobuttons[0].classList.toggle("radiobuttons__item_active");
        let a = radiobuttons[0].className;
        let b = a.includes('radiobuttons__item_active');
        if (b == true) {
            radio[0].checked = true;
        } else if (b != true) {
            radio[0].checked = false;
        }
    } else {
        radiobuttons[0].classList.remove("radiobuttons__item_active");
    }
    if(event.target.closest(".radio-2")) {
        radiobuttons[1].classList.toggle("radiobuttons__item_active");
        let a = radiobuttons[1].className;
        let b = a.includes('radiobuttons__item_active');
        if (b == true) {
            radio[1].checked = true;
        } else if (b != true) {
            radio[1].checked = false;
        }
    } else {
        radiobuttons[1].classList.remove("radiobuttons__item_active");
    }
    if(event.target.closest(".radio-3")) {
        radiobuttons[2].classList.toggle("radiobuttons__item_active");
        let a = radiobuttons[2].className;
        let b = a.includes('radiobuttons__item_active');
        if (b == true) {
            radio[2].checked = true;
        } else if (b != true) {
            radio[2].checked = false;
        }
    } else {
        radiobuttons[2].classList.remove("radiobuttons__item_active");
    }
}