class UI{
    constructor(){
        this.profile = document.querySelector('.profile')
    }
    showProfile(user){  
        this.profile.innerHTML=`
        <div class="card mb-3">
        <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <img src="${user.avatar_url}" alt="img-profile" class="img-fluid mb-3">
                        <a href="${user.html_url}" class="btn btn-primary btn-block">Veiw Profile</a>
                    </div>
                    <div class="col-9">
                        <span class="badge badge-primary">public repository : ${user.public_repos}</span>
                        <span class="badge badge-secondary">public Gits : ${user.public_gists}</span>
                        <span class="badge badge-success">profile fallower : ${user.followers}</span>
                        <span class="badge badge-danger">public following : ${user.following}</span>
                        <ul class="list-group mt-5">
                           <li class="list-group-item">company ${user.company}</li>
                           <li class="list-group-item">WebSite : ${user.name}</li>
                           <li class="list-group-item">Location : ${user.location}</li>
                           <li class="list-group-item">Menber Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>   
                <div class=" btn btn-success mt-3 mb-2">Latest Repositories</div>
                <div class="repos"></div>
        </div>
        
    </div>
        
        `
    }
    // show repos list
    showRepos(repos){
        let output = ''
        repos.forEach(repo => {
            output += `
            
            <div class="card card-body">
            <div class="row">
                <div class="col-6">
                    <a href="${repo.html_url}" target="_blank" class="">${repo.name}</a>
                </div>
                <div class="col-6">
                    <span class="badge badge-primary">star: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">watcher:${repo.watchers}</span>
                    <span class="badge badge-success">Fork: ${repo.forks_count}</span>
                </div>
            </div>
        </div>
            `
        })
        document.querySelector('.repos').innerHTML= output
    }
    // clear profile

    clearProfile() {
        this.profile.innerHTML = '' //empty in search input
    }

    // show Alert
    showAlert(massage,className) {
        this.clearAlert()
        let searchContent =document.querySelector('.searchContent')
        let search = document.querySelector('.search')
        let alert = document.createElement('div')
        alert.className = className
        alert.textContent=massage
        searchContent.insertBefore(alert,search)
        setTimeout(()=>{
            this.clearAlert()
        },2000)
    }

    clearAlert() {
        let currentAlert =document.querySelector('.alert-danger')
        if(currentAlert){
            currentAlert.remove();
        }
    }
}