export default class Lesson {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    playVideo() {
        playVideoID(this.videoID)
    }
    pauseVideo() {
        pauseVideoID(this.videoID)
    }

}

function playVideoID(id) {
    const URL = "https://e-webschool.com/" + id;
    console.log(URL, '    <- Playing');
}

function pauseVideoID(id) {
    const URL = "https://e-webschool.com/" + id;
    console.log(URL, '    <- Paused');
}
