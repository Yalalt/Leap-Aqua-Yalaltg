// let phoneNumber = 99061299;
// let phoneNumber = 98061299;
// let phoneNumber = 92061299;
// let phoneNumber = 91061299;
// let phoneNumber = 11061299;
// let phoneNumber = 1106129948;

let phoneNumber = Number(prompt("Утасны дугаараа оруулна уу"));

if(Number.isInteger(Number(phoneNumber)) && phoneNumber.toString().length === 8){
    let num2pre =  Number(phoneNumber.toString().substring(0, 2));
    let operator = "";
    switch(num2pre) {
        case 85:
        case 99:
            operator = "Mobicom";
            break;
        case 88:
        case 80:
        case 89:
        case 87:
        case 86:
            operator = "Unitel";
            break;
        case 90:
        case 91:
        case 94:
        case 95:
        case 97:
            operator = "Skytel";
            break;
        case 93:
        case 96:
        case 98:
            operator = "G-Mobile";
            break;
        case 92:
            operator = "Mobicom, Unitel, Skytel, G-Mobile Т.А дугаар"
            break;
        default:
            console.log("Таны бичсэн утасны дугаар олдсонгүй...");

    }
    console.log(operator);
} else {
    console.log("Зөв утасны дугаар оруулна уу");
}