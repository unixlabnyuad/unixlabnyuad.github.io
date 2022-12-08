/*  1: Adilet
    2: Armaan
    3: Ayesha
    4: Desmond
    5: Lachlan
    6: Muhammad Anas
    8: Ngoc
    9: Nhi
    10: Omar
    11: Phillip
    12: Prince
    13: Sashank
    14: Shehryar
    15: Shreya
    16: Syed
    17: Vee
    18: Zyad
*/

var shifts = [
    // Adilet
    {
        id: 1,
        day: "monday",
        from: "17:00",
        to: "19:00"
    },
    {
        id: 1,
        day: "tuesday",
        from: "20:00",
        to: "21:00"
    },
    {
        id: 1,
        day: "thursday",
        from: "13:00",
        to: "16:00"
    },
    {
        id: 1,
        day: "friday",
        from: "10:00",
        to: "12:00"
    },
    // Armaan
    {
        id: 2,
        day: "monday",
        from: "20:30",
        to: "23:30"
    },
    {
        id: 2,
        day: "tuesday",
        from: "22:30",
        to: "25:00"
    },
    {
        id: 2,
        day: "wednesday",
        from: "20:30",
        to: "22:00"
    },
    {
        id: 2,
        day: "friday",
        from: "14:30",
        to: "15:30"
    },
    // Ayesha

    {
        id: 3,
        day: "thursday",
        from: "16:00",
        to: "19:00"
    },
   {
        id: 3,
        day: "wednesday",
        from: "09:00",
        to: "10:00"
    },
    {
        id: 3,
        day: "wednesday",
        from: "19:00",
        to: "20:30"
    },
    {
        id: 3,
        day: "friday",
        from: "12:00",
        to: "14:30"
    },

    // Desmond
    {
        id: 4,
        day: "saturday",
        from: "20:00",
        to: "23:00"
    },
    {
        id: 4,
        day: "sunday",
        from: "15:00",
        to: "20:00"
    },


    // Lachlan
    {
        id: 5,
        day: "tuesday",
        from: "11:00",
        to: "13:00",
    },
    {
        id: 5,
        day: "wednesday",
        from: "11:30",
        to: "17:30",
    },

    // Anas
    {
        id: 6,
        day: "monday",
        from: "16:00",
        to: "17:00"
    },
    {
        id: 6,
        day: "monday",
        from: "23:30",
        to: "25:30"
    },
    {
        id: 6,
        day: "tuesday",
        from: "15:00",
        to: "17:00"
    },
    {
        id: 6,
        day: "wednesday",
        from: "24:00",
        to: "26:00"
    },
    {
        id: 6,
        day: "thursday",
        from: "15:00",
        to: "16:00"
    },

    //Ngoc
    {
        id: 8,
        day: "friday",
        from: "19:00",
        to: "22:00"
    },
    {
        id: 8,
        day: "saturday",
        from: "13:00",
        to: "16:00"
    },
    {
        id: 8,
        day: "sunday",
        from: "13:00",
        to: "15:00"
    },

    // Nhi
    {
        id: 9,
        day: "tuesday",
        from: "9:00",
        to: "11:00"
    },
    {
        id: 9,
        day: "tuesday",
        from: "13:00",
        to: "15:00"
    },
    {
        id: 9,
        day: "sunday",
        from: "10:00",
        to: "11:30"
    },
    {
        id: 9,
        day: "monday",
        from: "9:00",
        to: "11:30"
    },

    // Omar
    {
        id: 10,
        day: "monday",
        from: "19:00",
        to: "22:00"
    },
    {
        id: 10,
        day: "friday",
        from: "16:30",
        to: "18:30"
    },
    {
        id: 10,
        day: "saturday",
        from: "14:00",
        to: "17:00"
    },
    // Phillip
    {
        id: 11,
        day: "tuesday",
        from: "17:00",
        to: "19:00"
    },
    {
        id: 11,
        day: "thursday",
        from: "09:30",
        to: "12:30"
    },
    {
        id: 11,
        day: "friday",
        from: "09:00",
        to: "12:00"
    },
    //Prince
    {
        id: 12,
        day: "sunday",
        from: "10:00",
        to: "15:00"
    },
    {
        id: 12,
        day: "saturday",
        from: "10:00",
        to: "13:00"
    },

    //Sashank
    {
        id: 13,
        day: "sunday",
        from: "15:00",
        to: "16:00"
    },
    {
        id: 13,
        day: "monday",
        from: "11:30",
        to: "13:00"
    },
    {
        id: 13,
        day: "tuesday",
        from: "13:00",
        to: "16:30"
    },
    {
        id: 13,
        day: "thursday",
        from: "13:00",
        to: "15:00"
    },

    // Shehryar
    {
        id: 14,
        day: "monday",
        from: "22:30",
        to: "26:00"
    },
    {
        id: 14,
        day: "tuesday",
        from: "23:00",
        to: "25:00"
    },
    {
        id: 14,
        day: "wednesday",
        from: "23:30",
        to: "26:00"
    },

    // Shreya
    {
        id: 15,
        day: "friday",
        from: "19:30",
        to: "22:00"
    },
    {
        id: 15,
        day: "thursday",
        from: "16:30",
        to: "19:00"
    },
    {
        id: 15,
        day: "saturday",
        from: "11:00",
        to: "14:00"
    },
    // Umair
    {
        id: 16,
        day: "monday",
        from: "11:30",
        to: "15:30"
    },
    {
        id: 16,
        day: "friday",
        from: "12:00",
        to: "13:30"
    },

    // Vee
    {
        id: 17,
        day: "monday",
        from: "13:00",
        to: "17:00"
    },
    {
        id: 17,
        day: "wednesday",
        from: "10:00",
        to: "14:00"
    },
    // Zyad
    {
        id: 18,
        day: "monday",
        from: "9:30",
        to: "11:30"
    },
    {
        id: 18,
        day: "tuesday",
        from: "10:10",
        to: "12:40"
    },
    {
        id: 18,
        day: "thursday",
        from: "10:10",
        to: "12:40"
    },
    {
        id: 18,
        day: "wednesday",
        from: "14:00",
        to: "17:00"
    },

]
