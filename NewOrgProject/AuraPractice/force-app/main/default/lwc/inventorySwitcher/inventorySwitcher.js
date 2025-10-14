import { LightningElement } from 'lwc';
import getAllInventoryList from '@salesforce/apex/InventorySwitcher.getAllInventoryList';
import getLowInventoryList from '@salesforce/apex/InventorySwitcher.getLowInventoryList';

export default class InventorySwitcher extends LightningElement {
    InventoryList = [];
    error;

    // 在庫表示を少なくするかどうかのフラグ格納
    showLowStock = false;

    // 初期表示設定
    connectedCallback(){
        this.loadInventory();
    }
    loadInventory(){
        const method = this.showLowStock ? getLowInventoryList : getAllInventoryList;
        method()
            .then(result => {
                this.InventoryList = result;
                this.error = undefined;
            })
    }

    handToggle(){
        
    }
}