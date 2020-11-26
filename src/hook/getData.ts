import {useEffect, useState} from "react";

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getData = async (): Promise<void> => {
            setIsLoading(true);
            try {
                const result = await req<T>(endpoint, query);

                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, deps);
}