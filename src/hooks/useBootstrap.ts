import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router';
import { toast } from "react-toastify";
import DataBuilder from "utils/dataBuilder";

export function useBootstrap(bootstrap, onCreate, onUpdate) {
    const { id }: { id: string } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(bootstrap(id))
    }, []);

    return id ? { method: onUpdate, id } : { method: onCreate, id }
}

export type TEntity = Record<string, unknown>
export type TGetConfig = {
    getFunc: () => Promise<{ name: string, value: string }[]>
    dependencyKey: string
}
export type EntityMutationFunc = (payload: { entity: TEntity, actions: any, id?: string, builder?: DataBuilder }) => Promise<void>
export interface IBootstrap {
    getEntity: (id: string) => Promise<TEntity>
    onCreate: EntityMutationFunc
    onUpdate: EntityMutationFunc
    dictsConfig?: Record<string, TGetConfig>
    successUrl?: string
}

export function useStateBootstrap({ getEntity, onCreate, onUpdate, successUrl, dictsConfig }: IBootstrap) {
    const { id }: { id: string } = useParams();
    const [initialValues, setInitialValues] = useState(null)
    const [dicts, setDicts] = useState(null)
    const [isDataLoading, setDataLoading] = useState(true)
    const history = useHistory()

    const handleError = (error) => {
        if (error instanceof Error) {
            return error.message
        } else if (Array.isArray(error)) {
            return error.join()
        } else {
            return "Неизвестная ошибка"
        }
    }
    /*
    dictsConfig: {
        cat1: () => {}
        cat2: () => {}
        cat3: () => {}
    }

    loop
        getConfig -> getDictsList() -> setState(dicts) -> 
        [{name:cat1, value: bla}, {value: null, depId: }]
    */
    const handleDicts = () => {
        // load indpdnt => create trigger for dependency -> ..
    }
    const deps = []
    useEffect(() => {

        return () => {

        }
    }, [...deps.map(item => item.value)])



    const entityFunction = (entity, actions) => {
        const builder = new DataBuilder(entity)
        const currentFunc = id ? onUpdate : onCreate
        toast.promise(
            currentFunc({ entity, actions, id, builder }),
            {
                pending: 'Loading',
                success: {
                    render: ({ data }) => {
                        history.push(successUrl)
                        actions.resetForm()
                        return "Success"
                    }
                },
                error: {
                    render({ data }) {
                        return handleError(data)
                    }
                }
            })
    }

    useEffect(() => {
        if (id) {
            getEntity(id)
                .then(result => {
                    setInitialValues(result)
                })
                .catch(error => {
                    toast.error(error.message)
                })
                .finally(() => {
                    setDataLoading(false)
                })
        } else {
            setDataLoading(false)
        }
    }, []);

    useEffect(() => {
        if (initialValues && dicts) {
            setDataLoading(false)
        }
    }, [initialValues, dicts])

    return { method: entityFunction, id, initialValues, isDataLoading }
}

/*
Formik
    Form
        Field {name: dir1, getDict: func(),}
        Field {name: dir2, getDict: func(), dependsOn: 1}
        Field {name: dir3, getDict: func(), dependsOn: 2}
        Field { name: title }
        Field {name: stories }
    Form
Formik
*/

/*
[getDict, emptyLabel] = props
use
Select
    input
    label > name || loadLabel


------------------------

dicts: {
    1: {
        get: () => {}
    }
    2: {
        get: () => {}
        dependOn: 1
    }
    3: {
        get: () => {}
        dependOn: 2
    }
}
return {
    1: { value: [] | null, loading: boolean }
}

useEffect -> load independent dicts

Formik
    Form
        Field {name: dir1, dict: 1 }
        Field {name: dir2, dict: 2 }
        Field {name: dir3, dict: 3 }
        Field { name: title }
        Field {name: stories }
    Form
Formik

[dicts, ]

*/