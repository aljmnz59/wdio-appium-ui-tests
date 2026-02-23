import { $, expect } from '@wdio/globals'

export class CatalogPage  {
   //selectors
    get appLogo(){
        return $('~App logo and name');
    }

    get appMenu(){
        return $('~View menu');
    }

    get appTwitter(){
        return $('~Twitter');
    }

    get appFacebook(){
        return $('~Facebook');
    }

    get appLinkedIn(){
        return $('~LinkedIn');
    }

    get appCopyright(){
        return $('//android.widget.TextView[@elementId="00000000-0000-015c-ffff-ffff00000026"]');
    }

    get catalogScreen(){
        return $('//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup')
    }

    get catalogSort(){
        return $('~Shows current sorting order and displays available sorting options');
    }

    get catalogSortDialog(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup')
    }

    get ascNameSort(){
        return $('~Ascending order by name');
    }

    get descNameSort(){
        return $('~Descending order by name');
    }

    get ascPriceSort(){
        return $('~Ascending order by price');
    }

    get descPriceSort(){
        return $('~Descending order by price');
    }

    get appCart(){
        return $('~Displays number of items in your cart');
    }
    
    //methods
    // public async login (username: string, password: string) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    async assertPageLogo(){
        await expect(this.appLogo).toBeDisplayed();
    }

    async assertPageMenu(){
        await expect(this.appMenu).toBeDisplayed();
    }

    async assertTwitterIcon(){
        await expect(this.appTwitter).toBeDisplayed();
    }

    async assertFacebookIcon(){
        await expect(this.appFacebook).toBeDisplayed();
    }

    async assertLinkedInIcon(){
        await expect(this.appLinkedIn).toBeDisplayed();
    }

    async clickSort(){
        await this.catalogSort.click();
    }

    async assertSortOptions(){
        await expect(this.catalogSortDialog).toBeDisplayed();
        await expect(this.ascNameSort).toBeDisplayed();
        await expect(this.descNameSort).toBeDisplayed();
        await expect(this.ascPriceSort).toBeDisplayed();
        await expect(this.descPriceSort).toBeDisplayed();
    }

    async swipeCatalog(){
        await browser.swipe({
            scrollableElement: this.catalogScreen,
            percent: 0.9,
            duration: 100
        });
    }
}

export default new CatalogPage();
