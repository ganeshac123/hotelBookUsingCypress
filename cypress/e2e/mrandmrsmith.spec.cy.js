describe('mrandmrssmith hotel booking test', () => {
  it('hotel booking test', () => {
    cy.visit('https://www.mrandmrssmith.com/')
      .reload(true)
      .get('#react-s_query').should('be.visible').type('London')
      .get('.enterTrigger').click()
      .get('.date-from').should('be.visible').click({ force: true })
      .get('[aria-label="Choose Tuesday, August 30, 2022 as your check-in date. It’s available."]').click()
      .get('.calendarDay--hoveredSpan').should('be.visible').click({ force: true })
      .get('#s_search').should('be.visible').click()
      .get('[data-slug="the-lost-poet"]').click()
      .get('.showBestPriceGuarantee.as-offer .js-bookNowButton').click()
      .get('.quick-checkout-inner .j-confirmButton').click()

  })
})
