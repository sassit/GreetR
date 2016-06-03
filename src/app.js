/**
 * Created by tsassi on 03/06/2016.
 */
$('#login').click(function () {
    var loginGreetr = G$($('#firstName').val(), $('#lastName').val());
    $('#logindiv').hide();
    loginGreetr.setLang($('#lang').val()).display('#greeting', true);
});