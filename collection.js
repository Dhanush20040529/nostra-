document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("complete")
        initApp()
    }
})
const initApp = ()=>{


    /* || collection page functions || */

    const input = document.getElementById("search");
    const collection = document.querySelectorAll(".collection");

    input.addEventListener("keyup",(event)=>{
        for ( let i=0; i<collection.length; i++){ 

            let enteredText = event.target.value.toUpperCase()

            if(collection[i].textContent.toUpperCase().indexOf(enteredText)<0){
            collection[i].style.display="none";
           
            }
            else{
            collection[i].style.display="flex";
        
            }
            
    }})

}