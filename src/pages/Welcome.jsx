import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Welcome.module.css';
import teamLogo from '../assets/Team_logo.png'; // 이미지 불러오기


const Welcome = () => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState("");
    const [helperTextVisibility, setHelperTextVisibility] = useState('hidden');

    const moveToMap = async () => {
        if (!nickname || /\s/.test(nickname) || nickname.length >= 8) {
            setHelperTextVisibility('visible');
            return;
        }

        try {
            const response = await fetch(`https://19f1-123-214-153-130.ngrok-free.app//api/v1/users?nickname=${nickname}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);

            navigate('/map');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
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
