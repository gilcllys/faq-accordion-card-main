function gatilho(btn){
    switch (btn.id){
        case "btn-1":
            let a1 = document.getElementById("a-1")
            a1.classList.toggle("showup") 
            a1.classList.toggle("movement")
            let q1 = document.getElementById("q-1")
            q1.classList.toggle("bold")
            break
        case "btn-2":
            let a2 = document.getElementById("a-2")
            a2.classList.toggle("showup")
            a2.classList.toggle("movement")
            let q2 = document.getElementById("q-2")
            q2.classList.toggle("bold") 
            break
        case "btn-3":
            let a3 = document.getElementById("a-3")
            a3.classList.toggle("showup")
            a3.classList.toggle("movement")
            let q3 = document.getElementById("q-3")
            q3.classList.toggle("bold") 
            break
        case "btn-4":
            let a4 = document.getElementById("a-4")
            a4.classList.toggle("showup")
            a4.classList.toggle("movement")
            let q4 = document.getElementById("q-4")
            q4.classList.toggle("bold") 
            break
        case "btn-5":
            let a5 = document.getElementById("a-5")
            a5.classList.toggle("showup")
            a5.classList.toggle("movement")
            let q5 = document.getElementById("q-5")
            q5.classList.toggle("bold") 
            break
    }    
} 