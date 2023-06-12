const botaoSortear =  document.querySelector("div.box button")
var numeroSorteado =  document.querySelector("div.box h1", "div.box-1")
var roleta = []


// for(i = 0; i <= 60; i++){

//     roleta.push(i)
// } 

// botaoSortear.addEventListener("click", () => {
//     numeroSorteado.innerHTML = "O NUMERO SORTEADO É " + roleta[Math.floor(Math.random()*roleta.length)]
// })                                                          


   

    botaoSortear.addEventListener("click", () => {
        function sorteio () {
            return Math.floor(Math.random() * 16);   
        }

        while(roleta.length < 9) {
            let result = sorteio();

            for(let i = 0; i < result.length; i++) {
                if(roleta[i] !== result) {
                    roleta.push(result)
                }
            }

            console.log(result)
        }
    })