import React from "react";

export default function Header() {
    return (
        <div class="p-3 mb-2 bg-info text-white">
            <h2>RESEARCH MANAGEMENT TOOL</h2>
                <nav class="navbar navbar-expand-lg navbar-light bg-info">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">HOME</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/studentRegister">REGISTER</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active" href="#">LOGIN</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
        </div>
    )
}