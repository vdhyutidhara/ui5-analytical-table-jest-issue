import { AnalyticalTable } from '@ui5/webcomponents-react';
import React from 'react';

const columns = [
	{
		Header: 'Name',
		accessor: 'name'
	},
	{
		Header: 'Age',
		accessor: 'age'
	},
	{
		Header: 'Friend Name',
		accessor: 'friend.name'
	},
	{
		Header: 'Friend Age',
		accessor: 'friend.age'
	}
];
  
const data = [
	{
		age: 80,
		friend: {
			age: 68,
			name: 'Carver Vance'
		},
		name: 'Allen Best',
		status: 'Positive'
	},
	{
		age: 31,
		friend: {
			age: 70,
			name: 'Strickland Gallegos'
		},
		name: 'Combs Fleming',
		status: 'None'
	}
];
  
export default function AnalyticalTableComp () {
	return (
		<AnalyticalTable
			columns={columns}
			data={data}
			onAutoResize={() => { }}
			onColumnsReorder={() => { }}
			onGroup={() => { }}
			onLoadMore={() => { }}
			onRowClick={() => { }}
			onRowExpandChange={() => { }}
			onRowSelect={() => { }}
			onSort={() => { }}
			onTableScroll={() => { }}
		/>
	);
};