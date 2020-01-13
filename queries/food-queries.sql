-- select all pizzas
SELECT * FROM products
WHERE product_type = 'pizza';

-- make a custom order and show the order total price
SELECT orders.customer_id AS customer, product_name AS food, SUM(price) AS order_total
FROM order_items
JOIN products ON products.id = order_items.product_id
JOIN orders ON orders.id = order_items.order_id
WHERE orders.id = 1
GROUP BY customer, food;

--For order confirmation: show customer by name, her order_id and the total price
SELECT customers.first_name AS name,
orders.id AS order_number,
SUM(products.price) AS order_total
FROM order_items
JOIN orders ON orders.id = order_items.order_id
JOIN customers ON customers.id = orders.customer_id
JOIN products ON order_items.product_id = products.id
GROUP BY name, order_number;
