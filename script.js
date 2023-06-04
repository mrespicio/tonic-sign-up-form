

/* validate each input */

const input = document.getElementsByTagName('input'); // collection of all input tags
for(let inp of input){
    // add event to all input fields
    inp.addEventListener('focusout', (e) => {
        const userPw = document.getElementById('pw').value;
        const userPwCon = document.getElementById('cpw').value;

        // if input is password, validate specific conditions
        // pw contains num, upper, and lower
        if(inp.id == 'pw'){
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

        // confirm if passwords match
        if(inp.id == 'cpw'){
            const pwCon = document.getElementById('pw-confirmation-txt');
            if(userPwCon == userPw){
                pwCon.innerHTML = 'Passwords match!'
                pwCon.style.color ='green';
            } 
            else{
                pwCon.innerHTML = 'Passwords do not match';
                pwCon.style.color = 'red';
            }
        }
        const pmsg = document.getElementById('pn-msg');
        const pmsg2 = document.getElementById('pn-msg2');

        if(inp.id == 'pnum'){
            if(!inp.checkValidity()){
            pmsg.innerHTML = 'Phone number not valid';
            pmsg.style.color = 'red';
            if(inp.value.length != 10) pmsg2.innerHTML = 'Phone number length must contain 10 digits'
            if(!/^[0-9]$/.test(inp.value)) pmsg2.innerHTML = 'Phone number must only contain digits' 
            }
            if(inp.checkValidity()){
                pmsg.innerHTML = '';
                pmsg2.innerHTML = '';
            }
        }
        const emsg = document.getElementById('em-msg');
        if(inp.id == 'email'){
            if(!inp.checkValidity()) emsg.innerHTML = 'Please enter a valid email'
            if(inp.checkValidity()) emsg.innerHTML = ''
        }
    }) 
}