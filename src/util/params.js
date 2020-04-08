const setSearchParamsWithoutPageReload = qs => {
	const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${qs}`;

	window.history.pushState({path: newurl}, '', newurl);
};

export const setSearchParam = (key, value) => {
	const searchParams = new URLSearchParams(window.location.search);

	if (value && value.length > 0) {
		searchParams.set(key, value);
	} else {
		searchParams.delete(key);
	}

	setSearchParamsWithoutPageReload(searchParams.toString());
};

export const getSearchParams = () => {
	const newSearchParams = {};

	const searchParams = new URLSearchParams(window.location.search);

	searchParams.forEach(
		(value, key) => {
			newSearchParams[key] = value;
		}
	);

	return newSearchParams;
};

export const getSearchParam = key => {
	const searchParams = new URLSearchParams(window.location.search);

	return searchParams.get(key) || null;
};