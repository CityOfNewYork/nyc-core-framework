<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
$page_description = 'Insert page description here';
include_once($path . 'global-header.php');

$section = 'examples';

?>

<?php include_once($path . 'head.php'); ?>

<div id="content" role="main">

  <article>

    <header class="bg-danger text-white">
      <h1 class="display-1 text-center">Examples</h1>
    </header>

    <div class="container">

    <div class="row">

      <div class="col-lg-4 p-4">
        <?php include_once($path . 'aside-nav.php'); ?>
      </div>

      <div class="col-lg-8 p-4">

        <section class="mb-5">

          <header>
            <h2 class="h1 text-center mb-4">Accordions</h2>
          </header>

          <div id="accordion" class="accessible" role="tablist">

            <!-- 01 -->

            <div class="card mb-2">

              <div class="card-header p-0" role="tab" id="headingOne">
                <h5 class="mb-0">
                  <a class="collapse d-block py-3 px-4" 
                  data-toggle="collapse" 
                  href="#collapseOne" 
                  aria-expanded="true" 
                  aria-controls="collapseOne">
                    Accordion One
                  </a>
                </h5>
              </div>

              <div id="collapseOne" 
              class="collapse show" 
              role="tabpanel" 
              aria-labelledby="headingOne" 
              data-parent="#accordion">

                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>

            <!-- 02 -->
            
            <div class="card mb-2">

              <div class="card-header p-0" role="tab" id="headingTwo">
                <h5 class="mb-0">
                  <a class="collapsed d-block py-3 px-4" 
                  data-toggle="collapse" 
                  href="#collapseTwo" 
                  aria-expanded="false" 
                  aria-controls="collapseTwo">
                    Accordion Two
                  </a>
                </h5>
              </div>

              <div id="collapseTwo" 
              class="collapse" 
              role="tabpanel" 
              aria-labelledby="headingTwo"
              data-parent="#accordion">

                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>

              </div>

            </div>

            <!-- 03 -->
            
            <div class="card mb-2">

              <div class="card-header p-0" role="tab" id="headingThree">
                <h5 class="mb-0">
                  <a class="collapsed d-block py-3 px-4" 
                  data-toggle="collapse" 
                  href="#collapseThree" 
                  aria-expanded="false" 
                  aria-controls="collapseThree">
                    Accordion Three
                  </a>
                </h5>
              </div>

              <div id="collapseThree" 
              class="collapse" 
              role="tabpanel" 
              aria-labelledby="headingThree" 
              data-parent="#accordion">

                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              
              </div>

            </div>

            <!-- 03 -->
            
            <div class="card">

              <div class="card-header p-0" role="tab" id="headingThree">
                <h5 class="mb-0">
                  <a class="collapsed d-block py-3 px-4" 
                  data-toggle="collapse" 
                  href="#collapseFour" 
                  aria-expanded="false" 
                  aria-controls="collapseFour">
                    Accordion Four
                  </a>
                </h5>
              </div>

              <div id="collapseFour" 
              class="collapse" 
              role="tabpanel" 
              aria-labelledby="headingThree" 
              data-parent="#accordion">

                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              
              </div>

            </div>

          </div><!-- #accordion -->

        </section>
        
        <footer>

        </footer>

      </div>

    </div>

  </div><!-- .container -->

</article>

</div><!-- content -->

<?php include_once($path . 'foot.php'); ?>

<?php include_once($path . 'global-footer.php'); ?>
