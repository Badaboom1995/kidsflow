import DataBuilder, { enrichData } from "utils/dataBuilder";
import { IBootstrap } from 'hooks/useBootstrap'
import organizationsService from "services/organizations";


const handleTime = (timeString: string) => {
    const splitted = timeString.split(':')
    return `${splitted[0]}:${splitted[1]}`
}

export const orgActions: IBootstrap = {
    getEntity: async (id) => {
        const entity = await organizationsService.getById(id);
        return new DataBuilder(entity.organization)
            .only(['eventDirectionId', 'name'], 'directions')
            .only(['id', 'cloudUrl'], 'photos')
            .normalize({
                ageFrom: (value) => value.toString(),
                ageTo: (value) => value.toString(),
                photos: (values) => values.map(item => ({...item, url: item.cloudUrl})),
                businessHours: (values) => values.map(item => ({
                    ...item,
                    completed:true,
                   openTime: handleTime(item.openTime),
                   closeTime: handleTime(item.closeTime)
                }))
            })
            .mergeField(['directions'], (keys, data) => {
                if(data) {
                    const splitted = data?.directions[0].eventDirectionId.split('-')
                    data.direction = `${splitted[0]}-${splitted[1]}`
                    data.category = `${data?.direction}-${splitted[2]}`
                    data.categoryHigh = splitted[3]  ? `${data.category}-${splitted[3]}` : ''
                    console.log(data)
                }
            }, true)
            .data
    },
    onCreate: async ({ entity }: any) => {
        const builder = new DataBuilder(entity);
        const data = builder
            .mergeField(['direction', 'category', 'categoryHigh'], (keys, data) => {
                data.directions = [(data.categoryHigh || data.category)]
            }, true)
            .mergeField(['address'], (keys, data) => {
                const splitted = data.address.split("&")
                data.lat = splitted[0]
                data.lon = splitted[1]
                data.address = splitted[2]
            }, false).data
        console.log('data',data)
        await organizationsService.create(data, entity.partnerId)
    },
    onUpdate: async ({ entity, id,builder }) => {
        const data = builder
            .mergeField(['direction', 'category', 'categoryHigh'], (keys, data) => {
                data.directions = [(data.categoryHigh || data.category)]
            }, true).data
        console.log('data',data)
        await organizationsService.update(data, id)
    },
}
