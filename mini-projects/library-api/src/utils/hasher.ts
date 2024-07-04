import { v5 as uuidv5 } from 'uuid';

const NAMESPACE_OID = '6ba7b812-9dad-11d1-80b4-00c04fd430c8';
export const hashName = (name: string) => {
    return uuidv5(name, NAMESPACE_OID);
};