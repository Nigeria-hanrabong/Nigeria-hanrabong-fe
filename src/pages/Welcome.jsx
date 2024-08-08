import styles from '../styles/Welcome.module.css';
import teamLogo from '../assets/Team_logo.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backend, frontend } from '../constants/domain'


const Welcome = () => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState("");
    const [helperTextVisibility, setHelperTextVisibility] = useState('hidden');

    const moveToMap = async () => {

        if (!nickname || /\s/.test(nickname) || nickname.length >= 8) {
            setHelperTextVisibility('visible');
            return;
        }

        fetch(`${backend}/api/v1/users?nickname=${nickname}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status === 200) {
                localStorage.setItem('nickname', nickname);
                navigate('/map'); 
            }  
        })
        .catch(e => {
            console.log(e);
        })
    };

    const updateNicknameInput = (e) => {
        setNickname(e.target.value);
        setHelperTextVisibility('hidden');
    };

    return (
        <>
            <div className={styles.welcomeBody}>
                <div className={styles.nicknameForm}>
                    <div className={styles.logoContainer}>
                        <img src={teamLogo} alt="Team Logo" className={styles.teamLogo} />
                    </div>
                    <div className={styles.nicknameInputBox}>
                        <input 
                            id='nicknameInput' 
                            placeholder='닉네임을 입력해주세요.' 
                            className={styles.nicknameInput}
                            value={nickname}
                            onChange={updateNicknameInput}
                        />
                    </div>
                    <div className={styles.helperText} style={{visibility: helperTextVisibility}}>*유효하지 않은 닉네임입니다.</div>
                    <div>
                        <button className={styles.nicknameBtn} onClick={moveToMap}>입장하기</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
