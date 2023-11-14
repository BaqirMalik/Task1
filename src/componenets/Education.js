import '../Education.css';

function Education(){
    return(
        <div className='education' id="education_section">
            
<section className="py-3 py-md-5">
  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0">
      
    <div className="col-12 col-lg-6 col-xl-7">
        <div className="row justify-content-xl-center"> 
        <div className="column-2a edu_details">
            <h2>Education</h2>
        <table className="table-style">
            <tr>
            <td>MPhil (Computer Science)</td>
            <td>BZU Multan</td>
            <td>(2020-2022)</td>
            </tr>
            <tr>
            <td> BS(Hon's) Computer Science</td>
            <td className='p-2'>UOS, Sargodha</td>
            <td className='p-2'>(2014-2018)</td>
            </tr>
            <tr>
            <td>PSDF Website Designing</td>
            <td>Navtech</td>
            <td>(2017)</td>
            </tr>
            <tr>
            <td>Intermediate</td>
            <td>GCCM</td>
            <td>(2010-2012)</td>
            </tr>
            <tr>	
            <td>Matriculation</td>
            <td>GPSSM</td>
            <td>(2009-2010)</td>
            </tr>    
          
        </table>
        </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-5">
        <img className="img-fluid rounded" loading="lazy" src="./education.jpg" alt="About 1"/>
      </div>
    </div>
    
  </div>
</section>
        </div>
    );

}
export default Education;