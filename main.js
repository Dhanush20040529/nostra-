document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("complete")
        initApp()
    }
})

const initApp = ()=>{

   /* || side nav bar || */

    const sideBar = document.getElementById("side-bar");
    const closeBtn = document.getElementById("close-btn");
    const toggleBar = document.getElementById("toggle-bar");
    toggleBar.addEventListener("click",()=>{
        sideBar.style.left = "0%"
    })
    closeBtn.addEventListener("click",()=>{
         sideBar.style.left = "-50%"
    })

  
 



} 