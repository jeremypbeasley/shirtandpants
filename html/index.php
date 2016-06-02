<?php include("header.php"); ?>


<section class="RootContent">
  <div class="row">
    <div class="col-xs-12">

    <h2>Please sign in to pay your bills!</h2><Br>
    
    <label class="InputLabel">Username / Email</label>
    <input class="InputText"/>
    <label class="InputLabel">Password</label>
    <input class="InputText" type="password" />
    <button class="BigButton Primary" onclick="location.href='bills.php';">Login</button>
    <br>
    <p><a href="">Having problems?</a></p>

    <hr>

    <h2>Don't have an account?</h2>
    <button class="BigButton Secondary">Create An Account</button>
    <br>
    <p><a href="">Pay without logging in ›</a></p>

    <!-- <hr>

    <h2>Pay without signing in.</h2>
    <button class="BigButton Secondary">Continue</button> -->
     
    </div>
  </div> 
</section>

<?php include("footer.php"); ?>

