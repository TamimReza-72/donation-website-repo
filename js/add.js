// // card-1
document.getElementById('btn-1').addEventListener('click',function(event){
    event.preventDefault
    const money = getInputValueById('donation-amount-1');
    const balance = getBalance('card-1-balance');
    const accountBalance = getTotalBalance('main-balance');
    
   
    if(money>0 && accountBalance>=money ){
        const donation = money + balance;
        document.getElementById('card-1-balance').innerText = donation;
        const remainingBalance = accountBalance - money
        document.getElementById('main-balance').innerText = remainingBalance;
        const p = document.createElement('p');
    p.innerHTML = ` <div class="hero-content bg-base-200 border rounded-lg border-gray-300 mx-auto mb-10  ">
                               
                                  <div>
                                    <h1 class="text-2xl font-bold"> ${money} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
                                    <p class="py-6">
                                      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                      quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                   
                                  </div>
                                </div>
                              </div>`
    document.getElementById('history').appendChild(p)   
        
    }
 
    else{
         alert('This amount is not valid')
    }    
})

// card-2
document.getElementById('btn-2').addEventListener('click',function(event){
event.preventDefault
const money =getInputValueById('donation-amount-2');
const balance =getBalance('card-2-balance');
const accountBalance = getTotalBalance ('main-balance');
if(money > 0 && accountBalance >= money){
    const donation = money + balance;
    document.getElementById('card-2-balance').innerText = donation;
    const remainingBalance = accountBalance - money
    document.getElementById('main-balance').innerText = remainingBalance;
    const p = document.createElement('p');
    p.innerHTML = ` <div class="hero-content bg-base-200 border rounded-lg border-gray-300 mx-auto mb-10 ">
                                
                                 
                                   
                                  <div>
                                    <h1 class="text-2xl font-bold"> ${money}  Taka is Donated for Flood Relief in Noakhali,Bangladesh</h1>
                                    <p class="py-6">
                                      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                      quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                   
                                  </div>
                                </div>
                              </div>`
    document.getElementById('history').appendChild(p)
}
else{
    alert('This amount is not valid')
}
})
// card-3
document.getElementById('btn-3').addEventListener('click',function(event){
    event.preventDefault
    const money =getInputValueById('donation-amount-3');
    const balance =getBalance('card-3-balance');
    const accountBalance = getTotalBalance ('main-balance');
    if(money > 0 && accountBalance >= money){
        const donation = money +balance;
        document.getElementById('card-3-balance').innerText = donation;
        const remainingBalance = accountBalance - money
        document.getElementById('main-balance').innerText = remainingBalance;
        const p = document.createElement('p');
    p.innerHTML = ` <div class="hero-content bg-base-200 border rounded-lg border-gray-300 mx-auto mb-10 ">
                               
                                 
                                   
                                  <div>
                                    <h1 class="text-2xl font-bold"> ${money} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                                    <p class="py-6">
                                      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                      quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                   
                                  </div>
                                </div>
                              </div>`
    document.getElementById('history').appendChild(p)
    }
    else{
        alert('This amount is not valid')
    }
    })

    // ****************
     