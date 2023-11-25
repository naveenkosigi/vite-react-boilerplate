import { useTranslation } from "react-i18next";

const Consents = () => {

    const {i18n , t} = useTranslation();
    
    return(
        <>
            {t("consents.demo")}
        </>
    )
}

export default Consents;