

/* validate each input */

const input = document.getElementsByTagName('input'); // collection of all input tags
for(let inp of input){
    if(inp) // if input is password, validate specific conditions
    inp.addEventListener('focusout', (e) => {
        //console.log(inp.id);
        //console.log(inp.reportValidity());
        if(inp.checkValidity()){
            //console.log(inp);
            console.log('good!')
        }
        else console.log('not good!');
    }) // add event to all input fields
}


/*
function validate(inp){
    //inp.checkValidity();
    console.log(inp.reportValidity());
} */

/* password validation */
/* check if input has lower, upper, and number */
/*
const pw = document.getElementsByName('p-word');
// when pw is unfocused

console.log(pw)

function checkPW(){

} */
