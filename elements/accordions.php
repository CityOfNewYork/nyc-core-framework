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
              <h2 class="h1 mb-4">Accordions</h2>
            </header>

            <div id="accordion" class="accessible-accordion" role="tablist">

              <!-- 01 -->

              <div class="card mb-2">

                <div class="card-header p-0" role="tab" id="headingOne">
                  <h4 class="mb-0">
                    <a class="collapse d-block py-3 px-4" 
                    data-toggle="collapse" 
                    href="#accordion-one" 
                    aria-expanded="true" 
                    aria-controls="accordion-one">
                      <span class="toggle-title">Accordion One</span>
                    </a>
                  </h4>
                </div>

                <div id="accordion-one" 
                class="collapse show" 
                role="tabpanel" 
                aria-labelledby="headingOne" 
                data-parent="#accordion">

                  <div class="card-body">
                     <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                  </div>
      
                </div>
              </div>

              <!-- 02 -->
              
              <div class="card mb-2">

                <div class="card-header p-0" role="tab" id="headingTwo">
                  <h4 class="mb-0">
                    <a class="collapsed d-block py-3 px-4" 
                    data-toggle="collapse" 
                    href="#accordion-two" 
                    aria-expanded="false" 
                    aria-controls="accordion-two">
                      <span class="toggle-title">Accordion Two</span>
                    </a>
                  </h4>
                </div>

                <div id="accordion-two" 
                class="collapse" 
                role="tabpanel" 
                aria-labelledby="headingTwo"
                data-parent="#accordion">

                  <div class="card-body">
                     <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                  </div>

                </div>

              </div>

              <!-- 03 -->
              
              <div class="card mb-2">

                <div class="card-header p-0" role="tab" id="headingThree">
                  <h4 class="mb-0">
                    <a class="collapsed d-block py-3 px-4" 
                    data-toggle="collapse" 
                    href="#accordion-three" 
                    aria-expanded="false" 
                    aria-controls="accordion-three">
                      <span class="toggle-title">Accordion Three</span>
                    </a>

                  </h4>
                </div>

                <div id="accordion-three" 
                class="collapse" 
                role="tabpanel" 
                aria-labelledby="headingThree" 
                data-parent="#accordion">

                  <div class="card-body">
                     <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                  </div>
                
                </div>

              </div>

              <!-- 04 -->
              
              <div class="card mb-2">

                <div class="card-header p-0" role="tab" id="headingFour">
                  <h4 class="mb-0">
                    <a class="collapsed d-block py-3 px-4" 
                    data-toggle="collapse" 
                    href="#collapseFour" 
                    aria-expanded="false" 
                    aria-controls="collapseFour">
                      <span class="toggle-title">Accordion Four</span>
                    </a>
                  </h4>
                </div>

                <div id="collapseFour" 
                class="collapse" 
                role="tabpanel" 
                aria-labelledby="headingThree" 
                data-parent="#accordion">

                  <div class="card-body">
                     <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                  </div>
                
                </div>

              </div>

              <!-- 05 -->
              
              <div class="card">

                <div class="card-header p-0" role="tab" id="headingFive">
                  <h4 class="mb-0">
                    <a class="collapsed d-block py-3 px-4" 
                    data-toggle="collapse" 
                    href="#collapseFour" 
                    aria-expanded="false" 
                    aria-controls="collapseFive">
                      <span class="toggle-title">Accordion Five</span>
                    </a>
                  </h4>
                </div>

                <div id="collapseFive" 
                class="collapse" 
                role="tabpanel" 
                aria-labelledby="headingFive" 
                data-parent="#accordion">

                  <div class="card-body">
                     <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                  </div>
                
                </div>

              </div>

            </div><!-- #accordion -->

          </section>
          
        </div>

      </div>

    </div><!-- .container -->

  </article>

</div><!-- content -->

<?php include_once($path . 'foot.php'); ?>
<?php include_once($path . 'global-footer.php'); ?>
