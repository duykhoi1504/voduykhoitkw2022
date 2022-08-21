

// ấn để hiện video trailer
function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active')
    video.currentTime = 0;
    video.pause();
}
// hiệu ứng thành tìm kiếm
function addsearch() {
    const icon = document.querySelector('.icon_search');
    const search = document.querySelector('.search');
    search.classList.toggle('activesearch')
}
// scoll page to top
function getBackToDescription() {
    window.scrollTo({
        top: 0,
        left: 0, behavior: 'smooth'
    });
}

// sổ menu thông tin chi tiết ra và ẩn menu đi
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
// thời gian hiện video trailer ở banner
// window.onload = function () {
//     function addTrailer() {
//         const fade = document.querySelector('fade_banner')
//         let video = ` <video src="/vids/SHAZAM! CƠN THỊNH NỘ CỦA CÁC VỊ THẦN - Trailer chính thức.mp4" autoplay
//     plays-inline></video> `
//         fade.insertAdjacentHTML("afterend", video)
//     }
//     setTimeout(addTrailer, 3000)
// }