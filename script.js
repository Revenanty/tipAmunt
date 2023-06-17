
const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal")

let peopleNumber = Number(numberOfPeople.innerHTML)

const calculateBill = () => {
        const billInput = Number(billTotalInput.value);
        const tipUser = (tipInput.value) / 100
         const tipAmount = billInput * tipUser
         const calculateTotal = tipAmount + billInput
         const perPersonTotall = calculateTotal / peopleNumber
          perPersonTotal.innerHTML = `$${perPersonTotall.toFixed(2)}`
  }
  
  const increasePeople = () => {
        peopleNumber += 1
        numberOfPeople.innerHTML = peopleNumber
       calculateBill()
  }

  const decreasePeople = () => {
  if(peopleNumber <= 1){
    return
  } 
      peopleNumber - 1;
      numberOfPeople.innerHTML = peopleNumber;
      calculateBill();
  }