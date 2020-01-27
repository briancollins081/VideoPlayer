let player = videojs('my-player');
player.on('ready', ()=>{
	// console.log(this);
	// player.addClass('red-border');
});

player.on('ended', ()=>{
	player.dispose();
})