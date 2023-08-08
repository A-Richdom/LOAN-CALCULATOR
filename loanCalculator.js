// document.querySelector('.card').addEventListener('submit', calculateResults);
const amount = document.getElementById('amount-input');
const interest = document.getElementById('interest-input');
const repayment  = document.getElementById('repayment-input');
const mPayment = document.querySelector('.mPayment-display');
const tPayment = document.querySelector('.tPayment-display');
const tInterest = document.querySelector('.tInterest-display');

//ONINPUT REPAYMENT should DISPLAY INTEREST-PERCENTAGE
repayment.addEventListener('input', () => {
    const displayInterest = repayment.value * 10  
    interest.value  = displayInterest
});

document.getElementById('btn').addEventListener('click', calculateResults);


//CALCULATE BUTTON FUNCTION
function calculateResults(e) {

    if (amount.value) {
        const calculatedInterest = (interest.value / 100) * amount.value
        const calculatedRepayment = repayment.value * 12

        tPayment.innerHTML = (Number(amount.value) + calculatedInterest).toFixed(2)

        mPayment.innerHTML = (tPayment.innerHTML / calculatedRepayment).toFixed(2)

        tInterest.innerHTML = calculatedInterest.toFixed(2)

    }

    else {
        // repayment.value = ""
        // interest.value = ""
        // mPayment.innerHTML = ""
        // tPayment.innerHTML = ""
        // tInterest.innerHTML = ""
        showError('Please check your Number');
    }
    e.preventDefault();
}
function showError() {
    //Create Element
    const errorDiv = document.createElement('div');

    //Add Class
    errorDiv.className = 'alert alert-danger';
     
    //Create Text-Node
    errorDiv.appendChild(document.createTextNode('Please check your Number'));

    //Get Element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Insert Error above Heading
    card.insertBefore(errorDiv, heading);
    
    setTimeout(clearError, 3000);
    // console.log(showError);
}
function clearError() {
    document.querySelector('.alert').remove();
    
}


