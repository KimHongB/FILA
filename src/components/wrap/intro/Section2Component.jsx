import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import Section2FirstChildComponent from './Section2FirstChildComponent'
import Section2ThirdChildComponent from './Section2ThirdChildComponent'
import Section2FifthChildComponent from './Section2FifthChildComponent'
import Section2SixthChildComponent from './Section2SixthChildComponent'
import Section2SeventhChildComponent from './Section2SeventhChildComponent'
import Section2SecondChildComponent from './Section2SecondChildComponent'
import Section2FourthChildComponent from './Section2FourthChildComponent'
export default function Section2Component () {

    const [state, setState]= React.useState({
        원피스반팔티:[],
        온라인단독:[],
        TENIS:[],
        RUNNING:[],
        썸머슈즈:[],
        레이플라이드:[],
        타르가:[],
        n1:0,
        n2:0,
        n3:0,
        n4:0,
        n5:0,
        n6:0,
        n7:0,
    });

    const  getProduct=()=>{
        axios({
            url:'./data/section2.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                   
                setState({
                    ...state,
                    원피스반팔티: res.data.원피스반팔티,
                    온라인단독: res.data.온라인단독,
                    TENIS: res.data.TENIS,
                    RUNNING: res.data.RUNNING,
                    썸머슈즈: res.data.썸머슈즈,
                    레이플라이드: res.data.레이플라이드,
                    타르가: res.data.타르가,
                    n1: res.data.원피스반팔티.length - 2,
                    n2: res.data.온라인단독.length - 2,
                    n3: res.data.TENIS.length - 2,
                    n4: res.data.RUNNING.length - 2,
                    n5: res.data.썸머슈즈.length - 2,
                    n6: res.data.레이플라이드.length - 2,
                    n7: res.data.타르가.length - 2,
                })
                    
            }
             
        })
        .catch((err)=>{
            console.log("AXIOS  오류" + err);
        })
    }
    React.useEffect(()=>{
        getProduct();
    },[])
    React.useEffect(()=>{
       
        const $hash1 = $('.hash1');
        const $hash2 = $('.hash2');
        const $hash3 = $('.hash3');
        const $hash4 = $('.hash4');
        const $hash5 = $('.hash5');
        const $hash6 = $('.hash6');
        const $hash7 = $('.hash7');
        const $comp1 = $('.comp1');
        const $comp2 = $('.comp2');
        const $comp3 = $('.comp3');
        const $comp4 = $('.comp4');
        const $comp5 = $('.comp5');
        const $comp6 = $('.comp6');
        const $comp7 = $('.comp7');
        $comp1.fadeIn().addClass('on');
        $comp2.fadeOut(0).removeClass('on');
        $comp3.fadeOut(0).removeClass('on');
        $comp4.fadeOut(0).removeClass('on');
        $comp5.fadeOut(0).removeClass('on');
        $comp6.fadeOut(0).removeClass('on');
        $comp7.fadeOut(0).removeClass('on');
        $hash1.on({
            click(e){
                e.preventDefault()
                $comp1.fadeIn().addClass('on');
                $comp2.fadeOut(0).removeClass('on');
                $comp3.fadeOut(0).removeClass('on');
                $comp4.fadeOut(0).removeClass('on');
                $comp5.fadeOut(0).removeClass('on');
                $comp6.fadeOut(0).removeClass('on');
                $comp7.fadeOut(0).removeClass('on');
            }
        })
        $hash2.on({
            click(e){
                e.preventDefault()
                $comp1.fadeOut(0).removeClass('on');
                $comp2.fadeIn().addClass('on');
                $comp3.fadeOut(0).removeClass('on');
                $comp4.fadeOut(0).removeClass('on');
                $comp5.fadeOut(0).removeClass('on');
                $comp6.fadeOut(0).removeClass('on');
                $comp7.fadeOut(0).removeClass('on');
              
            }
        })
        $hash3.on({
            click(e){
                e.preventDefault()
                $comp1.fadeOut(0).removeClass('on');
                $comp2.fadeOut(0).removeClass('on');
                $comp3.fadeIn().addClass('on');
                $comp4.fadeOut(0).removeClass('on');
                $comp5.fadeOut(0).removeClass('on');
                $comp6.fadeOut(0).removeClass('on');
                $comp7.fadeOut(0).removeClass('on');
               

            }
        })
        $hash4.on({
            click(e){
                e.preventDefault()
                $comp1.fadeOut(0).removeClass('on');
                $comp2.fadeOut(0).removeClass('on');
                $comp3.fadeOut(0).removeClass('on');
                $comp4.fadeIn().addClass('on');
                $comp5.fadeOut(0).removeClass('on');
                $comp6.fadeOut(0).removeClass('on');
                $comp7.fadeOut(0).removeClass('on');
             

            }
        })
        $hash5.on({
            click(e){
                e.preventDefault()
                $comp1.fadeOut(0).removeClass('on');
                $comp2.fadeOut(0).removeClass('on');
                $comp3.fadeOut(0).removeClass('on');
                $comp4.fadeOut(0).removeClass('on');
                $comp5.fadeIn().addClass('on');
                $comp6.fadeOut(0).removeClass('on');
                $comp7.fadeOut(0).removeClass('on');
           
            }
        })
        $hash6.on({
            click(e){
                e.preventDefault()
                $comp1.fadeOut(0).removeClass('on');
                $comp2.fadeOut(0).removeClass('on');
                $comp3.fadeOut(0).removeClass('on');
                $comp4.fadeOut(0).removeClass('on');
                $comp5.fadeOut(0).removeClass('on');
                $comp6.fadeIn().addClass('on');
                $comp7.fadeOut(0).removeClass('on');
             
            }
        })
        $hash7.on({
            click(e){
                e.preventDefault()
                $comp1.fadeOut(0).removeClass('on');
                $comp2.fadeOut(0).removeClass('on');
                $comp3.fadeOut(0).removeClass('on');
                $comp4.fadeOut(0).removeClass('on');
                $comp5.fadeOut(0).removeClass('on');
                $comp6.fadeOut(0).removeClass('on');
                $comp7.fadeIn().addClass('on');
            }
        })
    },[]);

    

    return (
            <section id='section2'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>지금 많이 찾는 상품</h2>
                            <nav>
                                <ul>
                                    <li><a className='hash1' href="!#"># 원피스/반팔티</a></li>
                                    <li><a className='hash2' href="!#"># 레이플라이드</a></li>
                                    <li><a className='hash3' href="!#"># 온라인 단독</a></li>
                                    <li><a className='hash4' href="!#"># 타르가</a></li>
                                    <li><a className='hash5' href="!#"># TENNIS</a></li>
                                    <li><a className='hash6' href="!#"># RUNNING</a></li>
                                    <li><a className='hash7' href="!#"># 썸머슈즈</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="content">
                            <div className='comp1 on'><Section2FirstChildComponent  원피스반팔티={state.원피스반팔티}/> </div>
                            <div className='comp2'><Section2SecondChildComponent 레이플라이드={state.레이플라이드} />  </div>
                            <div className='comp3'><Section2ThirdChildComponent  온라인단독={state.온라인단독} />  </div>
                            <div className='comp4'><Section2FourthChildComponent  타르가={state.타르가} />   </div>
                            <div className='comp5'><Section2FifthChildComponent  TENIS={state.TENIS} /> </div>
                            <div className='comp6'><Section2SixthChildComponent  RUNNING={state.RUNNING} />  </div>
                            <div className='comp7'><Section2SeventhChildComponent  썸머슈즈={state.썸머슈즈} />  </div>
                        </div>
                    </div>
                </div>
            </section>
       
    );
};

