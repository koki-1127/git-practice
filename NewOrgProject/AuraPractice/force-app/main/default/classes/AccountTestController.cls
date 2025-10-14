public with sharing class AccountTestController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [
            SELECT id, Name, Industry, Phone
            FROM Account
            ORDER BY Name
            LIMIT 1000
        ];
    }
}
