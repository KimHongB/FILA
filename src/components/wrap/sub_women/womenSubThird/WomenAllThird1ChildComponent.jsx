import React from 'react';

export default function WomenAllThird1ChildComponent  ({전체보기})  {

    const commaPrice=(price)=>{
      let value = price.toString();
      const regExp = /(^\d+)(\d{3})/g
      while(regExp.test(value)){
        return value.replace(regExp, '$1, $2');
      }
    }

  return (
    <ul>
        {
          전체보기.map((item)=>{
            return(
              <li key={item.전체보기}>
                <a href="!#">
                  <div className="img-box">
                    <div className="parents-img">
                      <img src={`./img/HSM/women_backpack/${item.이미지}`} alt="" /> 
                    </div>
                    <div className="baby-img">
                    <img src={`./img/HSM/women_backpack/${item.이미지2}`} alt="" />
                    </div>
                  </div>
                  <div className="txt-box">
                    <ul>
                      <li>
                        <h5>{item.성별설명}</h5>
                        <h4>{item.상품명}</h4>
                        <div>
                          <h3>{item.정가}원</h3><img src="./img/HSM/women_backpack/ico_wish_off_18x16.png" alt="" />
                        </div>
                        <h2>{item.할인율}% 할인</h2>
                      </li>
                    </ul>
                    <button>{item.장바구니}</button>
                  </div>
                </a>
              </li>
            )
          })
        }
    </ul>
  );
};
