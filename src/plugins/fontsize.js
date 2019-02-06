const fontSize = {
	install() {
		this._init();
	},
	_init() {
		let rem = {
			drp: window.devicePixelRatio || 1,
			designWidth: 750,
			defaultSize: 20,
			maxWidth: 0,
			px2rem: 100
		};
		let remEl = document.querySelector('meta[name="rem"]');
		if (remEl) {
			let remCon = remEl.getAttribute("content");
			if (remCon) {
				let initialDprMatch = remCon.match(/initial\-dpr=([\d\.]+)/);
				if (initialDprMatch) {
					rem.dpr = parseFloat(initialDprMatch[1]);
				}
				let designWidthMatch = remCon.match(/design\-width=([\d\.]+)/);
				if (designWidthMatch) {
					rem.designWidth = parseFloat(designWidthMatch[1]);
				}
				let maxWidthMatch = remCon.match(/max\-width=([\d\.]+)/);
				if (maxWidthMatch) {
					rem.maxWidth = parseFloat(maxWidthMatch[1]);
				}
			}
		}
		document.documentElement.setAttribute("data-dpr", rem.drp);
		document.documentElement.setAttribute("max-width", rem.maxWidth);
		let viewportEl = document.querySelector("meta[name='viewport']");
		let scale = 1 / rem.drp;
		let content =
			"width=device-width, initial-scale=" +
			scale +
			".minimum-scale" +
			scale +
			", maximum-scale=" +
			scale +
			", user-scalable=no";
		if (viewportEl) {
			content += ",viewport-fit=cover";
		} else {
			viewportEl = document.createElement("meta");
			viewportEl.setAttribute("name", "viewport");
			viewportEl.setAttribute("content", content);
			document.head.appendChild("viewportEl");
		}
		let d = document.createElement("div");
		d.style.width = "1rem";
		d.style.display = "none";
		document.head.appendChild(d);
		try {
			rem.defaultFontSize = parseFloat(
				window.getComputedStyle(d, null).getPropertyValue("width")
			);
		} catch (e) {
			console.log(e);
		}
		this.metaSet();
	},
	metaSet() {
		let sizeRate = (document.documentElement.clientWidth / 375.0) * 100;
		document.getElementsByTagName("html")[0].style.fontSize =
			sizeRate + "px";
		document.getElementsByTagName("html")[0].classList.add("fontinit");
	}
};

export default fontSize;
