var ValagumeAPI = Class.create();
ValagumeAPI.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    type: 'ValagumeAPI',

	consultaBandaAJax: function() {

	var bandName = this.getParameter('sysparm_band');

	var obterBand = new sn_ws.RESTMessageV2();
	obterBand.setEndpoint('https://www.vagalume.com.br/${name}/index.js');
	obterBand.setStringParameterNoEscape('name', bandName);
	obterBand.setHttpMethod('GET');

	var Response = obterBand.execute();
	
	var ResponseBody = Response.getBody();

	ResponseBody = JSON.parse(ResponseBody);
	
	return ResponseBody.artist.pic_medium;
	}
});