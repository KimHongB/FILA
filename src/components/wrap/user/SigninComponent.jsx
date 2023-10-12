import React from 'react';

export default function SigninComponent () {

    return (
        <main id='sigin'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>로그인</h2>
                    </div>
                    <div className="content">
                        <form name='signin' id='signin' method='POST' action="action">
                            <label htmlFor="user_id" className='userId'>
                                <input type="text" name='userId' id='user_id' placeholder='아이디'/>
                            </label>
                            <label htmlFor="user_pw" className='userPw'>
                                <input type="text" name='userPw' id='user_pw' placeholder='비밀번호' />
                                <img src="./img/HSM/signin/ico_eye_gr_24x24.png" alt="" />
                            </label>
                            </form>
                            <div className='box1'>
                                <div>
                                    <input type="checkbox" name='chk' id='chk'/><label htmlFor="chk">아이디 저장</label>
                                </div>
                                <h3>아이디 / 비밀번호 찾기</h3>
                            </div>
                        
                        <div className='btn1'>
                            <button>로그인</button>
                        </div>
                        <div className="btn2">
                            <div className="left-btn">
                                <img src="./img/HSM/signin/ico_naver_13x12.png" alt="" /><button>네이버로 로그인하기</button>
                            </div>
                            <div className="right-btn">
                                <img src="./img/HSM/signin/ico_kakao_17x16.png" alt="" /><button>카카오로 로그인하기</button>
                            </div>
                        </div>
                        <div className="btn3">
                            <button>회원가입</button>
                        </div>
                        <div className='txt'>
                            <a href="!#"><h5>비회원 주문조회</h5></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

