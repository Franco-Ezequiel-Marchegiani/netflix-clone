import React from 'react';
import "./Footer.css";
function Footer(){

    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logos">
                   <a href="https://www.facebook.com/NetflixArg/?brand_redir=6275848869" target="_blank"><img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-2-1.png" alt="Facebook Logo"/></a> 
                   <a href="https://www.instagram.com/netflix/?hl=es" target="_blank"><img src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" alt="Instagram Logo"/></a> 
                   <a href="https://www.linkedin.com/in/franco-ezequiel-marchegiani-7b8712199/" target="_blank"><img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="LinkedIn Logo"/></a> 
                   <a href="https://github.com/Franco-Ezequiel-Marchegiani" target="_blank"><img src="https://img.icons8.com/nolan/452/github.png" alt="Github Logo"/></a>
                </div>
                <div className="footer__text">
                    <div className="footer__text--col1">
                        <a href="#" className="footer__text1">Audio and Subtitle</a>
                        <a href="#" className="footer__text2">Audio and descriptive</a>
                        <a href="#" className="footer__text3">Help center</a>
                        <a href="#" className="footer__text4">Card gift</a>
                        <a href="#" className="footer__text5">Press</a>
                        <a href="#" className="footer__text6">Investor Relations</a>
                        <a href="#" className="footer__text7">Employment</a>
                        <a href="#" className="footer__text8">Terms of use</a>
                        <a href="#" className="footer__text9">Privacity</a>
                        <a href="#" className="footer__text10">Legal notices</a>
                        <a href="#" className="footer__text11">Cookies preference</a>
                        <a href="#" className="footer__text12">Corporate information</a>
                        <a href="#" className="footer__text13">Contact Us</a>
                    </div>
                </div>
                <div className="footer__button"></div>
                <div className="footer__copyright">© Franco Ezequiel Marchegiani 2021~2021</div>
            </div>
        </footer>
    )
}
export default Footer