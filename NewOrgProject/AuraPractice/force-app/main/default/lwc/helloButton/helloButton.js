import { LightningElement,wire} from 'lwc';
import getInventoryList from '@salesforce/apex/InventoryController.getInventoryList';

export default class HelloButton extends LightningElement {
    // 画面側で表示する為の文言を格納
    changeText = 'クリックしていません';

    // 三項演算子でクリック時のイベントハンドラを作成
    handleClick() {
        this.changeText = 
        // changeTextの内容を確認してtureかfalseか条件演算子で出してこの結果で以降の分岐で変わるって感じ
        (this.changeText === 'クリックしました')
        ? 'クリックしていません'
        : 'クリックしました';
    }
    @wire(getInventoryList) dataList;
}
