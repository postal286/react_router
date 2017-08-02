export default function receiveData(data) {
	return {
		type: "RECEIVE_DATA",
		payload: {
			data
		}
	}
}