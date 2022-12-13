//FINTA LOGIN
const email = document.getElementById('e-mail');
const button = document.getElementById('button')
const result = document.getElementById('result')

const allowedEmails = [
    'ciao.tizio@gmail.com',
    'pippo.blu@gmail.com',
    'misosoup42@hotmail.com'
]

button.addEventListener('click', function(){

    const userEmail = email.value.trim();

    if (!userEmail){
        result.innerText = 'Campo Vuoto';
        return;
    }

    let isAllowed = false;

    for (let i = 0; !isAllowed && i < allowedEmails.length; i++) {
        const currentEmail = allowedEmails[i];
        console.log(currentEmail, userEmail);

        if (currentEmail === userEmail){
            isAllowed = true;
        }
    }

    result.innerText = isAllowed ? 'Benvenuto' : 'Spiacente, non sei autorizzato';

})