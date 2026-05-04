document.addEventListener("DOMContentLoaded", () =>{
    console.log("loaded")

    let darkmode = localStorage.getItem('darkmode')
    const themeSwitch = document.querySelector('.theme-switch')
    
    const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}
    const disableDarkmode = () => {
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode', null)
    }
        if(darkmode === "active") enableDarkmode()
            themeSwitch.addEventListener("click", () => {
        console.log("loaded")
           darkmode = localStorage.getItem('darkmode')
        if(darkmode !== "active"){
            enableDarkmode()
        }
        else{
            disableDarkmode()
        }
    })
})