import { LightningElement } from 'lwc';
import getAllOpportunityList from '@salesforce/apex/sampleOpportunityController.getAllOpportunityList';
import getClosedOpportunityList from '@salesforce/apex/sampleOpportunityController.getClosedOpportunityList';

export default class SampleOpportunity extends LightningElement {
    error = undefined;
    opportunityList = [];
    Closedflag = false;

    handleChange(event){
        this.Closedflag = event.target.checked;
    }
    handleClick(){
        const method = this.Closedflag ? getClosedOpportunityList : getAllOpportunityList;

        method()
            .then( result => {
                this.opportunityList = result;
                this.error = undefined;
            })
            .catch( error => {
                this.opportunityList = [];
                this.error = error;
            })
    }
}