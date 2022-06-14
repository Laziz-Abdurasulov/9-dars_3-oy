var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elResultp = document.querySelector(".js-resultp");
var elResultv = document.querySelector(".js-resultv");
var elResultm = document.querySelector(".js-resultm");
var elResults = document.querySelector(".js-results");
var elEror = document.querySelector(".js-eror");

elForm.addEventListener("submit" , function(event) {
    event.preventDefault();
    
    
    if(elInput.value <= 0) {
        elEror.textContent = "Iltimos 0 dan katta son kiriting"
        elInput.classList.add("is-invalid")
        elInput.classList.remove("is-valid")
        return;
    }else {
        elInput.classList.add("is-valid")
        elInput.classList.remove("is-invalid")
    }
        
    
    elResultp.textContent = resultp().toFixed(3);
    elResultv.textContent = resultv().toFixed(3);
    elResultm.textContent = resultm().toFixed(3);
    elResults.textContent = results().toFixed(3);

})

// toFixed ga 1 yoki 2 bersam, inputga 1 xonali son kiritilganda  samoyotni vaqti 0 bo'lib qolyapti.

function resultp(a = 3.6) {
    return Number(elInput.value) / a
    
 }
 
 function resultv(a = 20.1) {
    return Number(elInput.value) / a
 }
 
 function resultm(a = 70) {
    return Number(elInput.value) / a
 }
 
 function results(a = 800) {
    return Number(elInput.value) / a
 }

