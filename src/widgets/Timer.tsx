import React, { useState, useEffect } from 'react';


const Timer: React.FC = () => {
    const initialWorkTime = 1500; // 25 minutes
    const initialBreakTime = 300; // 5 minutes

    const [time, setTime] = useState(initialWorkTime);
    const [isRunning, setIsRunning] = useState(false);
    const [cyclesCompleted, setCyclesCompleted] = useState(0);
    const [isWorkPhase, setIsWorkPhase] = useState(true); 
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    useEffect(() => {
        let timerInterval: NodeJS.Timeout;

        if (isRunning) {
            timerInterval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 0) {
                        if (isWorkPhase) {
                            setTime(initialBreakTime);
                            setIsWorkPhase(false);
                        } else {
                            setTime(initialWorkTime);
                            setIsWorkPhase(true);
                            setCyclesCompleted(prevCycles => prevCycles + 1);
                        }
                      
                    } 
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timerInterval);
    }, [isRunning, isWorkPhase, cyclesCompleted]);

    // once cycles have been completed, stop the timer
    useEffect(() => {
        if (cyclesCompleted === 8) {
            setIsRunning(false);
        }
    }, [cyclesCompleted]);

   
    const toggleTimer = () => {
        if (!isRunning) {
            
            setIsRunning(true);
        } else {
            // music.pause();
            setIsRunning(false);
        }
    };

    // Once user presses to restart, set everything to the default
    const resetTimer = () => {
        setTime(initialWorkTime);
        setIsRunning(false);
        setCyclesCompleted(0);
        setIsWorkPhase(true);
        setCurrentSongIndex(0);
      
    };

    return (
        <div className="timer">
            <div className="time">
                {formatTime(time)}
            </div>
            <div className="controls">
                <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            
        </div>
    );
};

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default Timer;