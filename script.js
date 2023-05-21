const ratingComponent= document.querySelector('.rating-component')
const thankyouComponent = document.querySelector('.thankyou-component') 
const submitBtn = document.getElementById('submit')
const rateAgain = document.getElementById('rate-again')
const rates = document.querySelectorAll('.btn')
const rating = document.querySelector('#rating')

submitBtn.addEventListener('click', () => {
    thankyouComponent.classList.remove('hidden')
    ratingComponent.style.display= 'none'
})

rateAgain.addEventListener('click', () => {
    thankyouComponent.classList.add('hidden')
    ratingComponent.style.display= 'block'
})

rates.forEach((rate) => {
    rate.addEventListener('click', ()=>{
        rating.innerHTML = rate.innerHTML
    })
})

