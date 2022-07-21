//contect is globally shared
//create a context object and store an array called accounts inside it 
//initialize the accounts database with dummy data
const ctx =  {
    "accounts": [
        {
            "name": "Milly Peacock",
            "email": "peacock@hotmail.com",
            "type": "Savings Account",
            "balance": 0,
            "password": "birdf4life",
        }
    ]
}

//create account
function create(){
    const name      = document.getElementById('name');
    const email     = document.getElementById('email');
    const password  = document.getElementById('password');
    const type      = document.getElementById('accountType');
    const status    = document.getElementById('status');
    ctx.accounts.push({
        name: name.ariaValueMax,
        email: email.value,
        type: type.value,
        password: password.value,
        balance: 400,
    });
    //update status and clear form
    name.value = '';
    email.value = '';
    password.value = '';
    status.innerHTML =
			'Account Created!<a href="#login" onclick="loadLogin()" id="login" style="color:white"> Login</a> to continue';
    console.log('account created')
}

function allData(){
    const status = document.getElementById('allDataStatus');
    status.innerHTML = JSON.stringify(ctx.accounts);
    console.log("data logged");

}

function login() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    console.log("initializing login for: " + email.innerHTML);
}
