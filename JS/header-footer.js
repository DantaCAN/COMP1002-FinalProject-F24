// grab header and footer elements - make a reference for each
const mainHeader = document.querySelector('#main-header');
const mainFooter = document.querySelector('#footer-section');

// include header
mainHeader.innerHTML = `
    <header>
        <div>
            <nav>
                <img src="../Images/logo2.png" alt="Nintendo logo">
                <ul>
                    <li><a href="../Home Page/index.html">Home Page</a></li>
                    <li><a href="../Product Page/ProductPage.html">Product Page</a></li>
                    <li><a href="../Extra Pages/pokemon.html">About Us</a></li>
                    <li><a href="../Contact Page/contact.html">Contact Us</a></li>
                </ul>
            </nav> 
        </div>
    </header>
`;

mainFooter.innerHTML = `
    <p>&copy; 2024 Nintendo Co., Ltd. All Rights Reserved | <a href="#">Privacy Policy</a></p>
`;

