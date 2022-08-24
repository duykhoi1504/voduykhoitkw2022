// hiệu ứng thành tìm kiếm
function addsearch() {
    const icon = document.querySelector('.icon_search');
    const search = document.querySelector('.search');
    search.classList.toggle('activesearch')
}
// ======================scroll to top=========================
const scrolltotop = document.getElementById('scroll-back')
function getBack() {
    window.scrollTo({
        top: 0,
        left: 0, behavior: 'smooth'
    });
}
window.onscroll = function () {
    if (window.scrollY > 200) {
        scrolltotop.style.visibility = "visible";
        scrolltotop.style.opacity = 1;

    } else {
        scrolltotop.style.visibility = "hidden";
        scrolltotop.style.opacity = 0;
    }
};

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

// ấn để hiện video trailer
function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    // const video = document.querySelector('video');
    trailer.classList.toggle('active')
}
// ====================post group-render thông báo từ array=================
let noice = [
    {
        image: "imgs/films noice/AAAABR1mpkCqnO8XkmpkH51M20KIYXrx36yHvMBFTG0sv0YynY3KN7U9rt1xCgLY8_wbM47qufrtxh3Z75kkr0KkQ7rL7XkB7JjW-mQ.jpg",
        title1: "Đã ra mắt tập 12",
        title2: "cách đây 1 tuần"
    },
    {
        image: "imgs/films noice/AAAABR1mpkCqnO8XkmpkH51M20KIYXrx36yHvMBFTG0sv0YynY3KN7U9rt1xCgLY8_wbM47qufrtxh3Z75kkr0KkQ7rL7XkB7JjW-mQ.jpg",
        title1: "Đã ra mắt tập 12",
        title2: "cách đây 1 tuần"
    },
    {
        image: "imgs/films noice/AAAABR1mpkCqnO8XkmpkH51M20KIYXrx36yHvMBFTG0sv0YynY3KN7U9rt1xCgLY8_wbM47qufrtxh3Z75kkr0KkQ7rL7XkB7JjW-mQ.jpg",
        title1: "Đã ra mắt tập 12",
        title2: "cách đây 1 tuần"
    },
    {
        image: "imgs/films noice/AAAABR1mpkCqnO8XkmpkH51M20KIYXrx36yHvMBFTG0sv0YynY3KN7U9rt1xCgLY8_wbM47qufrtxh3Z75kkr0KkQ7rL7XkB7JjW-mQ.jpg",
        title1: "Đã ra mắt tập 12",
        title2: "cách đây 1 tuần"
    },
    {
        image: "imgs/films noice/AAAABR1mpkCqnO8XkmpkH51M20KIYXrx36yHvMBFTG0sv0YynY3KN7U9rt1xCgLY8_wbM47qufrtxh3Z75kkr0KkQ7rL7XkB7JjW-mQ.jpg",
        title1: "Đã ra mắt tập 12",
        title2: "cách đây 1 tuần"
    },
    {
        image: "imgs/films noice/AAAABR1mpkCqnO8XkmpkH51M20KIYXrx36yHvMBFTG0sv0YynY3KN7U9rt1xCgLY8_wbM47qufrtxh3Z75kkr0KkQ7rL7XkB7JjW-mQ.jpg",
        title1: "Đã ra mắt tập 12",
        title2: "cách đây 1 tuần"
    },

];
let noice_selector = document.querySelector("#noice");
renderPost = (post) => {
    post.forEach(function (e) {
        let prod = `
        <div class="bell_item flex flexcenter">
                            <div class="bell_img">
                                <img src="${e.image}"
                                    alt="cau be sieu nang luc">
                            </div>
                            <div class="bell_title">
                                <p>${e.title1}</p>
                                <p>${e.title2}</p>
                            </div>
                        </div>
    `;
        noice_selector.insertAdjacentHTML("beforeend", prod);
    });
};
renderPost(noice);
