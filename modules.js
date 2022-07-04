var ui = {};

//Goal: Add class to banking action links to hide until a user is logged in. Only options available are HOME - create account and navbar item LOGIN
ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#createAccount" onclick="defaultModule()">
    <img src="badPig.png" width="30" height="30" alt="Bad Pig Logo">
  </a>
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#createAccount" onclick="loadCreateAccount()" id="createAccount">
        Create an Account 
        <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#login" onclick="loadLogin()" id="login"> Login
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#deposit" onclick="loadDeposit()" id="deposit">
        Deposit
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#withdraw" onclick="loadWithdraw()" id="withdraw">
        Withdraw
        </a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#balance" onclick="loadBalance()" id="balance">
        Balance
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#allData" onclick="loadAllData()" id="allData">
        All Data
        </a>
      </li>
    </ul>
</nav>
`;

var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

ui.createAccount = `
<div class="card text-lightgray bg-primary mb-3" style="max-width: 540px; margin-top:10px; padding:20px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="badPig.png" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Create An Account</h5>
        <p class="card-text">Welcome to Better Bank Holdings LLC! Sign up today and get a $400 new accounts bonus!</p>
        <div class="dropdown">
      <div class="form-group">
           <label for="accountType">Select Account Type:</label>
           <select class="form-control" id="accountType">
             <option id="savings">Savings Account</option>
             <option id="checking">Checking Account</option>
             <option id="admin">Administrative Account</option>
           </select>
         </div>

        </div>

        Name:<br>
        <input type="input" class="form-control" id="name" placeholder="Enter name"<br>
        Email:<br>
        <input type="input" class="form-control" id="email" placeholder="Enter email"<br>
        Password:<br>
        <input type="input" class="form-control" id="password" placeholder="Choose password"<br>
        <p class="card-text"><small class="">password must be at least 6 characters long and contain a combination of numbers, letters, and characters. Already have an account? <a href="#login" onclick="loadLogin()" id="login" style="color:white"><br>LOGIN HERE</a></small></p>
      </div>
     <div id ='status'></div>
     <button class="btn btn-outline-dark" style="margin-top:3px;" onclick=create() >Create Account
        </button>
  
    </div>
  </div>
</div>
`;


ui.login = `
<div class="card text-gray bg-secondary mb-3" style="max-width: 540px; margin-top:10px; padding:20px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="badPig.png" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Login</h5>
        <p class="card-text">You must login to manage your account and access your money</p>
       <br>
        <input type="input" class="form-control" id="email" placeholder="Email"<br>
       <br>
        <input type="input" class="form-control" id="password" placeholder="Password"<br>
        <button class="btn btn-outline-dark" style="margin-top:3px;" onclick="login()">Login
        </button>
        <p class="card-text"><small class=""><span="passworderror">ERROR SPACE </span>Don't have an account? <a href="#createAccount" onclick="loadCreateAccount()" id="createAccount" style="color:white"><br>CREATE ACCOUNT HERE</a></small></p>
      </div>
    </div>
  </div>
</div>
`;

ui.deposit = `
<div class="card text-gray bg-warning mb-3" style="max-width: 540px; margin-top:10px; padding:20px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="badPig.png" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Deposit Money</h5>
        <p class="card-text"><small>A penny saved is a penny that depreciates in value</small></p>
        <p class="card-text">Account balance: $0.00</p>
       <br>
        <input type="input" class="form-control" id="deposit" placeholder="amount to deposit"<br>
        <button class="btn btn-outline-dark" style="margin-top:3px;">Submit
        </button>
       <br>
        <p class="card-text"><small class=""><span="passworderror">ERROR SPACE </span></small></p>
      </div>
    </div>
  </div>
</div>
`;

ui.withdraw = `
<div class="card text-gray bg-success mb-3" style="max-width: 540px; margin-top:10px; padding:20px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="badPig.png" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Withdraw Money</h5>
        <p class="card-text"><small>They say you gotta spend money to make money. I mean they're probably wrong but whatever</small></p>
        <p class="card-text">Account balance: $0.00</p>
       <br>
        <input type="input" class="form-control" id="withdraw" placeholder="amount to withdraw"<br>
        <button class="btn btn-outline-dark" style="margin-top:3px;">Submit
        </button>
       <br>
        <p class="card-text"><small class=""><span="passworderror">ERROR SPACE </span></small></p>
      </div>
    </div>
  </div>
</div>
`;

ui.balance = `
<div class="card text-white bg-dark mb-3" style="max-width: 540px; margin-top:10px; padding:20px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="badPig.png" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Account balance: </h5>

        <h2 class="card-text">$0.00</h2>
       <br>
        <p class="card-text"><small class=""><span="passworderror">ERROR SPACE </span></small></p>
      </div>
    </div>
  </div>
</div>
`;


ui.default = `
<div class="card text-gray bg-light mb-3" style="max-width: 540px; margin-top:10px; padding:20px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="badPig.png" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Welcome to the Better Bank Landing Page!</h5>

        <h7 class="card-text">Create an account or Login to get started</h2>
       <br>
        <p class="card-text"><small class=""><span="passworderror">ERROR SPACE </span></small></p>
      </div>
    </div>
  </div>
</div>
`;

ui.allData = `
<div  onload="allData()" class="card text-gray bg-info mb-3" style="max-width: 540px; margin-top:10px; padding:20px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="badPig.png" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Better Bank User Database</h5>
        <button type="button" class="btn btn-secondary" onclick="allData()"> Sbow All Data </button>
        <p class="card-text" id="allDataStatus"></p>
       <br>
       <div id="status"></div>
        <p class="card-text"><small class=""><span="passworderror">ERROR SPACE </span></small></p>
      </div>
    </div>
  </div>
</div>
`;

var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function () {
    target.innerHTML = ui.login;
};

var loadDeposit = function () {
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function () {
	target.innerHTML = ui.withdraw;
};

var loadBalance = function () {
	target.innerHTML = ui.balance;
};

var loadAllData = function () {
	target.innerHTML = ui.allData;
};

var defaultModule = function () {
    target.innerHTML = ui.default;

};

defaultModule();