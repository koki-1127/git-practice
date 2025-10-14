import { LightningElement } from 'lwc';
import ContactSearch from '@salesforce/apex/sampleComponentController.ContactSearch'

export default class SampleComponent extends LightningElement {
    keyword = '';
    error = undefined;
    contactList = [];

    handleChange(event){
        this.keyword = event.target.value;
    }
    handleClick(){
        ContactSearch({keyword : this.keyword})
        .then( result => {
            this.contactList = result;
            this.error = undefined;
        })
        .catch( error => {
            this.error = error;
            this.contactList = [];
        });
    }
}
