import React from 'react';
import $ from 'jquery';

export default function Section2SlideComponent()  {

//     React.useEffect(()=>{
       
//         let cnt = 0;
//         let setId = 0; // 메모리에 할당된 인덱 번호를 저장한다.

//         // 1. 메인슬라이드함수 
//         function mainSlide(){

//             $('.slide-wrap').stop().animate({left: `${-100*cnt}%` }, 1000, function(){
//                 if(cnt > 36) cnt=0;  // 슬라이드 3개 0 1 2 
//                 if(cnt < 0) cnt=36;  // 첫번째 왼쪽으로 이동하면 마지막 슬라이드 
//                 $('.slide-wrap').stop().animate({left: `${-100*cnt}%` }, 0); // 처음으로 리턴
//             });

//             // 슬라이드박스 좌표 구하기
//             // console.log(cnt, $('.slide-wrap').offset().left );

//         }

//         // 2-1. 다음카운트함수
//         function nextCount(){
//             cnt++;
//             mainSlide();
//         }
//         // 2-2. 이전카운트함수
//         function prevCount(){
//             cnt--;
//             mainSlide();
//         }

//         // 3. 자동타이머함수
//         function autoTimer(){
//             // nextCount(); //즉시실행
//             setId = setInterval(nextCount, 4000);  // 다음카운트함수 3초간격으로 호출하기
//             // console.log( setId ); // 메모리 할당된 인덱번호 확인하기
//         }
//         autoTimer(); // 로딩시 실행

//         // 5. 터치 스와이프
//         //    터치는 section1
//         //    마우스로 우측에서 좌측으로 터치하면 방향을 계산하는 알고리즘
//         //    마우스로 좌측에서 우측으로 터치하면 방향을 계산하는 알고리즘
//         let touchStart = 0;
//         let touchEnd = 0;
//         let mouseDown = false; // 마우드 다운하면 true 아니면 false
//         let dragStart = 0;
//         let dragEnd = 0;
//         let winWidth =  $(window).innerWidth();

//         // 데스크탑
//         $('#section4').on({
//             mousedown(e){
//                 console.log('mouseDown');
//                 // winWidth =  $(window).innerWidth();
//                 clearInterval(setId);
//                 mouseDown=true; //마우스 다운 알림
//                 touchStart = e.clientX;
//                 dragStart = e.clientX - $('.slide-wrap').offset().left;
//             },
//             mouseup(e){
//                 console.log('mouseup');
//                 touchEnd = e.clientX;                      
//                 if( touchStart-touchEnd > 0 ){
//                     if( !$('.slide-wrap').is(':animated') ){
//                         nextCount();
//                     }
//                 }
//                 if( touchStart-touchEnd < 0 ){
//                     if( !$('.slide-wrap').is(':animated') ){
//                         prevCount();
//                     }
//                 }
//                 mouseDown=false; //마우스 드래그 끝났다 마우스 업이다.                    
//             },
//             mousemove(e){  //마우스 방향에 따라다닌다.
//                 if(mouseDown===false) return;
//                 console.log('mousemove');
//                 // 마우스가 다운되면 그 때 부터 따라다녀라
//                 // 마우스다운할 때 변수에 다운상태를 저장한다.
//                 // 만약 마우스 다운상태가 아니면 마우스 무브는 취소해라
//                 dragEnd = e.clientX;
//                 console.log( dragEnd-dragStart );

//                 $('.slide-wrap').css({left: dragEnd-dragStart });
//             }
//         });  

// })
    return (
        <div className="slide-container">
            <div className="slide-view">
                <ul className="slide-wrap">
                    <li className='slide slide1'>
                        <a href="!#">
                            <div className="img-box">
                                <img src="./images/intro/FS2OPF2361F_OWH.jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <ul>
                                    <li>여성</li>
                                    <li><strong>테니스 라이프 카라원피스</strong></li>
                                    <li>119,000원</li>
                                </ul>
                            </div>
                        </a>
                    </li>
                                        
                    <li className='slide slide2'>
                        <a href="!#">
                            <div className="img-box">
                                <img src="./images/intro/FS2OPF2361F_INA.jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <ul>
                                    <li>여성</li>
                                    <li><strong>테니스 라이프 카라원피스</strong></li>
                                    <li>119,000원</li>
                                </ul>
                            </div>
                        </a>
                    </li>

                    <li className='slide slide3'>
                        <a href="!#">
                            <div className="img-box">
                                <img src="./images/intro/FS2OPF2362F_PVI (4).jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <ul>
                                    <li>여성</li>
                                    <li><strong>테니스 카라 원피스</strong></li>
                                    <li>119,000원</li>
                                </ul>
                            </div>
                        </a>
                    </li>

                    <li className='slide slide4'>
                        <a href="!#">
                            <div className="img-box">
                                <img src="./images/intro/FS2TSF2371F_INA.jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <ul>
                                    <li>여성 컴포트핏 테니스</li>
                                    <li><strong>테니스 라이프 니트 카라티셔츠</strong></li>
                                    <li>79,000원</li>
                                </ul>
                            </div>
                        </a>
                    </li>

                    <li className='slide slide5'>
                        <a href="!#">
                            <div className="img-box">
                                <img src="./images/intro/FS2RSF2322M_WHI.jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <ul>
                                    <li>남성 레귤러핏 테니스</li>
                                    <li><strong>테니스 퍼포먼스 헨리넥 반팔티셔츠</strong></li>
                                    <li>59,000원</li>
                                </ul>
                            </div>
                        </a>
                    </li>

                    <li className='slide slide6'>
                        <a href="!#">
                            <div className="img-box">
                                <img src="./images/intro/FS2RSF2101X_BLK.jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <ul>
                                    <li>공용 레귤러핏 라이프스타일</li>
                                    <li><strong>베이직 리니어 반팔티</strong></li>
                                    <li>35,000원</li>
                                </ul>
                            </div>
                        </a>
                    </li>
                                        
                    <li className='slide slide7'>
                        <a href="!#">
                            <div className="img-box">
                                <img src="./images/intro/FE2RSF5110X_LVR.jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <ul>
                                    <li>공용 테니스</li>
                                    <li><strong>[온라인 단독]Fila tennis 플레이어 반팔 티셔츠</strong></li>
                                    <li>42,000원</li>
                                </ul>
                            </div>
                        </a>
                    </li>

                    <li className='slide slide8'>
                        <a href="!#">
                            <div className="img-box">
                                <img src="./images/intro/FE2RSF5107X_BLK.jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <ul>
                                    <li>공용 라이프스타일</li>
                                    <li><strong>[온라인 단독]세리프 스몰로고 반팔티셔츠</strong></li>
                                    <li>32,000원</li>
                                </ul>
                            </div>
                        </a>
                    </li>

                    <li className='slide slide9'>
                        <a href="!#">
                            <div className="img-box">
                                <img src="./images/intro/FE2RSF5112X_OWH.jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <ul>
                                    <li>공용 컴포트핏 테니스</li>
                                    <li><strong>[온라인 단독]Fila tennis 배색포인트 티셔츠</strong></li>
                                    <li>35,000원</li>
                                </ul>
                            </div>
                        </a>
                    </li>

                    <li className='slide slide10'>
                        <a href="!#">
                            <div className="img-box">
                                <img src="./images/intro/FE2RSF5111X_INA.jpg" alt="" />
                            </div>
                            <div className="text-box">
                                <ul>
                                    <li>공용 테니스</li>
                                    <li><strong>[온라인 단독]Fila tennis 레터링 반팔티셔츠</strong></li>
                                    <li>35,000원</li>
                                </ul>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

