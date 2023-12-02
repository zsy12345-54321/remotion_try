import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {ReasonAnimation} from './Why';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="Why"
				component={ReasonAnimation}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
