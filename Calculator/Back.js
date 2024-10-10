
        let Final = 0

        document.querySelector(".counter-button").addEventListener("click", (e) => {
              Final += 1
             document.querySelector(".counter").textContent = Final
        })
        
    
        document.querySelector(".necounter-button").addEventListener("click", (e) => {
            if (Final > 0)
            Final -= 1
        else
        Final
           document.querySelector(".counter").textContent = Final
      })
      document.querySelector(".obnulenie").addEventListener("click", (e) => {
        Final = 0
       document.querySelector(".counter").textContent = Final
  })
      