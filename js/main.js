
var onstop
var onstart
var onclear

( function () {
	var video = document.getElementById( 'video' )
	var videoTime = document.getElementById( 'video-current-time' )
	var trace = document.getElementById( 'mouse-trace' )

	function play () {
		video.play()
		requestAnimationFrame( tick )
	}

	function tick () {
		const p = drawObj.points
		const t = video.currentTime
		videoTime.value = t
		const array = []
		p.forEach( ( v, i ) => {
			array[ p.length - i - 1 ] = `(${ v[ 0 ] }, ${ v[ 1 ] })`
		} )
		trace.value = array.join( '\n' )
		requestAnimationFrame( tick )
	}

	onstop = () => video.pause()
	onstart = () => play()
	onclear = () => drawObj.clear()

	drawObj.init( 'canvas' )
	play()

} )()
