<a class="btn btn-block btn-lg btn-danger d-lg-none" 
data-toggle="collapse" 
href="#aside-nav" 
aria-expanded="true"
aria-controls="collapseExample ">Topics</a>

<div class="collapse d-lg-block pt-3 sticky-top" id="aside-nav">
  <nav class="list-group">
    <a href="/examples/" class="list-group-item <?php if( $section == 'examples' && $page == 'index'){ echo 'active' ;} ?>">Articles</a>
    <a href="/examples/forms.php" class="list-group-item <?php if( $page == 'forms'){ echo 'active' ;} ?>">Forms</a>
    <a href="/examples/accordions.php" class="list-group-item <?php if( $page == 'accordions'){ echo 'active' ;} ?>">Accordions</a>
    <a href="/examples/tables.php" class="list-group-item <?php if( $page == 'tables'){ echo 'active' ;} ?>">Tables</a>
  </nav>
</div>