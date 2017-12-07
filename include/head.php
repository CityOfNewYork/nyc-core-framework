<header role="banner">

  <div class="container-fluid wide">

    <div class="row no-gutters py-3">

      <div class="col d-flex">
        <a class="align-self-center" href="/"><img src="/images/nyc-logo.svg"></a>
      </div>

      <div class="col-auto d-flex">

          <div class="wrap-main-navigation d-none d-md-block">
          
          <nav class="nav">
            <?php include($path . 'global-navigation.php'); ?>
          </nav>

        </div><!-- .wrap-navigation -->

        <button class="navigation-toggler align-self-center d-md-none" 
        type="button" data-toggle="collapse" 
        data-target="#global-navigation-device" 
        aria-controls="target" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span class="custom-icon"><span class="sr-only">Main Menu</span></span>
        </button>

      </div>

      <div class="col-auto d-flex ml-3">

        <button class="search-toggler align-self-center" 
        type="button" data-toggle="collapse" 
        data-target="#global-search" 
        aria-controls="search" 
        aria-expanded="false" 
        aria-label="Toggle Search">
          <span class="custom-icon"><span class="sr-only">Global Search</span>
          <img src="/images/btn-global-search.svg" alt="Global Search">
        </button>

      </div>

  </div>


  </div><!-- .container-fluid -->

  <div class="collapse bg-black" id="global-search">

    <form class="narrow p-4">
      <div class="input-group">
        <input class="form-control form-control-lg rounded-0 border-0" placeholder="What are you looking for?">
        <div class="input-group-btn">
          <button type="button" class="btn-true-blue btn-lg rounded-0 border-0">Search</button>
        </div>
      </div>
    </form>

  </div>

  <div class="collapse d-md-none" id="global-navigation-device">
    <hr>
    <nav class="nav flex-column p-3">
      <?php include($path . 'global-navigation.php'); ?>
    </nav>
  </div>


</header>