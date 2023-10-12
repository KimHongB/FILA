import React from 'react';
import $ from 'jquery';
function GoTopComponent() {

    React.useEffect(() => {
        // const $sec4Top = $('#section4').offset().top;
        const $goTopBtn = $('#goTop .go-top-btn');
        const $goTop = $('#goTop');

        const $headerTop = $('#header').offset().top;
        console.log($('#header').offset().top);
        // 스크롤 이벤트 구현
        $(window).scroll(function () {
            if ($(window).scrollTop()-100 >= $headerTop) {
                $goTop.fadeIn();
            }
            else {
                $goTop.fadeOut();
            }
        });


        // Smooth Scrolling
        $goTopBtn.on({
            click(e) {
                $('html, body').stop().animate({ scrollTop: 0 }, 500);
            }
        });

    }, []);

    return (
        <div id='goTop'>
            <a href="#" className='go-top-kakao'>
                <span className='blind'>고탑 버튼</span>
            </a>
            <a href="#" className='go-top-btn'>
                <span className='blind'>고탑 버튼</span>
            </a>
        </div>
    );
}

export default GoTopComponent;