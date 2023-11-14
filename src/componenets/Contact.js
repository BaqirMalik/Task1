import '../Contact.css';

function Contact(){
    return(
        <div className='Contact_Section' id="contact_section">
            <section className="contact-sec sec-pad">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="contact-detail">
          <h1 className="section-title">Contact us</h1>

          <ul className="contact-ul">
            <li><i className="fa fa-map"></i> Al-Karim, Behind Al-Noor Marriage Club New Town Suraj Miani Multan, Pakistan</li>

            <li>
              <i className="fa fa-phone"></i>
              <a href="tel:03036901549"><b>03036901549</b></a>,
              <a href="tel:03036901549"><b>03116195338</b></a>
            </li>

            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:muhammadbaqir505@gmail.com"><b> muhammadbaqir505@gmail.com</b></a>
            </li>
          </ul>

          <span>
            <a href="https://web.facebook.com/muhammad.baqir.3538/" className="fb"><i className="fa fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/muhammad-baqir-15614b145/" className="linkedin"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/BaqirMalik" className="github"><i className="fa fa-github"></i></a>
          </span>
        </div>
      </div>

      <div className="col-md-6">
        <form action="#" className="contFrm" method="POST">
          <div className="row">
            <div className="col-sm-6">
              <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
            </div>

            <div className="col-12">
              <textarea className="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
            </div>

            <div className="col-12">
              <input type="submit" name="submit" value="SUBMIT" className="inptBtn" />
            </div>
          </div>
        </form>
      </div>
    </div>

    

  </div>
</section>
        </div>
    );
}

export default Contact;