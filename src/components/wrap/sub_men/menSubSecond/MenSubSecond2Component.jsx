import axios from 'axios';
import React from 'react';
import MenSubSecond2ChildComponent from './MenSubSecond2ChildComponent'


export default function MenSubSecond2Component () {
  const [state, setState]=React.useState({
    라이프스타일:[],
    isCol6:false,
    isCol2:false,
    isCol3:false,
    isCol4:false,
    isCol5:false
  });

  const getProduct=()=>{
    axios({
      url:'./data/menSub2/menSub.json',
      method:'GET'
    })
    .then((res)=>{
      setState({
        ...state,
        라이프스타일: res.data.라이프스타일
      })
    })
    .catch((err)=>{
        console.log("AXIOS 오류" + err)
    })
  }
  React.useEffect(()=>{
    getProduct();
  },[])

  const onClikcCol2=(e)=>{
    setState({
      ...state,
      isCol2:!state.isCol2
    })
  }
  const onClickCol3=(e)=>{
    setState({
      ...state,
      isCol3:!state.isCol3
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
        <main id="menall4">
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
                    <h2>신발</h2>
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
                            <h3 onClick={onClikcCol2} className={`col-agree1${state.isCol2 ? ' on' : ''}`}>스포츠</h3><img  src="./img/HSM/men_all/up.svg" alt=""  onClick={onClikcCol2} className={`col-agree1${state.isCol2 ? ' on' : ''}`}/>
                          </li>
                          <ul className={`agree-box1 ${state.isCol2 ? ' on' : ''}`}>
                            <li><label htmlFor="user_agree2"><input type="checkbox" name="userAgree2" id="user_agree2" />라이프스타일</label></li>
                          </ul>
                          
                        </ul>
                      </div>
                      {/* 색상체크 체크박스 없애고 백그라운드로 이미지 넣기*/}
                      <div className="category3">
                        <button className={`agree${state.isCol4? ' on' : ''}`} onClick={onClickCol4}>색상</button>
                        <ul className={`agree${state.isCol4? ' on' : ''}`} > 
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BEIGE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BLACK" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BLUE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BROWN" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="GREEN" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="GREY" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="PINK" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="RED" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="WHITE" /></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="ORANGE" /></label></li>
                        </ul>
                      </div>
                      {/* 사이즈 */}
                      <div className="category4">
                        <button className={`agree${state.isCol5? ' on' : ''}`} onClick={onClickisCol5}>사이즈</button>
                        <ul className={`agree${state.isCol5? ' on' : ''}`}>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="220" /><span>220</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="225" /><span>225</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="230" /><span>230</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="235" /><span>235</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="240" /><span>240</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="245" /><span>245</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="250" /><span>250</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="255" /><span>255</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="260" /><span>260</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="265" /><span>265</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="270" /><span>270</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="275" /><span>275</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="280" /><span>280</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="285" /><span>285</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="290" /><span>290</span></label></li>
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
                            <li><label htmlFor="gender2"><input type="checkbox" name="" id="gender2" />공용</label></li>
                          </ul>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-main">
                <MenSubSecond2ChildComponent 라이프스타일={state.라이프스타일} />
              </div>           
            </div>
          </div>
          </div>
        </main>
        
    
  );
};