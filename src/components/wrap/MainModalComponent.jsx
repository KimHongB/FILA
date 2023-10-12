import React from 'react';

export default  function MainModalComponent ({mainModalClose})  {
    const onClickMainModalClose=(e)=>{
        e.preventDefault();
        mainModalClose('yes', 1)
    }
    return (
        <div id='mainmodal'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <ul>
                            <li >
                                <a href="!#"><img src="./img/HSM/model/KakaoTalk_20230608_215607571.jpg" alt="" />
                                <div>
                                        <a href="!#"><img src="./img/HSM/model/icn-close-01-1.png" alt="" onClick={onClickMainModalClose}/></a>
                                </div>
                                </a>
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

