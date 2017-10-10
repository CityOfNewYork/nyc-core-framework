<header>

  <div class="container">

    <nav class="navbar navbar-expand-md navbar-light" id="main-navigation">

      <a class="navbar-brand" href="/">Bootstrap Templates</a>

      <button class="navbar-toggler" 
      type="button" data-toggle="collapse" 
      data-target="#target" 
      aria-controls="target" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>

      <div class="collapse navbar-collapse" id="target">

        <div class="navbar-nav ml-auto">

            <a href="/grid" class="nav-item nav-link <?php if($section == 'grid'){ echo 'active' ;} ?>">Grid</a>
            <a href="/typography" class="nav-item nav-link <?php if($section == 'typography'){ echo 'active' ;} ?>">Typography</a>
            <a href="/mixed" class="nav-item nav-link <?php if($section == 'mixed'){ echo 'active' ;} ?>">Mixed</a>

            <div class="nav-item dropdown">

              <a class="nav-link dropdown-toggle <?php if($section == 'examples'){ echo 'active' ;} ?>" 
              href="http://example.com" 
              id="navbarDropdownMenuLink" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
                Examples
              </a>

              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="/examples">Articles</a>
                <a class="dropdown-item" href="/examples/forms.php">Forms</a>
                <a class="dropdown-item" href="/examples/tables.php">Tables</a>
              </div>

            </div>
        </div>

      </div>

    </nav>

  </div>

</header>