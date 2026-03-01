interface ArtistData {
	name: string;
	url?: string;
	image?: string;
}

interface CharacterData {
	name: string;
	about: string;
	gender: string;
	age: number;
	birthday: string;
	height: string;
	weight: string;
	personalities: string[];
	hobbies: string[];
	fanName: string;
	artist: ArtistData;
	l2dArtist: ArtistData;
}

export interface ContentData {
	hero: {
		greeting: string;
		subtitle: string;
	};
	about: {
		title: string;
	};
	footer: {
		authorName: string;
		authorUrl: string;
	};
}

interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export const content: ContentData = {
	hero: {
		greeting: '歡迎來到魔界預言小鋪',
		subtitle: '到此即是機緣巧合，畢竟...... 平時可不隨意對外開放的'
	},
	about: {
		title: '先知的淵源'
	},
	footer: {
		authorName: '謝孟哲',
		authorUrl: 'https://www.hsieh-dev.us.ci/'
	}
};

export const character: CharacterData = {
	name: '水水',
	about:
		'歡迎各位光臨，在這裡可以稱在下為先知，也可以稱呼我為水水，雖自稱先知不過預言有時不準就是了，如何？今日想看看自己那模糊的未來嗎？',
	gender: '男',
	age: 22,
	birthday: '5 月 28 日',
	height: '175 cm',
	weight: '60 kg',
	personalities: ['捉摸不定', '搞笑'],
	hobbies: ['音樂', '遊戲', '繪圖', '預言'],
	fanName: '客人',
	artist: { name: '語笙ゆり', url: 'https://www.twitch.tv/yusheng0116/', image: 'artist' },
	l2dArtist: { name: '格林諾辰', image: 'l2d-artist' }
};

export const socialLinks: SocialLink[] = [
	{
		name: 'Twitch',
		url: 'https://www.twitch.tv/suisui_0528',
		icon: 'twitch'
	},
	{
		name: 'YouTube',
		url: 'https://www.youtube.com/channel/UC2DtaRTn3egC3h67zrBemCA',
		icon: 'youtube'
	},
	{
		name: 'X',
		url: 'https://x.com/SuiSui_0528',
		icon: 'x'
	},
	{
		name: 'Discord',
		url: 'https://discord.com/invite/h33hGahvhJ',
		icon: 'discord'
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/suisui_0528/',
		icon: 'instagram'
	},
	{
		name: 'Shopee',
		url: 'https://shopee.tw/suisui_0528',
		icon: 'shopee'
	}
];
