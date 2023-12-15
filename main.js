let showpage = document.querySelector("#btn-signin")
showpage.addEventListener('click',function(){
    document.querySelector(".contaner").classList.add("active")
})

let hiddinpage = document.querySelector(".create .close-btn")
hiddinpage.addEventListener('click',function(){
    document.querySelector(".contaner").classList.remove("active")
})

