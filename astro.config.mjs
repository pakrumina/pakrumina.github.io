// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Avenir',
			cssVariable: '--font-avenir-display',
			options: {
				variants: [
					{
						weight: 100,
						style: 'normal',
						src: ['./src/assets/fonts/avenir/Avenir Light.ttf'],
					},
					{
						weight: 300,
						style: 'normal',
						src: ['./src/assets/fonts/avenir/Avenir Light.ttf'],
					},
					{
						weight: 400,
						style: 'normal',
						src: ['./src/assets/fonts/avenir/Avenir Regular.ttf'],
					},
					{
						weight: 500,
						style: 'normal',
						src: ['./src/assets/fonts/avenir/Avenir Regular.ttf'],
					},
					{
						weight: 700,
						style: 'normal',
						src: ['./src/assets/fonts/avenir/Avenir Heavy.ttf'],
					},
					{
						weight: 800,
						style: 'normal',
						src: ['./src/assets/fonts/avenir/Avenir Heavy.ttf'],
					},
					{
						weight: 900,
						style: 'normal',
						src: ['./src/assets/fonts/avenir/Avenir Heavy.ttf'],
					},
				],
			},
		},
	],
});
