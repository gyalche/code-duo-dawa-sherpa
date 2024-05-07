import API from '../axios';

export const getSpell = async (data: ay) => {
  const [_, search] = data?.queryKey;
  try {
    const res = await API.get(`/api/${search.length ? search : 'spells'}`);
    return res.data;
  } catch (error: unknown) {
    return error;
  }
};
export const getIndividualSpell = async (data: any) => {
  const [_, mainname, subname] = data.queryKey;

  try {
    const res = await API.get(`/api/${mainname}/${subname}`);
    return res.data;
  } catch (error: unknown) {
    return error;
  }
};
