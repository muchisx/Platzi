// Intro

const numbers = [1,2,3,4,5,6];

let result = false;

for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    
    if (item % 2 === 0) {
        result = true; 
        break;
    }
}

result;

// Some

// Arrays

let result2 = numbers.some(item => item % 2 === 0)
result2;

// Objects

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
      customerName: "Nicolas",
      total: 2322,
      delivered: false,
    },
];

let result3 = orders.some(item => item.delivered)
result3;

// exo 2

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];

// My try

const obj1 = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
}

const obj2 = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 13),
    title: "Cita de trabajo",
}

const datesOverlap = (start1, end1, start2, end2) => {
    if (start1 <= end2 && start2 <= end1) return true
    else return false;
}

//check

datesOverlap(obj1.startDate, obj1.endDate, obj2.startDate, obj2.endDate);

// exo

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};
const newAppointment1 = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 13),
};

const checkNewAppointmentAgainstDates = (newDates) => {
    return dates.some(item => {
        return datesOverlap(item.startDate, item.endDate, newDates.startDate, newDates.endDate)
    })
}

checkNewAppointmentAgainstDates(newAppointment);
checkNewAppointmentAgainstDates(newAppointment1);

