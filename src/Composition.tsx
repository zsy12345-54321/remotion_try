import { AbsoluteFill, useVideoConfig, useCurrentFrame, Sequence, interpolate, Img, staticFile} from "remotion";
 import { ReasonAnimation } from "./Why";
export const MyComposition = () => {
  const {fps, durationInFrames, width, height } = useVideoConfig();
	const frame = useCurrentFrame();
	const opacity = frame / durationInFrames *2;

  const movement = interpolate(frame, [0, 60], [0, width * 0.15], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });

	const imagePath = staticFile('Headshot.JPG');
	const imageHeight = height / 2; // Set the image height
	
  return (
    <AbsoluteFill style={{ backgroundColor: "white"}}>
				<Img src={imagePath} style={{ 
					width: 'auto', 
					height: imageHeight, 
					position: 'absolute', 
					top: '35%', 
					left: '50%',
					transform: 'translate(-50%, -50%)',
					borderRadius: '35px',
					opacity
					}} />
			
				<AbsoluteFill style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 60,
					bottom: '40%',
					transform: `translateY(${movement}px)`, // Apply movement
					opacity}}>
						Siyuan Zhai
				</AbsoluteFill>
				<Sequence from={40}>
					<ReasonAnimation/>
				</Sequence>
				
		</AbsoluteFill>
  );
};
