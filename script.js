// Set value of Range slider
function displayRange(){
    document.getElementById("range_val").innerHTML=document.getElementById("rate").value;
}

// Compute interest
function compute()
{   
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    // Validataion for Principal to be a positive number
    if(principal<=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        curr_year=new Date().getFullYear();
        interest = (principal * years * rate) / 100;
        document.getElementById("result").innerHTML='If you deposit <mark>'+principal+ '</mark>, <br>' 
        +' at an interest rate of <mark>'+rate+'%</mark>. <br>' 
        +' You will receive an amount of <mark>' +interest+'</mark>, <br>'
        +' in the year <mark>' +(curr_year+Number(years))+'</mark>'
    }
}
