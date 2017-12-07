<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
$page_description = 'Insert page description here';
include_once($path . 'global-header.php');

$section = 'elements';

?>

<?php include_once($path . 'head.php'); ?>

<div id="content" role="main">

  <article>

    <header class="p-4 p-md-5 mb-5 bg-deep-blue text-white">
      <h1 class="display-1 text-center"><?php echo $section; ?></h1>
    </header>

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

            <div id="accordion" class="accessible" role="tablist">

              <!-- 01 -->

              <div class="card mb-2">

                <div class="card-header p-0" role="tab" id="headingOne">
                  <h5 class="mb-0">
                    <a class="collapse d-block py-3 px-4" 
                    data-toggle="collapse" 
                    href="#accordion-one" 
                    aria-expanded="true" 
                    aria-controls="accordion-one">
                      <span class="toggle-title">Lorem ipsum dolor sit amet consectetur adipiscing</span>
                    </a>
                  </h5>
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
                  <h5 class="mb-0">
                    <a class="collapsed d-block py-3 px-4" 
                    data-toggle="collapse" 
                    href="#accordion-two" 
                    aria-expanded="false" 
                    aria-controls="accordion-two">
                      Accordion Two
                    </a>
                  </h5>
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
                  <h5 class="mb-0">
                    <a class="collapsed d-block py-3 px-4" 
                    data-toggle="collapse" 
                    href="#accordion-three" 
                    aria-expanded="false" 
                    aria-controls="accordion-three">
                      Accordion Three
                    </a>
                  </h5>
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
