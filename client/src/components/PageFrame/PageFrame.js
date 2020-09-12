const PageFrame = ({ children }) => {
	return (
		<div className='mt-32 md:mt-20 mx-auto p-4 lg:w-5/6 xl:w-3/6 w-full'>
			{children}
		</div>
	);
};

export default PageFrame;
