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
