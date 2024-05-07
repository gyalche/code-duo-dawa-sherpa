import { addFavroite } from "../stores/spellSlice";

export const addToFavroite = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    name: string,
    dispatch?: any,
    setFav?: any,
    fav?: boolean,
) => {
    e.stopPropagation();
    setFav(!fav);
    dispatch(addFavroite(name));
};

//remove from favroite
export const removeFromFavroite = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    name: string,
    dispatch?: any,
) => {
    e.stopPropagation();
};