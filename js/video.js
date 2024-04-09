var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
	console.log("Auto play is set to "+video.autoplay);
	console.log("Loop is set to "+video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is "+video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is "+video.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Current location: "+video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Current volume: "+video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});


document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});