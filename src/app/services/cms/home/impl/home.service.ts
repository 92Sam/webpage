import {IHomeService} from "app/services/cms/home/interfaces"
import * as data from "app/services/cms/home/data/data.json"


export class HomeImpl implements IHomeService {
    
    getData(): Object {
        return data
    }
    
}