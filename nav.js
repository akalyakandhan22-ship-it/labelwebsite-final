 const header=document.getElementById("header");
 
const navbar=document.createElement("nav");
navbar.className="navbar navbar-expand-md navbar-light border-bottom px-4 py-3";
navbar.innerHTML=` <a class="navbar-brand mb-0" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
                aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="aboutus.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="printed.html">our services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="contactus.html">Contact Us</a>
                    </li>
                </ul>
            </div>`;
      header.appendChild(navbar);






      const foot=document.getElementById("foot");
      const footer=document.createElement("footer");
      footer.className="site-footer py-5 text-white mt-5";
    footer.innerHTML=`<div class="footer-fullwidth">
            <div class="row gy-4">

                <!-- Company Info -->
                <div class="col-lg-4 col-md-6">
                    <div class="footer-brand d-flex align-items-center mb-3">
                        <img src="assets/g4712 (1).png" alt="Tech World" width="40" class="me-2" />
                        <h5 class="fw-bold mb-0">Tech World</h5>
                    </div>
                    <p class="footer-desc">
                        A team of experienced designers and developers dedicated to creating exceptional websites.
                        Providing custom web solutions and Digital Marketing tailored to your specific business goals.
                    </p>
                    <div class="social-icons mt-3">
                        <a href="#" class="me-3 text-white"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="me-3 text-white"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="me-3 text-white"><i class="bi bi-linkedin"></i></a>
                        <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>

                <!-- Services -->
                <div class="col-lg-2 col-md-6">
                    <h6 class="fw-bold mb-3">Service</h6>
                    <ul class="list-unstyled">
                        <li><a href="printed.html" class="text-white-50 text-decoration-none">Printed Label</a></li>
                        <li><a href="wovellabel.html" class="text-white-50 text-decoration-none">Woven label</a></li>
                        <li><a href="barcodesticker.html" class="text-white-50 text-decoration-none">Barcode Stickers</a></li>
                        <li><a href="heattransfer.html" class="text-white-50 text-decoration-none">Heat Transfer Stickers</a></li>
                    </ul>
                </div>

                <!-- Pages -->
                <div class="col-lg-2 col-md-6">
                    <h6 class="fw-bold mb-3">Pages</h6>
                    <ul class="list-unstyled">
                        <li><a href="index.html" class="text-white-50 text-decoration-none">Home</a></li>
                        <li><a href="aboutus.html" class="text-white-50 text-decoration-none">About us</a></li>
                        <li><a href="contactus.html" class="text-white-50 text-decoration-none">Contact us</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div class="col-lg-4 col-md-6">
                    <h6 class="fw-bold mb-3">Contact</h6>
                    <ul class="list-unstyled text-white-50">
                        <li class="mb-2"><i class="bi bi-telephone-fill me-2 text-white"></i>95669 99992</li>
                        <li class="mb-2"><i class="bi bi-envelope-fill me-2 text-white"></i> shankarlabels1@gmail.com
                        </li>
                        <li><i class="bi bi-geo-alt-fill me-2 text-white"></i> 389/1,perumaal Ayyan Thottam,Duraisamy Nagar Extn.,
                                  Thirumurugan Poondi,TIRUPUR-641 652.</li>
                    </ul>
                </div>

            </div>

            <!-- Bottom line -->
            <hr class="border-light-subtle my-4">
            <div class="d-flex justify-content-between flex-column flex-md-row align-items-center small">
                <div>&copy; Copyrights 2023 Techmax. All rights reserved.</div>
                <div>
                    <a href="#" class="text-white-50 me-3 text-decoration-none">Privacy policy</a>
                    <a href="#" class="text-white-50 text-decoration-none">Term & Conditions</a>
                </div>
            </div>
        </div>`;
      foot.appendChild(footer);


