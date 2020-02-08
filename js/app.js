let github = new Github();
let ui = new UI()


// search input
let searchInput = document.querySelector('#searchUser')

// add event listeners 
searchInput.addEventListener('keyup',e=>{
    let userName = e.target.value
   if(userName!==''){
        //get profile from git
        github.getUser(userName) //mehod from class github
        .then(data=>{
            console.log(data)
            if(!data.profile.message){
                // show profile web page
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
            }else{
                // show alert message
                ui.showAlert('userNotFound','alert alert-danger')
                
            }
        })

   }else {

    ui.clearProfile(); 

   }
})