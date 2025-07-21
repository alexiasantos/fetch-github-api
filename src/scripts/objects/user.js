const user ={
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: 0,
    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url;
        this.name = githubUser.name;
        this.bio = githubUser.bio;
        this.userName = githubUser.login;
        this.followers = githubUser.followers;
    },
    setRepositories(repositories){
        this.repositories = repositories;
    }
}

export { user };