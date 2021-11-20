import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { championsActions } from "../actions/champions"

export const useChampionCard = () => {

    const dispatch = useDispatch();

    const { actGetChampionsList } = championsActions();

    const { champions } = useSelector(state => state.champions);

    useEffect(() => {
        dispatch(actGetChampionsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const tags ={
        Assassin :'https://i.pinimg.com/originals/e8/47/3a/e8473a6f08154fa824335699828d57b1.png',
        Fighter :'https://static.wikia.nocookie.net/roleo-que-no-es-de-lol/images/9/92/Icono_Luchador.png/revision/latest?cb=20181122190750&path-prefix=es',
        Mage :'https://static.wikia.nocookie.net/leagueoflegendsoficial/images/6/69/Mago_old.png/revision/latest?cb=20160701013248&path-prefix=es',
        Marksman :'https://static.wikia.nocookie.net/leagueoflegendsoficial/images/3/37/Tirador_old.png/revision/latest?cb=20160701013315&path-prefix=es',
        Support :'https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Support_Role.png/revision/latest?cb=20141008220013&path-prefix=es',
        Tank :'https://static.wikia.nocookie.net/leagueoflegendsoficial/images/9/91/Tanque_old.png/revision/latest?cb=20160701013307&path-prefix=es'
    }

    const getTagsByRole = (role) => tags[role];

    return {
        champions,
        getTagsByRole
    }
}
