import React from 'react';

import ClayIcon from '@clayui/icon';

export const spritemap = '/lexicon/icons.svg';

const Icon = (props) => {
	const {symbol, ...otherProps} = props;

	return (
		<ClayIcon
			symbol={symbol}
			spritemap={spritemap}
			{...otherProps}
		/>
	);
}

export default Icon;