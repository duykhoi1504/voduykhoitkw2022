function videobanner() {
    const x = document.querySelector('.play')
    // let h = `
    //     <div class="banner">
    // <video class="videobanner" src="/vids/signin_page_video/Sumeru Promotional Video｜Genshin Impact.mp4"
    //                 autoplay controls loop ></video>
    //                 <div onclick="pause()" class="pause">
    //                 <i class=" fa-solid fa-pause"></i>
    //                 </div>
    //                 </div>
    // `
    let h = `
        <div class="banner">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/zZEpU-DbzZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div onclick="pause()" class="pause">
                    <i class=" fa-solid fa-pause"></i>
                    </div>
                    </div>
    `
    //     // x.classList.toggle('activevideo')  
    // x.insertAdjacentHTML("afterend", h)

    x.insertAdjacentHTML("afterend", h)


}
function pause() {
    const stop = document.querySelector(".banner");
    stop.remove(this)
}