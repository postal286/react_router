export default function loadingError(error) {
	return {
		type: "LOADING_ERROR",
		payload: {
			error
		}
	}
}