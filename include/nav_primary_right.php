<!-- Header nav_primary_right -->

<header id="global-header" role="banner">

  <div class="wrap-header has-shadow">

    <div class="container-fluid wide py-4">

      <div class="row no-gutters">

        <div class="col d-flex">
          <a class="align-self-center" href="/">
            <!-- <img src="/images/nyc-logo.svg" alt="NYC Logo"> -->
            <img src="http://via.placeholder.com/140x140/000000/ffffff" alt="NYC Logo">
          </a>
        </div>

        <div class="col-auto d-flex">

          <div class="align-self-center d-none d-md-block">
            <nav class="nav" id="primary-navigation-desktop">
              <?php include($path . 'nav-primary.php'); ?>
            </nav>
          </div><!-- .wrap-navigation -->

          <button class="btn-toggle align-self-center p-2 d-md-none" 
          type="button" data-toggle="collapse" 
          data-target="#device-menu" 
          aria-controls="target" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span class="fas fa-fw fa-lg fa-bars"></span>
            <span class="sr-only">Main Navigation</span>
          </button>

        </div>

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

        </div>

      </div><!-- .row -->

    </div><!-- .container-fluid -->

  </div><!-- .wrap-header -->

  <?php include($path . 'search-bar.php'); ?>

  <div id="device-menu" class="primary-navigation-device collapse d-md-none">
    <nav class="nav d-flex flex-column py-4">
      <?php include($path . 'nav-primary.php'); ?>
    </nav>
  </div>

</header>
