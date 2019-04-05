import * as React from 'react';
import { calcMemorialDamage, calcNormalDamage } from 'src/simulator';
import { AppealTarget } from 'src/state';
import { range } from 'src/utility';
import { AppContext } from './App';

const DamageResult: React.FC = () => {
	const context = React.useContext(AppContext);

	const memorialDamageGood = calcMemorialDamage(context.state, true);
	const memorialDamageBad = calcMemorialDamage(context.state, false);
	const normalDamage = range(5).map(index => {
		return ['vo', 'da', 'vi'].map(type => {
			const type2 = type as AppealTarget;
			return [
				calcNormalDamage(context.state, index, type2, 2.5, 'perfect'),
				calcNormalDamage(context.state, index, type2, 2.5, 'good')
			]
		});
	});

	return (<div className='p-3'>
		<strong>通常アピール</strong><br />
		<table className='table table-responsive text-center table-sm'>
			<thead>
				<tr>
					<th scope='col' rowSpan={2}>アイドル</th>
					<th scope='col' colSpan={2}>Vo</th>
					<th scope='col' colSpan={2}>Da</th>
					<th scope='col' colSpan={2}>Vi</th>
				</tr>
				<tr>
					<th scope='col'>PERFECT</th>
					<th scope='col'>GOOD</th>
					<th scope='col'>PERFECT</th>
					<th scope='col'>GOOD</th>
					<th scope='col'>PERFECT</th>
					<th scope='col'>GOOD</th>
				</tr>
			</thead>
			<tbody>
			{
				range(5).map(index => {
					const idolName = index === 0 ? 'pアイドル' : `s${index}アイドル`;
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
