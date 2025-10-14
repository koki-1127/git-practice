public with sharing class InventoryController {
    @AuraEnabled(cacheable=true)
    public static List<Productc_c> getInventoryList(){
        return [
            SELECT Id, Name, Productc_c, Stock_c
            FROM Productc_c
            ORDER BY Name
        ];
    }
}
