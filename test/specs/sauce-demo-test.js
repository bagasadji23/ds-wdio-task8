
describe('Test Sauce Demo', () => {
    it('Test 1 Login Succesfully', async () => {
        await browser.url("https://www.saucedemo.com");

        // Fill in the username and password
        const usernameTextBox = await browser.$("#user-name");
        const passwordTextBox = await browser.$("#password");

        // Click on the login button
        const loginButton = await browser.$('//input[@type="submit"]');


        // Fill in the username and password
        await usernameTextBox.addValue("standard_user");
        await passwordTextBox.addValue("secret_sauce");

        // Click on the login button
        await loginButton.click();

        await browser.pause(2000);

        // Check if the website title is displayed
        await expect(browser).toHaveTitle(expect.stringContaining('Swag Labs'))

        // Checck website url is correct
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
       
    });

    it('Test 2 Add To Cart', async () => {
        await browser.url("https://www.saucedemo.com");

        // Fill in the username and password
        const usernameTextBox = await browser.$("#user-name");
        const passwordTextBox = await browser.$("#password");
        
        // Click on the login button
        const loginButton = await browser.$('//input[@type="submit"]');
        
        // Click on the Add to Cart button
        const AddToCartButton1 = await browser.$('//button[@id="add-to-cart-sauce-labs-backpack"]');
        const AddToCartButton2 = await browser.$('//button[@id="add-to-cart-sauce-labs-bike-light"]');
        
        // Check if the cart icon is displayed
        const cartIcon = await browser.$("#shopping_cart_container");
        

        await usernameTextBox.addValue("standard_user");
        await passwordTextBox.addValue("secret_sauce");
        await loginButton.click();
        await AddToCartButton1.click();
        await AddToCartButton2.click();

        await browser.pause(3000);
        
        // Check if the cart icon is displayed
        await expect(cartIcon).toBeDisplayed()

        // Checck website url is correct
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });         
});