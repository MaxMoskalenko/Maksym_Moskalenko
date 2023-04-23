Feature: epam.com is working
  In order to check epam.com is working

  Scenario: Language selector
    Given I am on the epam.com
    When I click on the language selector
    Then I see the language selector is working
    Then I can select the language
  
  Scenario: Search in navbar
    Given I am on the epam.com
    When I click on the search in navbar
    Then I see the search in navbar is working
    Then I can search for something
  
  Scenario: Scrolling through page is working
    Given I am on the epam.com
    When I scroll through the page
    Then I see the scrolling is working
    When I scroll through the stats section
    Then scroll direction whoul change to horizontal

  Scenario: Case study section
    Given I am on the epam.com
    When I scroll through the page to the case study section
    Then I see the case study section is rendering correctly
    When I click on the case study pagination button
    Then I can see the case study is changing

  Scenario: News section
    Given I am on the epam.com
    When I scroll through the page to the news section
    Then I see the news section is rendering correctly
    When I click on "Learn more" link
    Then I can see the news is opening on the new page
  
  Scenario: Partners section
    Given I am on the epam.com
    When I scroll through the page to the partners section
    Then I see the partners section is rendering correctly
    When I click on the partner "Learn More About Our Partners" link
    Then I can see the partner is opening on the new page
  
  Scenario: Blog section
    Given I am on the epam.com
    When I scroll through the page to the blog section
    Then I see the blog section is rendering correctly
    When I click on the links on these elements
    Then I can see the blog is opening on the new page
  
  Scenario: Locations section
    Given I am on the epam.com
    When I scroll through the page to the locations section
    Then I see the locations section is rendering correctly
    Then I see the selector of world parts
    When I click on country name
    Then I can see all the offices across the country
