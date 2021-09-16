// import {
//   fullTime as fulltime,
//   halfTime as parttime,
//   maxHours,
//   maxDays,
//   dailyWage,
// } from "./data";

import data from './data'
const {fullTime: fulltime, halfTime: parttime, maxHours, maxDays, dailyWage} = data;
// const fulltime: number = data.fullTime;
// const parttime: number = data.halfTime;
// const maxHours: number = data.maxHours;
// const maxDays: number = data.maxDays;
// const dailyWage: number = data.dailyWage;

class Employee {
  attendance: any[] = [];
  wages: any[] = [];
  constructor() {
    console.log("Welcome to Employee Wage Computation"); // uc1
  }

  randomAttendance(): number {
    return Math.floor(Math.random() * 3);
  }

  // uc2 - checking attendance as per day
  checkAttendance(day = this.attendance.length - 1) {
    if (day >= this.attendance.length) return false;
    return this.attendance[day] ? "present" : "absent";
  }

  // uc3 - generate daily wage of an employee based on random attendance
  generateRandomDailyWage() {
    let hrs = 0;
    let empCase: number = this.randomAttendance();

    switch (empCase) {
      case 0: // working parttime
        hrs = parttime;
        break;
      case 1: // working fulltime
        hrs = fulltime;
        break;
      default:
        // on leave
        hrs = 0;
        break;
    }

    return hrs * dailyWage;
  }

  // // uc4 - generate monthly wage of an employee based on 20 random attendances
  // generateRandomMonthlyWage() {
  //   // setting initial values
  //   let monthlyPay = 0,
  //     hrs;

  //   // looping for 20 days
  //   for (let day = 0; day < maxDays; day++) {
  //     let empCase: number = this.randomAttendance();
  //     this.attendance.push(empCase);
  //     switch (empCase) {
  //       case 0:
  //         hrs = parttime;
  //         break;
  //       case 1:
  //         hrs = fulltime;
  //         break;
  //       default:
  //         hrs = 0;
  //         break;
  //     }
  //     monthlyPay += hrs * dailyWage;
  //   }
  //   // console.log("Attendance:", this.attendance);
  //   // UNCOMMENT THE ABOVE LINE (67) TO PRINT THE ARRAY OF ATTENDANCE
  //   // 0 - PARTTIME
  //   // 1 - FULLTIME
  //   // 2 - LEAVE
  //   return monthlyPay;
  // }

  // getRestrictedWage() {
  //   this.generateRandomMonthlyWage();
  //   // setting initial values
  //   let monthlyPay = 0,
  //     workingHours = 0,
  //     workingDays = 0,
  //     monthDays = 0;

  //   // loop through 20 days of the month
  //   for (let a of this.attendance) {
  //     if (workingHours > maxHours && monthDays > maxDays) break;

  //     monthDays += 1;
  //     let currentWorking: number = 0;
  //     const currentWorkingHours = a;

  //     // calculate daily pay as per attendance
  //     switch (currentWorkingHours) {
  //       case 0: // working parttime
  //         currentWorking = parttime;
  //         workingHours += parttime;
  //         workingDays++;
  //         break;
  //       case 1: // working fulltime
  //         currentWorking = fulltime;
  //         workingHours += fulltime;
  //         workingDays++;
  //         break;
  //       default:
  //         // on leave
  //         break;
  //     }
  //     monthlyPay += currentWorking * dailyWage;
  //     this.wages.push(currentWorking * dailyWage);
  //   }
  //   // return result
  //   return {
  //     monthlyPay,
  //     workingHours,
  //     workingDays,
  //   };
  // }

  // // uc9a - Calc total Wage using Array forEach or reduce method
  // get totalWage() {
  //   return this.wages.reduce((a, b) => a + b);
  // }

  // // uc9b - Show the Day along with Daily Wage using Array map helper function
  // get detailedDailyWage() {
  //   return this.wages.map((wage: number, idx: number) => {
  //     return {
  //       day: idx + 1,
  //       wage,
  //     };
  //   });
  // }

  // // uc9c - Show Days when Full time wage of 160 were earned using filter function
  // get fullTimeDays() {
  //   return this.detailedDailyWage.filter((day) => day.wage === 160);
  // }

  // // uc9d - Find the first occurrence when Full Time Wage was earned using find function
  // firstFullTimeDay(): any {
  //   return this.detailedDailyWage.find((day) => day.wage === 160);
  // }

  // // uc9e - Check if Every Element of Full Time Wage is truly holding Full time wage [under construction]
  // checkTrulyFullTimeWage() {
  //   return true;
  // }

  // // uc9f - Check if there is any Part Time Wage
  // get partTimeDays() {
  //   return this.detailedDailyWage.filter((day) => day.wage === 80);
  // }

  // // uc9g - Find the number of days the Employee Worked
  // get workingDays() {
  //   return this.detailedDailyWage.filter((day) => day.wage !== 0).length;
  // }

  // // uc10 - showing map of wages
  // get wageMap() {
  //   const wageMap = new Map();
  //   this.detailedDailyWage.forEach((day) => {
  //     wageMap.set(day.day, day.wage);
  //   });
  //   wageMap.set("Total wage", this.totalWage);
  //   return wageMap;
  // }

  // // uc11 - object creation
  // get allWageObject() {
  //   const allWageDetails: any = {};
  //   allWageDetails.wages = this.detailedDailyWage.map((day) => {
  //     return {
  //       day: day.day,
  //       wage: day.wage,
  //       hours: day.wage / 20,
  //     };
  //   });
  //   return allWageDetails;
  // }
}

const dk = new Employee();
console.log(dk.generateRandomDailyWage());
// const restrictedWage = dk.getRestrictedWage();
// console.log(
//   `Daily pays: ${dk.wages}\nMonthly pay: ${restrictedWage.monthlyPay}\nWorking hours: ${restrictedWage.workingHours}/${maxHours}\nWorking days: ${restrictedWage.workingDays}/${maxDays}`
// );

// console.log("\n----------\n");

// // uc9a
// console.log(`Total wage: ${dk.totalWage}`);

// // uc9b
// console.log("Detailed daily wage:");
// dk.detailedDailyWage.forEach((day) =>
//   console.log(`Day: ${day.day}, Wage: ${day.wage}`)
// );

// // uc9c
// console.log(`Full time days: ${dk.fullTimeDays.map((d) => d.day)}`);

// // uc9d
// console.log(`First full time day: ${dk.firstFullTimeDay().day}`);

// // uc9e
// // console.log(dk.checkTrulyFullTimeWage());

// // uc9f
// console.log(`Part time days: ${dk.partTimeDays.map((d) => d.day)}`);

// // uc9g
// console.log(`Total working days: ${dk.workingDays}`);

// // uc10
// console.log("Wage map:");
// console.log(dk.wageMap);

// // uc11
// console.log("Wage object:");
// console.log(dk.allWageObject);

// console.log(dk.checkAttendance());
