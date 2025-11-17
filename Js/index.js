$(function () {
  // 메인 배너
  let DestMainBanner = new Swiper(".DesktopBanner", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let MobileMainBanner = new Swiper(".mobileBanner", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
  });

  // 베스트 배너
  let dtBestBanner = new Swiper(".DesktopBestBanner", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
  });

  let mBestBanner = new Swiper(".mobileBestBanner", {
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // 색상 칩 hover 시 같은 상품 썸네일 이미지 변경
$('.bestContents_right .rightItem .chip').on('mouseenter', function () {
  const newSrc = $(this).data('img');     // 이 칩에 연결된 이미지
  if (!newSrc) return;

  $(this)
    .closest('.rightItem')                // 지금 칩이 속한 상품 하나만
    .find('.thumbnail img')               // 그 상품의 썸네일 이미지
    .attr('src', newSrc);                 // src 바꾸기
});

// 칩 영역에서 마우스가 완전히 빠지면 기본 이미지로 돌리기
$('.bestContents_right .rightItem .itemOption').on('mouseleave', function () {
  const $img = $(this).closest('.rightItem').find('.thumbnail img');
  const defaultSrc = $img.data('default');  // 위에서 넣어둔 data-default
  if (defaultSrc) {
    $img.attr('src', defaultSrc);
  }
});

  // PICK
  let DestkPick = new Swiper(".desktop_Pick", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let MobilePick = new Swiper(".mobilre_PickBanner", {});
  let Mobileproduct = new Swiper(".mobile_productInfo", {
    spaceBetween: 20,
  });

  //LOOKBOOK 데스크탑
  let DesktopLookSlide = new Swiper(".rightImg", {
    slidesPerView: 3.5,
    spaceBetween: 25,
    slidesPerGroup: 2,
  });

  $('.right_btn button').eq(0).addClass('active');
  $('.right_btn button').on('click', function () {
    const targetIndex = $(this).data('index');
    DesktopLookSlide.slideTo(targetIndex, 500);

    $('.right_btn button').removeClass('active');
    $(this).addClass('active');
  });

  //LOOKBOOK 모바일
  let Mobilelook1 = new Swiper(".look1", { loop: true });
  let Mobilelook2 = new Swiper(".look2", { loop: true });
  let Mobilelook3 = new Swiper(".look3", { loop: true });
  let Mobilelook4 = new Swiper(".look4", { loop: true });

  $('.mobile_right .mobile_btn button').eq(0).addClass('active');
  $('.mobile_right .look').hide();
  $('.mobile_right .look1').show();

  $('.mobile_right .mobile_btn button').on('click', function () {
    const index = $(this).index();

    $('.mobile_right .mobile_btn button').removeClass('active');
    $(this).addClass('active');

    $('.mobile_right .look').hide();
    $('.mobile_right .look').eq(index).show();
  });

  //인스타 탭
  $('.instaContents.base').css('display', 'grid');
  $('.instaContents.glowlip').css('display', 'none');
  $('.insta_btn button').eq(0).addClass('active');

  $('.insta_btn button').on('click', function () {
    const idx = $(this).index();

    $('.insta_btn button').removeClass('active');
    $(this).addClass('active');

    if (idx === 0) {
      $('.instaContents.base').css('display', 'grid');
      $('.instaContents.glowlip').css('display', 'none');
    } else {
      $('.instaContents.glowlip').css('display', 'grid');
      $('.instaContents.base').css('display', 'none');
    }
  });

  // VIDEO 슬라이드
  let VideoSlide = new Swiper(".videoRight", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      950: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  });

  //푸터 아코디언 (모바일)
  $('.mobileFooter_left .mobile_fwrap ul').hide();

  $('.mobileFooter_left .mobile_fwrap > a').on('click', function (e) {
    e.preventDefault();

    const $wrap = $(this).closest('.mobile_fwrap');
    const $list = $wrap.find('ul');

    $wrap.toggleClass('active');
    $list.stop(true, true).slideToggle(400);
  });

  //TOP 버튼
  $('.topbtn a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  //헤더 스크롤 BG
  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();

    if (scrollTop > 100) {
      $('.headerWrap').addClass('hide-bg');
    } else {
      $('.headerWrap').removeClass('hide-bg');
    }
  });

  //사이드메뉴 아코디언
  $('.menu .categoryMenu .menuTitle ul').hide();

  $('.menu .categoryMenu .menuTitle > a').on('click', function (e) {
    e.preventDefault();

    const $this = $(this);
    const $currentUl = $this.next('ul');
    const isOpen = $currentUl.is(':visible');

    if (isOpen) {
      $currentUl.stop(true, true).slideUp(250);
      $this.removeClass('active');
      return;
    }

    $('.menu .categoryMenu .menuTitle ul:visible')
      .stop(true, true)
      .slideUp(250);
    $('.menu .categoryMenu .menuTitle > a').removeClass('active');

    $currentUl
      .stop(true, true)
      .slideDown(250, function () {
        $(this).css('display', 'flex');
      });

    $this.addClass('active');
  });

  // LANGUAGE 토글 + 선택
  const $langBox   = $('.menu .language');
  const $langItems = $langBox.find('.langWrap ul li');

  // 박스 클릭 → 열고/닫기 (단, li 클릭은 제외)
  $langBox.on('click', function (e) {
    // li 클릭이면 열고닫기 안 함
    if ($(e.target).closest('li').length) return;

    e.preventDefault();
    $(this).toggleClass('open');
  });

 
  $langItems.eq(0).addClass('active');

  // 언어 선택 (버튼 활성/비활성)
  $langItems.on('click', function (e) {
    e.stopPropagation(); // 위로 안올라가게 (열고닫기 이벤트 막기)

    $langItems.removeClass('active');
    $(this).addClass('active');

    const selectedLang = $(this).text().trim();
    console.log('선택된 언어:', selectedLang);

  });


  const $menu = $('.menu');
  const $dim  = $('.menu-dim');

  $('.header_i .ham').on('click', function () {
    $menu.addClass('open');
    $dim.addClass('show');
    $('body').addClass('no-scroll');   // 선택: 스크롤 막기
  });

  $('.menu .close_btn').on('click', function (e) {
    e.preventDefault(); // a태그면 튕김 방지
    $menu.removeClass('open');
    $dim.removeClass('show');
    $('body').removeClass('no-scroll');
  });

   $dim.on('click', function () {
    $menu.removeClass('open');
    $(this).removeClass('show');
    $('body').removeClass('no-scroll');
  });



















});
