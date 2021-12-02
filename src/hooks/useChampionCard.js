import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { championsActions } from "../actions/champions"

export const useChampionCard = () => {

    const dispatch = useDispatch();

    const { actGetChampionsList } = championsActions();

    const { champions } = useSelector(state => state.champions);

    // const filterChampionByName = ()=>{
    //     //es para que me retorne algo es decir ver algo en el screen
    //     return champions.filter((champion)=>{
    //         //esto es lo mismo que decir "searchChampion === '' "
    //         if(!searchChampion ){
    //             return champion
    //         }else {
    //             return champion.id.toLowerCase().includes(searchChampion)
    //         }
    //     })
    // }


    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 700);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {

        if(champions.length === 0){
            dispatch(actGetChampionsList())
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const tags ={
        Assassin :'https://i.pinimg.com/originals/e8/47/3a/e8473a6f08154fa824335699828d57b1.png',
        Fighter :'https://img.rankedboost.com/wp-content/uploads/2017/07/Fighter.png',
        Mage :'https://img.rankedboost.com/wp-content/uploads/2017/07/Mage-1.png',
        Marksman :'https://www.pngkit.com/png/full/26-263030_marksman-tier-list-league-of-legends-roles-png.png',
        Support :'https://i.pinimg.com/originals/bf/3f/88/bf3f88c18d6385422c5bb23a595327d0.png',
        Tank :'https://img.rankedboost.com/wp-content/uploads/2017/07/Tank-1.png'
    }

    const getTagsByRole = (role) =>{ return tags[role]};


    return {
        champions,
        getTagsByRole,
        loading
    }
}
