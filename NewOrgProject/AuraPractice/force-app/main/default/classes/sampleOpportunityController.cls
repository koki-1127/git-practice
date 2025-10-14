public with sharing class sampleOpportunityController {
    @AuraEnabled
    public static List<opportunity> getAllOpportunityList(){
        return [
        SELECT Id, Name, CloseDate, AccountId
        FROM opportunity
        LIMIT 1000
        ];
    }

    @AuraEnabled
    public static List<opportunity> getClosedOpportunityList(){
        return [
            SELECT Id, Name, CloseDate, AccountId
            FROM opportunity
            WHERE IsClosed = true
            LIMIT 1000
        ];
    }
}
