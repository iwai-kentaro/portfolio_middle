window.addEventListener('DOMContentLoaded',function(){
    //swiper
    const swiper = new Swiper('.swiper',{
        loop: true,
        loopAdditionalSlides: 1,
        centeredSlides: true,
        autoplay:{
            delay:4000,
            disableOnInteraction:false,
        },
        speed: 800,
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 56,
        breakpoints:{
            0: {
                slidesPerView: 1.2,
            },
            700: {
                slidesPerView: 'auto',
            },
        },
    })

})

    //アコーディオン
    $(function(){
        $('.js-accordion-title').on('click', function() {
            $(this).toggleClass('open');
            $(this).next().slideToggle();
            $(this).find('.icon').toggleClass('rotate'); // 修正された行
            $('.js-accordion-title').not($(this)).next().slideUp();
            $('.js-accordion-title').not($(this)).removeClass('open');
            $('.icon').not($(this).find('.icon')).removeClass('rotate'); // 修正された行
        });
    });


    $(function(){
        $('.header__close').click(function(){
            $('.header__close').toggleClass('hamburger');
            $('.nav__').toggleClass('active');
        })
        $('.nav__ul_li').click(function(){
            $('.header__close').removeClass('hamburger');
            $('.nav__').removeClass('active');
        })
    })

    //fadein
    $(function(){
        $(window).scroll(function(){
            $('.fadein').each(function(){
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var scrollHeight = $(window).height();
                if(scroll > targetElement - scrollHeight +100) {
                    $(this).addClass('scroll');
                }

            });

        });
    });

//コンタクトフォーム ボタン非活性　活性制御
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('#form');
        const jsSubmit = document.querySelector('#jsSubmit');
        const messageBox = document.querySelector('.message-box');
        const closeButton = document.querySelector('.close');
    
        // フォーム内のすべての必須フィールド
        const requiredFields = form.querySelectorAll('[required]');
        // フォームのinputまたはchangeイベントを監視して、update関数を実行
        form.addEventListener('input', update);
        form.addEventListener('change', update);
    
        // update関数の定義
        function update() {
            // すべての必須フィールドが入力されているかどうかを確認
            const allRequiredFieldsFilled = Array.from(requiredFields).every(field => field.value.trim() !== '');
    
            // すべての必須フィールドが入力されていれば送信ボタンを有効にする
            jsSubmit.disabled = !allRequiredFieldsFilled;
        }
    
    });


    //loader 制御
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.querySelector('.loaderBox').classList.remove('loading');
        },2000);
    })
    