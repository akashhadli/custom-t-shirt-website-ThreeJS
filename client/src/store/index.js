import { proxy } from 'valtio';

const state = proxy({
	intro: true,
	color: '#225477',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './logoo.png',
	fullDecal: './logoo.png',
});

export default state;
