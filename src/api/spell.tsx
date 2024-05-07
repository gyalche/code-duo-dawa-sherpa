import API from '../axios';

export const getSpell = async () => {
  try {
    const res = await API.get(`spells`);
    return res.data;
  } catch (error: unknown) {
    return error;
  }
};
export const getIndividualSpell = async (data: any) => {
  const [_, name] = data.queryKey;

  try {
    const res = await API.get(`spells/${name}`);
    return res.data;
  } catch (error: unknown) {
    return error;
  }
};
