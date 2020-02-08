class Github{
    constructor(){
        this.client_id = "Iv1.0725ba2ae2250f09",
        this.client_secret = "b2a1aad41876c8e3efdbef2aceb1b846d13a6bf5"
        this.repos_count = 5
        this.repo_sort = 'created: acs'
    }
async getUser(username){
        let response = await fetch(`https://api.github.com/users/${username} 
        ? ClientID=${this.client_id}& 
        ClientSecret=${this.client_secret}`)

        let responserepos = await fetch(`https://api.github.com/users/${username}/repos?per_page= ${this .repos_count}
        &sort_page= ${this.repos_sort}?
        ClientID=${this.client_id}& 
        ClientSecret=${this.client_secret}`)

        let profile = await response.json()

        let repos = await responserepos.json()

        return {
            profile, // profile:profile
            repos   // repos:repos
        }
    }
}