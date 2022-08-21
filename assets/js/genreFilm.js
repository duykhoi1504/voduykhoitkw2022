// hiệu ứng thành tìm kiếm
function addsearch() {
    const icon = document.querySelector('.icon_search');
    const search = document.querySelector('.search');
    search.classList.toggle('activesearch')
}
window.onload = function () {
    const clickhere = document.querySelector(' .avatar_img');
    const btnclose = document.querySelector('.button_close')
    const personalclick = document.querySelector('.menu_personal_boss')
    const taskmenu = document.querySelector('.menu_personal')
    clickhere.addEventListener('click', function () {
        personalclick.classList.add('activemenu')
    })
    btnclose.addEventListener('click', function () {
        personalclick.classList.remove('activemenu')
    })
    personalclick.addEventListener('click', function () {
        personalclick.classList.remove('activemenu')
    })
    taskmenu.addEventListener('click', function (event) {
        event.stopPropagation();
    })
}
function getBackToDescription() {
    window.scrollTo({
        top: 0,
        left: 0, behavior: 'smooth'
    });
}