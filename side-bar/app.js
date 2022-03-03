const sideNavBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

sideNavBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar')
})
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})