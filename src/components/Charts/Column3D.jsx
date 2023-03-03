import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import React from 'react';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Chart);

export const Column3D = ({ data }) => {
	const chartConfigs = {
		type: 'column2d',
		width: '100%',
		height: '400',
		dataFormat: 'json',
		dataSource: {
			chart: {
				caption: 'Most Popular',
				yAxisName: 'Stars',
				yAxisNameFontSize: 16,
				xAxisName: 'Repos',
				xAxisNameFontSize: 16,
				showCanvasBorder: 0,
				showAlternateHGridColor: 0,
				usePlotGradientColor: 0,
				valueFontSize: 16,
				placeValuesInside: 0,
				divLineColor: '#102a42',
				divLineAlpha: 15,
				captionFontColor: '#102a42',
				captionFontBold: 0,
				captionFontSize: 20,
				captionFont: 'Roboto',
				baseFont: 'Open Sans',
				baseFontSize: 12,
				baseFontColor: '#617d98',
				smartLineColor: '#617d98',
				showShadow: 0,
				showPlotBorder: 0,
				paletteColors:
					'#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA',
				bgColor: '#FFFFFF',
				showBorder: 0,
			},

			data,
		},
	};

	return (
		<div className='sm:w-3/5'>
			<div className='p-2 m-2 bg-white rounded shadow-2xl'>
				<ReactFC {...chartConfigs} />
			</div>
		</div>
	);
};
