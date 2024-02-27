// MultiLang - BdR 2016
// https://github.com/BdR76/MultiLanguage/
var MultiLang = function(url, lang, onload) {
	this.phrases = {};

	this.selectedLanguage = (lang || navigator.language || navigator.userLanguage).substring(0, 2);
	this.onLoad = onload;

	if (typeof url !== 'undefined') {
		var obj = this;
		var req = new XMLHttpRequest();

		req.open("GET", url, true);
		req.onreadystatechange = function (evt) {
			if (evt.target.readyState == 4 && evt.target.status == 200) {
				this.phrases = JSON.parse( evt.target.responseText );
				this.setLanguage(this.selectedLanguage);
				
				if (this.onLoad) {
					this.onLoad();
				}

			};
		}.bind(obj);
		req.addEventListener("error", function(e) {console.log('MultiLang.js: Error reading json file.');}, false);
		req.send(null);
	};

	this.setLanguage = function(langcode) {
		if (!this.phrases.hasOwnProperty(langcode)) {
			for (var key in this.phrases) {
				if (this.phrases.hasOwnProperty(key)) {
					langcode = key;
					break;
				};
			};
		};

		this.selectedLanguage = langcode;
	};

	this.get = function(key) {
		var str;
		if (this.phrases[this.selectedLanguage]) str = this.phrases[this.selectedLanguage][key];
		str = (str || key);
		return str;
	};
}
var multilang;

function refreshLabels() {
    $('[textcontent]').each(function() {
        var textname = $(this).attr('textcontent');
        if (textname !== undefined && textname !== null && textname !== '') $(this).text(multilang.get(textname));
    });
}
function langSelectChange(sel) {
    console.log(sel);
    multilang.setLanguage(sel);
    refreshLabels();
}

const languages = [{name: 'English', code: 'en'}, {name: 'Português', code: 'pt'}, {name: 'Español', code: 'es'}];

$(document).ready(function() {
    multilang = new MultiLang('languages.json', 'null', this.initList);
});