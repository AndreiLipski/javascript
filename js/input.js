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
