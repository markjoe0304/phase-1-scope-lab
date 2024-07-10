// Write your solution in this file!
var customerName = 'bob';
function getCustomerName() {
    return customerName;
}
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
} 
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite the best customer
function overwriteBestCustomer(newFavorite) {
    bestCustomer = newFavorite;
}

// Function to change the least favorite customer
function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'initial least favorite'; // Declare leastFavoriteCustomer
    leastFavoriteCustomer = 'new least favorite'; // Attempt to reassign, this will throw an error
}

module.exports = {
    customerName,
    returnsCustomerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer
};