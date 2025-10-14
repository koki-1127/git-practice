public with sharing class InventorySwitcher {
    @AuraEnabled
    public static List<Product__c> getAllInventoryList(){
        return [
            SELECT Id, Name, Product__c, Stock_c
            FROM Product__c
            ORDER BY Name
        ];
    }

    @AuraEnabled
    public static List<Product__c> getLowInventoryList(){
        return [
            SELECT Id, Name, Product__c, Stock_c
            FROM Product__c
            WHERE Stock_c < 10
            ORDER BY Name
        ]
    }
}
