const printMessage =(msg)=>{
    console.log(msg);
}
const wait = (msg,sec)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        printMessage(msg);
        resolve();
    },sec);
    });
}


const bookTicket=async()=>{
    printMessage("Welcome");
    await wait("Login Sucessfully",3000);
    await wait("seat has been selected sucessfully",4000);
    await wait("your seat has been booked",3000);
    await wait("Payment has been done",4000);
    await wait("Ticket has been confirmed",3000);
}