;(function() {
	var Retina = {
		init: function() {
			var self = this;
			self.replaceRetina();
		},

		replaceRetina: function() {
			var self = this;
			var retina = false;
			if(window.devicePixelRatio) {
				retina = window.devicePixelRatio>1;
			}



			if(retina) {
				var imagem1 = document.getElementById("imagem1_img");
				imagem1.src = imagem1.src.replace(".png", "@2x.png");
			}
		}
	};

	Retina.init();
})();