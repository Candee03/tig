function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng == 'en'){
        $("#enTranslator").css('color', '#f4623a');
        $("#esTranslator").css('color', '#212529');
    } 
    if(lng == 'es'){
        $("#esTranslator").css('color', '#f4623a');
        $("#enTranslator").css('color', '#212529');
    }
}
$(document).ready(function(){
    $('#lng-selector').change(function(){
        const val = $('#lng-selector').val()
        translate(val, 'lng');
    })
});