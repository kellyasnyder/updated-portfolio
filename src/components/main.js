import React from 'react';

const Main = () => {
    return (
        <div className="main">
            <section className="main__section">
                <figure className="main__figure">
                    <a href="http://localhost:3000/">
                        <img src="/images/nandamade.png" alt="Nandamade eCommerce site" className="main__img" />
                    </a>
                    <figcaption className="main__figcap">
                        eCommerce site (Nandamade) &mdash; <a href="https://github.com/kellyasnyder/react-project">Github</a>
                    </figcaption>
                </figure>
                <figure className="main__figure">
                    <a href="https://original-portfolio.netlify.com/">
                        <img src="/images/portfolio.png" alt="Original portfolio site" className="main__img" />
                    </a>
                    <figcaption className="main__figcap">
                        Original portfolio site &mdash; <a href="https://github.com/kellyasnyder/kellyasnyder.github.io">Github</a>
                    </figcaption>
                </figure>
                <figure className="main__figure">
                    <a href="https://css-challenges.netlify.com/">
                        <img src="/images/css.png" alt="CSS Challenges" className="main__img" />
                    </a>
                    <figcaption className="main__figcap">
                        CSS Challenges &mdash; <a href="https://github.com/kellyasnyder/roadtohire-css-challenges">Github</a>
                    </figcaption>
                </figure>
                <figure className="main__figure">
                    <a href="https://mymove.netlify.com/">
                        <img src="/images/mymove.png" alt="MyMove midterm project" className="main__img" />
                    </a>
                    <figcaption className="main__figcap">
                        Sketch file recreation (MyMove) &mdash; <a href="https://github.com/kellyasnyder/roadtohire-midterm">Github</a>
                    </figcaption>
                </figure>
                <figure className="main__figure">
                    <a href="https://original-portfolio.netlify.com/">
                        <img src="/images/blois.png" alt="One day website (Blois)" className="main__img" />
                    </a>
                    <figcaption className="main__figcap">
                        One day website (Blois) &mdash; <a href="https://github.com/kellyasnyder/one-day-site">Github</a>
                    </figcaption>
                </figure>
                <figure className="main__figure">
                    <a href="https://original-portfolio.netlify.com/">
                        <img src="/images/reactguess.png" alt="One day website (Blois)" className="main__img" />
                    </a>
                    <figcaption className="main__figcap">
                        Guessing game build in React.js &mdash; <a href="https://github.com/kellyasnyder/react-guessing-game">Github</a>
                    </figcaption>
                </figure>
            </section>
            <h3>And others...</h3>
            <section className="main__section">
                <div className="main__sub">
                    <h4>HTML Challenges</h4>
                    <p>
                        Basic HTML challenges that display uses of different attributes and properties.
                    </p>
                </div>
                <div className="main__sub">
                    <h4>Node Challenges</h4>
                    <p>
                        Node.js challenges that utilize an Express.js server and implements CRUD functionality.
                    </p>
                </div>
                <div className="main__sub">
                    <h4>AJAX Challenges</h4>
                    <p>
                        jQuery challenges that fetch data from the API and integrate them in multiple ways.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Main;