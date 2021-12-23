export class Inventory {

  url = '/inventory.html';
  elements = {
    getMenuIcon: () => cy.get('[id="react-burger-menu-btn"]'),
    getMenuSideBar: () => cy.get('.bm-item-list'),

  };

  navigate() {
    cy.visit(this.url);
  }

  sideBarOption(option: string) {
    this.elements.getMenuIcon().click();
    this.elements.getMenuSideBar().within(()=>{
      cy.contains(option).click();
    });
  }


}

export const InventoryPage = new Inventory();
