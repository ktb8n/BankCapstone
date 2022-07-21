import React from "react";


function NavBar() {
    return (
     <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#createAccount" onclick="defaultModule()">
            <img src="badPig.png" width="30" height="30" alt="Bad Pig Logo" />
            </a>
             <ul class="navbar-nav">
             <li class="nav-item active">
               <a 
                class="nav-link" 
                href="#createAccount" 
                onclick="loadCreateAccount()"
                id="createAccount"
                >
               Create an Account 
               <span class="sr-only">(current)</span>
               </a>
             </li>
             <li class="nav-item">
               <a 
                class="nav-link" 
                href="#login" 
                onclick="loadLogin()" 
                id="login"
                >
                Login
               </a>
             </li>
             <li class="nav-item">
               <a 
                class="nav-link" 
                 href="#deposit" 
                onclick="loadDeposit()"      
                id="deposit"
                >
                 Deposit
              </a>
            </li>
             <li class="nav-item">
              <a 
                class="nav-link" 
                href="#withdraw" 
                onclick="loadWithdraw()"     
                id="withdraw"
                >
                 Withdraw
              </a>
             </li>
              <li class="nav-item">
               <a 
                class="nav-link" 
                href="#balance" 
                onclick="loadBalance()"
                id="balance"
                >
                 Balance
               </a>
             </li>
             <li class="nav-item">
               <a 
                class="nav-link" 
                href="#allData" 
                onclick="loadAllData()"
                id="allData"
                >
                 All Data
               </a>
             </li>
            </ul>
        </nav>
    </>
    );
};

export default NavBar;