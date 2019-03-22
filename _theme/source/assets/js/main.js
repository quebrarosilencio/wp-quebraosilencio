var App = App || {};

(function() {

	App.Main = {
		init: function() {
			this.cacheSelectors();
			this.bindScripts();
		},

		cacheSelectors: function() {
			this.dataScript = document.querySelectorAll('[data-script]');
		},

		bindScripts: function() {
			var arrayScripts = Array.prototype.slice.call(this.dataScript);

			var mapScripts = arrayScripts.map(function(script) {
				return script.getAttribute('data-script');
			});

			var filteredScripts = mapScripts.filter(function(item, pos) {
			  return mapScripts.indexOf(item) == pos;
			});

			for ( var i = 0; i < filteredScripts.length; i++ ) {
				App[filteredScripts[i]].init();
			}
		}
	}

	document.addEventListener('DOMContentLoaded', function() {
		App.Main.init();
	});

})();