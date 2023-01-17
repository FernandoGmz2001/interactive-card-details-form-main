import React from "react";
const nameIsBlank = (value) => {
  return value.trim().length !== 0;
};
const numberIsBlank = (value) => {
  return value.trim().length !== 0;
};
const monthIsBlank = (value) => {
  return value.trim().length !== 0;
};
const yearIsBlank = (value) => {
  return value.trim().length !== 0;
};
const cvcIsBlank = (value) => {
  return value.trim().length !== 0;
};
const numberIsShort = (value) => {
  return value.length === 19;
};

export {
  nameIsBlank,
  numberIsBlank,
  monthIsBlank,
  yearIsBlank,
  cvcIsBlank,
  numberIsShort,
};
