# ahovalidator.js

jQuery form validator.
    
    <link rel="stylesheet" href="css/ahovalidator.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    
    <script src="js/ahovalidator.js"></script>

    <script>
	    $(document).ready(function(){
	        ahovalidator.build('#form');
	    });
	</script>

    <form id="form">
	    <div class="col-md-6">
	        <div class="form-group">
	            <label>Ad Soyad</label>
	            <input class="form-control ahov-required" type="text">
	        </div>
	    </div>
    </form>