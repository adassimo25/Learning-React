
export function IsFieldEmpty(field) {
	return (field === '');
}

export function IsEmailCorrect(email) {
	if (IsFieldEmpty(email) || !(/^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/.test(email)))
		return false;
	return true;
}

export function IsZipCodeCorrect(zipCode) {
	if (IsFieldEmpty(zipCode) || !(/^\d{2}-\d{3}$/.test(zipCode)))
		return false;
	return true;
}