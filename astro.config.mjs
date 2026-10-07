// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Montserrat',
			cssVariable: '--font-montserrat-display',
			options: {
				variants: [
					{
						weight: 100,
						style: 'normal',
						src: ['./src/assets/fonts/montserrat/Montserrat-Thin.ttf'],
					},
					{
						weight: 300,
						style: 'normal',
						src: ['./src/assets/fonts/montserrat/Montserrat-Light.ttf'],
					},
					{
						weight: 400,
						style: 'normal',
						src: ['./src/assets/fonts/montserrat/Montserrat-Regular.ttf'],
					},
					{
						weight: 500,
						style: 'normal',
						src: ['./src/assets/fonts/montserrat/Montserrat-Medium.ttf'],
					},
					{
						weight: 700,
						style: 'normal',
						src: ['./src/assets/fonts/montserrat/Montserrat-Bold.ttf'],
					},
					{
						weight: 800,
						style: 'normal',
						src: ['./src/assets/fonts/montserrat/Montserrat-ExtraBold.ttf'],
					},
					{
						weight: 900,
						style: 'normal',
						src: ['./src/assets/fonts/montserrat/Montserrat-Black.ttf'],
					},
				],
			},
		},
	],
});
