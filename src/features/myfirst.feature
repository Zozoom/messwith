Feature:
    Here is what I would like to write here to this feature file.

    @Pending
    Scenario: Check title of website after search
        Given I open the url "http://google.com"
        When I set "WebdriverIO" to the inputfield "#lst-ib"
        And I press "Enter"
        Then I expect that the title is "WebdriverIO - Google-keresés"
        And I pause for 5000ms


    Scenario: This is the first concrete scenario
        Given I open the url ""
        And I pause for 5000ms
