import {IHomeService} from "@/app/services/cms/home/interfaces"
import * as data from "@/app/services/cms/home/data/data.json"
import { Root } from "../dtos";


export class HomeImpl implements IHomeService {

    private info: Root | any = data
    private static _instance: IHomeService

    constructor(){
        this.info = data;
    }

    static getInstance(): IHomeService {
        HomeImpl._instance = HomeImpl._instance || new HomeImpl();
        return this._instance
    }

    getCompanyDetails<T>(): T {
        return this.info.company_details;
    }

    getServices<T>(): T {
        return this.info.services;
    }

    getAboutUs<T>(): T {
        return this.info.about_us;
    }
    
    getPortfolio<T>(): T {
        return this.info.portfolio;
    }

    getClients<T>(): T {
        return this.info.clients;
    }

    getContact<T>(): T {
        return this.info.contacts;
    }

    getBackground<T>(): T {
        return this.info.home;
    }

    
}