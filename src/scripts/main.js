'use strict';

const listWrapper = document.querySelector('ul');
const employeesList = [...listWrapper.children];

function sortList(list) {
  return list.sort(
    (first, second) =>
      salaryToNumber(second.dataset.salary) -
      salaryToNumber(first.dataset.salary),
  );
}

function salaryToNumber(number = '') {
  return +number.slice(1).split(',').join('');
}

function getEmployees(list) {
  for (const el of list) {
    listWrapper.appendChild(el);
  }
}

getEmployees(sortList(employeesList));
