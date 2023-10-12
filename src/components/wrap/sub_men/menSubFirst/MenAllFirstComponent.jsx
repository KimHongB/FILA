import axios from 'axios';
import React from 'react';
import MenAllFirstChildComponent from './MenAllFirstChildComponent'

export default function MenAllFirstComponent () {
  const [state, setState]=React.useState({
    전체보기:[],
    isCol4:false,
    isCol1:false,
    isCol3:false,
    isCol2:false,
    isCol5:false

  });

  const getProduct=()=>{
    axios({
      url:'./data/menSub1/menAll.json',
      method:'GET'
    })
    .then((res)=>{
      setState({
        ...state,
        전체보기: res.data.전체보기
      })
    })
    .catch((err)=>{
        console.log("AXIOS 오류" + err)
    })
  }
  React.useEffect(()=>{
    getProduct();
  },[])

    const onClikcCol4=(e)=>{
      setState({
        ...state,
        isCol4:!state.isCol4
      })
    }

    const onClickisCol1=(e)=>{
      setState({
        ...state,
        isCol1:!state.isCol1
      })
    }

    const onClickisCol3=(e)=>{
      setState({
        ...state,
        isCol3:!state.isCol3
      })
    }

    const onClickisCol2=(e)=>{
      setState({
        ...state,
        isCol2:!state.isCol2
      })
    }

    const onClickisCol5=(e)=>{
      setState({
        ...state,
        isCol5:!state.isCol5
      })
    }

  return (
        <main id="menall3">
            <div className="container">
          <div className="gap">
            <div className="title">
              <div className="left-box">
                <ul>
                  <li>
                    <h1>MEN</h1>
                  </li>
                  <li>
                    <h3><img src="./img/HSM/men_all/moal.svg" alt="" /></h3> 
                  </li>
                  <li>
                    <h2>의류</h2>
                  </li>
                </ul>
              </div>
              <div className="center-box">
                <ul>
                  <li>
                    <h4>필터</h4>
                  </li>
                  <li>
                    <i>
                    </i>
                  </li>
                  <li>
                    |
                  </li>
                  <li>
                    <h5>비교</h5>
                  </li>
                </ul>
              </div>
              <div className="right-box">
                <ul>
                  <li>
                    <select name="newp" id="new_p">
                      <option value="신상품순" selected="신상품순">신상품순</option>
                      <option value="신상품순">신상품순</option>
                      <option value="판매순">판매순</option>
                      <option value="리뷰순">리뷰순</option>
                      <option value="낮은가격순">낮은가격순</option>
                      <option value="높은가격순">높은가격순</option>
                    </select>
                  </li>
                  <li className='sk'>
                    |
                  </li>
                  <li className='img1'>
                    <img src="./img/HSM/men_all/ico_col3_off_24x24.png" alt="" />
                  </li>
                  <li className='img2'>
                    <img src="./img/HSM/men_all/ico_col4_on_24x24.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
            <div className="left-option">
              <div className="left-option">
                <div className="left">
                  <div className="left-content">
                    <div className="category">
                      {/* 옷종류 */}
                      <div className="category1">
                        <ul>
                          <li><a href="!#">전체</a></li>
                          <li><a href="!#">티셔츠</a></li>
                          <li><a href="!#">반바지</a></li>
                          <li><a href="!#">바람막이/아노락</a></li>
                          <li><a href="!#">트레이닝 세트</a></li>
                          <li><a href="!#">스윔웨어</a></li>
                          <li><a href="!#">룸팬츠</a></li>
                          <li><a href="!#">후드티/맨투맨</a></li>
                          <li><a href="!#">니트/스웨터</a></li>
                        </ul>
                      </div>
                      {/* 스포츠 */}
                      <div className="category2">
                        <ul>
                          <li>
                            <h3 onClick={onClikcCol4} >스포츠</h3><img  src="./img/HSM/men_all/up.svg" alt=""  onClick={onClikcCol4} className={`col-agree1${state.isCol4 ? ' on' : ''}`}/>
                          </li>
                          <ul className={`agree-box1 ${state.isCol4 ? ' on' : ''}`}>
                            <li><label htmlFor="user_agree1"><input type="checkbox" name="userAgree1" id="user_agree1" />테니스</label></li>
                            <li><label htmlFor="user_agree1"><input type="checkbox" name="userAgree1" id="user_agree1" />러닝</label></li>
                            <li><label htmlFor="user_agree2"><input type="checkbox" name="userAgree2" id="user_agree2" />라이프스타일</label></li>
                            <li><label htmlFor="user_agree3"><input type="checkbox" name="userAgree3" id="user_agree3" />트레이닝</label></li>
                          </ul>
                          
                        </ul>
                      </div>
                      {/* 색상체크 체크박스 없애고 백그라운드로 이미지 넣기*/}
                      <div className="category3">
                        <button className={`agree3 ${state.isCol1? ' on':''}`} onClick={onClickisCol1}>색상</button>
                        <ul className={`agree3 ${state.isCol1? ' on':''}`}>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BEIGE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BLACK" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BLUE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="GREEN" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="GREY" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="PINK" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="RED" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="WHITE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="YELLOW" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="ORANGE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="MIX" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="NAVY" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="KHAKI" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="NEON" /></label></li>
                        </ul>
                      </div>
                      {/* 사이즈 */}
                      <div className="category4">
                        <button className={`agree2 ${state.isCol3? ' on':''}`} onClick={onClickisCol3}>사이즈</button>
                        <ul className={`agree2 ${state.isCol3? ' on':''}`}>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="075" /><span>075</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="080" /><span>080</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="085" /><span>085</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="090" /><span>090</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="095" /><span>095</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="100" /><span>100</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="105" /><span>105</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="110" /><span>110</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="115" /><span>115</span></label></li>
                        </ul>
                      </div>
                      <div className="category5">
                        <button className={`agree2 ${state.isCol2? ' on':''}`} onClick={onClickisCol2}>가격</button>
                        <ul className={`agree2 ${state.isCol2? ' on':''}`}>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />39,000 이하</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />39,000~49,000</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />49,000~59,000</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />59,000~79,000</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />79,000 초과</label></li>
                        </ul>
                      </div>
                      <div className="category6">
                        <ul>
                          <li>
                            <h3 onClick={onClickisCol5}>성별</h3><img src="./img/HSM/men_all/up.svg" alt=""  onClick={onClickisCol5} className={`agree5 ${state.isCol5? ' on':''}`}/>
                          </li>
                          <ul className={`agree5 ${state.isCol5? ' on':''}`}>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />남성</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />여성</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />공용</label></li>
                          </ul>
                        
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="right-main">
                <MenAllFirstChildComponent 전체보기={state.전체보기} />
              </div>           
            </div>
          </div>
          </div>
        </main>
        
    
  );
};