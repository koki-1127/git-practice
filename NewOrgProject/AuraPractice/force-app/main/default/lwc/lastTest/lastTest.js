import { LightningElement, wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountTestController.getAccountList';

export default class LastTest extends LightningElement {
    accountList = [];
    error;

    @wire(getAccountList)
    wireAccount({data,error}){
        if(data){
            this.accountList = data;
            this.error = undefined;
        } else if (error){
            this.error = error;
            this.accountList = [];
        }
    }
    get limitedList (){
        return this.accountList.slice(0,5);
    }
}
