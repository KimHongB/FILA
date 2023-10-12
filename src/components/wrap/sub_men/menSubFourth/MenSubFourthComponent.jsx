import axios from 'axios';
import React from 'react';
import MenSubFourthChildComponent from './MenSubFourthChildComponent'

export default function MenSubFourthComponent () {
  const [state, setState]=React.useState({
    팬티:[],
    isCol8:false,
    isCol6:false,
    isCol2:false,
    isCol3:false,
    isCol4:false,
    isCol5:false
  });

  const getProduct=()=>{
    axios({
      url:'./data/menSub4/menSub.json',
      method:'GET'
    })
    .then((res)=>{
      setState({
        ...state,
        팬티: res.data.팬티
      })
    })
    .catch((err)=>{
        console.log("AXIOS 오류" + err)
    })
  }
  React.useEffect(()=>{
    getProduct();
  },[])

  const onClikcCol8=(e)=>{
    setState({
      ...state,
      isCol8:!state.isCol8
    })
  }
  const onClickCol3=(e)=>{
    setState({
      ...state,
      isCol3:!state.isCol3
    })
  }
  const onClikcCol2=(e)=>{
    setState({
      ...state,
      isCol2:!state.isCol2
    })
  }

  const onClickCol4=(e)=>{
    setState({
      ...state,
      isCol4:!state.isCol4
    })
  }
  const onClickisCol5=(e)=>{
    setState({
      ...state,
      isCol5:!state.isCol5
    })
  }

  const onClickisCol6 =(e)=>{
    setState({
      ...state,
      isCol6:!state.isCol6
    })
  }

  return (
        <main id="menall10">
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
                    <h2>언더웨어</h2>
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
                <div className="left">
                  <div className="left-content">
                    <div className="category">
                      {/* 옷종류 */}
                      <div className="category1">
                        <ul>
                          <li><a href="!#">전체</a></li>
                          <li><a href="!#">멀티팩</a></li>
                          <li><a href="!#">드로즈</a></li>
                          <li><a href="!#">브리프</a></li>
                          <li><a href="!#">커플</a></li>
                          <li><a href="!#">런닝</a></li>
                          <li><a href="!#">라이프웨어</a></li>
                        </ul>
                      </div>
                      {/* 색상체크 체크박스 없애고 백그라운드로 이미지 넣기*/}
                      <div className="category3">
                        <button className={`agree${state.isCol4? ' on' : ''}`} onClick={onClickCol4}>색상</button>
                        <ul className={`agree${state.isCol4? ' on' : ''}`} > 
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BEIGE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BLACK" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BLUE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="GREEN" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="GREY" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="PINK" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="PURPLE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="RED" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="WHITE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="YELLOW" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="MIX" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="NAVY" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="WINE" /></label></li>
                        </ul>
                      </div>
                      {/* 사이즈 */}
                      <div className="category4">
                        <button className={`agree${state.isCol5? ' on' : ''}`} onClick={onClickisCol5}>사이즈</button>
                        <ul className={`agree${state.isCol5? ' on' : ''}`}>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="090" /><span>090</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="095" /><span>095</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="100" /><span>100</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="105" /><span>105</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="110" /><span>110</span></label></li>
                        </ul>
                      </div>
                      <div className="category5">
                        <button className={`agree ${state.isCol6? ' on':''}`} onClick={onClickisCol6} >가격</button>
                        <ul className={`agree ${state.isCol6? ' on':''}`}>
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
                            <h3 onClick={onClickCol3} className={`col-agree2${state.isCol3 ? ' on' : ''}`}>성별</h3><img src="./img/HSM/signUp/up.svg" alt="" onClick={onClickCol3} className={`col-agree2${state.isCol3 ? ' on' : ''}`} />
                          </li>
                          <ul className={`col-agreee2${state.isCol3? ' on': ''}`}>
                            <li><label htmlFor="gender2"><input type="checkbox" name="" id="gender2" />남성</label></li>
                          </ul>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-main">
                <MenSubFourthChildComponent 팬티={state.팬티} />
              </div>           
            </div>
          </div>
          </div>
        </main>
        
    
  );
};