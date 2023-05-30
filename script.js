

/* validate each input */
/*
const input = document.getElementsByTagName('input'); // collection of all input tags
for(inp of input){
    inp.addEventListener('focusout', validate(inp))
} */

function validate(inp, type){
    //console.log(inp.reportValidity());
    /*if(inp.checkValidity()){
        console.log('good!')
    }
    else if(!inp.checkValidity()){
     console.log('not valid!')} */
    
     switch(type){
        case 'names':
            if((/^[A-Za-z]+$/).test(inp)){
                console.log('good!')
            }
            else console.log('not good!')
            break;
        
     }

}

/* password validation */
/* check if input has lower, upper, and number */
/*
const pw = document.getElementsByName('p-word');
// when pw is unfocused

console.log(pw)

function checkPW(){

} */