const products = [
    { id: 1, name: 'Phone', price: 400 },
    { id: 2, name: 'Laptop', price: 1500 },
    { id: 3, name: 'PC', price: 1200 }
];

const users = [
    { id: 1, username: 'alice', password: '$2a$10$W6hgVJfJgN/joB3L8npi5O6.BfQod2hLkSKAStfRHvYsPvq4n0yB2' }, // hashed password
    { id: 2, username: 'bob', password: '$2a$10$rcuJEx/qETt5ORhjzpqZTeZtQJUbddrwA2PRUR8U41/94FSx.0U6K' }  // hashed password
];

module.exports = { products, users };
