document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("complete")
        initApp()
    }
    else {
        console.log("not complete")
    }
})


const initApp = ()=>{
    const submitButton = document.getElementById("submit-btn");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    console.log(name)

    submitButton.addEventListener("click",(event)=>{
        event.preventDefault()
        sessionStorage.setItem("name",JSON.stringify(name.value));
        console.log(name.value);
        sessionStorage.setItem("email",JSON.stringify(email.value));
        sessionStorage.setItem("message",JSON.stringify(message.value));
        
        }
        )
    }
