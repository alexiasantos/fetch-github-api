import { getUser } from './services/user.js';
import { getRepositories } from './services/repositories.js';
import {user} from './objects/user.js';
import { screen } from './objects/screen.js';



document.getElementById('btn-search').addEventListener('click', async function() {
    let nome_user = document.getElementById('input-search').value;
    if(validateEmptyInput(nome_user)) return
    getUserData(nome_user);
});

document.getElementById('input-search').addEventListener('keypress', async function(e) {

    if (e.key === 'Enter') {
        let nome_user = document.getElementById('input-search').value;
       if(validateEmptyInput(nome_user)) return
;
        getUserData(nome_user);
       
    }
});


async function getUserData(userName) {
    const userResponse = await getUser(userName);
    if(userResponse.message === 'Not Found') {
        screen.renderNotFound();
        return;
    }

    user.setInfo(userResponse);
    const repositoriesResponse = await getRepositories(userName);
    user.setRepositories(repositoriesResponse);

    screen.renderUser(user);


}

function validateEmptyInput(userName){
       if (userName.length === 0) {
            alert('Por favor, digite um nome de usuário.');
            return true;
        }
}



