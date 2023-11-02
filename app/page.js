"use client"; // この行を追加する

import { useState, useEffect } from 'react';
import Result from "@/components/result";

export default function Home() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0); // スコアを管理するステート
  const [logo, setLogo] = useState(null); // ロゴを管理するステート

  const startGame = () => {
    setIsGameStarted(true);
  };

  const returnToHome = () => {
    setIsGameStarted(false);
  };

  // スコアを設定する関数（仮の値を使用）
  const setDummyScore = (scoreValue) => {
    setScore(scoreValue);
  };

  // 時間に応じてロゴを設定する
  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
      // 朝（AM 6:00 - 11:00）
      setLogo('太陽のロゴ');
    } else if (currentTime >= 12 && currentTime < 17) {
      // 昼（PM 12:00 - 16:00）
      setLogo('テキトーなロゴ');
    } else {
      // 夜（PM 17:00 - AM 5:00）
      setLogo('月のロゴ');
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
        {/* スコアを表示 */}
        <div className="absolute top-4 right-4 text-lg font-bold text-green-700">
          スコア: {score}点
        </div>

        {/* ロゴを表示 */}
        <div className="absolute top-4 left-4 text-lg font-bold text-green-700">
          {logo}
        </div>

        <button className="text-4xl font-bold mb-6 text-green-700 hover:underline cursor-pointer" onClick={returnToHome}>
          C#問題集へようこそ
        </button>

        {!isGameStarted && (
          <button
            className="text-lg text-green-500 hover:text-green-700 cursor-pointer bg-blue-400 p-2 rounded text-white"
            onClick={() => {
              startGame();
              // スコアを仮の値で設定（60点）
              setDummyScore(60);
            }}
          >
            プレイを始める
          </button>
        )}
      </div>
      {isGameStarted && <Result />}
    </>
  );
}
