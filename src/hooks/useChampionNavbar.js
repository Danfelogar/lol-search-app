import { useForm } from "./useForm";

export const useChampionNavbar = () => {

    const [ formValues, handleInputChange ] = useForm({championName: ''});

    const championName = formValues.championName;

    return {
        formValues,
        championName,
        handleInputChange,
    }
}
