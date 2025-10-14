import { LightningElement,wire} from 'lwc';

export default class WireTest extends LightningElement {
    @wire(getInventoryList) WireTest;
}