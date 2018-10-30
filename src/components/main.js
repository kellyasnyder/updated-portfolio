import React from 'react';

const Main = () => {
    return (
        <div className="main">
            <figure className="main__figure">
                <img src="/images/mymove.png" alt="MyMove midterm project" className="main__img" />
                <figcaption className="main__figcap">
                    Sketch file recreation (MyMove)
                </figcaption>
            </figure>
            <figure className="main__figure">
                <img src="/images/portfolio.png" alt="Original portfolio site" className="main__img" />
                <figcaption className="main__figcap">
                    Original portfolio site
                </figcaption>
            </figure>
        </div>
    )
}

export default Main;