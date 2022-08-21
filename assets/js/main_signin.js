function videobanner() {
    const x = document.querySelector('.play')
    let h = `
    <div class="banner">
<video class="videobanner" src="/vids/signin_page_video/Sumeru Promotional Video｜Genshin Impact.mp4"
                autoplay controls loop ></video>
                <div onclick="pause()" class="pause">
                <i class=" fa-solid fa-pause"></i>
                </div>
                </div>
`
    // x.classList.toggle('activevideo')  
    // x.insertAdjacentHTML("afterend", h)

    x.insertAdjacentHTML("afterend", h)


}
function pause() {
    const stop = document.querySelector(".banner");
    stop.remove(this)
}