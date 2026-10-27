document.getElementById("vac-form").onsubmit = () => {
    let isValid = true;

    clearErrors();

    let dest = document.getElementById("dest-option").value;
    if(dest === "none"){
        document.getElementById("error-dest").style.display = "inline-block";
        isValid = false;
    }

    let num = document.getElementById("num-travel").value;
    if(num === 0 || num < 0){
        document.getElementById("error-num").style.display = "inline-block";
        isValid = false;
    }

    // Do not submit the form if data is in-valid
    return isValid;
};

function clearErrors(){
    let errors = document.getElementsByClassName("error");
    for(let i=0; i < errors.length; i++){
        errors[i].style.display = "none";
    }
}