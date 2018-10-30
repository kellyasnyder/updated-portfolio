import React from 'react';

const Gallery = (props) => {
    return (
        <div>
            <main className="gallery">
                <div className="gallery__column">
                    <figure>
                        <img src="images/12.jpg" className="gallery__img" alt="Rin" />
                        <figcaption className="gallery__caption">
                            &mdash; A photo of my cat, Rin.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="images/4.jpg" className="gallery__img" alt="Leeum Museum Entrance" />
                        <figcaption className="gallery__caption">
                            &mdash; The front entrance of Leeum Museum.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="images/3.jpg" className="gallery__img" alt="MMCA Staircase" />
                        <figcaption className="gallery__caption">
                            &mdash; A staircase in the MMCA in Seoul.
                        </figcaption>
                    </figure>
                </div>
                <div className="gallery__column">
                    <figure>
                        <img src="images/2.jpg" className="gallery__img" alt="Light Exhibit" />
                        <figcaption className="gallery__caption">
                            &mdash; A light exhibit in Leeum Museum.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="images/5.jpg" className="gallery__img" alt="33 Apartment" />
                        <figcaption className="gallery__caption">
                            &mdash; The downstairs area of 33 Apartment.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="images/9.jpg" className="gallery__img" alt="Changing of the Guard" />
                        <figcaption className="gallery__caption">
                            &mdash; The changing of the guard ceremony.
                        </figcaption>
                    </figure>
                </div>
                <div className="gallery__column">
                    <figure>
                        <img src="images/8.jpg" className="gallery__img" alt="Sinchon" />
                        <figcaption className="gallery__caption">
                            &mdash; An overhead view of Sinchon.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="images/7.jpg" className="gallery__img" alt="New Chitose Airport" />
                        <figcaption className="gallery__caption">
                            &mdash; A window in the New Chitose Airport.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="images/6.jpg" className="gallery__img" alt="Soap Store" />
                        <figcaption className="gallery__caption">
                            &mdash; A soap store in Hongdae.
                        </figcaption>
                    </figure>
                </div>
                <div className="gallery__column">
                    <figure>
                        <img src="images/10.jpg" className="gallery__img" alt="Gyeongbokgung Palace" />
                        <figcaption className="gallery__caption">
                            &mdash; The front gate of Gyeongbokgung Palace.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="images/11.jpg" className="gallery__img" alt="Cooper" />
                        <figcaption className="gallery__caption">
                            &mdash; A picture of my dog, Cooper.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="images/1.jpg" className="gallery__img" alt="Bar in Gangnam" />
                        <figcaption className="gallery__caption">
                            &mdash; The wall in a bar in Gangnam.
                        </figcaption>
                    </figure>
                </div>
            </main>
        </div>
    )
}

export default Gallery;