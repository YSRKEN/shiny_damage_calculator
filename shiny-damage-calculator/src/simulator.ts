import { AppealTarget, IAppState } from "./state";

type AppealRank = 'perfect' | 'good' | 'normal' | 'bad';

// アピール判定による補正
const APPEAL_RANK_BUF: { [key: string]: number; } = {
	// tslint:disable-next-line: object-literal-sort-keys
	'perfect': 1.5, 'good': 1.1, 'normal': 1.0, 'bad': 0.5
}

// 思い出アピールの倍率
const MEMORIAL_MULTIPLE = [0.8, 1, 1.2, 1.4, 2];

// 通常ダメージを計算する
export const calcNormalDamage = (
		state: IAppState,
		idolIndex: number,
		cardType: AppealTarget,
		appealRank: AppealRank,
		multiple: number = state.cardMultiple / 10.0,
		appealTarget: AppealTarget = state.appealTarget) => {
	const p = state.pIdolStatus[cardType];
	const s = state.sIdolStatus.map(status => status[cardType])
		.reduce((previous, current) => previous + current);
	const w = state.auditionWeek;
	const buff1 = 1.0 * (100 + state.buffValue[cardType]) / 100;
	const buff2 = APPEAL_RANK_BUF[appealRank];
	const buff3 = multiple;
	const buff4 = (appealTarget === cardType ? 2 : 1);
	if (idolIndex === 0) {
		// pアイドルのアピール値
		const basicPower = (p * 2 + s * 0.2 * (1 + 0.1 * w));
		return Math.floor(Math.floor(basicPower * buff1 * buff2) * buff3) * buff4;
	} else {
		// sアイドルのアピール値
		const is = state.sIdolStatus[idolIndex - 1][cardType];
		const basicPower = (p * 0.5 + (s + 3 * is) * 0.2 * (1 + 0.1 * w));
		return Math.floor(Math.floor(basicPower * buff1 * buff2) * buff3) * buff4;
	}
}

// 思い出ダメージを計算する
export const calcMemorialDamage = (state: IAppState, appealFlg: boolean) => {
	const multiple = MEMORIAL_MULTIPLE[state.memorialOption];
	const appealRank: AppealRank = appealFlg ? 'perfect' : 'bad';
	const damage = {
		'vo': calcNormalDamage(state, 0, 'vo', appealRank, multiple, 'other'),
// tslint:disable-next-line: object-literal-sort-keys
		'da': calcNormalDamage(state, 0, 'da', appealRank, multiple, 'other'),
		'vi': calcNormalDamage(state, 0, 'vi', appealRank, multiple, 'other'),
	}
	const vo = damage.vo * 2 + damage.da + damage.vi;
	const da = damage.vo + damage.da * 2 + damage.vi;
	const vi = damage.vo + damage.da + damage.vi * 2;
	return [vo, da, vi];
}
