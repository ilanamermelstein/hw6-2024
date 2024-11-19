var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = 0.9*video.playbackRate;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = 1.1*video.playbackRate;
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {video.currentTime = video.currentTime + 10;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute Button Click");
	if (video.muted != true) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	} else {video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Volume Change");
	video.volume = (document.getElementById("slider").value)/100;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value;
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});