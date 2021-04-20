import React from "react";
import "./style.css"

const Footer = () => {
    return (
        <footer class="final-section">
            <img src="" alt="" class="logo-img" />

            <ul class="first-line">
                <li>Home</li>
                <li>Offer </li>
                <li>Appoinment</li>
                <li>Blog</li>
            </ul>
            <ul class="second-line">
                <li>info@gmail.com</li>
                <li>+0xxxxxxxxxxx</li>
                <li>+0xxxxxxxxxxx</li>
                <li>+0xxxxxxxxxxx</li>
            </ul>
            <p>&copy; Copy Right 2021 Lorem, ipsum dolor.</p>

            <hr class="hr" />

            <div class="bottom-part">
                <div class="left-part">&copy; Copy Right 2021 -Lorem ipsum dolor sit amet.</div>

                <div class="right-part">
                    <div class="icon">
                        <i class="fab fa-facebook"></i>
                    </div>

                    <div class="icon">
                        <i class="fab fa-facebook"></i>
                    </div>

                    <div class="icon">
                        <i class="fab fa-facebook"></i>
                    </div>

                    <div class="icon">
                        <i class="fab fa-facebook"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
