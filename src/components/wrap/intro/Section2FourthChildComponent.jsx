import React from 'react';
import $ from 'jquery'
import 'jquery.easing';

export default function Section2FourthChildComponent  ({타르가})  {

    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while(regExp.test(value)){
            return value.replace(regExp, '$1, $2');
        }
    }

    const onClicklink=(e)=>{
        e.stopPropagation();
        // window.location.pathname= '/main1';
    }

    React.useEffect(()=>{
        const slideCount=$('.wrap4 .slide').length;
        const slideWrap=$('#section2 .wrap4');
        const slideWidth=365;//345+양쪽 마진 각각 10px
        //전달받은 값이 배열길이에서 2를 뺸 값이므로 다시 더해줌
        //전체 ul너비
        let ulWidth = slideCount * slideWidth;
        let mouseDown = false; // 마우드 다운하면 true 아니면 false
        let dragStart = 0;
        let dragEnd = 0;
        let dragStart2 = 0;
        let dragEnd2 = 0;
        let delX=0;
        slideWrap.css('width', ulWidth);
        slideWrap.on({
            mousedown(e){
                // winWidth =  $(window).innerWidth();
                mouseDown=true; //마우스 다운 알림
                dragStart = e.clientX-slideWrap.offset().left;
                dragStart2=e.clientX;
            },
            mousemove(e){  //마우스 방향에 따라다닌다.
                if(mouseDown===false) return;
                // 마우스가 다운되면 그 때 부터 따라다녀라
                // 마우스다운할 때 변수에 다운상태를 저장한다.
                // 만약 마우스 다운상태가 아니면 마우스 무브는 취소해라
                dragEnd=e.clientX;  
                dragEnd2=e.clientX;
                delX=dragEnd2-dragStart2;
                slideWrap.stop().css({left:dragEnd-dragStart});
            },
            mouseup(e){
                mouseDown=false;
                dragEnd=e.clientX;   
                    slideWrap.stop().animate({left: `${dragEnd-dragStart+1.5*delX}px`}, 500, 'easeOutExpo');
                if(slideWrap.position().left>0){
                    $(this).stop().animate({left: 0},100);
                }
                if(slideWrap.position().left<($(window).innerWidth()-ulWidth)){
                    $(this).stop().animate({left: $(window).innerWidth()-ulWidth},100);
                }
            }
            
        });  
        
   
    },[타르가])
    return (
        <div draggable="false" className="slide-container">
            <div draggable="false" className="slide-view">                    
                <ul draggable="false" className='slide-wrap wrap4'>
                {
                    타르가.map((item)=>{
                        return(
                            <li draggable="false" onClick={onClicklink} className='slide' key={item.원피스반팔티}>
                                
                                <div className="img-box">
                                        <img draggable="false" src={`./img/HSM/intro/${item.이미지}`} alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <ul>
                                            <li>
                                                <h4>{item.성별설명}</h4>
                                                <h5>{item.상품명}</h5>
                                                <div>
                                                <h3>{item.정가}원</h3><img src="./img/HSM/intro/ico_wish_off_18x16.png" alt="" />
                                                </div>
                                                <h2>{item.할인율}% 할인</h2>
                                            </li>
                                        </ul>
                                    </div>
                            </li>
                        )
                    })
                } 
                </ul>
            </div>
        </div>

    );
};

