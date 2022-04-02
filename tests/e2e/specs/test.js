describe("My First test", () => {
  ////////////////////////
  //First Scenario
  // open home page
  // mock the employees request
  // assert employees data is apearing
  // assert on team perofrmance page link text and href

  ///////////////////////
  // Second Scenario
  // open home page
  // mock the employees request
  // click load more button
  // assert on request is sent with correct params
  // assert on data appended to table correctly

  ///////////////////////
  //First Scenario

  it("Visits the Sales Team Page", () => {
    cy.visit("/GetAll/SalesTeam");
  });

  it("Check Employees Data Fecthed and Data is Apearing at list", () => {
    cy.visit("/GetAll/SalesTeam");

    cy.request("https://fe-task.getsandbox.com/employees").as("employees");

    cy.get("@employees").should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.employees).to.be.a("array");
    });
  });

  it("Check Employees Data is Apearing at list", () => {
    const items = [
      {
        email: "moses_mueller@zesla.com",
        id: "61e5374571cd8c1c82d8bfe2",
        performance_index: 0.12,
        position: "lead",
        profile: {
          about:
            "Minim nulla irure officia id consequat et minim aute aute veniam commodo. Laborum reprehenderit laboris voluptate culpa do minim enim do labore anim laborum do tempor.",
          address: "94 Dakota Place, Englevale, Connecticut",
          avatar: "https://i.pravatar.cc/64?img=24",
          location: { lat: -24.657217, long: 171.943328 },
          name: "Moses Mueller",
        },
        start_date: "2021-02-20T17:24:55.807Z",
      },
    ];
    cy.get("table tr td").contains(items[0].email);
  });

  ///////////////////////
  //Second Scenario

  it("Click on load more button", () => {
    let page =1 

    cy.get("[data-cy=loadmore]").click();

    page += 1

    cy.intercept({
      url: 'https://fe-task.getsandbox.com/employees',
      query: { page:page.toString() },
    }).as('employees')
    
    cy.request("https://fe-task.getsandbox.com/employees").as("employees");

    cy.get("@employees").should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.employees).to.be.a("array");
    });
  });
});
