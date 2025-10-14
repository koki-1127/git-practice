import { LightningElement } from 'lwc';
import getRecentCases from '@salesforce/apex/CaseController.getRecentCases';

export default class CaseTest extends LightningElement {
    AllCaseList = [];
    error;

    @wire(getRecentCases)
    wiredCaseList ({data, error}){
        if (data){
            this.AllCaseList = data;
            this.error = undefined;
        } else if (error){
            this.error = error;
            this.AllCaseList = [];
        }
    }
    get limitedCaseList(){
        return this.AllCaseList.slice(0,5);
    }

}