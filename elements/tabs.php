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
            <h2 class="h1 mb-4">Tabs</h2>
          </header>

          <section class="mb-5">

            <ul class="nav nav-tabs mb-5" id="pills-tab" role="tablist">

              <li class="nav-item">
                
                <a class="nav-link active" 
                id="pills-home-tab"
                data-toggle="pill"
                href="#tab-one-a"
                role="tab"
                aria-controls="tab-one-a"
                aria-expanded="true">Tab 1</a>

              </li>

              <li class="nav-item">

                <a class="nav-link"
                id="pills-profile-tab" 
                data-toggle="pill" 
                href="#tab-two-a"
                role="tab" 
                aria-controls="tab-two-a" 
                aria-expanded="false">Tab 2</a>
              
              </li>

              <li class="nav-item">

                <a class="nav-link"
                id="pills-profile-tab" 
                data-toggle="pill" 
                href="#tab-three-a"
                role="tab" 
                aria-controls="tab-three-a" 
                aria-expanded="false">Tab 3</a>
              
              </li>
    
            </ul>
    
            <div class="tab-content" id="pills-tabContent">

              <div class="tab-pane fade show active" id="tab-one-a" role="tabpanel" aria-labelledby="tab-one-a-tab">
                <h3>Tab 1</h3>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
              </div>

              <div class="tab-pane fade" id="tab-two-a" role="tabpanel" aria-labelledby="tab-two-a">
                <h3>Tab 2</h3>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
              </div>

              <div class="tab-pane fade" id="tab-three-a" role="tabpanel" aria-labelledby="tab-three-a">
                <h3>Tab 3</h3>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
              </div>

            </div>

          </section>

          <hr class="mb-5">
        
          <section class="mb-5">

            <ul class="nav nav-pills nav-fill flex-column flex-sm-row mb-5" id="pills-tab" role="tablist">

              <li class="nav-item">
                
                <a class="nav-link active" 
                id="pills-home-tab"
                data-toggle="pill"
                href="#tab-one-b"
                role="tab"
                aria-controls="tab-one-b"
                aria-expanded="true">Tab 1</a>

              </li>

              <li class="nav-item">

                <a class="nav-link"
                id="pills-profile-tab" 
                data-toggle="pill" 
                href="#tab-two-b"
                role="tab" 
                aria-controls="tab-two-b" 
                aria-expanded="false">Tab 2</a>
              
              </li>

              <li class="nav-item">

                <a class="nav-link"
                id="pills-profile-tab" 
                data-toggle="pill" 
                href="#tab-three-b"
                role="tab" 
                aria-controls="tab-three-b" 
                aria-expanded="false">Tab 3</a>
              
              </li>
    
            </ul>
    
            <div class="tab-content" id="pills-tabContent">

              <div class="tab-pane fade show active" id="tab-one-b" role="tabpanel" aria-labelledby="tab-one-a-tab">
                <h3>Tab 1</h3>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
              </div>

              <div class="tab-pane fade" id="tab-two-b" role="tabpanel" aria-labelledby="tab-two-b">
                <h3>Tab 2</h3>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
              </div>

              <div class="tab-pane fade" id="tab-three-b" role="tabpanel" aria-labelledby="tab-three-b">
                <h3>Tab 3</h3>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
              </div>

            </div>

          </section>
        
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
