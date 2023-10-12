import React from "react";

export default function WomenSubThird1ChildComponent({value, idx}) {
    const commaPrice = (price) => {
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while (regExp.test(value)) {
            return value.replace(regExp, "$1, $2");
        }
    };
    const [cnt, setCnt] = React.useState(0);

    const onClickNext = (e) => {
        e.preventDefault();
        if (cnt < 2) {
            setCnt(cnt + 1);
        }
    };
    const onClickPrev = (e) => {
        e.preventDefault();
        if (cnt > 0) {
            setCnt(cnt - 1);
        }
        console.log(cnt);
    };
    return (
        <li key={value.제품코드}>
            <div className="img-box">
                <div className="main-img-box">
                    <img src={`./img/CYS/women_backpack/${value.기본이미지}`} alt="" />
                </div>
                <div className="slide-container">
                    <div className="slide-view">
                        <ul className="slide-wrap" style={{left: `${-(100 * cnt)}%`, transition: "all 0.3s"}}>
                            <li className="slide slide1">
                                <a href="!#">
                                    <img src={`./img/CYS/women_backpack/${value.슬라이드이미지1}`} alt="" />
                                </a>
                            </li>
                            <li className="slide slide2">
                                <a href="!#">
                                    <img src={`./img/CYS/women_backpack/${value.슬라이드이미지2}`} alt="" />
                                </a>
                            </li>
                            <li className="slide slide3">
                                <a href="!#">
                                    <img src={`./img/CYS/women_backpack/${value.슬라이드이미지3}`} alt="" />
                                </a>
                            </li>
                        </ul>
                        <div className="page-nation-box">
                            <div className="page-bar-box">
                                <div className="static-bar">
                                    <div
                                        className="dynamic-bar"
                                        style={{
                                            left: `${(100 / 3) * cnt}%`,
                                            transition: "all 0.3s",
                                        }}></div>
                                </div>
                            </div>
                            <div className="arrow-box">
                                <button onClick={onClickPrev} className="left-arrow"></button>
                                <button onClick={onClickNext} className="right-arrow"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title-box">
                <ul>
                    <li>
                        <p>{value.착용성별}</p>
                    </li>
                    <li>
                        <em>{value.제품명}</em>
                    </li>
                    <li>
                        <span>{`${commaPrice(Math.round(value.정가 * (1 - value.할인률)))}원`}</span>
                    </li>
                    <li className="favorite-product">
                        <img src="./img/CYS/women_backpack/fila_women_backpack_img031.png" alt="" />
                    </li>
                </ul>
            </div>
        </li>
    );
}
