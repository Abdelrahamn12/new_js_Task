// Function

function ageInTime(theAge) {
    
    if(theAge<10 || theAge >100){
        console.log("Age Out Of Range")
    }
    else {
        console.log(`The Age with Years is ${theAge}`);
        console.log(`The Age with Months is ${theAge *12}`);
        console.log(`The Age with Weeks is ${theAge *12 *4}`);
        console.log(`The Age with Days is ${theAge *12 *4 *7}`);
        console.log(`The Age with hours is ${theAge *12 *4 *7*24}`);
        console.log(`The Age with Mintus is ${theAge *12 *4 *7*24*60}`);
        console.log(`The Age with Secounds is ${theAge *12 *4 *7*24*60*60}`);
    }
  }
  
  // Needed Output
  ageInTime(15)
  // Doneeeeeeeeeeeee 

  // loops

  let myAdmins = ["Ahmed" , "Osama" , "Sayed" , "Stop" , "Samera"];
let myEmployees = ["Ahmed" , "Samah" , "Ameer" , "Omar" , "Othman" , "Amany" , "Samia"];
let showAdmin = 0;
let counter = 1;

for (;showAdmin <= myAdmins.length; showAdmin++)
    {
        if(myAdmins[showAdmin] === "Stop"){
            break;
        }
    }
    document.write(`We Have ${showAdmin} Admins`)
    document.write(`<hr>`)

    for(let i = 0 ; i<myAdmins.length; i++){
        if(myAdmins[i] === "Stop"){
            break;
        }
        document.write(`<div>`)
        document.write(`<p>The Admin For Team ${i+1} Is ${myAdmins[i]}<p>`)
        document.write(`<h3>Team Members: </h3> `)

        for(let j =0 ; j<myEmployees.length ; j++){
            if(myAdmins[i][0]===myEmployees[j][0])
                document.write(`<p>- ${counter++} ${myEmployees[j]}<p>`)
        }

        document.write(`<hr>`)
        document.write(`</div>`)

    }
    // Doneeeeeeeeeee 

    //IF && Else

    let a = 10 ;
 if (a < 10 ){
    console.log(10);
 }
 else if ( a>= 10 && a <= 40)
 {
    console.log("10 TO 40 ");
 }
 else if (a > 40)
 {
    console.log(">40");
 }
 else {
    console.log("Unknown");
 }
 //////////////////////////////// 

a<10 ? console.log(10) : a>=40 && a<=40 ? console.log("10 to 40") : console.log("Unknown")
// 1  done 