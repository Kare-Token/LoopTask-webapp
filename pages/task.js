
import { useEffect, useState } from 'react';

export default function Task() {
  const [seconds, setSeconds] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}h ${m}m ${sec}s`;
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>📺 Watch the Video to Earn</h1>
      <p>Task: Watch this video and stay for 1 hour to earn your daily reward.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Task Video" allowFullScreen></iframe>
      <h2>⏱ Countdown: {formatTime(seconds)}</h2>
      {seconds === 0 && <button onClick={() => alert('✅ Task Complete. You earned $X!')}>Claim Reward</button>}
    </div>
  );
}
