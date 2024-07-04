import React from "react";

function Navbar(){
    return(
<nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary  navbar bg-primary border-bottom border-body" data-bs-theme="dark"  >
  <div class="container-fluid">
    <navLink class="navbar-brand" >Navbar</navLink>

    <form class="d-flex" role="search">
      <input class="form-control me-10" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <button type="button" class="btn btn-primary">login</button>
    <button type="button" class="btn btn-danger">SignUp</button>

    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <navLink class="nav-link active" aria-current="page" >Home</navLink>
        </li>
        <li class="nav-item">
          <navLink class="nav-link" >Events</navLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>



    );
}

export default Navbar;