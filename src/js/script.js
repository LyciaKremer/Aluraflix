document.addEventListener('DOMContentLoaded', function() {
  const jdm = [
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/FnGM4ymYjxY?si=_mXCGOVcq04X5IDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/W6v9lHA6Bcw?si=R3024qc3S2sd85_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/0FcU9xT-qqA?si=MnljghazpfwbuRgu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/Iy5OMrgD8JQ?si=G6-ExTVNiHDzttHV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/GRE_33q7ZV0?si=xu8jwRf-OM-UzMcd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/7gcWQT3lU7I?si=mU_Fg3SDwDxqSHJp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/QZb7Gra8hc4?si=1MJmlUUejm9zmthl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/4LVMU_RyZwg?si=AayZ4qxkfBtVwTFi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  ];
  const supers = [
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/D7tit_JZKvk?si=G8SHlgH0ZGXVLPlD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/djLMiepVId0?si=1Y_KNQfuNtEv5hB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/t9-cMiEDNyk?si=3PwNOavxPWw0M1FY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/z_x7tf4ryAk?si=zkzKcbBqfvaEkIjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/Su7cGCX_mq4?si=rysKOBdb3ohxLigr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/WS8ph2ueQMY?si=YOExzHaR9K8Y-MOF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/b0HF9dR0OuE?si=8HUHFYsDCJTkyPCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/PnXLl2ca7IE?si=NObyri3qKFHWbhjD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  ];
  const memorable = [
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/cY8vpXB7Bxs?si=GkjXUA4_fTP60Ijf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/rrbM8bq4VcM?si=fWHRc9BzVVExewWq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/Mz9r12TYY2I?si=n0BqaSF7OuXeyIgJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/LUJ_ktW0Kbw?si=xqMeSZXcbrNA_t2P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/m1CpnKxev5g?si=fEjQysXiJvdqaGcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/ntMbUsJzYxY?si=m3HpCDpoPj8CJSIt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/6XMuUVw7TOM?si=riPW484tKj_piPcB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe width="45%" height="300" src="https://www.youtube.com/embed/yeBqf6bYZak?si=t_IdkzI46WtMIKZJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  ];

  function initSwiper(selector, prevSelector, nextSelector, iframes) {
    return new Swiper(selector, {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: nextSelector,
        prevEl: prevSelector,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      },
      on: {
        init: function () {
          this.removeAllSlides();
          this.appendSlide(iframes.map(frame => `<div class="swiper-slide">${frame}</div>`));
        }
      }
    });
  }


  initSwiper('.jdm-swiper', '.jdm-prev', '.jdm-next', jdm);
  initSwiper('.supers-swiper', '.supers-prev', '.supers-next', supers);
  initSwiper('.memorable-swiper', '.memorable-prev', '.memorable-next', memorable);
});
