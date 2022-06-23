const button = document.getElementById('loan-form');
button.addEventListener('submit', function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';
    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResult, 2000);

    e.preventDefault();
});

function calculateResult(e){
    const loanAmount = parseInt(document.getElementById('amount').value);
    console.log("Loan Amount: "+loanAmount);
    const loanInterest = parseInt(document.getElementById('interest').value);
    console.log("Loan Interest: "+loanInterest);
    const repaymentTenure = parseInt(document.getElementById('repayment').value);
    console.log("Repayment Tenure: "+repaymentTenure);
    
    const totalInterest= (loanAmount*repaymentTenure*loanInterest)/100;
    console.log("Total Interest:"+totalInterest);
    document.getElementById('total-interest').disabled = false;
    document.getElementById('total-interest').value = totalInterest;
    document.getElementById('total-interest').disabled = true;

    const totalPayment = loanAmount + totalInterest;
    console.log("Total Payment:"+totalPayment);
    document.getElementById('total-payment').disabled = false;
    document.getElementById('total-payment').value = totalPayment;
    document.getElementById('total-payment').disabled = true;

    const monthlyPayment = totalPayment/(repaymentTenure*12);
    console.log("Monthly Payment:"+totalPayment);
    document.getElementById('monthly-payment').disabled = false;
    document.getElementById('monthly-payment').value = monthlyPayment;
    document.getElementById('monthly-payment').disabled = true;
    
    
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
    makeValueDefault();
};

function makeValueDefault(){
    document.getElementById('amount').value="";
    document.getElementById('interest').value="";
    document.getElementById('repayment').value="";
}