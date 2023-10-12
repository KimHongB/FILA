import React from 'react'
import $ from 'jquery'


export default function SignUpComponent({timer, timerCounterfn, 회원가입, confirmModalOpen}) {
    
    
    
    //타이머 변수 가져오기
    const {minutes, seconds, setId, isTimer}=timer;


    const [state, setState] = React.useState(회원가입);

    // 이름 입력상자
    const onChangeName=(e)=>{
        // 제한조건
        // 1. 특수문자 입력즉시 삭제
        // 2. 공백 안됨
        // 3. 2자~20자
        // 4. 영문, 한글 가능
        const {value} =e.target;
        let 이름 = '';
        let isNameError = false;
        let isNameMsg = '';
        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?\s\d]/g; 
        const regExp2 = /^(.){2,20}$/g;

        이름 = value.replace(regExp1, '');
        if(이름 === ''){
            isNameError = true;
            isNameMsg = '이름을 입력하세요';
        }
        else if(regExp2.test(value) === false) {
            isNameError = true;
            isNameMsg = '2자이상 20자 이하로 입력해주세요';
        }
        else {
            isNameError = false;
            isNameMsg = '';
        }

        setState({
            ...state,
            isNameError : isNameError,
            isNameMsg : isNameMsg,
            이름 : 이름
        })
    }


    // 생년월일 입력상자, 확인
    const birthCheckFn=()=>{
        // 제한조건
        // 1. 8자이하
        // 2. 공백안됨
        // 3. 특수문자 삭제 .은 남김
        let nowYear = new Date().getFullYear();
        let isBirthError = false;
        let isBirthMsg = '';


        if(state.생년 === '' && state.생월==='' && state.생일==='') {
            isBirthError = false;
            isBirthMsg = '생년월일을 입력하세요';
        }
        else {
            if ( (state.생년).length < 4){
                isBirthError = true;
                isBirthMsg = '생년은 4자리를 입력해주세요.';
            }
            else if(Number(state.생년) > nowYear){
                isBirthError = true;
                isBirthMsg = '생년을 확인하세요(미래년도)';
            }
            else if(Number(state.생년) >= (nowYear-14)){
                isBirthError = true;
                isBirthMsg = '14세미만은 가입이 불가합니다.';
            }
            else if(Number(state.생년) < (nowYear-100)){
                isBirthError = true;
                isBirthMsg = '생년을 확인하세요(100세초과)';
            }
            else {
                if(Number(state.생월) < 1 || Number(state.생월) > 12) {
                isBirthError = true;
                isBirthMsg = '생월을 확인하세요.';
                }
                else {
                    if(Number(state.생일) < 1 || Number(state.생일) > 31 ) {
                    isBirthError = true;
                    isBirthMsg = '생일을 확인하세요.';
                    }
                    else {
                    isBirthError = false;
                    isBirthMsg = '';
                    }
                }
            }
            
        }

        setState({
            ...state,
            isBirthError : isBirthError,
            isBirthMsg :isBirthMsg,
        })
    }

    const onChangeYear=(e)=>{
        const {value} = e.target;

        let 생년1 = value.replace(/[^\d]/g, '');
        let 생년2 = 생년1.slice(0,4);

        setState({
            ...state,
            생년: 생년2
        })
    } 

    const onChangeMonth=(e)=>{
        const {value} = e.target;
        let 생월1 = value.replace(/[^\d]/g, '');
        let 생월2 = 생월1.slice(0,2);

        setState({
            ...state,
            생월: 생월2
        })
    }

    const onChangeDate=(e)=>{
        const {value} = e.target;
        let 생일1 = value.replace(/[^\d]/g, '');
        let 생일2 = 생일1.slice(0,2);

        setState({
            ...state,
            생일: 생일2
        })
    }
    React.useEffect(()=>{
        birthCheckFn();
    },[state.생년, state.생월, state.생일]);





    const onChangeId=(e)=>{
        //특수문자 방지용도
        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;

        //이건 한 줄로 끝내기 const regExp2=/^(?=.*[a-zA-Z])(?=.*[^\s])[a-zA-Z\d]{6,16}$/g;
        
        const regExp2 = /^(.){6,16}$/g;   //6자 이상 16자 이하
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;   // 한글 
        const regExp4 = /[A-Za-z]+[0-9]*/g;   // 영문필수 1자이상 +,  숫자선택 0자이상 *
        const regExp5 = /\s/g;   // 공백

        let 아이디= '';
        let isIdErr=false;
        let isIdMsg='';

        아이디=e.target.value.replace(regExp1, '');

        if( regExp2.test(아이디)===false || regExp3.test(아이디)===true || regExp4.test(아이디)===false || regExp5.test(아이디)===true  ){
            isIdErr = true;
            isIdMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
        }
        else {
            isIdErr = false;
            isIdMsg = '';
        }
        setState({
            ...state,
            아이디:아이디,
            isIdErr: isIdErr,
            isIdMsg: isIdMsg
        })
    }


     // 비밀번호 입력상자 onChange 이벤트
     const onChangeUserPw1=(e)=>{
        const {value} = e.target;
        let isPwError = false;
        let isPwMsg = '';
        const regExp1   =/^(.){8,16}$/g;
        const regExp2   =/([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[0-9]+)+/g; 
        const regExp3   =/[가-힣ㄱ-ㅎㅏ-ㅣ]/g
        const regExp4   =/\s/g;
        const regExp5   =/(\d)\1\1/g

        if(regExp1.test(value)===false){
            isPwError = true;
            isPwMsg = '최소 8자 이상 입력';
        }
        else if(regExp2.test(value)===false || regExp3.test(value)===true || regExp4.test(value)===true){
            isPwError =true;
            isPwMsg = '영문/숫자/특수문자(공백 제외)만 하용하며, 2개이상 조합';
        }
        else if(regExp5.test(value)===true){
            isPwError = true;
            isPwMsg = '동일한 숫자 3개이상 연속 사용 불가'
        }
        else{
            isPwError = false;
            isPwMsg = '';
        }
        setState({
            ...state,
            isPwError:isPwError,
            isPwMsg:isPwMsg,
            비밀번호:value
        })
    }

    // 비밀번호 확인
    const onChangeUserPw2=(e)=>{
        const {value}   = e.target;
        let isPw2Error =false;
        let isPw2Msg = '';

        // 현재 입력값과 이전에 입력된 비밀번호를 비교
        if(value===''){
            isPw2Error= true;
            isPw2Msg= '비밀번호를 한번 더 입력해 주세요'
        }
        else if(value !==state.비밀번호){
            isPw2Error=true;
            isPw2Msg='동일한 비밀번호를 입력 하세요'
        }
        else{
            isPw2Error=false;
            isPw2Msg='';
        }
        setState({
            ...state,
            isPw2Error:isPw2Error,
            isPw2Msg:isPw2Msg,
            비밀번호확인:value
        })
    }



   //박준호 추가
   const onChangeFrontHp=(e)=>{
    const {value}=e.target;
    let frontHp=value;
    setState({
        ...state,
        앞번호: frontHp,
    })
    console.log(frontHp);
    }
    //핸드폰번호 입력 이벤트
    const onChangeBackHp = (e) => {
        const { value } = e.target;
        let 뒷번호 = '';
        const regExp1 = /[^\d]/;
        // 휴대폰 숫자가 아니면 삭제하기
        뒷번호 = value.replace(regExp1, '');
        setState({
        ...state,
        뒷번호: 뒷번호
        })
        
    }

    //인증번호 발송받기 이벤트
    const onClickHpNum=(e)=>{
        e.preventDefault();
        const regExp = /^[0-9]{7,8}$/;
        let num=0;//발송인증번호 난수 생성 용도
        let 발송인증번호=0;
        
        if( regExp.test(state.뒷번호)===false ){
            confirmModalOpen('잘못된 형식입니다. 확인 후 다시 시도 해 주세요.');
            console.log(state.앞번호+state.뒷번호);
        }
        else {
            // 발송인증번호 전송 타이밍
            num = Math.floor(Math.random()*900000+100000); // 발송인증번호: 6자리의 난수 발생
            // 상태관리 변수에 발송인증번호 저장
            발송인증번호 = num;
            confirmModalOpen(`발송인증번호가 발송되었습니다.  ${num}`);
        
            setState({
                ...state,
                발송인증번호: 발송인증번호,
                
            })
            timerCounterfn();

        }
    }
    //인증번호 입력 이벤트
    const onChangeHp2=(e)=>{
            const {value} = e.target;
            let 입력인증번호='';
            const regExp1=/[^\d]/g;
            입력인증번호=value.replace(regExp1, '');
            setState({
                ...state,
                입력인증번호: 입력인증번호
            })
    }
    const onClickHpNum2=(e)=>{
            e.preventDefault();
            let 발송인증번호=state.발송인증번호;
            if (state.입력인증번호===''){
                confirmModalOpen('인증번호를 입력해주세요');
            }
            else if(state.발송인증번호===Number(state.입력인증번호)){
                confirmModalOpen('인증 성공');
                clearInterval(setId);
                setState({
                    ...state,
                    휴대폰: state.앞번호+state.뒷번호
                })
            }
            else {
                confirmModalOpen('잘못된 인증번호');
            }

            state.발송인증번호=발송인증번호;
    }

    const onClikcCol1=()=>{
        setState({
            ...state,
            isCol1:!state.isCol1
        })
    }

    //이메일
    const onChangeEmail=(e)=>{
        e.preventDefault();
        const {value}=e.target;
        const regExp1=/[가-힣ㄱ-ㅎㅏ-ㅣ]/g;//한글은 안 되게
        let 이메일='';
        let isEmailError=false;
        let isEmailMsg='';
        이메일=value.replace(regExp1,'');
        const regExp2 = /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/\.?]+\.[a-z]{2,3}$/gi; 
        if(이메일===''){
            isEmailError=true;
            isEmailMsg='이메일을 입력해 주세요.';
        }
        else if(regExp2.test(이메일)===false){
            isEmailError=true;
            isEmailMsg='이메일 형식으로 입력해 주세요.';
        }
        else{
            isEmailError=false;
            isEmailMsg='';
        }
        setState({
            ...state,
            이메일: 이메일,
            isEmailError: isEmailError,
            isEmailMsg: isEmailMsg,
        })
    }
    //주소검색 api
    const openPopupDaumPostApi=()=>{
        const popupFile = './popup.html';
        const popupName = '_popupAddressApi';
        const popupWidth = 530;
        const popupHeight = 570;
        const popupTop = (window.innerHeight-popupHeight)/2;
        const popupLeft = (window.innerWidth-popupWidth)/2;
        
    window.open(popupFile, popupName, `width=${popupWidth}, height=${popupHeight}, top=${popupTop}, left=${popupLeft}`);
    }
    const onClickAddrPopupOpenApi=(e)=>{
        e.preventDefault();
        openPopupDaumPostApi(); // 팝업창 열기
    }

    const getSessionStorage=()=>{
        const key = 'MJADDRESS';
        let 주소1 = '';
        let 주소2 = '';
        let isAddress = false;

        // 스토레이지 가져오기 데이터 없으면 null 반환
        let result = sessionStorage.getItem(key);

        if(result!==null){ // 데이터가 있다면
            result = JSON.parse(sessionStorage.getItem(key));
            주소1 = result.주소1;
            주소2 = result.주소2;
            isAddress = true ;
            //mapAddressFn(`${result.주소1}  ${result.주소2}`, false);
        }
        setState({
            ...state,
            주소1: 주소1,
            주소2: 주소2,
            isAddress: isAddress
            })
        }
    React.useEffect(()=>{
        getSessionStorage();
    },[state.주소1,state.주소2]);

    const 주소1=(e)=>{
        setState({
            ...state,
            주소1:e.target.value
        })
    }    
    const 주소2=(e)=>{
        setState({
            ...state,
            주소2:e.target.value
        })
    }
    //성별
    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별: e.target.value
        })
    }

    //약관 전체 선택
    const onChangeAgreeAll=(e)=>{
        let 이용약관체크=[];
        if(e.target.checked===true){
            //전체 동의에 체크하면
            이용약관체크=state.이용약관전체;
            //
        }
        else {
            //전체 동의 체크 해제하면 전부 비우기
            이용약관체크=[];
        }
        setState({
            ...state,
            이용약관체크: 이용약관체크
        })
    }
    //약관 선택
    const onChangeAgree=(e)=>{
        let 임시배열=[];
        임시배열=state.이용약관체크;

        //개별동의 항목을 이용약관체크 배열에 넣기
        if(e.target.checked===true){
            //체크박스에 체크가 되면
            //선택약관 파트
            if(  (e.target.value==='SMS 수신동의' && state.이용약관체크.includes('이메일 수신동의')===true) || ((e.target.value==='이메일 수신동의' && state.이용약관체크.includes('SMS 수신동의')===true))   ){
                setState({
                    //선택 항목 하나가 선택된 상태에서 나머지 하나를 선택한 경우: 전체선택박스 선택됨
                    ...state,
                    이용약관체크: [...state.이용약관체크, e.target.value, '혜택 알림 이메일, 문자 수신 동의(선택)']
                })
            }
            else {
                setState({
                    ...state,
                    이용약관체크: [...state.이용약관체크, e.target.value]
                })
            }
        }
        else {
            //체크박스 해제되면
            //선택약관 파트
            if(e.target.value==='SMS 수신동의' || e.target.value==='이메일 수신동의'){
                //sms나 이메일 체크 해제할 경우
                setState({
                    //선택한 파트와 선택전체선택 항목 해제한 배열 반환
                    ...state,
                    이용약관체크: state.이용약관체크.filter((item)=>item!=='혜택 알림 이메일, 문자 수신 동의(선택)' && item!==e.target.value)
                })
            }
            else {
                setState({
                    //타겟이 된 값은 제외시키기
                    ...state,
                    이용약관체크: 임시배열.filter((item)=>item!==e.target.value)
    
                })
            }
        }
    }
    //선택 약관 전체 선택
    const onChangeOptAgreeAll=(e)=>{
        let 임시배열=[];
        //선택약관체크
        //이용약관체크배열 안의 요소 중에 선택약관체크에 있는 요소가 있으면 그걸 제외하고 반환, 중복되는 요소 제거가 목적
        //ex)이메일이 있으면 선택약관체크에서 sms만 반환 
        임시배열=state.선택약관.filter((item)=>!state.이용약관체크.includes(item));
        if(e.target.checked===true){
            
            setState({
                ...state,
                이용약관체크: [...state.이용약관체크, e.target.value, ...임시배열]
            })

        }
        else {
            setState({
                ...state,
                이용약관체크: state.이용약관체크.filter((item)=>item!=='혜택 알림 이메일, 문자 수신 동의(선택)' && item!=='이메일 수신동의' && item!=='SMS 수신동의')
            })
        }
    }

    

//////////////////////////////////////
//박준호 추가 끝

    const [count, setCount] = React.useState(1);

    React.useEffect(()=>{
        const inputAdd = $('.input-add');
        const $content = $('.content');
        const $childDataForm = $('#childDataForm');
        const $pm = $('.pm');

        const addRow = () => {
        if (count < 5) {
            setCount(prevCount => prevCount + 1);
        }
        };
    
        const removeRow = (index) => {
            setCount(prevCount => prevCount - 1);
            $(`#row${index}`).remove();
        };

        $content.on('click', '.add-row', function (e) {
            e.preventDefault();
            addRow();
        });
    
        $content.on('click', '.remove-row', function (e) {
        e.preventDefault();
        const index = $(this).data('index');
        removeRow(index);
        });

        inputAdd.on({
            click(e){
                e.preventDefault();
                $(this).next().stop().slideToggle();
                // $childDataForm.next().stop().slideToggle();
                $content.toggleClass('on');
                $pm.toggleClass('on');
             }
        });
    });
    const onSubmitSignupEvent=(e)=>{
        e.preventDefault();

        //일단 임시
        let 약관동의문자열='';
        state.이용약관체크.map((item, idx)=>{
        if(idx===state.이용약관체크.length-1){
            //배열의 마지막 요소를 의미
            약관동의문자열 +=item
        }
        else {
            약관동의문자열 += item+', '
        }
    })
    

    const formData = {
        "user_name":        state.이름,
        "user_birth":       `${state.생년}-${state.생월}-${state.생일}`,
        "user_gender":      state.성별,
        "user_hp":          `${state.앞번호+state.뒷번호}`,
        "user_id":          state.아이디,
        "user_pw":          state.비밀번호,
        "user_email":       state.이메일,
        "user_addr":        `${state.주소1} ${state.주소2}`,
        "user_agree":       약관동의문자열
    }
    console.log(formData);

    $.ajax({
        url:'http://localhost:8080/홍성민/휠라/휠라/fila_user_signup_action.jsp',
        type:'POST',
        data:formData,
        success(res){
            console.log('AJAX 성공')
            console.log(res)
            console.log(JSON.parse(res));
            alert('회원가입 축축')
        },
        error(err){
            console.log('AJAX 실패' + err);
        }
    })
}

  


    return (
        <main id="signUp">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>회원가입</h2>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitSignupEvent} name='' id='' method='post' action="">
                            <div className="box1">
                                <p>카카오 간편 회원가입으로 보다 간편하게 회원가입이 가능합니다.</p>
                                <div className="kakao-btn">
                                    <img src="./img/HSM/signup/kakao.svg" alt="" />
                                    <span>카카오 1초 간편가입</span>
                                </div>
                            </div>
                            <div className="box2">
                                <div className="tit">
                                    <h3>본인인증</h3>
                                </div>
                                <ul className="input-box">
                                    <li className="name">
                                        <input 
                                            name='username' 
                                            id='userName' 
                                            type="text" 
                                            placeholder='이름' 
                                            onChange={onChangeName}
                                            value = {state.이름}
                                        />
                                        <select name="userfgin" id="userFgin" placeholder='내국인'>
                                            <option value="내국인">내국인</option>
                                            <option value="외국인">외국인</option>
                                        </select>
                                        <img src="./img/HSM/signup/arr_down.png" alt="" />
                                    </li>
                                    <p className={`error-msg${state.isNameError?' on':''}`}>{state.isNameMsg}</p>
                                    <li className="birth">
                                        <input
                                            name='userbirth_year' 
                                            id='userBirthYear' 
                                            type="text" 
                                            placeholder='YYY'
                                            onChange={onChangeYear}
                                            value = {state.생년}
                                        />
                                        <input
                                            name='userbirth_month' 
                                            id='userBirthMonth' 
                                            type="text" 
                                            placeholder='MMM'
                                            onChange={onChangeMonth}
                                            value = {state.생월}
                                        />
                                        <input
                                            name='userbirth_date' 
                                            id='userBirthDate' 
                                            type="text" 
                                            placeholder='DDD'
                                            onChange={onChangeDate}
                                            value = {state.생일}
                                        />
                                        <select name="usergender" id="userGender" placeholder='성별'>
                                            <option value="성별">성별</option>
                                            <option value="남자">남자</option>
                                            <option value="여자">여자</option>
                                        </select>
                                        <img src="./img/HSM/signup/arr_down.png" alt="" />
                                    </li>
                                    <p className={`error-msg${state.isBirthError?' on':''}`}>{state.isBirthMsg}</p>
                                    <li className="hp">
                                        <select onChange={onChangeFrontHp} value={state.앞번호} name="user_hp1" id="userHp1">
                                            <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="017">017</option>
                                            <option value="018">018</option>
                                            <option value="019">019</option>
                                        </select>
                                        <input onChange={onChangeBackHp} value={state.뒷번호} name='user_hp2' id='' type="text" />
                                        {/* 겉으로는 안 보이게 설정 */}
                                        <input value={state.앞번호+state.뒷번호} name='user_hp' id='userHp' type="text" />
                                        <button onClick={onClickHpNum}>인증번호받기</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="box3"></div>
                            <div className="box4">
                                <input onChange={onChangeHp2} value={state.입력인증번호}name='hp_ok' id='hpOk' type="text" placeholder='번호확인' />
                                <span className={`hp-timer-counter${isTimer ?' on':''}`}>{minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}</span>
                                <button onClick={onClickHpNum2} >인증확인</button>
                            </div>
                            <div className="center-box">
                                <ul >
                                    <li >
                                        <input type="checkbox" name='user_agree' id='userAgree1' /><label htmlFor="userAgree1">본인 인증을 위한 약관 모두 동의</label><img src="./img/HSM/signUp/up.svg" alt="" onClick={onClikcCol1} className={`col-agree${state.isCol1 ? ' on' : ''}`} />
                                    </li>
                                    <ul className={`agree-box${state.isCol1 ? ' on' : ''}`}>
                                        <li>
                                            <input type="checkbox" name='user_agree' id='userAgree2' /><label htmlFor="user_agree2">개인정보이용 동의</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name='user_agree' id='userAgree3' /><label htmlFor="user_agree3">고유식별정보처리 동의</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name='user_agree' id='userAgree4' /><label htmlFor="user_agree4"> 서비스 이용약관 동의</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name='user_agree' id='userAgree5' /><label htmlFor="user_agree5">통신사 이용약관 동의</label>
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                            <div className="box5">
                                <button type='submit'>
                                    <h2>본인인증</h2>
                                </button>
                            </div>
                            <div className="title2">
                                <h2>필수정보</h2>
                            </div>
                            <div className="content2">  
                                <label htmlFor="userId">
                                <input type="text" name='user_id' id='userId' placeholder='아이디 (대소문자를 반드시 확인해주세요)' onChange={onChangeId} value={state.아이디} />
                                <button>중복확인</button>
                                </label>
                                <p className={`error-msg ${state.isIdErr? ' on': ''}`}>{state.isIdMsg}</p>
                                <label htmlFor="userPw" className='pwImg'>
                                    <input type="password" name='user_pw' id='userPw' placeholder='8-16자:영문,숫자,특수문자 조합' onChange={onChangeUserPw1} value={state.비밀번호} />
                                    <img src="./img/HSM/signup/ico_eye_gr_24x24.png" alt="" />
                                </label>    
                                <p className={`error-msg ${state.isPwError? ' on': ''}`}>{state.isPwMsg}</p>
   
                                
                                <label htmlFor="userPwOk" className='pw2Ok'>
                                    <input type="password" name='user_pw_ok' id='userPwOk' placeholder='비밀번호를 다시 한번 입력해주세요' onChange={onChangeUserPw2} value={state.비밀번호확인} />
                                </label>
                                <p className={`error-msg ${state.isPw2Error? ' on' : ''}`}>{state.isPw2Msg}</p>

                                <label htmlFor="userEmail">
                                    <input type="text" name='user_email' id='userEmail' placeholder='이메일 주소' onChange={onChangeEmail} value={state.이메일}/>
                                </label>
                                <p className={`error-msg${state.isEmailError?' on':''}`}>{state.isEmailMsg}</p>
                                {/* 주소영역 */}
                                <div className="addr-box">
                                    <h3>주소</h3>
                                    <button className={`addr-search-btn${state.isAddress?' off':''}`} onClick={onClickAddrPopupOpenApi}  type='button'>주소검색</button>
                                    <input type="text" className={`${state.isAddress?'on':''}`} id="userAddress1" onFocus={주소1}  onChange={주소1} value={state.주소1}/>
                                    <input type="text" className={`${state.isAddress?'on':''}`} id="userAddress2" onFocus={주소2}  onChange={주소2} value={state.주소2}/>
                                </div>
                            </div>
                            
                            <div className="signup-section3">
                                <div className="title3">
                                    <h2>자녀정보</h2>
                                    {/* <a className='input-add' href="!#">추가시 생일 쿠폰 증정</a> */}
                                </div>
                                <a className='input-add' href="!#">추가시 생일 쿠폰 증정<span className='pm'></span></a>
                                <div className='content3'>
                                    <ul>
                                        <li className='row1'><input name='user_child_data' id='userChildData' type="text" placeholder='자녀명' /></li>
                                        <li className='row2'><input name='user_child_data' id='userChildData' type="text" placeholder='생년월일 8자리' />
                                            <select name="user_child_gender" id="userChildGender">
                                                <option value="">성별</option>
                                                <option value="남성">남성</option>
                                                <option value="여성">여성</option>
                                            </select></li>
                                        <li>
                                            <button>자녀 추가</button>
                                        </li>
                                    </ul>
                                    <div className="under-text">
                                        <p>고객님의 자녀 정보는 당사 마케팅 / 홍보 등에 활용될 수 있습니다.</p>
                                        <a href="!#">초기화</a>
                                    </div>
                                </div>
                            </div>
                            
                            <section id="signup_section4">
                                <div className="container">
                                    <div className="gap">
                                        <div className="title4">
                                            <h3>이용약관 및 마케팅 정보 수신 동의</h3>
                                        </div>
                                        <div className="content4">
                                                <div className="agree-all">
                                                    <div className="checkbox-box">
                                                        <input type="checkbox" name="user_agree_all" id="userAgreeAll" onChange={onChangeAgreeAll} checked={state.이용약관체크.length===6}/>
                                                        <label htmlFor="userAgreeAll">약관 전체 동의합니다.</label>
                                                    </div>
                                                    <button /* onClick={onClickAgree}  */className={`arrow-btn`}></button> {/* ${state.isAgree ? ' on' : ''} */}
                                                </div>

                                                <div className={`agree-box`} > {/* ${state.isAgree ? ' on' : ''} */}
                                                    <ul>
                                                        <li>
                                                            <input name="user_agree" id="userAgree1Check" type="checkbox" value={"이용약관(필수)"} onChange={onChangeAgree} checked={state.이용약관체크.includes('이용약관(필수)')}/>
                                                            <label htmlFor="userAgree1Check">이용약관<span className="red-mark">(필수)</span></label>
                                                            
                                                            <a href="!#">전문보기</a>
                                                        </li>
                                                        <li>
                                                            <input name="user_agree" id="userAgree2Check" type="checkbox" value={"개인정보의 수집 및 이용에 관한 동의(필수)"} onChange={onChangeAgree} checked={state.이용약관체크.includes('개인정보의 수집 및 이용에 관한 동의(필수)')}/>
                                                            <label htmlFor="userAgree2Check">개인정보의 수집 및 이용에 관한 동의<span className="red-mark">(필수)</span></label>
                                                            
                                                            <a href="!#">전문보기</a>
                                                        </li>
                                                        <li>
                                                            <input name="user_agree" id="userAgree3Check" type="checkbox" value={"개인정보수집 및 활용에 대한 동의(선택)"} onChange={onChangeAgree} checked={state.이용약관체크.includes('개인정보수집 및 활용에 대한 동의(선택)')}/>
                                                            <label htmlFor="userAgree3Check">개인정보수집 및 활용에 대한 동의(선택)</label>
                                                            
                                                            <a href="!#">전문보기</a>
                                                        </li>
                                                        <li className='user-optional-all-box'>
                                                            <input name="user_optional_all" id="userOptionalAll" type="checkbox" value={"혜택 알림 이메일, 문자 수신 동의(선택)"} onChange={onChangeOptAgreeAll} checked={state.이용약관체크.includes('혜택 알림 이메일, 문자 수신 동의(선택)')}/>
                                                            <label htmlFor="userOptionalAll">
                                                                혜택 알림 이메일, 문자 수신 동의(선택)
                                                            </label>
                                                            <p>E-Mail, SMS, 카카오 친구톡을 통한 상품 및 이벤트 정보 수신에 동의합니다.</p>
                                                        </li>
                                                        <li className='SMS-and-Email'>
                                                            <input name="user_SMS_Email" id="userSMS" type="checkbox" value={"SMS 수신동의"} onChange={onChangeAgree} checked={state.이용약관체크.includes('SMS 수신동의')}/>
                                                            <label htmlFor="userSMS">SMS 수신동의</label>
                                                            <input name="user_SMS_Email" id="userEmailCheck" type="checkbox" value={"이메일 수신동의"} onChange={onChangeAgree} checked={state.이용약관체크.includes('이메일 수신동의')}/>
                                                            <label htmlFor="userEmailCheck">이메일 수신동의</label>
                                                            <p>
                                                                회원가입 및 거래정보(주문, 반품, 교환)등의 메일은 마케팅 정보 수신과 무관하며,
                                                            개인정보보호법 제15조 제1항에 의거 
                                                            '정보주체와의 계약의 체결 및 이행을 위하여 불가피하게 필요한 경우'에 해당하므로 
                                                            수신동의를 하지 않더라도 모든 회원에게 발송됩니다.
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>

                                            <div className="submit-box">
                                                <p>
                                                * 필수항목에 동의하지 않으실 경우 회원가입이 불가합니다.<br/>
                                                * 선택항목은 동의하지 않으셔도 서비스 이용이 가능합니다.
                                                </p>
                                                <div className="btn-box">
                                                    <button type='submit'>동의하고 가입하기</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

SignUpComponent.defaultProps = {
    회원가입: {
        이름 : '',
        isNameError : false,
        isNameMsg : '',
        성별: '성별',

        생년:'',
        생월:'',
        생일:'',
        isBirthError:false,
        isBirthMsg:'',

        앞번호: '010',
        뒷번호: '',
        
        발송인증번호:0,
        입력인증번호: '',

        아이디: '',
        isIdErr: false,
        isIdMsg: '',

        비밀번호:'',
        비밀번호확인:'',
        isPwError :false,
        isPwMsg:'',
        isPw2Error :false,
        isPw2Msg:'',

        이메일: '',
        isEmailError:false, //이메일 에러 여부
        isEmailMsg: '',//이메일 에러 메시지
        주소1 :'',
        주소2: '',

        //이용약관
        이용약관전체: [
            "이용약관(필수)",
            "개인정보의 수집 및 이용에 관한 동의(필수)",
            "개인정보수집 및 활용에 대한 동의(선택)",
            "혜택 알림 이메일, 문자 수신 동의(선택)",
            "SMS 수신동의",
            "이메일 수신동의"
        ],
        이용약관체크: [],
        
        선택약관: [
            "SMS 수신동의",
            "이메일 수신동의"
        ],

        isCol1:false
    }
}