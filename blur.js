const makeblur = document.getElementById("encounter");


makeblur.addEventListener("click", blur);

function blur () {
    if (IsBlur == true) {
        IsBlur = false;
    }
    else {
        IsBlur = true;
    }
    console.log(IsBlur)
    bluring ();
}

function bluring () {
    let ToBlur = document.getElementsByName("blur");

    if (IsBlur == true) {
        ToBlur.forEach(function(item,index,array) {
            item.className = "blur";
        })}
   
    else if (IsBlur == false){
        ToBlur.forEach(function(item,index,array) {
            item.className = "";
    })}
    
    else {
        return
    }}