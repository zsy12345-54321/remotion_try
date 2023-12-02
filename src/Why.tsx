import {useCurrentFrame, useVideoConfig,interpolate} from 'remotion';
import React from 'react';
import { FONT_FAMILY} from './constants';

export const ReasonAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames, height} = useVideoConfig();
  const opacity  = frame / durationInFrames;

  const movement = interpolate(frame, [0, 60], [0, -height * 0.1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });
  return (
    <div style={{
      fontFamily: FONT_FAMILY,
      fontSize: 30,
      textAlign: 'center',
      position: 'absolute',
      bottom: '1%',
      left: '50%',
      transform: `translateX(-50%) translateY(${movement}px)`,
      width: '75%',
      margin: '0 auto',
      opacity,

      }}>
        I am interested in joining Ochy, aligning my web development skills and 
        AI interests with the innovative Running Form & Gait Analysis project.
        My background and interests drive me to create solutions that positively impact people's lives, 
        and Ochy is a great opportunity to do so.
    </div>
  );
};