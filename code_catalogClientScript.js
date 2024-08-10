function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    var bandName = g_form.getValue('band_name');
    bandName = bandName.trim().replace(/\s+/g, ' ').toLowerCase();

    var bandNameFormatter = bandName.replace(/\s/g, '-');

    var obterBanda = new GlideAjax('ValagumeAPI');
    obterBanda.addParam('sysparm_name', 'consultaBandaAJax');
    obterBanda.addParam('sysparm_band', bandNameFormatter);
    obterBanda.getXML(callbackBand);

    function callbackBand(response) {
        var ObjetoBand = response.responseXML.documentElement.getAttribute('answer');

        if (!ObjetoBand) {
            g_form.setValue('band_name', '');
            g_form.setValue('imagem', '');

            g_form.showErrorBox('band_name', 'Não conseguimos encontrar a banda ou cantor(a) que você procurou. Verifique se o nome está correto ou não está cadastrado(a) no banco de dados.');
        } else {
			var imgTag = "<img src='https://www.vagalume.com.br/" + ObjetoBand + "' alt='Imagem da Banda' />";
            g_form.setValue('imagem', imgTag);
        }
    }
}