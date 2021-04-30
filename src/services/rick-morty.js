import configService from './config';

export const getData = async () => {
  const result = await fetch(`${configService.apiUrl}/character/[1,2,3,4,5,6,7,8,9,10]`);
  const json = await result.json();
  return json;
};

export const getCharacter = async (helper) => {
  const result = await fetch(`${configService.apiUrl}/character?name=${helper}`);
  const json = await result.json();
  return json;
};

export const getById = async (helper) => {
  const result = await fetch(`${configService.apiUrl}/character/${helper}`);
  const json = await result.json();
  return json;
};
