
<header id="global-header" role="banner">

  <?php include($path . 'search-bar.php'); ?>

  <div class="wrap-header has-shadow">

    <div class="container-fluid wide py-4">

      <div class="row no-gutters">

        <div class="col d-flex pr-2">

          <a class="align-self-center" href="/">
            <img class="img-fluid" src="/images/digitaltoolkitnyc-logo.png" alt="NYC Logo">
          </a>

        </div><!-- .col -->

        <div class="col-auto d-flex">

          <button class="btn-toggle align-self-center p-2" 
          type="button" data-toggle="collapse" 
          data-target="#global-search" 
          aria-controls="search" 
          aria-expanded="false" 
          aria-label="Toggle Search">
          <span class="fas fa-fw fa-lg fa-search"></span>
          <span class="sr-only">Global Search</span>
          </button>

        </div><!-- .col -->

      </div><!-- .row -->

    </div><!-- .container-fluid -->

  </div><!-- .wrap-header -->

  <div class="container-fluid wide">

    <nav id="nav-primary" class="navbar navbar-expand-lg navbar-light">

      <button class="navbar-toggler" 
      type="button" data-toggle="collapse" 
      data-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
        <span>Menu</span>
        <span class="sr-only">Main Navigation</span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <?php include($path . 'nav-primary.php'); ?>
      </div>

    </nav>

  </div>

</header>