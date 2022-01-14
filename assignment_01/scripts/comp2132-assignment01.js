/*
    Author: Dennis Relos
    Version: 1.0
    Date: April 19, 2021
*/

/*
these data points represent different 
aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN      = 30;
const minimumAgeToPurchase      = 24;
const taxRate                   = 0.10;

/*
these data points represent information
about the current user
NOTE: since this data would in theory be
supplied by the user, all values 
(even numeric) here are strings... 
- change these values as you test your script!
*/
const userName              = "Dennis Relos";
const age                   = "25";
const cashOnHandDollarsCDN  = "200";
const quantityOfTickets     = "2";

/*
begin processing...
*/

const ticketTotalCostCDN    = parseInt((quantityOfTickets * ticketCostDollarsCDN) * (taxRate + 1));

document.getElementById("user-age").innerHTML += age;
document.getElementById("qty-tickets").innerHTML += quantityOfTickets;
document.getElementById("user-cash").innerHTML += "$" + cashOnHandDollarsCDN;

document.getElementById("name").innerHTML = `${userName.toUpperCase()} SAYS "LET'S BUY SOME TICKETS TO THE BIG VIRTUAL CONCERT!"`;

if(age < minimumAgeToPurchase)
{
    document.getElementById("output").innerHTML = `
        In one year's time, you will be ${parseInt(age) + 1} years old.<br>
    `;
    
    document.getElementById("error-messages").innerHTML = `
        Sorry, you are ${age}, and that's not old enough to buy a ticket. You must be at least ${minimumAgeToPurchase} years old.
        You need to wait for ${minimumAgeToPurchase - parseInt(age)} years.
    `;
}
else if(cashOnHandDollarsCDN < ticketTotalCostCDN)
{
    document.getElementById("output").innerHTML = `
        User is old enough to buy a ticket by ${parseInt(age) - minimumAgeToPurchase} year(s). Proceeding with ticket sales...<br>
        Purchasing ${quantityOfTickets} tickets at $${ticketCostDollarsCDN}: $${quantityOfTickets * ticketCostDollarsCDN}<br>
        After tax total cost: $${ticketTotalCostCDN}<br>
        You have: $${cashOnHandDollarsCDN}<br>
        In one year's time, you will be ${parseInt(age) + 1} years old.<br>
    `;

    document.getElementById("error-messages").innerHTML = `
        Sorry ${userName}, your card got declined.
    `;
}
else
{
    document.getElementById("output").innerHTML =  `
        User is old enough to buy a ticket by ${parseInt(age) - minimumAgeToPurchase} year(s). Proceeding with ticket sales...<br>
        Purchasing ${quantityOfTickets} tickets at $${ticketCostDollarsCDN}: $${quantityOfTickets * ticketCostDollarsCDN}<br>
        After tax total cost: $${ticketTotalCostCDN}<br>
        You have: $${cashOnHandDollarsCDN}<br>
        Proceeding with purchase...<br>
        Congratulations ${userName}! You got the tickets!<br>
        In one year's time, you will be ${parseInt(age) + 1} years old.
    `;
}