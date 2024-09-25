 
 
//  shared function
 function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const number = parseFloat(inputValue);
    return number
}
function getBalance(id){
    const currentValue = document.getElementById(id).innerText;
    const number =parseFloat(currentValue);
    return number
}

function getTotalBalance(id){
    const initialBalance = document.getElementById(id).innerText;
    const number = parseFloat(initialBalance);
    return number
}

function showSectionById(id){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}


// button related

// color change
document.getElementById('donation-btn').addEventListener('click',function(){

     document.getElementById('donation-btn').style.backgroundColor= "rgba(180, 244, 97, 1)"
    
     document.getElementById('history-btn').style.backgroundColor= "";
})
document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-btn').style.backgroundColor= "rgba(180, 244, 97, 1)"

document.getElementById('donation-btn').style.backgroundColor= ""
    
})

// section swap

document.getElementById('donation-btn').addEventListener('click',function(){
    showSectionById('donation')
})
document.getElementById('history-btn').addEventListener('click',function(){
    showSectionById('history')
})


