var ahovalidator = {
    form: null,
    lang: null,
    build: function(){
        $('form').each(function(){
            if ($(this).find('.ahov-required').length) {
                ahovalidator.form = $(this);
                ahovalidator.lang = $('html').attr('lang') ? $('html').attr('lang') : 'tr';
                $(this).find('[type=submit]').attr('data-ahov-formId', $(this).attr('id'));
                ahovalidator.clicks.submit();
                ahovalidator.clicks.items();
            }
        });
    },
    funcs: {
        addMessage: function(event){
            $(event).addClass('ahov-message');
            $(event).parent().append('<div class="ahov-error">'+ahovalidator.langs('required')+'</div>');
        },
        addMessageMail: function(event){
            $(event).addClass('ahov-message');
            $(event).parent().append('<div class="ahov-error">'+ahovalidator.langs('requiredEmail')+'</div>');
        },
        addMessageRadio: function(event){
            $(event).addClass('ahov-message');
            $(event).parent().append('<div class="ahov-error">Bir seçim yapmanız gerekiyor.</div>');
        }
    },
    events: {
        control: function(th){
            var error_counter = 0;

            var input = $(th).find('input');
            var textarea = $(th).find('textarea');
            var select = $(th).find('select');
            
            input.each(function(){
                $(this).removeClass('ahov-message');
                $(this).parent().find('.ahov-error').remove();
                if ($(this).hasClass('ahov-required')) {
                    var val = $(this).val();
                    var type = $(this).attr('type');
                    var name = $(this).attr('name');

                    if (type == "email") {
                        if (val.split("@").length <= 1) {
                            error_counter++;
                            ahovalidator.funcs.addMessageMail(this);
                        }
                    }else if(type == "radio"){

                        /*
                        Burası başka bir zaman yapılacak.
                        if (!$(this).filter(":checked").length) {
                            error_counter++;
                            ahovalidator.funcs.addMessageRadio(this);
                        }*/

                    }else{
                        if (val == "") {
                            error_counter++;
                            ahovalidator.funcs.addMessage(this);
                        }
                    }
                }
            });

            textarea.each(function(){
                $(this).removeClass('ahov-message');
                $(this).parent().find('.ahov-error').remove();
                if ($(this).hasClass('ahov-required')) {
                    var val = $(this).val();
                    if (val == "") {
                        error_counter++;
                        ahovalidator.funcs.addMessage(this);
                    }
                }
            });

            select.each(function(){
                $(this).removeClass('ahov-message');
                $(this).parent().find('.ahov-error').remove();
                if ($(this).hasClass('ahov-required')) {
                    var val = $(this).val();
                    if (val == null) {
                        error_counter++;
                        ahovalidator.funcs.addMessage(this);
                    }
                }
            });

            return (error_counter == 0 ? true : false);
        }
    },
    clicks: {
        submit: function(){
            ahovalidator.form.find('[type="submit"]').click(function(e){
                e.preventDefault();
                var status = ahovalidator.events.control("#" + $(this).attr('data-ahov-formId') );
                if (status) {
                    $('form#' + $(this).attr('data-ahov-formId') ).submit();
                }
            });
        },
        items: function(){
            ahovalidator.form.find('input,textarea,select').change(function(e){
                if ($(this).val() != "") {
                    $(this).parent().find('.ahov-error').remove();
                    $(this).removeClass('ahov-message');
                }
            });
        }
    },
    langs: function(event){
        if(event == "required"){
            if (ahovalidator.lang == "tr") {
                return "Bu alanı doldurmak zorunludur.";
            }
            if (ahovalidator.lang == "az") {
                return "Bu sahəni doldurmaq məcburidir.";
            }
            if (ahovalidator.lang == "en") {
                return "Please fill in this field.";
            }
            if (ahovalidator.lang == "fr") {
                return "S'il vous plaît remplir ce champ.";
            }
            if (ahovalidator.lang == "de") {
                return "Dieses Feld muss unbedingt ausgefüllt werden.";
            }
            if (ahovalidator.lang == "es") {
                return "Es obligatorio completar este campo.";
            }
            if (ahovalidator.lang == "it") {
                return "Si prega di compilare questo campo.";
            }
            if (ahovalidator.lang == "ar") {
                return "يرجى ملء هذا الحقل.";
            }
            if (ahovalidator.lang == "ru") {
                return "Пожалуйста, заполните это поле.";
            }
            if (ahovalidator.lang == "ua") {
                return "Обов’язково заповнюйте це поле.";
            }
            if (ahovalidator.lang == "cn") {
                return "必须填写此字段。";
            }
            if (ahovalidator.lang == "jp") {
                return "このフィールドに入力する必要があります。";
            }
        }
        if(event == "requiredEmail"){
            if (ahovalidator.lang == "tr") {
                return "Geçerli bir e-posta adresi giriniz.";
            }
            if (ahovalidator.lang == "az") {
                return "Zəhmət olmasa e-poçt ünvanı daxil edin.";
            }
            if (ahovalidator.lang == "en") {
                return "Please enter a valid e-mail address.";
            }
            if (ahovalidator.lang == "fr") {
                return "S'il vous plaît, mettez une adresse email valide.";
            }
            if (ahovalidator.lang == "de") {
                return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
            }
            if (ahovalidator.lang == "es") {
                return "Por favor, introduzca una dirección de correo electrónico válida.";
            }
            if (ahovalidator.lang == "it") {
                return "Si prega di inserire un indirizzo email valido.";
            }
            if (ahovalidator.lang == "ar") {
                return "من فضلك أدخل بريد أليكترونى صحيح.";
            }
            if (ahovalidator.lang == "ru") {
                return "Пожалуйста, введите действительный адрес электронной почты.";
            }
            if (ahovalidator.lang == "ua") {
                return "Введіть дійсну адресу електронної пошти.";
            }
            if (ahovalidator.lang == "cn") {
                return "请输入有效的电子邮件地址。";
            }
            if (ahovalidator.lang == "jp") {
                return "有効なメールアドレスを入力してください。";
            }
        }
    }
};