/*  1: Akhat
    2: Lachlan
    3: Khola
    4: Krises
    5: Shehryar
    6: Ayesha
    7: Hasin
    8: Mathilde
    9: Sashank
    10: Omar
    11: Pedro
    12: Sagynbek
    13: Himanshi
    14: Ngoc
    15: Desmond
*/

var shifts = [
    // Akhat
    {
        id: 1,
        day: "monday",
        from: "10:00",
        to: "11:30"
    },
    {
        id: 1,
        day: "monday",
        from: "17:30",
        to: "19:00"
    },
    {
        id: 1,
        day: "monday",
        from: "20:30",
        to: "21:30"
    },
    {
        id: 1,
        day: "tuesday",
        from: "10:30",
        to: "11:30"
    },
    {
        id: 1,
        day: "tuesday",
        from: "20:00",
        to: "21:30"
    },
    {
        id: 1,
        day: "wednesday",
        from: "10:00",
        to: "11:30"
    },
    {
        id: 1,
        day: "wednesday",
        from: "17:30",
        to: "19:00"
    },
    {
        id: 1,
        day: "wednesday",
        from: "20:00",
        to: "22:00"
    },
    {
        id: 1,
        day: "thursday",
        from: "10:30",
        to: "11:30"
    },
    {
        id: 1,
        day: "thursday",
        from: "20:30",
        to: "21:30"
    },
    {
        id: 1,
        day: "friday",
        from: "12:30",
        to: "16:00"
    },
//     {
//         id: 1,
//         day: "saturday",
//         from: "17:00",
//         to: "22:00"
//     },
//     {
//         id: 1,
//         day: "sunday",
//         from: "17:00",
//         to: "21:30"
//     },
//         {
//         id: 1,
//         day: "sunday",
//         from: "22:30",
//         to: "24:00"
//     },
    // Lachlan
    {
        id: 2,
        day: "monday",
        from: "11:00",
        to: "13:00"
    },
    {
        id: 2,
        day: "tuesday",
        from: "12:30",
        to: "14:30"
    },
    {
        id: 2,
        day: "wednesday",
        from: "11:30",
        to: "13:00"
    },
    {
        id: 2,
        day: "thursday",
        from: "10:30",
        to: "14:30"
    },

    // Khola
    {
        id: 3,
        day: "thursday",
        from: "23:00",
        to: "26:00"
    },
    {
        id: 3,
        day: "friday",
        from: "22:00",
        to: "26:00"
    },
    {
        id: 3,
        day: "saturday",
        from: "22:00",
        to: "26:00"
    },

    // Krises
    {
        id: 4,
        day: "sunday",
        from: "10:00",
        to: "12:30"
    },
    {
        id: 4,
        day: "monday",
        from: "23:00",
        to: "25:00"
    },
    {
        id: 4,
        day: "wednesday",
        from: "23:00",
        to: "25:00"
    },
    {
        id: 4,
        day: "friday",
        from: "10:00",
        to: "12:30"
    },
    {
        id: 4,
        day: "saturday",
        from: "10:00",
        to: "12:30"
    },

    // Shehryar
    {
        id: 5,
        day: "sunday",
        from: "11:30",
        to: "13:30"
    },
    {
        id: 5,
        day: "sunday",
        from: "21:30",
        to: "22:30"
    },
    {
        id: 5,
        day: "monday",
        from: "19:00",
        to: "20:30"
    },
    {
        id: 5,
        day: "tuesday",
        from: "21:30",
        to: "25:00"
    },
    {
        id: 5,
        day: "wednesday",
        from: "16:00",
        to: "17:30"
    },
    {
        id: 5,
        day: "saturday",
        from: "11:30",
        to: "13:30"
    },

    // Ayesha
    {
        id: 6,
        day: "tuesday",
        from: "10:00",
        to: "15:30"
    },
    {
        id: 6,
        day: "thursday",
        from: "12:30",
        to: "15:30"
    },
    {
        id: 6,
        day: "thursday",
        from: "17:30",
        to: "20:30"
    },
    {
        id: 6,
        day: "wednesday",
        from: "19:00",
        to: "20:30"
    },
    // Hasin
    {
        id: 7,
        day: "monday",
        from: "13:30",
        to: "17:30"
    },
    {
        id: 7,
        day: "monday",
        from: "23:30",
        to: "24:30"
    },
    {
        id: 7,
        day: "tuesday",
        from: "19:00",
        to: "20:00"
    },
    {
        id: 7,
        day: "wednesday",
        from: "17:30",
        to: "20:00"
    },
    {
        id: 7,
        day: "wednesday",
        from: "22:00",
        to: "23:00"
    },
    {
        id: 7,
        day: "thursday",
        from: "15:30",
        to: "19:00"
    },
    {
        id: 7,
        day: "friday",
        from: "19:00",
        to: "21:00"
    },

    // Mathilde
    {
        id: 8,
        day: "monday",
        from: "19:00",
        to: "20:00"
    },
    {
        id: 8,
        day: "tuesday",
        from: "15:00",
        to: "19:00"
    },
    {
        id: 8,
        day: "wednesday",
        from: "13:30",
        to: "17:30"
    },
    {
        id: 8,
        day: "thursday",
        from: "15:00",
        to: "16:00"
    },

    // Sashank
    {
        id: 9,
        day: "monday",
        from: "20:30",
        to: "23:00"
    },
    {
        id: 9,
        day: "tuesday",
        from: "11:30",
        to: "12:30"
    },
    {
        id: 9,
        day: "thursday",
        from: "21:00",
        to: "23:00"
    },
    {
        id: 9,
        day: "friday",
        from: "10:00",
        to: "14:30"
    },
    {
        id: 9,
        day: "saturday",
        from: "13:00",
        to: "14:30"
    },

    // Omar
    {
        id: 10,
        day: "monday",
        from: "13:30",
        to: "16:00"
    },
    {
        id: 10,
        day: "wednesday",
        from: "13:30",
        to: "16:00"
    },
    {
        id: 10,
        day: "thursday",
        from: "21:30",
        to: "23:30"
    },
    {
        id: 10,
        day: "friday",
        from: "19:00",
        to: "22:00"
    },

    // Pedro
    {
        id: 11,
        day: "monday",
        from: "15:30",
        to: "19:00"
    },
    {
        id: 11,
        day: "wednesday",
        from: "20:30",
        to: "22:00"
    },
    {
        id: 11,
        day: "friday",
        from: "14:30",
        to: "19:00"
    },
    {
        id: 11,
        day: "saturday",
        from: "14:30",
        to: "18:30"
    },


    // Sagynbek
    {
        id: 12,
        day: "sunday",
        from: "10:00",
        to: "11:30"
    },
    {
        id: 12,
        day: "sunday",
        from: "13:30",
        to: "15:00"
    },
    {
        id: 12,
        day: "monday",
        from: "21:30",
        to: "23:30"
    },
    {
        id: 12,
        day: "tuesday",
        from: "16:30",
        to: "20:30"
    },
    {
        id: 12,
        day: "wednesday",
        from: "10:00",
        to: "11:30"
    },
    {
        id: 12,
        day: "wednesday",
        from: "22:00",
        to: "23:30"
    },
    {
        id: 12,
        day: "thursday",
        from: "16:30",
        to: "17:30"
    },
    {
        id: 12,
        day: "friday",
        from: "22:00",
        to: "24:00"
    },

    // Himanshi
    {
        id: 13,
        day: "sunday",
        from: "15:00",
        to: "18:00"
    },
    {
        id: 13,
        day: "thursday",
        from: "23:30",
        to: "26:00"
    },
    {
        id: 13,
        day: "saturday",
        from: "22:00",
        to: "25:30"
    },

    // Ngoc
    {
        id: 14,
        day: "sunday",
        from: "14:00",
        to: "17:00"
    },
    {
        id: 14,
        day: "thursday",
        from: "19:00",
        to: "21:00"
    },
    {
        id: 14,
        day: "friday",
        from: "16:00",
        to: "19:00"
    },
    {
        id: 14,
        day: "saturday",
        from: "14:00",
        to: "17:00"
    },

    // Desmond
    {
        id: 15,
        day: "sunday",
        from: "21:00",
        to: "23:00"
    },
    {
        id: 15,
        day: "tuesday",
        from: "21:30",
        to: "25:00"
    },

]
