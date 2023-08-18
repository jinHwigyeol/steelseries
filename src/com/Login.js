import React from 'react'

function Login() {
    return (
        <section className='logins'>
            <div className='forms'>
                <form>
                <p className='loginTitle'>로그인</p>
                    <div className='id'>
                        <input type="text" className='idText' placeholder='아이디를 입력하세요'/>
                    </div>
                    <div className='pass'>
                        <input type="password" className='password' placeholder='비밀번호를 입력하세요'/>
                    </div>
                    <button className='loginBtn'>로그인</button>
                </form>
            </div>
        </section>
    )
}

export default Login