import axios from 'axios';
import React from 'react';
import WomenSubThird2ChildComponent from './WomenSubThird2ChildComponent'

export default function WomenSubThird2Component () {
  const [state, setState]=React.useState({
    여성메신저백:[]
  });

  const getProduct=()=>{
    axios({
      url:'./data/womenSub3/womenSub.json',
      method:'GET'
    })
    .then((res)=>{
      setState({
        ...state,
        여성메신저백: res.data.여성메신저백
      })
    })
    .catch((err)=>{
        console.log("AXIOS 오류" + err)
    })
  }
  React.useEffect(()=>{
    getProduct();
  },[])
  return (
        <main id="womenall">
            <div className="container">
          <div className="gap">
            <div className="title">
              <div className="left-box">
                <ul>
                  <li>
                    <h1>WOMEN</h1>
                  </li>
                  <li>
                    <h3><img src="./img/HSM/women_backpack/mola.svg" alt="" /></h3> 
                  </li>
                  <li>
                    <h2>용품</h2>
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
                    <img src="./img/HSM/women_backpack/ico_col3_off_24x24.png" alt="" />
                  </li>
                  <li className='img2'>
                    <img src="./img/HSM/women_backpack/ico_col4_on_24x24.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <div className="category-box">
                <div className="category">
                  {/* 옷종류 */}
                  <div className="category1">
                      <ul>
                          <li><a href="!#">전체</a></li>
                          <li><a href="!#">티셔츠</a></li>
                          <li><a href="!#">반바지</a></li>
                          <li><a href="!#">바람막이/아노락</a></li>
                          <li><a href="!#">트레이닝 세트</a></li>
                          <li><a href="!#">팬츠</a></li>
                          <li><a href="!#">스커트/원피스</a></li>
                          <li><a href="!#">브라탑/레깅스</a></li>
                          <li><a href="!#">후드티/맨투맨</a></li>
                          <li><a href="!#">니트/스웨터</a></li>
                      </ul>
                  </div>
                  {/* 스포츠 */}
                  <div className="category2">
                      <ul>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />테니스</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />러닝</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />라이프스타일</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />트레이닝</label></li>
                      </ul>
                  </div>
                  {/* 색상체크 체크박스 없애고 백그라운드로 이미지 넣기*/}
                  <div className="category3">
                      <button className='toggle-btn'>색상</button>
                      <ul>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BEIGE"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BLACK"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BLUE"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="GREEN"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="GREY"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="PINK"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="RED"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="WHITE"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="YELLOW"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="ORANGE"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="MIX"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="NAVY"/></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="color_choice" id="NEON"/></label></li>
                      </ul>
                  </div>
                  {/* 사이즈 */}
                  <div className="category4">
                      <button className='toggle-btn'>사이즈</button>
                      <ul>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="070"/><span>070</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="075"/><span>075</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="080"/><span>080</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="085"/><span>085</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="090"/><span>090</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="095"/><span>095</span></label></li>
                          <li><label htmlFor=""><input type="checkbox" name="size_choice" id="100"/><span>100</span></label></li>
                      </ul>
                  </div>
                  <div className="category5">
                      <button className='toggle-btn'>가격</button>
                      <ul>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />39,000 이하</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />39,000~49,000</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />49,000~59,000</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />59,000~79,000</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />79,000 초과</label></li>
                      </ul>
                  </div>
                  <div className="category6">
                      <ul>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />여성</label></li>
                          <li><label htmlFor=""><input type="checkbox" name="" id="" />공용</label></li>
                      </ul>
                  </div>
                </div>
              </div>
              <div className="right-main">
                <WomenSubThird2ChildComponent 여성메신저백={state.여성메신저백} />
              {/* <ul>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01978F_800.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 테이퍼 샌들 v3 테니스</h3>
                  <div className="price">
                      <h4>79,500원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01978F_500.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 테이퍼 샌들 v3 테니스</h3>
                  <div className="price">
                      <h4>79,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01978F_400.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 테이퍼 샌들 v3 테니스</h3>
                  <div className="price">
                      <h4>79,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01976F_325.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>레이플라이드 샌들</h3>
                  <div className="price">
                      <h4>75,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01976F_920.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>레이플라이드 샌들</h3>
                  <div className="price">
                      <h4>75,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01977F_001.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>레이플라이드 샌들</h3>
                  <div className="price">
                      <h4>75,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01977F_400.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 테이퍼 샌들 v3</h3>
                  <div className="price">
                      <h4>69,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01977F_013.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 테이퍼 샌들 v3</h3>
                  <div className="price">
                      <h4>69,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01976F_001.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>레이플라이드 샌들</h3>
                  <div className="price">
                      <h4>69,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01985F_650.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 쏭</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01985F_018.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 쏭</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01985F_925.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 쏭</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01985F_001.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 쏭</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM02573F_146.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 샌들</h3>
                  <div className="price">
                      <h4>59,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM02573F_001.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 샌들</h3>
                  <div className="price">
                      <h4>59,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1RM02617F_098.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 퀘이사</h3>
                  <div className="price">
                      <h4>119,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1RM02617F_009.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 퀘이사</h3>
                  <div className="price">
                      <h4>119,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01981F_800.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>슬릭텐더 v2 테니스</h3>
                  <div className="price">
                      <h4>59,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01981F_500.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>슬릭텐더 v2 테니스</h3>
                  <div className="price">
                      <h4>59,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01981F_400.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>슬릭텐더 v2 테니스</h3>
                  <div className="price">
                      <h4>59,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01983F_896.jpg" alt="" /></a>
                  <h5>휠라 NRE EASE 슬라이드</h5>
                  <h3>레이플라이드 샌들</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM02569F_100.jpg" alt="" /></a>
                  <h5>공용  라이프스타일</h5>
                  <h3>슬릭쏭 v2 테니스</h3>
                  <div className="price">
                      <h4>55,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01982F_800.jpg" alt="" /></a>
                  <h5>공용  라이프스타일</h5>
                  <h3>슬릭쏭 v2 테니스</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01982F_500.jpg" alt="" /></a>
                  <h5>공용  라이프스타일</h5>
                  <h3>슬릭쏭 v2 테니스</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li> */}

              {/* </ul> */}
              </div>           
            </div>
          </div>
          </div>
        </main>
        
    
  );
};