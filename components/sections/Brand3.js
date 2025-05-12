import Slider from "react-slick"
const brandSlider = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
}

const images = [
    {
        url: '/assets/img/brand/ahn.png',
        description: 'Allegheny Health Network logo – regional healthcare partner',
    },
    {
        url: '/assets/img/brand/jude.png',
        description: 'St. Jude Children’s Research Hospital logo – pediatric cancer charity',
    },
    {
        url: '/assets/img/brand/salvation.png',
        description: 'The Salvation Army logo – nonprofit community support organization',
    },
    {
        url: '/assets/img/brand/tebow.png',
        description: 'Tim Tebow Foundation logo – faith-based charitable partner',
    },
    {
        url: '/assets/img/brand/jks.png',
        description: 'JKS Financial Services logo – financial planning firm partner',
    },
    {
        url: '/assets/img/brand/feeding.png',
        description: 'Feeding America logo – national hunger relief charity',
    },
    {
        url: '/assets/img/brand/tdi.png',
        description: 'TDI Financial logo – investment and wealth management partner',
    },
];

export default function Brand3() {
    return (
        <>
            <div className="inner-brand-area pt-120 pb-120">
                <div className="container">

                    <Slider {...brandSlider} className="row brand-active-three">
                        {images.map((image, index) => (
                        <div className="col-12" key={index}>
                            <div className="brand-item">
                            <img src={image.url} alt={image.description} />
                            </div>
                        </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}
