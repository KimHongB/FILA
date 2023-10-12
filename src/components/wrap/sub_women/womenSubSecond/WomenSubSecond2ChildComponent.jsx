import React from 'react';

export default function WomenSubSecond2ChildComponent  ({item})  {

    const commaPrice=(price)=>{
      let value = price.toString();
      const regExp = /(^\d+)(\d{3})/g
      while(regExp.test(value)){
        return value.replace(regExp, '$1, $2');
      }
    }
    const [cnt, setCnt] = React.useState(0)

    const onClickNext=(e)=>{
      e.preventDefault();
      if(cnt < 2){
        setCnt(cnt+1)
      }
    }
    const onClickPrev=(e)=>{
      e.preventDefault();
      if(cnt > 0){
        setCnt(cnt-1);
      }
    }

  return (
    <>
  
            <li key={item.제품코드}>
              <a href="!#">
                <div className="parents-img">
                  <img src={`./img/HSM/women_all/${item.이미지}`} alt="" />
                </div>
                <div className="slide-container">
                  <div className="slide-view">
                    <ul className="slide-wrap"
                    style={{
                      left: `${- 100 * cnt}%`,
                      transition: "all 0.3s"
                    }}>

                      <li className="slide slide1">
                        <img src={`./img/HSM/women_all/${item.이미지2}`} alt="" />
                      </li>
                      <li className='slide slide2'>
                        <img src={`./img/HSM/women_all/${item.이미지3}`} alt="" />
                      </li>
                      <li className='slide slide3'>
                        <img src={`./img/HSM/women_all/${item.이미지4}`} alt="" />
                      </li>

                    </ul>
                  </div>
                  <div className="page-nation-box">
                    <div className="page-bar-box">
                      <div className="static-bar">
                        <div className="dynamic-bar" 
                          style={{
                            left: `${(100 / 3) * cnt}%`,
                            transition: "all 0.3s"
                          }}>
                        </div>
                      </div>
                    </div>
                    <div className="arrow-box">
                      <button onClick={onClickPrev} className="prev-btn"></button>
                      <button onClick={onClickNext} className="next-btns"></button>
                    </div>
                  </div>
                </div>
                <div className="txt-box">
                  <ul>
                    <li>
                      <h5>{item.성별설명}</h5>
                      <h4>{item.상품명}</h4>
                      <div>
                        <h3>{item.정가}원</h3><img src="./img/HSM/women_all/ico_wish_off_18x16.png" alt="" />
                      </div>
                      <h2>{item.할인율}% 할인</h2>
                    </li>
                  </ul>
                  <button>{item.장바구니}</button>
                </div>

              </a>
            </li>
    </>
  );
};
