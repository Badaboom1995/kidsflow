import { useEffect } from "react";
import { useParams } from 'react-router';

export function useBootstrap(bootstrap, onCreate, onUpdate) {
    const { id }: { id: string } = useParams();

    useEffect(() => {
        bootstrap(id)
    }, []);

    return id ? { method: onUpdate, id } : { method: onCreate, id }
}
