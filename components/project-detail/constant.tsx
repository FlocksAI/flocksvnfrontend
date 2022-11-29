/* eslint-disable @next/next/no-img-element */
export const SETTING = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: function (i: any) {
    return (
      <div className="paginating-dot">
        <img alt="image" src={`/image/home/banner-sub-${i}.png`} />
      </div>
    );
  },
  dotsClass: "slick-dots slick-thumb",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
