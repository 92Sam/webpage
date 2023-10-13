export interface IHomeService {
    getCompanyDetails<T>(): T
    getBackground<T>(): T
    getServices<T>(): T
    getAboutUs<T>(): T
    getPortfolio<T>(): T
    getClients<T>(): T
    getContact<T>(): T
}