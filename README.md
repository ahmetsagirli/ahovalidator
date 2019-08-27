# ahovalidator
jQuery form validator.

<div class="col-md-6">
    <div class="form-group">
        <label>Ad Soyad</label>
        <input class="form-control ahov-required" type="text">
    </div>
</div>
<div class="col-md-6">
    <div class="form-group">
        <label>Eposta Adresi</label>
        <input class="form-control ahov-required" type="email">
    </div>
</div>

<script>
    $(document).ready(function(){
        ahovalidator.build('#form');
    });
</script>