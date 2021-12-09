let sidebar = document.querySelector('.sidebar');
let openSideBar = document.querySelector('.sidebar .sidebar-btn');

openSideBar.addEventListener('click', () => {
    sidebar.classList.toggle('openSidebar')
})