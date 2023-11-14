import '../App.css';
function App() {
  return (
    <div className="jumbotron main_section" id='home_section'>
        <img
          src='./baqir.jpg'
          height="150px"
          alt="Muhammad Baqir"
          loading="lazy"
          className='logo_baqir'
        />
      
      <h2>Muhammad Baqir</h2>
      <a href="mailto:muhammadbaqir505@gmail.com" className='mailto'>muhammadbaqir505@gmail.com</a><br/>
      <a href="tel:03036901549" className='callto'>03036901549</a>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="./Baqir_CV.pdf" role="button" download>Download CV</a>
    </p>
  </div>
    
  );
}

export default App;
