Feature:
    Here is what I would like to write here to this feature file.

    @Pending
    Scenario: Check title of website after search
        Given I open the url "http://google.com"
        When I set "WebdriverIO" to the inputfield "#lst-ib"
        And I press "Enter"
        Then I expect that the title is "WebdriverIO - Google-keresés"
        And I pause for 5000ms

    @Pending
    Scenario: This is the first concrete scenario
        Given I open the url "https://bet.szerencsejatek.hu/cmsfiles/otos.html"
        And I pause for 1000ms
        And Collect the data to analyze "50" week
        And I pause for 1000ms

    Scenario: This is the first concrete scenario
        Given I open the url "https://bet.szerencsejatek.hu/jatekok/otoslotto/szamstatisztika"
        And I pause for 1000ms
        And Guess the lotto number "2" times
        And I pause for 5000ms
