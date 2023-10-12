import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './wrap/HeaderComponent'
import MainComponent from './wrap/MainComponent'
import FooterComponent from './wrap/FooterComponent'
import SubWomenComponent from './wrap/SubWomenComponent'
import WomenSubFirst1Component from './wrap/sub_women/womenSubFirst/WomenSubFirst1Component';
import WomenSubFirst2Component from './wrap/sub_women/womenSubFirst/WomenSubFirst2Component';
import WomenAllSecond1Component from './wrap/sub_women/womenSubSecond/WomenAllSecond1Component';
import WomenAllFirst1Component from './wrap/sub_women/womenSubFirst/WomenAllFirst1Component';
import WomenSubSecond1Component from './wrap/sub_women/womenSubSecond/WomenSubSecond1Component';
import WomenSubSecond2Component from './wrap/sub_women/womenSubSecond/WomenSubSecond2Component'
import WomenAllThird1Component from './wrap/sub_women/womenSubThird/WomenAllThird1Component';
import WomenSubThird1Component from './wrap/sub_women/womenSubThird/WomenSubThird1Component';
import WomenSubThird2Component from './wrap/sub_women/womenSubThird/WomenSubThird2Component';
import WomenAllFourth1Component from './wrap/sub_women/womenSubFourth/WomenAllFourth1Component';
import WomenSubFourth1Component from './wrap/sub_women/womenSubFourth/WomenSubFourth1Component';
import WomenSubFourth2Component from './wrap/sub_women/womenSubFourth/WomenSubFourth2Component';

import SubMenComponent from './wrap/SubMenComponent'
import MenAllFirstComponent from './wrap/sub_men/menSubFirst/MenAllFirstComponent';
import MenSubFirstComponent from './wrap/sub_men/menSubFirst/MenSubFirstComponent';
import MenSubFirst1Component from './wrap/sub_men/menSubFirst/MenSubFirst1Component';
import MenAllSecond1Component from './wrap/sub_men/menSubSecond/MenAllSecond1Component';
import MenSubSecond1Component from './wrap/sub_men/menSubSecond/MenSubSecond1Component';
import MenSubSecond2Component from './wrap/sub_men/menSubSecond/MenSubSecond2Component';
import MenAllThirdComponent from './wrap/sub_men/menSubThird/MenAllThirdComponent';
import MenSubThirdComponent from './wrap/sub_men/menSubThird/MenSubThirdComponent';
import MenSubThird1Component from './wrap/sub_men/menSubThird/MenSubThird1Component';
import MenSubAllFourth1Component from './wrap/sub_men/menSubFourth/MenSubAllFourth1Component';
import MenSubFourthComponent from './wrap/sub_men/menSubFourth/MenSubFourthComponent';
import MenSubFourth1Component from './wrap/sub_men/menSubFourth/MenSubFourth1Component';

import GoTopComponent from './wrap/GoTopComponent'

import SignUpComponent from './wrap/user/SignUpComponent';
import ConfirmModal from './wrap/ConfirmModal';

// 홍성민 서브페이지 테니스, 로그인폼 새로 추가
import Tennis3Component from './wrap/sub_sport/Tennis3Component';
import SigninComponent from './wrap/user/SigninComponent';
import Tennis2Component from './wrap/sub_sport/Tennis2Component';
import MainModalComponent from './wrap/MainModalComponent'
export default function WrapComponent() {

    //박준호 작업내용
    //타이머 변수와 타이머 함수 넘겨주기
    const [timer, setTimer] = React.useState({
        minutes: 2,
        seconds: 59,
        setId: 0,
        timerMsg: '',
        isTimer: false,
        isEnd: false,

    });

    const timerCounterfn = () => {
        let setId = 0;
        let minutes = 2;
        let seconds = 59;
        let timerMsg = '';
        let isEnd = false;
        let isTimer = true;
        setId = setInterval(function () {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    clearInterval(setId);
                    seconds = 0;
                    minutes = 0;
                    timerMsg = '유효시간이 경과 되었습니다.';//모달창에 띄울 메시지
                    isTimer = true; //모달창 true
                    confirmModalOpen(timerMsg);
                }
            }
            setTimer({
                ...timer,
                seconds: seconds,
                minutes: minutes,
                timerMsg: timerMsg,
                setId: setId,
                isTimer: isTimer
            })
        }, 1000);//1초에 한 번 실행

    }

    //박준호 추가
    const [modal, setModal] = React.useState({
        confirmMsg: '모달창에 자식창에서 보내온 타이틀 메시지내용입니다.',
        isConfirmModal: false // true 모달열기  false 모달닫기    
    });



    const confirmModalOpen = (msg) => {
        setModal({
            ...modal,
            confirmMsg: msg,
            isConfirmModal: true
        });
    }

    const confirmModalClose = () => {
        setModal({
            ...modal,
            isConfirmModal: false
        })
    }


    //////////////////////////
    //박준호 추가 끝

    // 탑 모달 상태 관리
    const [mainModal, setMainModal] = React.useState({
        key:'FILA_MODAL',
        isMainModal : true
    });

    const mainModalClose=(value, expires)=>{
        setMainModal({
            ...mainModal,
            isMainModal:false
        })
        setMainModal(value, expires);
    }


    return (
        <div id='wrap'>
            {/* 홍성민 서브페이지 테니스, 로그인폼 새로 추가 */}
            {/* <SigninComponent />
            <Tennis3Component />
            <Tennis2Component /> */}
            {
               mainModal.isMainModal && <MainModalComponent mainModalClose={mainModalClose}/>
            }
            
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HeaderComponent />}>
                        {/*  <Route index element={<SignUpComponent timer={timer} timerCounterfn={timerCounterfn} confirmModalOpen={confirmModalOpen}/>}/> */}
                        <Route index element={<MainComponent />} />
                        <Route path='/메인' element={<MainComponent />} />
                        <Route path='/회원가입' element={<SignUpComponent timer={timer} timerCounterfn={timerCounterfn} confirmModalOpen={confirmModalOpen} />} />
                        <Route path='/로그인' element={<SigninComponent />} />

                        {/* 여성 */}
                        <Route path='/우먼서브' element={<SubWomenComponent />} />

                        <Route path='/여성의류' element={<WomenAllFirst1Component />} />
                        <Route path='/여성티셔츠' element={<WomenSubFirst1Component />} />
                        <Route path='/여성반바지' element={<WomenSubFirst2Component />} />

                        <Route path='/여성신발' element={<WomenAllSecond1Component />} />
                        <Route path='/여성샌들슬리퍼' element={<WomenSubSecond1Component />} />
                        <Route path='/여성라이프스타일' element={<WomenSubSecond2Component />} />

                        <Route path='/여성용품' element={<WomenAllThird1Component />} />
                        <Route path='/여성백팩' element={<WomenSubThird1Component />} />
                        <Route path='/여성메신저백' element={<WomenSubThird2Component />} />

                        <Route path='/여성언더웨어' element={<WomenAllFourth1Component />} />
                        <Route path='/여성온라인단독' element={<WomenSubFourth1Component />} />
                        <Route path='/여성라이프웨어' element={<WomenSubFourth2Component />} />

                        {/* 남성 */}
                        <Route path='/맨서브' element={<SubMenComponent />} />

                        <Route path='/남성의류' element={<MenAllFirstComponent />} />
                        <Route path='/남성티셔츠' element={<MenSubFirstComponent />} />
                        <Route path='/남성반바지' element={<MenSubFirst1Component />} />

                        <Route path='/남성신발' element={<MenAllSecond1Component />} />
                        <Route path='/남성샌들슬리퍼' element={<MenSubSecond1Component />} />
                        <Route path='/남성라이프스타일' element={<MenSubSecond2Component />} />

                        <Route path='/남성용품' element={<MenAllThirdComponent />} />
                        <Route path='/남성백팩' element={<MenSubThirdComponent />} />
                        <Route path='/남성메신저백' element={<MenSubThird1Component />} />

                        <Route path='/남성언더웨어' element={<MenSubAllFourth1Component />} />
                        <Route path='/남성드로즈' element={<MenSubFourthComponent />} />
                        <Route path='/남성라이프웨어' element={<MenSubFourth1Component />} />
                    </Route>
                </Routes>



                {/* <Routes>
                    <Route path='/' element={<HeaderComponent/>}>
                        <Route path='/우먼서브' element={<SubWomenComponent/>}/>

                        <Route path='/여성의류' element={<WomenAllFirst1Component/>}/>
                        <Route path='/여성티셔츠' element={<WomenSubFirst1Component/>}/>
                        <Route path='/여성반바지' element={<WomenSubFirst2Component/>}/>

                        <Route path='/여성신발' element={<WomenAllSecond1Component/>}/>
                        <Route path='/여성샌들슬리퍼' element={<WomenSubSecond1Component/>}/>
                        <Route path='/여성라이프스타일' element={<WomenSubSecond2Component/>}/>
                        
                        <Route path='/여성용품' element={<WomenAllThird1Component/>}/>
                        <Route path='/여성백팩' element={<WomenSubThird1Component/>}/>
                        <Route path='/여성메신저백' element={<WomenSubThird2Component/>}/>

                        <Route path='/여성언더웨어' element={<WomenAllFourth1Component/>}/>
                        <Route path='/여성온라인단독' element={<WomenSubFourth1Component/>}/>
                        <Route path='/여성라이프웨어' element={<WomenSubFourth2Component/>}/>
                    </Route>
                </Routes>
                <Routes>
                    <Route path='/' element={<HeaderComponent/>}>
                        <Route path='/맨서브' element={<SubMenComponent/>}/> 

                        <Route path='/남성의류' element={<MenAllFirstComponent/>}/>
                        <Route path='/남성티셔츠' element={<MenSubFirstComponent/>}/>
                        <Route path='/남성반바지' element={<MenSubFirst1Component/>}/>

                        <Route path='/남성신발' element={<MenAllSecond1Component/>}/>
                        <Route path='/남성샌들슬리퍼' element={<MenSubSecond1Component/>}/>
                        <Route path='/남성라이프스타일' element={<MenSubSecond2Component/>}/>
                        
                        <Route path='/남성용품' element={<MenAllThirdComponent/>}/>
                        <Route path='/남성백팩' element={<MenSubThirdComponent/>}/>
                        <Route path='/남성메신저백' element={<MenSubThird1Component/>}/>

                        <Route path='/남성언더웨어' element={<MenSubAllFourth1Component/>}/>
                        <Route path='/남성드로즈' element={<MenSubFourthComponent/>}/>
                        <Route path='/남성라이프웨어' element={<MenSubFourth1Component/>}/>
                    </Route>
                </Routes> */}
            </BrowserRouter>
            <GoTopComponent/>

            <FooterComponent />

            {
                modal.isConfirmModal && <ConfirmModal confirmMsg={modal.confirmMsg} confirmModalClose={confirmModalClose} />
            }
        </div>
    );
};
