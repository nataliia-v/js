'use strict'

const adminCredentials = {
  login: 'admin',
  password: 'm4ngo1zh4ackz0r',
}

const userLogin = prompt('Your login: ');

if (!userLogin) {
  alert('Cancelled by user');


} else if (userLogin !== adminCredentials.login) {
  alert('Access denied, wrong login!');


} else {
  const userPassword = prompt('password:');
  if (!userPassword) {
    alert('Cancelled by user');
  }
  else if (userPassword !== adminCredentials.password){
    alert('Access denied, wrong password!')
  }
  else {
    alert('Welcome!')
  }
}



/// ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ


// const sharm = 15;
// const hurgaba = 25;
// const taba = 6;
//
// const requiredPlaces = prompt ('Number of seats: ');
// if (!Number.isSafeInteger(Number(requiredPlaces))) {
//   alert('Mistake');
// } else if (!requiredPlaces) {
//   alert('We are so sorry, come again!');
// } else {
//
//   let isConfirmed;
//   let groupName;
//
//   switch(true) {
//     case sharm >= requiredPlaces: {
//       groupName = 'SHARM'
//       isConfirmed = confirm(`There are vacancies in the ${groupName} group. Are you agree to join this group?`);
//       break;
//     }
//     case hurgaba >= requiredPlaces: {
//       groupName = 'HURGABA'
//       isConfirmed = confirm(`There are vacancies in the ${groupName} group. Are you agree to join this group?`);
//       break;
//     }
//     case taba >= requiredPlaces: {
//       groupName = 'TABA'
//       isConfirmed = confirm(`There are vacancies in the ${groupName} group. Are you agree to join this group?`);
//       break;
//     }
//     default: {
//       alert('Sorry, there are no vacancies!');
//     }
//   }
//
//   if (isConfirmed) {
//     alert(`Enjoy your trip in a ${groupName} group.`)
//   } else {
//     alert('We are so sorry, come again!');
//   }
// }
