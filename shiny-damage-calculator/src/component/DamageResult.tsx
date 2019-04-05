import * as React from 'react';
import { FormControl } from 'react-bootstrap';
import { calcMemorialDamage, calcNormalDamage } from 'src/simulator';
import { AppealTarget } from 'src/state';
import { idolWord, isPC, range } from 'src/utility';
import { AppContext } from './App';

const perfectLabel = () => isPC() ? 'PERFECT' : 'P';
const goodLabel = () => isPC() ? 'GOOD' : 'G';

const DamageResult: React.FC = () => {
	const context = React.useContext(AppContext);

	const onChange = (event: React.FormEvent<any>) => {
		if (event.currentTarget.value !== undefined) {
			context.dispatch({'type': 'CARD', 'value': event.currentTarget.value});
		}
	};

	const memorialDamageGood = calcMemorialDamage(context.state, true);
	const memorialDamageBad = calcMemorialDamage(context.state, false);
	const normalDamage = range(5).map(index => {
		return ['vo', 'da', 'vi'].map(type => {
			const type2 = type as AppealTarget;
			return [
				calcNormalDamage(context.state, index, type2, context.state.cardMultiple / 10.0, 'perfect'),
				calcNormalDamage(context.state, index, type2, context.state.cardMultiple / 10.0, 'good')
			]
		});
	});

	return (<div className='p-3'>
		<div className='d-flex'>
			<strong className='text-nowrap mt-2'>通常アピール</strong>
			<FormControl className='m-1' as='select' defaultValue={'' + context.state.cardMultiple} onChange={onChange}>
			{
				range(41).map(i => {
					const val = i + 10;
					const text = `${val / 10}倍`
					return (<option key={i} value={'' + val}>{text}</option>);
				})
			}
		</FormControl>
		</div>
		<table className='table table-responsive text-center table-sm'>
			<thead>
				<tr>
					<th scope='col' rowSpan={2}>{isPC() ? 'アイドル' : 'idol'}</th>
					<th scope='col' colSpan={2}>Vo</th>
					<th scope='col' colSpan={2}>Da</th>
					<th scope='col' colSpan={2}>Vi</th>
				</tr>
				<tr>
					<th scope='col'>{perfectLabel()}</th>
					<th scope='col'>{goodLabel()}</th>
					<th scope='col'>{perfectLabel()}</th>
					<th scope='col'>{goodLabel()}</th>
					<th scope='col'>{perfectLabel()}</th>
					<th scope='col'>{goodLabel()}</th>
				</tr>
			</thead>
			<tbody>
			{
				
				range(5).map(index => {
					let idolName = '';
					if (index === 0) {
						idolName = context.state.pIdolName !== '' ? context.state.pIdolName : `p${idolWord()}`;
					} else {
						idolName = context.state.sIdolName[index - 1] !== '' ? context.state.sIdolName[index - 1] : `s${index}${idolWord()}`;
					}
					return (<tr key={index}>
						<th scope='row'>{idolName}</th>
						<td>{normalDamage[index][0][0]}</td>
						<td>{normalDamage[index][0][1]}</td>
						<td>{normalDamage[index][1][0]}</td>
						<td>{normalDamage[index][1][1]}</td>
						<td>{normalDamage[index][2][0]}</td>
						<td>{normalDamage[index][2][1]}</td>
					</tr>)
				})
			}
			</tbody>
		</table>
		<strong>思い出アピール</strong><br />
		<table className='table table-responsive text-center table-sm'>
			<thead>
				<tr>
					<th scope='col'>判定</th>
					<th scope='col'>Vo</th>
					<th scope='col'>Da</th>
					<th scope='col'>Vi</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Good</td>
					<td>{memorialDamageGood[0]}</td>
					<td>{memorialDamageGood[1]}</td>
					<td>{memorialDamageGood[2]}</td>
				</tr>
				<tr>
					<td>Bad</td>
					<td>{memorialDamageBad[0]}</td>
					<td>{memorialDamageBad[1]}</td>
					<td>{memorialDamageBad[2]}</td>
				</tr>
			</tbody>
		</table>
	</div>);
}

export default DamageResult;
