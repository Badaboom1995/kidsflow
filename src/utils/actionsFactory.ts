import {createAsyncThunk} from "@reduxjs/toolkit";
type TActionName = `${'get'  | 'delete' | ''}/${string}`

/**
 * Returns action creator with installed namespace
 * @param namespace is namespace for your slice of Store
 * @returns { (props:any) => void } - the returned function
 */
 const actionsFactory = (namespace: string) => {
    /**
     * Returns action creator with installed namespace
     * @param name action name in particular format "methodName/entityName"
     * @param callback async method which will be executed and then returns value to slice
     * entityName uses for check if entity already exist
     */
    const actionCreator = <Props, ReturnType>(name: TActionName, callback: (props: Props) => Promise<ReturnType>) =>
        createAsyncThunk<ReturnType, Props>(`${namespace}/${name}`, async (props, {rejectWithValue, getState,}) => {
            try {
                const state = getState()
                const [methodType, entityName] = name.split('/')
                const currentValue = state[namespace][entityName]
                return currentValue ? currentValue : await callback(props)
            } catch (e) {
                rejectWithValue(e.message)
            }
        });
    return actionCreator
}
 const checkEntityInState = () => {

 }
export default actionsFactory