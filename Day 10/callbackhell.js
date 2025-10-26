const printMessage = (msg)=>{
    console.log(msg);
}
const bookTicket = ()=>{
    printMessage("Welcome!");
    setTimeout(()=>{
        printMessage("Login Sucessfully");
        setTimeout(()=>{
            printMessage("seat has been selected sucessfully");
            setTimeout(()=>{
                printMessage("yor seat has been booked");
                setTimeout(()=>{
                    printMessage("Payment has been done");
                    setTimeout(()=>{
                        printMessage("Ticket has been confirmed");
                        printMessage("Thankyou");
                    },3000)
                },4000)
            },3000)
        },2000)
    },3000)
}