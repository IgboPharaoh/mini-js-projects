const questions = document.querySelectorAll('.question');
const toggleBtns = document.querySelectorAll('.question-btn');

// toggleBtns.forEach(function(btn){
//     btn.addEventListener('click', function(event){
//         const question = event.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })

toggleBtns.forEach(function(btn){
    btn.addEventListener('click', function(event){
        const question = event.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
    })
})