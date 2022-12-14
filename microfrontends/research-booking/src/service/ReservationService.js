export const getAvailableRoomsByDate = ({startDate, endDate}) => {
    return Promise
        .resolve()
        .then(() => {
            return [
                {roomId: 1, roomTipology: "LUXURY", name: "Room 1", price: 70.50, capacity: 3},
                {roomId: 2, roomTipology: "ECONOMY", name: "Room 2", price: 70.50, capacity: 2},
                {roomId: 3, roomTipology: "SUITE", name: "Room 3", price: 70.50, capacity: 4},
                {roomId: 4, roomTipology: "ECONOMY", name: "Room 4", price: 70.50, capacity: 2},
            ]
        })
}

export const reserve = ({reservationRequest}) => {
    return Promise
        .resolve()
        .then(() => {
            return {
                reservationCode: "123456677899"
            }
        })
}

export const deleteReservation = (reservationId) => {
    return Promise
        .resolve()
}
