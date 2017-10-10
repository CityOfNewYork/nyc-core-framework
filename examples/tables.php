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
            <h2 class="h1 text-center mb-4">Tables</h2>
          </header>

          <section class="mb-5">

            <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>Col 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
            </tbody>
          </table>

        </section>

         <section class="mb-5">

          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>Col 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
            </tbody>
          </table>

        </section>

         <section>

          <div class="responsive-wrapper">
            <table class="table w-100">
              <thead>
                <tr>
                  <th scope="row">#</th>
                  <th>Col 1</th>
                  <th>Col 2</th>
                  <th>Col 3</th>
                  <th>Col 4</th>
                  <th>Col 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                  <td>Col 4</td>
                  <td>Col 5</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                  <td>Col 4</td>
                  <td>Col 5</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                  <td>Col 4</td>
                  <td>Col 5</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                  <td>Col 4</td>
                  <td>Col 5</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                  <td>Col 4</td>
                  <td>Col 5</td>
                </tr>
              </tbody>
            </table>
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
