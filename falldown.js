( function() {
	var fall = function( element ) {
		setTimeout( function() {
			var bounding = element.getBoundingClientRect();

			if ( bounding.width && bounding.height ) {
				if ( ! ( bounding.top > window.innerHeight ) &&
					 ! ( bounding.left > window.innerWidth ) &&
					 ! ( bounding.right < 0 ) &&
					 ! ( bounding.bottom < 0 ) ) {
					var translateY = window.innerHeight - bounding.bottom;

					if ( translateY > 0 ) {
						element.style.display = 'block';
						element.style.transition = 'transform 250ms ease-in';
						element.style.transform = 'translateY(' + translateY + 'px) rotate(' + ( ( Math.random() * 180 ) - 90 ) + 'deg)';
						element.style.transformOrigin = 'bottom left';
					}
				}
			}
		}, Math.random() *  1000 );
	};

	var check = function( element ) {
		var childNodes = element.children;

		if ( ! childNodes.length || ( childNodes[0].nodeType == 3 && childNodes[0].textContent ) ) {
			fall( element );
		} else {
			for ( var i = 0, length = childNodes.length; i < length; i++ ) {
				var childNode = childNodes[ i ];

				if ( childNode.nodeType == 1 ) {
					check( childNode );
				}
			}
		}
	};

	window.addEventListener( 'load', function() {
		check( document.body );
	} );
} )();
