<?php

$path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
$page_description = 'Insert page description here';
include_once($path . 'global-header.php');

$section = 'elements';

?>

<?php include_once($path . 'head.php'); ?>

<div id="content" role="main">

  <article>

    <?php include_once($path . 'sub-page-header.php'); ?>

    <div class="container-fluid wide">

      <div class="row">
        
        <div class="col-lg-4 mb-5 mb-lg-0 px-4">
          <?php include_once($path . 'aside-nav.php'); ?>
        </div>

        <div class="col-lg-8 px-4">

          <section class="mb-5">

            <header>
              <h2 class="h1 mb-4">Accessible Bootstrap colors</h2>
            </header>

            <section class="mb-5">
            
              <h3 class="h4 p-3 mb-2 bg-primary text-white">.bg-primary</h3>
              <h3 class="h4 p-3 mb-2 bg-secondary text-white">.bg-secondary</h3>
              <h3 class="h4 p-3 mb-2 bg-success text-white">.bg-success</h3>
              <h3 class="h4 p-3 mb-2 bg-danger text-white">.bg-danger</h3>
              <h3 class="h4 p-3 mb-2 bg-warning">.bg-warning</h3>
              <h3 class="h4 p-3 mb-2 bg-info text-white">.bg-info</h3>
              <h3 class="h4 p-3 mb-2 bg-dark text-white">.bg-dark</h3>
              <h3 class="h4 p-3 mb-2 bg-light text-dark">.bg-light</h3>
              <h3 class="h4 p-3 mb-2 bg-white text-dark">.bg-white</h3>
            
            </section>

            <hr class="mb-5">

            <section>

              <h2 class="h1 mb-4">Accessible NYC colors</h2>
            
              <div class="row no-gutters color-swatches">

                <div class="card col-sm-4 bg-crimson text-white">
                  <div class="card-header">
                    <h4 class="mb-0">crimson</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#D9003D</div>
                </div>

                <div class="card col-sm-4 bg-brick-red text-white">
                  <div class="card-header">
                    <h4 class="mb-0">brick-red</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#881728</div>
                </div>

                <div class="card col-sm-4 bg-emergency-red text-white">
                  <div class="card-header">
                    <h4 class="mb-0">emergency-red</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white background.</p>
                  </div>
                  <div class="card-footer">#D61F27</div>
                </div>

              </div><!-- .row -->
            
              <div class="row no-gutters color-swatches">

                <div class="card col-sm-4 bg-red-orange">
                  <div class="card-header">
                    <h4 class="mb-0">red-orange</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with black text. Headline (h1-h2) color with white background.</p>
                  </div>
                  <div class="card-footer">#EE412F</div>
                </div>

                <div class="card col-sm-4 bg-tech-orange">
                  <div class="card-header">
                    <h4 class="mb-0">tech-orange</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with black text. Headline (h1-h2) color with white background.</p>
                  </div>
                  <div class="card-footer">#F26E23</div>
                </div>

                <div class="card col-sm-4 bg-empire-yellow">
                  <div class="card-header">
                    <h4 class="mb-0">empire-yellow</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with black text only.</p>
                  </div>
                  <div class="card-footer">#F2AE1C</div>
                </div>

              </div><!-- .row -->
            
              <div class="row no-gutters color-swatches">

                <div class="card col-sm-4 bg-sun-yellow">
                  <div class="card-header">
                    <h4 class="mb-0">sun-yellow</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with black text only.</p>
                  </div>
                  <div class="card-footer">#FCED20</div>
                </div>

                <div class="card col-sm-4 bg-lime-green">
                  <div class="card-header">
                    <h4 class="mb-0">lime-green</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with black text only.</p>
                  </div>
                  <div class="card-footer">#B2E92E</div>
                </div>

                <div class="card col-sm-4 bg-park-green">
                  <div class="card-header">
                    <h4 class="mb-0">park-green</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with black text only.</p>
                  </div>
                  <div class="card-footer">#75BD1D</div>
                </div>

              </div><!-- .row -->
            
              <div class="row no-gutters color-swatches">

                <div class="card col-sm-4 bg-olive-green text-white">
                  <div class="card-header">
                    <h4 class="mb-0">olive-green</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#3A4420</div>
                </div>

                <div class="card col-sm-4 bg-forest-green text-white">
                  <div class="card-header">
                    <h4 class="mb-0">forest-green</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#19502C</div>
                </div>

                <div class="card col-sm-4 bg-spring-green text-white">
                  <div class="card-header">
                    <h4 class="mb-0">spring-green</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#0F8417</div>
                </div>

              </div><!-- .row -->
            
              <div class="row no-gutters color-swatches">

                <div class="card col-sm-4 bg-clean-green">
                  <div class="card-header">
                    <h4 class="mb-0">clean-green</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#00A35D</div>
                </div>

                <div class="card col-sm-4 bg-teal text-white">
                  <div class="card-header">
                    <h4 class="mb-0">teal</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#008080</div>
                </div>

                <div class="card col-sm-4 bg-aqua">
                  <div class="card-header">
                    <h4 class="mb-0">aqua</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with black text only.</p>
                  </div>
                  <div class="card-footer">#3CDCBE</div>
                </div>

              </div><!-- .row -->
            
              <div class="row no-gutters color-swatches">

                <div class="card col-sm-4 bg-sky-blue">
                  <div class="card-header">
                    <h4 class="mb-0">sky-blue</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with black text only.</p>
                  </div>
                  <div class="card-footer">#44C8F5</div>
                </div>

                <div class="card col-sm-4 bg-true-blue text-white">
                  <div class="card-header">
                    <h4 class="mb-0">true-blue</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#1461FF</div>
                </div>

                <div class="card col-sm-4 bg-royal-blue text-white">
                  <div class="card-header">
                    <h4 class="mb-0">royal-blue</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#00529A</div>
                </div>

              </div><!-- .row -->
            
              <div class="row no-gutters color-swatches">

                <div class="card col-sm-4 bg-deep-blue text-white">
                  <div class="card-header">
                    <h4 class="mb-0">deep-blue</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#1D2252</div>
                </div>

                <div class="card col-sm-4 bg-deep-violet text-white">
                  <div class="card-header">
                    <h4 class="mb-0">deep-violet</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#32006B</div>
                </div>

                <div class="card col-sm-4 bg-violet text-white">
                  <div class="card-header">
                    <h4 class="mb-0">violet</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#6931BA</div>
                </div>

              </div><!-- .row -->
            
              <div class="row no-gutters color-swatches">

                <div class="card col-sm-4 bg-purple text-white">
                  <div class="card-header">
                    <h4 class="mb-0">purple</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#782F92</div>
                </div>

                <div class="card col-sm-4 bg-deep-magenta text-white">
                  <div class="card-header">
                    <h4 class="mb-0">deep-magenta</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with white text. Headline and body text color with white or "bg-light" background.</p>
                  </div>
                  <div class="card-footer">#6C0053</div>
                </div>

                <div class="card col-sm-4 bg-fuschia">
                  <div class="card-header">
                    <h4 class="mb-0">fuschia</h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Background color with black text. Headline (h1-h2) color with white background.</p>
                  </div>
                  <div class="card-footer">#ED0F69</div>
                </div>

              </div><!-- .row -->
            
            </section>
          
          </section>

        </div>

      </div>

  </div><!-- .container -->

</article>

</div><!-- content -->

<?php include_once($path . 'foot.php'); ?>
<?php include_once($path . 'global-footer.php'); ?>
