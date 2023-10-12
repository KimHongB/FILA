import React from 'react';

function FooterComponent() {
    return (
        <footer>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="top-box">
                            <div className="fila-box">
                                <a href="/index.html"><img src="./img/HSM/footer/logo_fila_bl_80x27.png" alt="" /></a>
                                <span>FILA IR</span>
                            </div>
                            <div className='link-box'>
                                <a href="http://instagram.com/fila_korea"><img src="./img/HSM/footer/instargram.svg" alt="" /></a>
                                <a href="http://www.facebook.com/FILAKOREA"><img src="./img/HSM/footer/facebook.svg" alt="" /></a>
                                <a href="http://www.youtube.com/FILAKOREA"><img src="./img/HSM/footer/youtube.svg" alt="" /></a>
                                <a href="https://pf.kakao.com/_aNxaCu"><img src="./img/HSM/footer/kakaotalk.svg" alt="" /></a>
                            </div>
                        </div>
                        <div className="bot-box">
                            <div className="center-left-box">
                                <div className='row1'>
                                        <a href="!#">매장안내</a>
                                        <i>|</i>
                                        <a href="!#">공지사항</a>
                                        <i>|</i>
                                        <a href="!#">FILA MEMEBERSHIP</a>
                                        <i>|</i>
                                        <a href="!#">대리점 개설문의</a>
                                        <i>|</i>
                                        <a href="!#">FILA 입찰 참여 안내</a>
                                </div>
                                <div className='row2'>
                                        <p>서울시 강동구 천호대로 1077 이스트센트럴타워 15층 ~ 18층 휠라코리아(주)    대표이사 : 김지헌<br/>
                                        사업자등록번호 : 716-81-01573  <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=7168101573&apv_perm_no=2001321007630200873">사업자정보확인</a>    통신판매업신고 : 제 2020-서울강동-0160 호<br/>
                                        개인정보 관리책임자 : 이학우
                                        </p>
                                        <p>
                                        본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.<br/>
                                        콘텐츠산업진흥법에 의한 콘텐츠보호안내 <span className="more-info">자세히 보기 <span className="img-box"><img src="./img/HSM/footer/fila_content_info.jpg" alt="" /></span></span>
                                        </p>
                                </div>
                                <div className='row3'>
                                        <a href="!#">통합회원 이용약관</a>
                                        <i>|</i>
                                        <a href="!#">개인정보 처리방침</a>
                                        <i>|</i>
                                        <a href="!#">제보센터</a>
                                </div>
                            </div>
                            <div className="center-right-box">
                                <li className='cscenter-box'>
                                    <a className='cs-link' href="https://www.fila.co.kr/customer/faq.asp">CS CENTER</a>
                                    <p>1577-3472</p>
                                    <a className='mail-link' href="!#">filaonline@fila.com</a>
                                    <p className="cs-hours">평일 월 - 금 : 09시 - 18시 (공휴일 제외)</p>
                                </li>
                                <li className='select-box'>
                                    <a className='lang-btn' href="!#"><img src="./img/HSM/footer/ico_kor_16x10.png" alt="" /> KOREA</a>
                                    <select name="user_site" id="">
                                        <option value="FAMILY SITE">FAMILY SITE</option>
                                        <option value="https://www.keds.co.kr/main/main.asp">KEDS 온라인 스토어</option>
                                        <option value="https://www.zooyork.net/main/main.asp">ZOO YORK 온라인 스토어</option>
                                        <option value="https://buyer.nicedocu.com/web/buyer/main/index.jsp">FILA 입찰공고</option>
                                        <option value="https://www.filaholdings.com/kr/main/index.asp">FILA HOLDINGS</option>
                                    </select>                                   
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </footer>
    );
}

export default FooterComponent;