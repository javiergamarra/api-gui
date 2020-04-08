const fetch = (url, method = 'get', data, contentType) => {
	const request = {
		method: method.toUpperCase()
	};

	if (method === 'post' || method === 'put') {
		if (contentType === 'application/json') {
			request.body = JSON.stringify(data);

			const headers = new Headers();

			headers.append('Content-Type', contentType);
			headers.append('Authorization', 'Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0');

			request.headers = {
				'Content-Type': 'application/json',
				'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0'
			}
		}
		else if (contentType === 'multipart/form-data') {
			const formData  = new FormData();

			for(const name in data) {
				formData.append(name, data[name]);
			}

			request.body = formData;
		}
	}

	return window.fetch(
		url,
		{
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0'
			}
		}
	).then(
		res => {
			let retVal;

			if (method === 'delete' && res.status === 204) {
				retVal = 'Deleted Successfully';
			}
			else {
				retVal = res.json();
			}

			return retVal;
		}
	);
}

export default fetch;