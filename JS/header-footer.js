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
                    <li><a href="../homePage/index.html">Home Page</a></li>
                    <li><a href="../productPage/ProductPage.html">Product Page</a></li>
                    <li><a href="../aboutPage/about.html">About Us</a></li>
                    <li><a href="../contactPage/contact.html">Contact Us</a></li>
                </ul>
            </nav> 
        </div>
    </header>
`;

mainFooter.innerHTML = `
    <p>&copy; 2024 Nintendo Co., Ltd. All Rights Reserved | <a href="#">Privacy Policy</a></p>
`;

