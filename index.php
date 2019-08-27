<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ahovalidator ahmetsagirli.com.tr</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/ahovalidator.css" />
</head>
<body>

    <div class="container">
        <form action="" id="ikformu">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Ad Soyad</label>
                        <input class="form-control ahov-required" type="text" value="ahmet">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Eposta Adresi</label>
                        <input class="form-control ahov-required" type="email">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Başvuru Türü</label>
                        <select class="form-control ahov-required">
                            <option disabled selected>Seçiniz</option>
                            <option>Ahmet</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>CV'nizi seçiniz</label>
                        <input class="form-control" type="file">
                    </div>
                </div>
                <div class="col-md-6">
                    <label>Seçim Checkbox</label>
                    <div class="form-group">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Deneme 1</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck2">Deneme 2</label>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-6">
                    <label>Seçim Radio</label>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="kadin">
                            <label class="form-check-label" for="exampleRadios1">
                                Kadın
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="erkek">
                            <label class="form-check-label" for="exampleRadios2">
                                Erkek
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <label>Mesajınız</label>
                        <textarea class="form-control ahov-required" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="col-md-12">
                    <button type="submit" class="btn btn-primary" style="width: 100%">Gönder</button>
                </div>
            </div>
        </form>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/ahovalidator.js"></script>

    <script>
        $(document).ready(function(){
            ahovalidator.build('#ikformu');
        });
    </script>

</body>
</html>