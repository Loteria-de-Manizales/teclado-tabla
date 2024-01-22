 export function VerResultadosPage({ plan, sorteo, premios}) {
   return (
     <>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: " preserveAspectRatio="xMidYMid slice" focusable="false"><title>{"Lotería de Manizales"}</title><rect width="100%" height="100%" fill="#191f6c"></rect><text x="35%" y="50%" fill="#ffb71b" dy="0.3em" fontSize="10em">{plan}</text></svg>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>{"Lotería de Manizales"}</title><rect width="100%" height="100%" fill="#ffb71b"></rect><text x="35%" y="50%" fill="#191f6c" dy="0.3em" fontSize="10em" >{sorteo}</text></svg>
        </div>
        <div class="carousel-item active">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>{"Lotería de Manizales"}</title><rect width="100%" height="100%" fill="#191f6c"></rect><text x="35%" y="50%" fill="#ffb71b" dy="0.3em" fontSize="10em">{"Premio"}</text></svg>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
     </>
   )
 }
 
 
 