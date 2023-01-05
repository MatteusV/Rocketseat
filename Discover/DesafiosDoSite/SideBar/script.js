const sidebar = document.getElementsByiD('sidebar');
const sidebarActive = sidebar.getElementsById('sidebarActive');


function toggleSidebar() {
    console.log('toggleSidebar')

    sidebar.style.display = 'none';
    sidebarActive.style.display = 'flex';
}

toggleSidebar();