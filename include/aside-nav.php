<a class="btn btn-block btn-lg btn-dark d-lg-none" 
data-toggle="collapse" 
href="#aside-nav" 
aria-expanded="false"
aria-controls="collapseExample "><p class="toggle-title">Topics</p></a>

<div class="collapse d-lg-block pt-3 sticky-top" id="aside-nav">

  <nav class="list-group text-secondary">
    <a href="/elements/" class="list-group-item <?php if( $section == 'elements' && $page == 'index'){ echo 'active' ;} ?>">Articles</a>
    <a href="/elements/forms.php" class="list-group-item <?php if( $page == 'forms'){ echo 'active' ;} ?>">Forms</a>
    <a href="/elements/accordions.php" class="list-group-item <?php if( $page == 'accordions'){ echo 'active' ;} ?>">Accordions</a>
    <a href="/elements/tabs.php" class="list-group-item <?php if( $page == 'tabs'){ echo 'active' ;} ?>">Tabs</a>
    <a href="/elements/tables.php" class="list-group-item <?php if( $page == 'tables'){ echo 'active' ;} ?>">Tables</a>
    <a href="/elements/colors.php" class="list-group-item <?php if( $page == 'colors'){ echo 'active' ;} ?>">Colors</a>
  </nav>
  
</div>