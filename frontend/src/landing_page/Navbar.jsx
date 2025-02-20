import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src='media/images/logo.svg' style={{width: "20%"}}/>
    </a>
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav gap-4">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Suport</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
