import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState, createContext, useContext } from "react";

export const TotalRoundsGlobalDataContext = createContext("5");
export const TotalRoundsGlobalDispatchContext = createContext(null);

export function useBaseTotalRoundsGlobalData(){
    return useContext(TotalRoundsGlobalDataContext);
}

export function useBaseTotalRoundsGlobalDispatch(){
    return useContext(TotalRoundsGlobalDispatchContext);
}

export function BaseTotalRoundsProvider({children}){
    let [baseTotalRounds, setTotalRounds] = useState("5");

    let [baseTotalRoundsLocalStorage, setTotalRoundsLocalStorage] = useLocalStorage("quiz-baserounds", 5);

    useEffect(() => {
        setTotalRounds(baseTotalRoundsLocalStorage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTotalRoundsLocalStorage(baseTotalRounds)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [baseTotalRounds]);

    return (
        <TotalRoundsGlobalDataContext.Provider value={baseTotalRounds}>
            <TotalRoundsGlobalDispatchContext.Provider value={setTotalRounds}>
                {children}
            </TotalRoundsGlobalDispatchContext.Provider>
        </TotalRoundsGlobalDataContext.Provider>
    )
}