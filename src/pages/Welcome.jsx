import { useState } from 'react';
import styles from '../styles/Welcome.module.css'
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
    const navigate = useNavigate();

    const [nickname, setNickname] = useState("");
    const [helperTextVisibility, sethelperTextVisibility] = useState('hidden')

    const moveToMap = () => {
        setNickname("");

        if (!nickname || /\s/.test(nickname)) {
            sethelperTextVisibility('visible')
            return;
        }

        if (nickname.length >= 8) {
            sethelperTextVisibility('visible')
            return;
        }


        navigate('/map');
    }

    const updateNicknameInput = (e) => {
        setNickname(e.target.value);
    }

    return (
    <>
        <div className={styles.welcomeBody}>
            <div className={styles.nicknameForm}>

                <div className={styles.nicknameInputBox}>
                    <input 
                    id='nicknameInput' 
                    placeholder='닉네임을 입력해주세요.' 
                    className={styles.nicknameInput}
                    value={nickname}
                    onChange={updateNicknameInput}
                    ></input>
                </div>
                <div className={styles.helperText} style={{visibility: helperTextVisibility}}>*유효하지 않은 닉네임입니다.</div>

                <div>
                    <button className={styles.nicknameBtn} onClick={moveToMap}>입장하기</button>
                </div>
            </div>
            
        </div>
    </>
    );
    
}

export default Welcome;

