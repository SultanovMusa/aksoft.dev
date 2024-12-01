import React, { FC } from 'react';
import scss from './PreLoaderDevX.module.scss';

const PreLoaderDevX: FC = () => {
	return (
		<>
			<div className={scss.preLoader}>
				<p className={scss.title_loader}>
					aksoft
				</p>
				<span className={scss.loader}></span>
			</div>
		</>
	);
};
export default PreLoaderDevX;