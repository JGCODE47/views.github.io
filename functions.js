'use strict'
var show = ''
var click = 0
const precarga = document.querySelectorAll("iframe")
const dist = [...precarga]
dist.map(item => {
    item.style.visibility = "hidden"
    setTimeout(() => {
        window.onload = setTimeout(() => {
            item.style.visibility = "visible"
        }, 0)
    }, 1500)
})

const img = document.querySelectorAll("img")
const ims = [...img]
ims.map(item => {
    item.style.visibility = "hidden"
    setTimeout(() => {
        window.onload = setTimeout(() => {
            item.style.visibility = "visible"
        }, 0)
    }, 1500)
})




document.cookie = "SameSite=Lax; Secure"
window.addEventListener("DOMContentLoaded", scrollAnimation)
function scrollAnimation() {
    window.addEventListener("scroll", () => {
        window.scrollY > 30 ? document.querySelector(".Navbar").classList.add('Navbar-decoration') : document.querySelector(".Navbar").classList.remove('Navbar-decoration')
        if (window.innerWidth <= 850) {
            window.scrollY > 450 ? document.querySelector(".Navbar").style.display = "none" : document.querySelector(".Navbar").style.display = "flex"
        } else {
            document.querySelector(".Navbar").style.display = "flex"
        }
    })

    window.onload = () => {

        const menusAcordion = document.querySelectorAll(".menu-toggle")
        const acordion = [...menusAcordion]
        for (let i = 0; i < acordion.length; i++) {
            acordion[i].addEventListener("click", e => {
                let clase = acordion[i].getAttribute("data-target")
                const valr = document.querySelector(`${clase}`)
                var ppt = [...valr.classList]
                if (acordion[i].getAttribute("data-target") == clase && ppt.indexOf("ocultaracor") == 1) {
                    valr.classList.add("mostraracor")
                    valr.classList.remove("ocultaracor")
                } else {
                    valr.classList.remove("mostraracor")
                    valr.classList.add("ocultaracor")
                }
                const hack = document.querySelectorAll(`.${ppt[0]}`)
                for (let j = 0; j < hack.length; j++) {
                    if (hack[j].getAttribute("id") != e.target.getAttribute("data-target").split("#")[1]) {
                        hack[j].classList.remove("mostraracor")
                        hack[j].classList.add("ocultaracor")
                    }
                }

            })
        }

        /*
        
        acordion.map(item => {
            item.addEventListener("click", e => {
                let identificador = e.target.getAttribute("data-target")
                let showAcordion = document.querySelector(`${identificador}`)
                if (click == 0) {
                    click = click + 1
                    if (show.length > 0) {
                        let mostrar = [...show.classList]
                        switch (mostrar[1] == "mostrar") {
                            case true:
                                show.classList.remove("mostrar")
                                show.classList.add("ocultaracor")
                                break
                            case false:
                                show.classList.add("mostrar")
                                show.classList.remove("ocultaracor")
                                break
                        }
                    } else {
                        showAcordion.classList.add("mostrar")
                        showAcordion.classList.remove("ocultaracor")
                    }
                    showAcordion.classList.add("mostrar")
                    showAcordion.classList.remove("ocultaracor")
                    show = identificador


                } else {
                    click = click - 1
                    if (show.length > 0) {                      
                        let ocultarmamalon = document.querySelector(`${show}`)
                        ocultarmamalon.classList.remove("mostrar")
                        ocultarmamalon.classList.add("ocultaracor")
                    }else{
                        showAcordion.classList.add("mostrar")
                    showAcordion.classList.remove("ocultaracor")
                    }
                }
          
                         let mostrar = [...showAcordion.classList]
         
                         switch (mostrar[1] == "mostrar") {
                             case true:
                                 showAcordion.classList.remove("mostrar")
                                 showAcordion.classList.add("ocultaracor")
                                 break
                             case false:
                                 showAcordion.classList.add("mostrar")
                                 showAcordion.classList.remove("ocultaracor")
                                 break
                         }       
                



                        })
                    })
            
        
        
        */
    }
}







document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu-mo")
    const menucl = document.querySelector(".menu-cl")
    const navbar = document.querySelector("nav")

    menu.addEventListener("click", e => {
        const ul = navbar.querySelector("ul")
        ul.classList.add("show")
        ul.classList.remove("fade")
        menucl.style.display = "block"
    })
    menucl.addEventListener("click", e => {
        const ul = navbar.querySelector("ul")
        ul.classList.remove("show")
        ul.classList.add("fade")
        menucl.style.display = "none"
    })

})


