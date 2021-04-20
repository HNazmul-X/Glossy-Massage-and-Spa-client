import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink } from "react-router-hash-link"

const MyNavbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link class="navbar-brand" href="#">
                        <h5 className="fw-bold text-muted">Saloon & Spa</h5>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link to={"/"} class="nav-link " aria-current="page" href="#">
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <HashLink to={"/#services"} class="nav-link" href="#">
                                    Services
                                </HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink to={"/#pricing"} class="nav-link" href="#">
                                    Pricing
                                </HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink to={"/#customer-Review"} class="nav-link" href="#">
                                    Reviews
                                </HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink to={"/admin"} class="nav-link" href="#">
                                    Admin
                                </HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink to={"/"} class="nav-link" href="#">
                                    Login
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MyNavbar;