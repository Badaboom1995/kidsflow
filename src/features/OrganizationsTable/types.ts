import { TGlobalControl } from 'parts/Table/types'

export interface IOrganizationTable {
    onRowClick?: (entilty: Record<string, any>) => void;
    controls?: TGlobalControl[]
    hideControls?: boolean;
}