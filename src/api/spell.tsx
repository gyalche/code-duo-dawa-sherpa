import API from "../axios"

export const getSpell=async()=>{
    try {
        const res=await API.get('spells');
        return res.data;
    } catch (error:unknown) {
        return error;
    }
}
export const getIndividualSpell=async(name:string)=>{
    try {
        const res=await API.get(`spells/${name}`);
        return res.data;
    } catch (error:unknown) {
        return error;
    }
}