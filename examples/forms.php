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
            <h2 class="h1 text-center mb-4">Forms</h2>
          </header>

          <section class="mb-5">
          
          <form>

            <div class="row">
              <div class="form-group col-sm-6 pr-sm-3">
                <label for="emailAdress">First Name</label>
                <input type="text" class="form-control" id="firstName">
              </div>
              <div class="form-group col-sm-6 pl-sm-3">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName">
              </div>
            </div>

            <div class="row">
              <div class="form-group col-sm-6 pr-sm-3">
                <label for="emailAdress">Email Address</label>
                <input type="email" class="form-control" id="emailAdress" required>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group col-sm-6 pl-sm-3">
                <label for="emailAdress">Phone Number</label>
                <input type="phone" class="form-control" id="phoneNumber" placeholder="XXX-XXX-XXXX">
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="email" class="form-control" id="subject" required>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>

            <button type="button" class="btn btn-danger btn-block btn-lg mt-4">Primary</button>

          </form>

          </section>

          <hr class="mt-0 mb-5">
          
          <section>
            
            <div class="row">
              <div class="form-group col-sm-6 pr-sm-3">
                <label for="exampleFormControlSelect1">Select One:</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </div>
              <div class="form-group col-sm-6 pl-sm-3">
                <label for="upload-file">Upload File</label>
                <label class="custom-file w-100">
                  <input type="file" id="file2" class="custom-file-input" id="upload-file">
                  <span class="custom-file-control"></span>
                </label>
              </div>
            </div>

            <div class="form-group">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" value="">
                  Mus malesuada dapibus ac condimentum habitasse
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" value="">
                  Mus malesuada dapibus ac condimentum habitasse
                </label>
              </div>
              <div class="form-check disabled">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" value="" disabled>
                  Mus malesuada dapibus ac condimentum habitasse
                </label>
              </div>
            </div>

          </section>

            <div class="form-group">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                  Mus malesuada dapibus ac condimentum habitasse
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                  Mus malesuada dapibus ac condimentum habitasse
                </label>
              </div>
              <div class="form-check disabled">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
                  Mus malesuada dapibus ac condimentum habitasse
                </label>
              </div>
            </div>
        
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
