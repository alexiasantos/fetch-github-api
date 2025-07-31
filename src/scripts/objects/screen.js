const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(userData){
        this.userProfile.innerHTML =`<div class="info">
                                        <img src="${userData.avatarUrl}" alt="Foto de perfil">
                                            <div class="data">
                                                <h1>${userData.name??'Não possui nome cadastrado'}</h1>
                                                <p>${userData.bio??'Não possui bio cadastrada'}</p>
                                                <p>Seguidores: ${userData.followers??'Não possui seguidores cadastrados'}</p>
                                                <p>Seguindo: ${userData.following??'Não possui segue ninguém'} 👥</p>
                                            </div>
                                    </div>`

        let repositoriesItens = '';
        userData.repositories.forEach(repo => {
            repositoriesItens += `<li>
                                    <a href="${repo.html_url}" target="_blank">
                                    <p>${repo.name}</p>
                                    <span>${repo.language??'Indefinido'}</span>
                                    <span>${repo.watchers_count??'Nenhum watcher definido'}👀</span>
                                    <span>${repo.stargazers_count} ⭐</span>
                                    <span>${repo.forks_count} 🍴</span>
                                    </a>
                                </li>`;
        });
        if(userData.repositories.length > 0){    
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`;
        }
        if(userData.events && userData.events.length > 0){
            let eventsItens = '';
            userData.events.forEach(event => {
                if(event.type === 'PushEvent'){
                    const repoName = event.repo.name;
                    eventsItens += `<li>
                                        <a href="${event.repo.url}" target="_blank">${repoName}</a> - ${event.payload.commits[0].message} 
                                    </li>`;
                }else if(event.type === 'CreateEvent'){
                    const repoName = event.repo.name;
                    eventsItens += `<li>
                                        <a href="${event.repo.url}" target="_blank">${repoName}</a>
                                    </li>`;
                }
            });
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <br>
                                                <ul>${eventsItens}</ul>
                                            </div>`;
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado!</h3>`;
    }
}

export { screen };