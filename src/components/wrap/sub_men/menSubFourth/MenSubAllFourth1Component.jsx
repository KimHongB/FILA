import axios from 'axios';
import React from 'react';
import MenSubAllFourth1ChildComponent from './MenSubAllFourth1ChildComponent'

export default function MenSubAllFourth1Component () {
  const [state, setState]=React.useState({
    전체보기:[],
    isCol8:false,
    isCol6:false,
    isCol2:false,
    isCol3:false,
    isCol4:false,
    isCol5:false
  });

  const getProduct=()=>{
    axios({
      url:'./data/menSub4/menAll.json',
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

  const onClickisCol4=(e)=>{
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
        <main id="menall12">
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
                        <button className={`agree ${state.isCol2? ' on':''}`} onClick={onClickisCol2}>색상</button>
                        <ul className={`agree ${state.isCol2? ' on':''}`}>
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
                        <button className={`agree ${state.isCol3? ' on':''}`} onClick={onClickisCol3}>사이즈</button>
                        <ul className={`agree ${state.isCol3? ' on':''}`}>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="085" /><span>085</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="090" /><span>090</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="095" /><span>095</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="100" /><span>100</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="105" /><span>105</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="110" /><span>110</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="75A" /><span>75A</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="75B" /><span>75B</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="75C" /><span>75C</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="80A" /><span>80A</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="80B" /><span>80B</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="80C" /><span>80C</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="85A" /><span>85A</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="85B" /><span>85B</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="85C" /><span>85C</span></label></li>
                        </ul>
                      </div>
                      <div className="category5">
                        <button className={`agree ${state.isCol4? ' on':''}`} onClick={onClickisCol4}>가격</button>
                        <ul className={`agree ${state.isCol4? ' on':''}`}>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />39,000 이하</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />39,000~49,000</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />49,000~59,000</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />59,000~79,000</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />79,000 초과</label></li>
                        </ul>
                      </div>
                      <div className="category6">
                      <button className={`agree ${state.isCol5? ' on':''}`} onClick={onClickisCol5}>와이어 유무</button>
                        <ul className={`agree ${state.isCol5? ' on':''}`}>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />와이어</label></li>
                        </ul>
                      </div>
                      <div className="category7">
                      <button className={`agree ${state.isCol6? ' on':''}`} onClick={onClickisCol6}>성별</button>
                        <ul className={`agree ${state.isCol6? ' on':''}`} >
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />남성</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />여성</label></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-main">
                <MenSubAllFourth1ChildComponent 전체보기={state.전체보기} />
              </div>           
            </div>
          </div>
          </div>
        </main>
        
    
  );
};