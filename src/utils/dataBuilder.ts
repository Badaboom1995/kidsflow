type TData = Record<string, any>

interface IDataBuilder {
    data: TData
    mergeField: (
        keys: string[],
        callback: (keys: string[], data: TData) => unknown,
        removeOrigin: boolean
    ) => TData
    normalize: (adapter) => this
    cut: (prop: string) => unknown
}

export const deepClone = (data) => JSON.parse(JSON.stringify(data))
export const enrichData = (arr, key, value) => arr.map(item => ({ ...item, [key]: value }))

export default class DataBuilder implements IDataBuilder {
    data: TData = {}
    constructor(data) {
        this.data = deepClone(data);
    }
    mergeField(keys, callback, removeOrigin) {
        const result = callback(keys, this.data);

        if (removeOrigin) {
            keys.forEach((key) => {
                delete this.data[key];
            });
        }
        return this;
    }
    normalize(adapter) {
        for (let key in adapter) {
            this.data[key] = adapter[key](this.data[key]);
        }
        return this;
    }
    cut(propName) {
        const result = deepClone(this.data[propName])
        delete this.data[propName]
        return result;
    }
    cutMany(props: any[]) {
       // props.forEach()
    }
    split(splitKeys: string[], restKey: string) {
        const result = {}
        splitKeys.forEach(key => {
            result[key] = deepClone(this.data[key])
            delete this.data[key]
        })
        result[restKey] = deepClone(this.data)
        this.data = result
        return this;
    }
    unwrap(key: string) {
        this.data = { ...this.data[key] }
        return this;
    }
    allToString(target?: string): this {
        const handleObj = (obj) => {
            for (let key in obj) {
                switch (typeof obj[key]) {
                    case 'number':
                        obj[key] = obj[key].toString()
                        break;
                    case 'boolean':
                        obj[key] = obj[key] ? '1' : '0'
                        break;
                    default:
                        break;
                }
            }
        }
        const handleEntity = (entity) => {
            if (Array.isArray(entity)) {
                entity.forEach(item => handleObj(item))
            } else if (typeof entity === 'object') {
                handleObj(entity)
            } else {
                throw new Error('Неверный формат данных')
            }
        }

        handleEntity(target ? this.data[target] : this.data)
        return this;
    }
    only(keys: string[], target?: string) {
        const handleFunc = (data) => {
            const result = {}
            if (Array.isArray(data)) {
                const resultData = data.map(item => {
                    const result = {}
                    keys.forEach(key => {
                        result[key] = item[key];
                    })
                    return result
                })
                return resultData
            } else if (typeof data === 'object') {
                keys.forEach(key => {
                    result[key] = data[key]
                })
                return result
            } else {
                throw new Error('Неверный формат данных')
            }
        }
        if (target) {
            this.data[target] = handleFunc(this.data[target])
            return this
        }
        this.data = handleFunc(this.data)
        return this;
    }
}