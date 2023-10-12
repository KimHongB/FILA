import React from 'react';
import $ from 'jquery';
import { Link, Outlet } from 'react-router-dom';

function HeaderComponent() {
    const header = () => {
        $('.main-btn.women').on({
            mouseenter() {
                //모든 슬라이드 올리고
                $('#header .extended-menu').stop().slideUp(0);
                //해당되는 슬라이드만 내린다
                $('#header .extended-menu.women').stop().css({ display: 'flex' }).slideDown(300);
                $('.bg-blur').css({ visibility: 'visible', display: 'block' });
            }
        });
        $('.main-btn.men').on({
            mouseenter() {
                //모든 슬라이드 올리고
                $('#header .extended-menu').stop().slideUp(0);
                //해당되는 슬라이드만 내린다
                $('#header .extended-menu.men').stop().css({ display: 'flex' }).slideDown(300);
                $('.bg-blur').css({ visibility: 'visible', display: 'block' });
            }
        });
        $('.main-btn.kids').on({
            mouseenter() {
                //모든 슬라이드 올리고
                $('#header .extended-menu').stop().slideUp(0);
                //해당되는 슬라이드만 내린다
                $('#header .extended-menu.kids').stop().css({ display: 'flex' }).slideDown(300);
                $('.bg-blur').css({ visibility: 'visible', display: 'block' });
            }
        });
        $('.main-btn.brand').on({
            mouseenter() {
                //모든 슬라이드 올리고
                $('#header .extended-menu').stop().slideUp(0);
                //해당되는 슬라이드만 내린다
                $('#header .extended-menu.brand').css({ display: 'flex' }).stop().slideDown(300);
                $('.bg-blur').css({ visibility: 'visible', display: 'block' });
            }

        });
        //메뉴 떠나면 슬라이드 사라지게 하기
        $('.extended-menu').on({
            mouseleave() {
                $(this).stop().slideUp(0);
                $('.bg-blur').css({ visibility: 'hidden', display: 'none' });
            }
        })
    }
    React.useEffect(() => {
        header();
    }, [])

    const [state, setState] = React.useState({
        isFix: false,
        isSub: true,
    });

    const onMouseEnterSub1 = (e) => {
        e.preventDefault();
        setState({
            ...state,
            isSub: true
        })
    }
    const onMouseLeaveSub1 = (e) => {
        setState({
            ...state,
            isSub: false
        })
    }
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="left-box">
                        <div className="logo-box">
                            <Link to="/" className='blind'>로고</Link>
                        </div>
                    </div>
                    <div className="center-box">
                        <nav>
                            <ul>
                                <li className='main-btn women'><Link to="/우먼서브">WOMEN</Link></li>
                                <li className='main-btn men'><Link to="/맨서브">MEN</Link></li>
                                <li className='main-btn kids'><Link to="/어린이">KIDS</Link></li>
                                <li><i>|</i></li>
                                <li className='main-btn brand'><Link to="">BRAND</Link></li>
                            </ul>
                        </nav>
                        <div className="extended-menu women">
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="">NEW & FEATURED</Link></li>
                                    <li><Link to="">베스트</Link></li>
                                    <li><Link to="">스타일</Link></li>
                                    <li><Link to="">세일</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/여성의류">의류</Link></li>
                                    <li><Link to="/여성의류">전체보기</Link></li>
                                    <li><Link to="/여성티셔츠">티셔츠</Link></li>
                                    <li><Link to="/여성반바지">반바지</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/여성신발">신발</Link></li>
                                    <li><Link to="/여성신발">전체보기</Link></li>
                                    <li><Link to="/여성샌들슬리퍼">샌들/슬리퍼</Link></li>
                                    <li><Link to="/여성라이프스타일">라이프스타일</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/여성용품">용품</Link></li>
                                    <li><Link to="/여성용품">전체보기</Link></li>
                                    <li><Link to="/여성백팩">백팩</Link></li>
                                    <li><Link to="/여성메신저백">메신저백</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/여성언더웨어">언더웨어</Link></li>
                                    <li><Link to="/여성언더웨어">전체보기</Link></li>
                                    <li><Link to="/여성온라인단독">온라인단독</Link></li>
                                    <li><Link to="/여성라이프웨어">라이프웨어</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'>스포츠<Link to=""></Link></li>
                                    <li><Link to="">테니스</Link></li>
                                    <li><Link to="">러닝</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="extended-menu men">
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="">NEW & FEATURED</Link></li>
                                    <li><Link to="">남남남자</Link></li>
                                    <li><Link to="">스타일</Link></li>
                                    <li><Link to="">세일</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/남성의류">의류</Link></li>
                                    <li><Link to="/남성의류">전체보기</Link></li>
                                    <li><Link to="/남성티셔츠">티셔츠</Link></li>
                                    <li><Link to="/남성반바지">반바지</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/남성신발">신발</Link></li>
                                    <li><Link to="/남성신발">전체보기</Link></li>
                                    <li><Link to="/남성샌들슬리퍼">샌들/슬리퍼</Link></li>
                                    <li><Link to="/남성라이프스타일">라이프스타일</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/남성용품">용품</Link></li>
                                    <li><Link to="/남성용품">전체보기</Link></li>
                                    <li><Link to="/남성백팩">백팩</Link></li>
                                    <li><Link to="/남성메신저백">메신저백</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/남성언더웨어">언더웨어</Link></li>
                                    <li><Link to="/남성언더웨어">전체보기</Link></li>
                                    <li><Link to="/남성드로즈">드로즈</Link></li>
                                    <li><Link to="/남성라이프웨어">라이프웨어</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'>스포츠<Link to=""></Link></li>
                                    <li><Link to="">테니스</Link></li>
                                    <li><Link to="">러닝</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="extended-menu kids">
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="">NEW & FEATURED</Link></li>
                                    <li><Link to="">어린이</Link></li>
                                    <li><Link to="">스타일</Link></li>
                                    <li><Link to="">세일</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/남성의류">의류</Link></li>
                                    <li><Link to="/남성의류">전체보기</Link></li>
                                    <li><Link to="/남성티셔츠">티셔츠</Link></li>
                                    <li><Link to="/남성반바지">반바지</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/남성신발">신발</Link></li>
                                    <li><Link to="/남성신발">전체보기</Link></li>
                                    <li><Link to="/남성샌들슬리퍼">샌들/슬리퍼</Link></li>
                                    <li><Link to="/남성라이프스타일">라이프스타일</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/남성용품">용품</Link></li>
                                    <li><Link to="/남성용품">전체보기</Link></li>
                                    <li><Link to="/남성백팩">백팩</Link></li>
                                    <li><Link to="/남성메신저백">메신저백</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'><Link to="/남성언더웨어">언더웨어</Link></li>
                                    <li><Link to="/남성언더웨어">전체보기</Link></li>
                                    <li><Link to="/남성드로즈">드로즈</Link></li>
                                    <li><Link to="/남성라이프웨어">라이프웨어</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className='title'>스포츠<Link to=""></Link></li>
                                    <li><Link to="">테니스</Link></li>
                                    <li><Link to="">러닝</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="extended-menu brand">
                            <ul>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/pjh/intro/header/1.jpg" alt="" />
                                    </div>
                                    <div className="text-box"><Link to="">ABOUT FILA</Link></div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/pjh/intro/header/2.jpg" alt="" />
                                    </div>
                                    <div className="text-box"><Link to="">Collaboration</Link></div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/pjh/intro/header/3.jpg" alt="" />
                                    </div>
                                    <div className="text-box"><Link to="">Sustainability</Link></div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/pjh/intro/header/4.jpg" alt="" />
                                    </div>
                                    <div className="text-box"><Link to="">Athletes</Link></div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/pjh/intro/header/5.jpg" alt="" />
                                    </div>
                                    <div className="text-box"><Link to="">Tennis Stories</Link></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-box">
                        <ul className='util-box'>
                            <li><Link className="util-store blind" Link>store</Link></li>
                            <li><Link className="util-search blind" Link>search</Link></li>
                            <li onMouseLeave={onMouseLeaveSub1}>
                                <Link onMouseEnter={onMouseEnterSub1} className="util-account blind" Link>account</Link>
                                <div onMouseLeave={onMouseLeaveSub1} className={`sub${state.isSub ? ' on' : ''}`}>
                                    <ul>
                                        <li><Link to="/로그인">로그인</Link></li>
                                        <li><Link to="/회원가입">회원가입</Link></li>
                                        <li><a href="!#" >아이디 · 비밀번호 찾기</a></li>
                                        <li><a href="!#">이벤트</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li ><Link className="util-cart blind">cart</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-blur blind">흐림</div>
            </header>
            <Outlet />
        </>
    );
}
export default HeaderComponent;