import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <section className='header'>
            <div className='gnb'>
                <h1 className='logo'>
                    <Link to="/">
                        <img src='./img/steelseries.svg' />
                    </Link>
                </h1>
                <ul className='nav'>
                    <Link to="/Headset"><li>헤드셋</li></Link>
                    <Link to="/Mouse"><li>마우스</li></Link>
                    <Link to="/Keyboard"><li>키보드</li></Link>
                    <Link to="/Speaker"><li>스피커</li></Link>
                    <Link to="/Pad"><li>마우스패드</li></Link>
                </ul>
                <ul className='login'>
                    <Link to="/"><li>회원가입</li></Link>
                    <Link to="/Login"><li>로그인</li></Link>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </div>
        </section>
    )
}

export default Header