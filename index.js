

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const logarea = document.getElementById("login-area");
    logarea.style.display = "none";
    const transArea= document.getElementById("trans-area");
    transArea.style.display="block"
})

const depositebtn=document.getElementById("deposite");
 depositebtn.addEventListener("click",function(){
    const depoAmount = document.getElementById("depositeAmount").value;
 const depositeNumber = parseFloat(depoAmount);

 const currentDepo=document.getElementById("currentDeposite").innerText;
 const currentDeposite=parseFloat(currentDepo);

 const totalDepo=depositeNumber+currentDeposite;
 document.getElementById("currentDeposite").innerText=totalDepo;

    
 
//  total balance update
    const currrentCB=document.getElementById("currentBalance").innerText;
     const currrentCBNumber=parseFloat(currrentCB);
     const totalBalance=depositeNumber+currrentCBNumber;

     document.getElementById("currentBalance").innerText=totalBalance;


    
     
document.getElementById("depositeAmount").value="";


 })



const withdrawbtn=document.getElementById("withdraw");
withdrawbtn.addEventListener("click",function(){
    const withAmount = document.getElementById("withdrawAmount").value;
 const withdrawNumber = parseFloat(withAmount);

 const currentWit=document.getElementById("currentWithdraw").innerText;
 const currentWithdraw=parseFloat(currentWit);

 const totalWithdrow=withdrawNumber+currentWithdraw;
 document.getElementById("currentWithdraw").innerText=totalWithdrow;

    
 
//  const total balance update
    const currrentBalance=document.getElementById("currentBalance").innerText;
     const currrentCBNumber=parseFloat(currrentBalance);
     const totalBalance=currrentCBNumber-withdrawNumber;

     document.getElementById("currentBalance").innerText=totalBalance;



document.getElementById("withdrawAmount").value="";


})

