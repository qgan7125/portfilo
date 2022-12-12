import React, { FC, useEffect, useState } from 'react';

interface IAutoTextEffect {
  messages: string[];
  speed?: number;
}

const AutoTextEffect: FC<IAutoTextEffect> = ({ messages, speed = 4 }) => {
  const [message, setMessage] = useState(' ');

  useEffect(() => {
    var idx = 1,
      dirc = 1,
      textIdx = 0,
      currText = messages[textIdx];

    if (!messages.length) return;

    const interval = setInterval(() => {
      // If a loop is finished or just begin
      if (idx === 0) {
        dirc = 1;
        textIdx = (textIdx + 1) % messages.length;
        currText = messages[textIdx];
      }

      // If a text is displayed, reverse effect
      if (idx > currText.length) {
        dirc = -1;
      }

      setMessage(currText.slice(0, idx));

      idx += dirc;
    }, 300 / speed);

    return () => clearInterval(interval);
  }, [messages, speed]);

  return <span>&nbsp;{message}</span>;
};

export default AutoTextEffect;
