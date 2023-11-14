import '../Skills.css';

function Skills(){
    return(
        <div className='skills_section' id='skills_section'>
<section className="bg-light py-5 py-xl-6">
  <div className="container mb-5 mb-md-6">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
        <h2 className="mb-4 display-5">Skills</h2>
        <p className="text-secondary mb-4 mb-md-5">We provide software development services in: Python, JavaScript/ jQuery, Owl Js, React Js and other modern technologies.</p>
        <hr className="w-50 mx-auto mb-0 text-secondary"/>
      </div>
    </div>
  </div>
  <div className="container overflow-hidden">
    <div className="row justify-content-xl-center gy-3 gy-sm-4">
      <div className="col-12 col-sm-6 col-xl-5">
        <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
          <h3 className="fw-bold mb-2">Odoo ERP</h3>
          <p className="text-secondary fst-italic mb-4">Develop New Modules and Customize Existing Modules from Scratch.</p>
          <div className="progress">
            <div className="progress-bar w-85 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Odoo" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">95%</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-xl-5">
        <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
          <h3 className="fw-bold mb-2">Bootstrap</h3>
          <p className="text-secondary fst-italic mb-4">We delivers responsive websites with mobile-specific interactive elements</p>
          <div className="progress">
            <div className="progress-bar w-75 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Bootstrap" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">95%</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-xl-5">
        <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
          <h3 className="fw-bold mb-2">React</h3>
          <p className="text-secondary fst-italic mb-4">We offer maintenance services to support applications once they've been delivered.</p>
          <div className="progress">
            <div className="progress-bar w-65 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="React" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-xl-5">
        <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
          <h3 className="fw-bold mb-2">WordPress</h3>
          <p className="text-secondary fst-italic mb-4">Professional development services to enhance your online presence. Get started today!</p>
          <div className="progress">
            <div className="progress-bar w-95 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="WordPress" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Skills;