
var drawObj = {
	init: id => { },
	clear: () => { },
	points: []
};

( function () {
	var c, ctx
	var dragging = false
	var lastPos

	function move ( pos ) {
		if ( dragging ) {
			ctx.beginPath()
			ctx.moveTo( lastPos[ 0 ], lastPos[ 1 ] )
			ctx.lineTo( pos[ 0 ], pos[ 1 ] )
			ctx.stroke()
			lastPos = pos
			drawObj.points.push( pos )
		}
	}

	function down ( pos ) {
		dragging = true
		lastPos = pos
	}

	function up ( pos ) {
		move( pos )
		dragging = false
	}

	function pos ( e ) {
		var x, y
		var rect = e.target.getBoundingClientRect()
		x = e.clientX - rect.left
		y = e.clientY - rect.top
		return [ x, y ]
	}

	function init ( id ) {
		c = document.getElementById( id )
		ctx = c.getContext( '2d' )
		ctx.scale( 2, 2 )
		ctx.strokeStyle = 'blue'
		ctx.lineWidth = 2
		c.addEventListener( 'mousedown', e => down( pos( e ) ) )
		c.addEventListener( 'mouseup', e => up( pos( e ) ) )
		c.addEventListener( 'mousemove', e => move( pos( e ) ) )
	}

	function clear () {
		console.log( c.width )
		ctx.clearRect( 0, 0, c.width, c.height )
		drawObj.points = []
	}

	drawObj.init = init
	drawObj.clear = clear

} )()
