import React from 'react';
import axios from 'axios'
import Tennis2FirstComponent from './Tennis2FirstComponent'

export default  function Tennis2Component () {

    const [state, setState] = React.useState({
        전체:[],
        의류:[],
        신발:[],
        용품:[]
    })

    const getProduct=()=>{
        axios({
            url:'./data/tennis_second.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    전체:res.data.전체,
                    의류:res.data.의류,
                    신발:res.data.신발,
                    용품:res.data.용품
                })
            }
        })
        .catch((err)=>{
            console.log('AXIOS 오류' + err)
        })
    }
    React.useEffect(()=>{
        getProduct();
    },[])

    return (
        <section id='section3'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>새로운 상품</h1>
                        <nav>
                            <ul>
                                <li><a className='nav1' href="!#">전체</a></li>
                                <li><a className='nav2' href="!#">의류</a></li>
                                <li><a className='nav3' href="!#">신발</a></li>
                                <li><a className='nav4' href="!#">용품</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="content">
                        <div className='com1 on'><Tennis2FirstComponent 전체={state.전체}/></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

