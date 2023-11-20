let audio = document.getElementById("audio_file1")
let img_music = document.getElementById("img-music")
let list_color = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
let flag = false

let list_music = ["Salam.mp3", "Man-Edameh-Midam.mp3"]
let img = ["1.jpg", "2.jpg"]
list_music_count = 0

function changeColor() {
    let a = "#"
    let b = "#"
    for (i = 0; i < 4; i++) {
        a += list_color[Math.floor(Math.random() * list_color.length)]
        b += list_color[Math.floor(Math.random() * list_color.length)]
    }
    console.log(a)
    console.log(b)
    document.getElementById("box-music").style.backgroundImage = "linear-gradient(45deg," + a + "," + b + ")"
}



function playPause() {
    if (!flag) {
        audio.play()
        document.getElementById("play_icon").setAttribute("xlink:href", "symbol-defs.svg#icon-pause")
        document.getElementById("svg_icon_play").setAttribute("class", "icon-play2")
        setInterval(changeColor,7000)
       



        flag = true
    } else {
        audio.pause()
        document.getElementById("play_icon").setAttribute("xlink:href", "symbol-defs.svg#icon-play")
        document.getElementById("svg_icon_play").setAttribute("class", "icon-play")
        flag = false
    }
}



function nextMusic() {
    if (list_music.length - 1 > list_music_count) {
        console.log(list_music.length)
        console.log(list_music_count)
        list_music_count += 1
        audio.setAttribute("src", "music/" + list_music[list_music_count])
        img_music.setAttribute("src", img[list_music_count])
        if (flag) {
            playPause()
            playPause()
        } else {
            playPause()
        }


        currentTime1()


        nameMusic()
        nowrange = setInterval(function () {

            document.getElementById("inp_music_range").setAttribute("max", audio.duration)
            if (audio.duration != NaN)(
                clearInterval(nowrange)
            )
        }, 100)
        timer_interval2 = setInterval(function () {
            let time_duration = Math.floor(audio.duration)
            console.log(audio.duration)
            console.log(time_duration)

            let cuont = 0
            while (time_duration >= 59) {
                if (time_duration >= 60) {
                    time_duration -= 60
                    cuont += 1
                }
            }
            if (time_duration != "NaN") {
                clearInterval(timer_interval2)
            }


            let main_time = document.getElementById("main-time")
            if (cuont > 10) {
                main_time.innerHTML = cuont + ":" + Math.floor(time_duration)
            } else {
                main_time.innerHTML = "0" + cuont + ":" + Math.floor(time_duration)
            }
        }, 10)
    } else {
        list_music_count = 0
        audio.setAttribute("src", "music/" + list_music[list_music_count])
        img_music.setAttribute("src", img[list_music_count])
        if (flag) {
            playPause()
            playPause()
        } else {
            playPause()
        }


        currentTime1()


        nameMusic()
        nowrange = setInterval(function () {

            document.getElementById("inp_music_range").setAttribute("max", audio.duration)
            if (audio.duration != NaN)(
                clearInterval(nowrange)
            )
        }, 100)
        timer_interval2 = setInterval(function () {
            let time_duration = Math.floor(audio.duration)
            console.log(audio.duration)
            console.log(time_duration)

            let cuont = 0
            while (time_duration >= 59) {
                if (time_duration >= 60) {
                    time_duration -= 60
                    cuont += 1
                }
            }
            if (time_duration != "NaN") {
                clearInterval(timer_interval2)
            }


            let main_time = document.getElementById("main-time")
            if (cuont > 10) {
                main_time.innerHTML = cuont + ":" + Math.floor(time_duration)
            } else {
                main_time.innerHTML = "0" + cuont + ":" + Math.floor(time_duration)
            }
        }, 10)
    }
}


function lastMusic() {
    if (list_music_count >= 1) {
        console.log(list_music.length)
        console.log(list_music_count)
        list_music_count -= 1
        audio.setAttribute("src", "music/" + list_music[list_music_count])
        img_music.setAttribute("src", img[list_music_count])
        if (flag) {
            playPause()
            playPause()
        } else {
            playPause()
        }


        currentTime1()


        nameMusic()
        nowrange = setInterval(function () {

            document.getElementById("inp_music_range").setAttribute("max", audio.duration)
            if (audio.duration != NaN)(
                clearInterval(nowrange)
            )
        }, 100)
        timer_interval2 = setInterval(function () {
            let time_duration = Math.floor(audio.duration)
            console.log(audio.duration)
            console.log(time_duration)

            let cuont = 0
            while (time_duration >= 59) {
                if (time_duration >= 60) {
                    time_duration -= 60
                    cuont += 1
                }
            }
            if (time_duration != "NaN") {
                clearInterval(timer_interval2)
            }


            let main_time = document.getElementById("main-time")
            if (cuont > 10) {
                main_time.innerHTML = cuont + ":" + Math.floor(time_duration)
            } else {
                main_time.innerHTML = "0" + cuont + ":" + Math.floor(time_duration)
            }
        }, 10)
    } else {
        list_music_count = list_music.length - 1
        audio.setAttribute("src", "music/" + list_music[list_music_count])
        img_music.setAttribute("src", img[list_music_count])
        if (flag) {
            playPause()
            playPause()
        } else {
            playPause()
        }


        currentTime1()


        nameMusic()


        nowrange = setInterval(function () {

            document.getElementById("inp_music_range").setAttribute("max", audio.duration)
            if (audio.duration != NaN)(
                clearInterval(nowrange)
            )
        }, 100)

        timer_interval2 = setInterval(function () {
            let time_duration = Math.floor(audio.duration)
            console.log(audio.duration)
            console.log(time_duration)

            let cuont = 0
            while (time_duration >= 59) {
                if (time_duration >= 60) {
                    time_duration -= 60
                    cuont += 1
                }
            }
            if (time_duration != "NaN") {
                clearInterval(timer_interval2)
            }


            let main_time = document.getElementById("main-time")
            if (cuont > 10) {
                main_time.innerHTML = cuont + ":" + Math.floor(time_duration)
            } else {
                main_time.innerHTML = "0" + cuont + ":" + Math.floor(time_duration)
            }
        }, 10)
    }
}
























function showRangeMusic() {

    document.getElementById("inp_music_range").setAttribute("max", audio.duration)
}


function mousedown1(event) {
    audio.currentTime = event.target.value
    currentTime1()
}

nowrange = setInterval(function () {

    document.getElementById("inp_music_range").setAttribute("max", audio.duration)
    if (audio.duration != NaN)(
        clearInterval(nowrange)
    )
}, 100)







function currentTime1() {

    let timecurrentTime = Math.floor(audio.currentTime)

    let cuont = 0
    while (timecurrentTime >= 59) {
        if (timecurrentTime >= 60) {
            timecurrentTime -= 60
            cuont += 1
        }
    }


    let main_time = document.getElementById("current-time")
    if (cuont > 10) {
        main_time.innerHTML = cuont + ":" + Math.floor(timecurrentTime)
    } else {
        main_time.innerHTML = "0" + cuont + ":" + Math.floor(timecurrentTime)
    }


}



setInterval(currentTime1, 1000)

function mainTimer() {
    console.log("salam")
    let time_duration = Math.floor(audio.duration)

    let cuont = 0
    while (time_duration >= 59) {
        if (time_duration >= 60) {
            time_duration -= 60
            cuont += 1
        }
    }
    if (time_duration != NaN) {
        clearInterval(timer_interval)
    }


    let main_time = document.getElementById("main-time")
    if (cuont > 10) {
        main_time.innerHTML = cuont + ":" + Math.floor(time_duration)
    } else {
        main_time.innerHTML = "0" + cuont + ":" + Math.floor(time_duration)
    }
}

timer_interval = setInterval(mainTimer, 10)




function nameMusic() {
    let name_music = audio.getAttribute("src").split(".")[0].slice(6)
    document.getElementById("name-music").innerHTML = name_music


}

nameMusic()




function showNowRange() {
    document.getElementById("inp_music_range").value = audio.currentTime
}
showNowRange()
setInterval(showNowRange, 1000)









function mousedownVolume(event) {
    audio.volume = event.target.value / 100

}

let flag_hidden = true

function hiddenVolume(event) {
    if (flag_hidden) {
        document.getElementById("box-volume").setAttribute("class", "box-volume")
        flag_hidden = false
    } else {
        document.getElementById("box-volume").setAttribute("class", "box-volume-hidden")
        flag_hidden = true
    }

}
flag_like = false

function likeIcon(event) {
    if (flag_like) {
        event.target.style.fill = "#000"
        flag_like = false
    } else {
        event.target.style.fill = "#ff0000"
        flag_like = true
    }
}