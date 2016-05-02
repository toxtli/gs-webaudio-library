"use strict";

(function() {


walContext.Composition = function( wCtx ) {
	this.wCtx = wCtx;
	this.wSamples = [];
};

walContext.Composition.prototype = {
	addSamples: function( wSamplesArr ) {
		var that = this;
		$.each( wSamplesArr, function() {
			if ( that.wSamples.length === 0 || that.wSamples.indexOf( this ) === -1 ) {
				that.wSamples.push( this );
			}
		});
	}
};

})();