

/* validate each input */

const input = document.getElementsByTagName('input'); // collection of all input tags
for(let inp of input){
    if(inp) // if input is password, validate specific conditions
    inp.addEventListener('focusout', (e) => {
        //console.log(inp.id);
        //console.log(inp.reportValidity());

        // pw contains num, upper, and lower
        if(inp.id == 'pw'){
            //console.log('pw field');
            const userPw = document.getElementById('pw').value;
            const pwLength = document.getElementsByTagName('li')[0]
            const pwNum = document.getElementsByTagName('li')[1]
            const pwLower = document.getElementsByTagName('li')[2]
            const pwUpper = document.getElementsByTagName('li')[3]
            const pwSpe = document.getElementsByTagName('li')[4]

            if(userPw.length>=8) pwLength.style.color = 'green';
            else if(userPw.length<8) pwLength.style.color = 'red';

            if(/\d/.test(userPw)) pwNum.style.color = 'green'
            else if(!/\d/.test(userPw)) pwNum.style.color = 'red'

            if(/[a-z]/.test(userPw)) pwLower.style.color = 'green'
            else if(!/[a-z]/.test(userPw)) pwLower.style.color = 'red'

            if(/[A-Z]/.test(userPw)) pwUpper.style.color = 'green'
            else if(!/[A-Z]/.test(userPw)) pwUpper.style.color = 'red'

            if(!/^[a-zA-Z0-9]*$/.test(userPw) || userPw == '') pwSpe.style.color = 'red' 
            else if(/^[a-zA-Z0-9]*$/.test(userPw)) pwSpe.style.color = 'green'
        }


        //other fields where html validation takes care of
        if(inp.checkValidity()){
            //console.log(inp);
            console.log('good!')
        }
        else console.log('not good!');
    }) // add event to all input fields
}



/* password validation */
/* check if input has lower, upper, and number */
/*
const pw = document.getElementsByName('p-word');
// when pw is unfocused

console.log(pw)

function checkPW(){

} */
