

const addButtons = document.querySelectorAll(".add-btn")

const popup = document.getElementById("popup")

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popup.classList.add("show-popup")
    setTimeout(() => {
      popup.classList.remove("show-popup")
    }, 2000)

  })

})

const buttons = document.querySelectorAll(".button-select button")
const cards = document.querySelectorAll(".product-card")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => {
            btn.classList.remove("active")
        })


        button.classList.add("active")


        const category = button.textContent.toLowerCase()

        cards.forEach((card) => {
            const cardCategory = card.dataset.category
            if(category === "todo"){
                card.style.display = "block"
            } else if(cardCategory === category)
                {card.style.display = "block"
            } else{card.style.display = "none"}

        })

    })

})