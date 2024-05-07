import { addFavroite, removeFromFavroite } from "../stores/spellSlice";

export const addToFavroite = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    data: any,
    dispatch?: any,
    setFav?: any,
    fav?: boolean,
) => {
    e.stopPropagation();
    setFav(!fav);
    dispatch(addFavroite(data));
};

//remove from favroite
export const removeFavroite = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    name: string,
    dispatch?: any,
) => {
    e.stopPropagation();
    dispatch(removeFromFavroite(name))
};