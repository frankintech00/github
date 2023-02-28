export const Item = ({ icon, label, value, color, background }) => {
	return (
		<div className='w-full p-2 lg:w-1/4 md:w-1/2'>
			<div className='flex items-center justify-around w-full bg-white rounded shadow-2xl'>
				<span
					className={`inline-flex items-center justify-center w-16 h-16 text-3xl rounded-full`}
					style={{ background: background, color: color }}
				>
					{icon}
				</span>

				<div className='w-1/2 m-3 text-center'>
					<h3 className='my-2 text-3xl font-bold text-black'>{value}</h3>
					<p className='text-xl text-gray-800 capitalize'>{label}</p>
				</div>
			</div>
		</div>
	);
};
