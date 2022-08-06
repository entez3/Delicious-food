import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="row ">
                <div className="col-12 col-sm-6 col-md-4 footer-item">
                    <h2 className="title">Service</h2>
                    <a href="#">Answer FAQ</a>
                    <a href="#">Bugs Reports</a>
                    <a href="#">Security</a>
                </div>
                <div className="col-12 col-sm-6 col-md-4 footer-item">
                    <h2 className="title">Comminucation</h2>
                    <a href="#">
                        {" "}
                        <img className="footer-icon" src="./pic/telegram.png" alt="telegram" /> Telegram
                    </a>
                    <a href="#">
                        {" "}
                        <img className="footer-icon" src="./pic/whatsapp.png" alt="whatsapp" /> Whatsapp
                    </a>
                    <a href="#">
                        {" "}
                        <img className="footer-icon" src="./pic/youtube.png" alt="youtube" /> Youtube
                    </a>
                </div>
                <div className="col-12 col-sm-6 col-md-4 footer-item">
                    <h2 className="title">DELICIOUS Food</h2>
                    <a href="#">Online Reserve</a>
                    <a href="#">Recipe</a>
                    <a href="#">Hiring a chef</a>
                </div>
            </section>
            <h5 className="copyright-title">
                ©All information is reserved by <span> DELICIOUS</span> food
            </h5>
        </>
    )
}

export default Footer