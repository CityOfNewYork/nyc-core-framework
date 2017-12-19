
<a href="/typography" class="nav-item nav-link <?php if($section == 'typography'){ echo 'active' ;} ?>" title="Typography">Typography</a>

<a href="/grid" class="nav-item nav-link <?php if($section == 'grid'){ echo 'active' ;} ?>" title="Grid">Grid</a>

<div class="nav-item dropdown">

  <a class="nav-link dropdown-toggle <?php if($section == 'elements'){ echo 'active' ;} ?>" 
  href="#" 
  id="navbarDropdownMenuLink" 
  data-toggle="dropdown" 
  aria-haspopup="true" 
  aria-expanded="false"
  title="Elements">
    Elements
  </a>

  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <a class="dropdown-item" href="/elements" title="Articles">Articles</a>
    <a class="dropdown-item" href="/elements/forms.php" title="Forms">Forms</a>
    <a class="dropdown-item" href="/elements/accordions.php" title="Accordions">Accordions</a>
    <a class="dropdown-item" href="/elements/tables.php" title="Tables">Tables</a>
    <a class="dropdown-item" href="/elements/colors.php" title="Clors">Colors</a>
  </div>

</div>

<a href="/extras" class="nav-item nav-link <?php if($section == 'extras'){ echo 'active' ;} ?>" title="Extras">Extras</a>

