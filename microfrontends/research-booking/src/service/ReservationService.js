import axios from "axios";

export const getAvailableRoomsByDate = ({startDate, endDate}) => {
    return axios.post("http://entando-hackaton-team-blue.apps.ocp4.eng-entando.com/room-bundle-395270a6/room-service/api/freeRooms", {
        startDate: startDate.format("YYYY-MM-DD"),
        endDate: endDate.format("YYYY-MM-DD")
    }).then((result) => {
        return result.data
    })
}

export const reserve = (reservationRequest) => {
    return axios
        .post("http://entando-hackaton-team-blue.apps.ocp4.eng-entando.com/room-bundle-395270a6/room-service/api/reservation", reservationRequest)
        .then((res) => {
            return {
                reservationCode: res.data.reservationCode
            }
        })
}

export const deleteReservation = (reservationId) => {
    return Promise
        .resolve()
}
