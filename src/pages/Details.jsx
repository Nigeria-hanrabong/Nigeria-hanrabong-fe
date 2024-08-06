import React, { useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/Details.module.css'
import fishingLob from '../assets/‘DALL·E 2024-08-05 23.06.32 - A detailed view of a fishing rod from a far perspective. The scene shows the entire fishing rod extending out over a serene lake, with lush greenery i 복사본 3_1’의 배경이 제거됨.png';
import questionIcon from '../assets/question.png'
import point from '../assets/‘낚시찌’의 배경이 제거됨.png'
import { useParams } from 'react-router-dom'; 
import FishSuccessModal from '../components/FishSuccessModal'; // FishSuccessModal 컴포넌트 임포트
const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const initX = windowWidth / 2.01;
    const initY = windowHeight - 336;
    const [position, setPosition] = useState({ x: initX, y: initY });
    const [line, setLine] = useState(null);
    const [isShaking, setIsShaking] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const timeoutRef = useRef(null);
    const shakeTimeoutRef = useRef(null);

    const exit = () => {
        navigate('/map');
    };

    const handleMouseDown = (event) => {
        const clickX = event.clientX;
        const clickY = event.clientY;

        setPosition({ x: clickX, y: clickY });
        setLine({ x1: initX, y1: initY, x2: clickX, y2: clickY });

        const randomDelay = Math.random() * (10000 - 5000) + 5000; // 5초에서 10초 사이의 랜덤 시간
        timeoutRef.current = setTimeout(() => {
            setIsShaking(true);
            shakeTimeoutRef.current = setTimeout(() => {
                if (isShaking) {
                    alert('실패했습니다.');
                    setIsShaking(false);
                }
            }, 3000); // 3초 동안 애니메이션 실행
        }, randomDelay);
    };

    const handleMouseUp = () => {
        clearTimeout(timeoutRef.current);
        clearTimeout(shakeTimeoutRef.current);

        if (isShaking) {
            setShowModal(true);
        }else {
            alert('실패했습니다.');
        }

        setIsShaking(false);
        setPosition({ x: initX, y: initY });
        setLine(null);
    };

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
            clearTimeout(shakeTimeoutRef.current);
        };
    }, []);

    return (
        <>
            <div className={`${styles.detailsBody} ${showModal ? styles.noClick : ''}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                <header className={styles.detailsHeader}>
                    <img className={styles.questionIcon} src={questionIcon} alt='' draggable={false}></img>
                    <div className={styles.text}>
                        마우스 클릭을 홀드하면 캐스팅할 수 있습니다!
                    </div>
                    <button className={styles.exitBtn} onClick={exit}>나가기</button>
                </header>

                {line && (
                    <svg className={styles.line} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <line
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="black"
                            strokeWidth="2"
                        />
                    </svg>
                )}

                <img src={point} alt="" className={`${styles.circle} ${isShaking ? styles.shaking : ''}`} id='circle' style={{
                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transition: 'transform 0.5s ease-in-out',
                }} />

                <img className={styles.fishingRod} src={fishingLob} alt="낚시대" />

                {showModal && <FishSuccessModal isOpen={showModal} name = {name} onClose={() => setShowModal(false)} />}
            </div>
        </>
    );
};

export default Details;