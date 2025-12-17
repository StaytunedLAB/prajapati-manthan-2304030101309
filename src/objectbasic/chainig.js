let company = {
    name: "Tech Corp",
    address: {
        city: "San Francisco",
        zip: 94105
    }
};

// Safe access without errors
console.log("Company city:", company.address?.city);
console.log("CEO name:", company.ceo?.name); // undefined, no error