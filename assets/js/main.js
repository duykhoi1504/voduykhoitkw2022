

// ấn để hiện video trailer
function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active')
}
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

/* =============== post group-render video tu array =============== */
// =====================adventure===================
let post_adventure = [
    {
        image: "imgs/films/z3593771025275_2e43c18c1c4bc5cad3d6749cbf21b1af.jpg",
        title: "Spider man",
    },
    {
        image: "imgs/films/z3593771069302_b433072f1326fe95a4cde454b7280300.jpg",
        title: "Hit man & bodyguard 2",
    },
    {
        image: "imgs/films/z3593771041912_ae4306fe828c4a5620652adf2b440115.jpg",
        title: "The Wolverine",
    },
    {
        image: "imgs/films/z3593771051947_55d00f06d854cfd69ddedb0af5050cb2.jpg",
        title: "Money HEIST",
    },
    {
        image: "imgs/films/z3593771061508_948b460b5b098ae36dbe7cb97f3cf916.jpg",
        title: "jumanji II",
    },

];
let post_adventure_selector = document.querySelector("#adventure");
renderPost = (post) => {
    post.forEach(function (e) {
        let prod = `
        <div class="movie_item_boss">
                    <a href="play-page.html">
                        <div class="movie_item">
                            <div class="movie">
                            <img src="${e.image}" alt="">
                            </div>
                            <div class="movie_tittle">
                                <p>${e.title}</p>
                            </div>
                        </div>
                    </a>
        </div>
    `;
        post_adventure_selector.insertAdjacentHTML("beforeend", prod);
    });
};
renderPost(post_adventure);

//================animation============================
let post_animation = [
    {
        image: "imgs/animation films/ing a bit of farmon.jpg",
        title: "Sing a Bit of Harmony",
    },
    {
        image: "imgs/animation films/josee tiger and fish.jpg",
        title: "Jose Tiger and the Fish",
    },
    {
        image: "imgs/animation films/one piece film red.jpg",
        title: "One Piece Red",
    },
    {
        image: "imgs/animation films/pil.jpg",
        title: "Pil",
    },
    {
        image: "imgs/animation films/superpets.jpg",
        title: "SuperpetS",
    },

];
let post_animation_selector = document.querySelector("#animation");
renderPost = (post) => {
    post.forEach(function (e) {
        let prod = `
        <div class="movie_item_boss">
                    <a href="play-page.html">
                        <div class="movie_item">
                            <div class="movie">
                            <img src="${e.image}" alt="">
                            </div>
                            <div class="movie_tittle">
                                <p>${e.title}</p>
                            </div>
                        </div>
                    </a>
        </div>
    `;
        post_animation_selector.insertAdjacentHTML("beforeend", prod);
    });
};
renderPost(post_animation);

// =======================sciene fiction======================
let post_science = [
    {
        image: "imgs/science fiction films/avatar.jpg",
        title: "Avatar",
    },
    {
        image: "imgs/science fiction films/nope.jpg",
        title: "Nope",
    },
    {
        image: "imgs/science fiction films/pacific rim.jpg",
        title: "jPacific Rim",
    },
    {
        image: "imgs/science fiction films/rogue one a star wars story.jpg",
        title: "jRogue one",
    },
    {
        image: "imgs/science fiction films/rrimes of the future.jpg",
        title: "Crimes of the future",
    },

];
let post_science_selector = document.querySelector("#science");
renderPost = (post) => {
    post.forEach(function (e) {
        let prod = `
        <div class="movie_item_boss">
                    <a href="play-page.html">
                        <div class="movie_item">
                            <div class="movie">
                            <img src="${e.image}" alt="">
                            </div>
                            <div class="movie_tittle">
                                <p>${e.title}</p>
                            </div>
                        </div>
                    </a>
        </div>
    `;
        post_science_selector.insertAdjacentHTML("beforeend", prod);
    });
};
renderPost(post_science);


// ===============horror film====================
let post_horror = [
    {
        image: "imgs/horror films/beast.jpg",
        title: "Beast",
    },
    {
        image: "imgs/horror films/black phone.jpg",
        title: "The black phone",
    },
    {
        image: "imgs/horror films/invitation.jpg",
        title: "Invitation",
    },
    {
        image: "imgs/horror films/the lake.jpg",
        title: "The LAKE",
    },
    {
        image: "imgs/horror films/vesper.jpg",
        title: "Vesper",
    },

];
let post_horror_selector = document.querySelector("#horror_film");
renderPost = (post) => {
    post.forEach(function (e) {
        let prod = `
        <div class="movie_item_boss">
                    <a href="play-page.html">
                        <div class="movie_item">
                            <div class="movie">
                            <img src="${e.image}" alt="">
                            </div>
                            <div class="movie_tittle">
                                <p>${e.title}</p>
                            </div>
                        </div>
                    </a>
                </div>
    `;
        post_horror_selector.insertAdjacentHTML("beforeend", prod);
    });
};
renderPost(post_horror);


// ===============martial====================
let post = [
    {
        image: "imgs/Martial arts films/karate kid.jfif",
        title: "The karate KID",
    },
    {
        image: "imgs/Martial arts films/drunken master.jfif",
        title: "Move on step",
    },
    {
        image: "imgs/Martial arts films/enter the dragon.png",
        title: "Enter the Dragon",
    },
    {
        image: "imgs/Martial arts films/saolin soccer.jfif",
        title: "Football match",
    },
    {
        image: "imgs/Martial arts films/the grandmaster.jfif",
        title: "The grandmaster",
    },

];
let post_list = document.querySelector("#martial");
renderPost = (post) => {
    post.forEach(function (e) {
        let prod = `
        <div class="movie_item_boss">
        <a href="play-page.html">
            <div class="movie_item">
                <div class="movie">
                    <img src="${e.image}" alt="">
                </div>
                <div class="movie_tittle">
                    <p>${e.title}</p>
                </div>
            </div>
        </a>
    </div>
    `;
        post_list.insertAdjacentHTML("beforeend", prod);
    });
};
renderPost(post);






