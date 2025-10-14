public with sharing class sampleComponentController {
    @AuraEnabled
    public static List<Contact> ContactSearch(String keyword){
        if (String.isBlank(keyword)){
            return new List<Contact>();
        }
        return [
            SELECT FirstName, LastName, Email
            FROM Contact
            WHERE LastName LIKE : ('%' + keyword + '%')
            LIMIT 1000
        ];
    }
}
