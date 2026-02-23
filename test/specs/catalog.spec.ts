
import CatalogPage from '../pageobjects/catalog.page.ts'
describe('Validate App Header', async () => {
    it('Verify app logo', async () => {
        await CatalogPage.assertPageLogo();
    })
    it('Verify app menu', async () => {
        await CatalogPage.assertPageMenu();
    })
})

describe('Validate App Footer', async () => {
    before(async () => {
        await CatalogPage.swipeCatalog();
    })
    it('Verify app twitter icon', async () => {
        await CatalogPage.assertTwitterIcon();
    })
    it('Verify app facebook icon', async () => {
        await CatalogPage.assertFacebookIcon();
    })
    it('Verify app linkedin icon', async () => {
        await CatalogPage.assertLinkedInIcon();
    })
})


describe('Validate Catalog feature', async () => {
    it('Verify catalog sorting', async () => {
        await CatalogPage.clickSort();
        await CatalogPage.assertSortOptions();
    })
})

