

**=>This is a recorded video showing the spec file running from cypress test runner**


https://user-images.githubusercontent.com/30286315/124400978-1fb3a380-dd2f-11eb-83d7-9cf574ca5c2a.mp4


# Oneline Retailer Automation

* This project run some basic automation test cases for the folllwing retailer site https://www.newegg.com/ that includes: 
1. Search for device and add it to the shopping cart 
2. Open the cart and checkout as guest 
3. Validate shipping address form error messages 
4. Fill the shipping  address form and continue 
 
## 1. Run the project

=> After installing the project you need to do the following:

### install the node_modules
>npm install

### If you want to launch the cypress test runner
>npx cypress open
After cypress test runner is opened select the AddToCartWithFillShippingAddress.js spec file 

## If you want to run the spec file from command line
>npm run cy:run --browser chrome --spec "cypress/integration/AddToCartWithFillShippingAddress.js"
![image](https://user-images.githubusercontent.com/30286315/124401588-e4b36f00-dd32-11eb-9fe9-9257a19eb467.png)
![image](https://user-images.githubusercontent.com/30286315/124401614-fe54b680-dd32-11eb-8f63-350d07d3bad9.png)

=> Video recorded by cypress after runnuing the spec file from cmd
https://user-images.githubusercontent.com/30286315/124401642-22b09300-dd33-11eb-8773-4b1d18c328d8.mp4



