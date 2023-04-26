var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
var mysql = require('mysql');
const jwt = require('jsonwebtoken');
const fileUpload = require('express-fileupload')
const path = require('path')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
    });

  

  // connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port:3306,
    database: 'ecommerceportal'
    });
    // connect to database
    dbConn.connect();

// Retrieve all users 
app.get('/users', function (req, res) {
dbConn.query('SELECT * FROM users', function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'users list.' });
});
});
// Retrieve user with id 
app.get('/user/:id', function (req, res) {
let user_id = req.params.id;
if (!user_id) {
return res.status(400).send({ error: true, message: 'Please provide user_id' });
}
dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results[0], message: 'users list.' });
});
});

// Add a new user  
app.post('/addnewuser', function (req, res) {
    let email = req.body.email;
    let user = req.body;
    if (!email) {
    return res.status(400).send({ error:true, message: 'Please provide user' });
    }
    dbConn.query('SELECT * FROM users where email=?', email, function (error, results, fields) {
        if (error) throw error;
        if(results[0]){
        return res.send({ error: false, data: results[0], message: 'users list.',userExist:true });
        }
        else{
            var sql = "INSERT INTO users (name,email,phone,username,password,address,city,zip,role_id) VALUES ('"+user.name+"', '"+user.email+"', '"+user.phone+"', '"+user.username+"', '"+user.password+"','"+user.address+"','"+user.city+"','"+user.zip+"',4)";
    dbConn.query(sql, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
        }
        });
    
    });

//  Update user with id
app.put('/user', function (req, res) {
let user_id = req.body.user_id;
let payload = req.body.user;
if (!user_id || !payload) {
return res.status(400).send({ error: payload, message: 'Please provide user and user_id' });
}
dbConn.query("UPDATE users SET ? WHERE id = ?", [payload, user_id], function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
});
});
//  Delete user
app.delete('/user', function (req, res) {
let user_id = req.body.user_id;
if (!user_id) {
return res.status(400).send({ error: true, message: 'Please provide user_id' });
}
dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
});
});

// Retrieve all products 
app.get('/products', function (req, res) {
    dbConn.query('SELECT pd.id,pd.title,pd.description,pd.price,pd.image_url,cat.id as category_id ,cat.category_name,cr.id as currency_id,cr.name,cr.symbol FROM products as pd left join categories as cat on cat.id = pd.category_id join currency as cr on cr.id = pd.currency_id;  ', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'products list.' });
    });
    });
    // Retrieve product with id 
    app.get('/product/:id', function (req, res) {
    let product_id = req.params.id;
    if (!product_id) {
    return res.status(400).send({ error: true, message: 'Please provide product_id' });
    }
    dbConn.query('SELECT pd.id,pd.title,pd.description,pd.price,pd.image_url,cat.id as category_id ,cat.category_name,cr.id as currency_id,cr.name,cr.symbol FROM products as pd left join categories as cat on cat.id = pd.category_id join currency as cr on cr.id = pd.currency_id where pd.id=?', product_id, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'products list.' });
    });
    });
    
    //add new product
app.post('/addnewproduct', function (req, res) {
    let product = req.body;
    
            var sql = "INSERT INTO products (title,description,image_url,sku,quantity,price,discount_price,category_id) VALUES ('"+product.title+"', '"+product.description+"','"+product.image_url+"','"+product.sku+"','"+product.quantity+"','"+product.price+"','"+product.discount_price+"','"+product.category_id+"')";
    dbConn.query(sql, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'New product has been created successfully.' });
    });
        
        });
    
    //  Update product with id
    app.put('/product', function (req, res) {
    let product_id = req.body.product_id;
    let title = req.body.product.title;
    if (!product_id || !title) {
    return res.status(400).send({ error: title, message: 'Please provide product and product_id' });
    }
    dbConn.query("UPDATE products SET title = ?,description = ?,image_url= ?,sku=?,quantity= ?,price= ?,discount_price= ?,category_id = ? WHERE id = ?", [title,
        req.body.product.description,
        req.body.product.image_url,
        req.body.product.sku,
        req.body.product.quantity,
        req.body.product.price,
        req.body.product.discount_price,
        req.body.product.category_id,
        product_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'product has been updated successfully.' });
    });
    });
    //  Delete product
    app.delete('/product', function (req, res) {
    let product_id = req.body.product_id;
    if (!product_id) {
    return res.status(400).send({ error: true, message: 'Please provide product_id' });
    }
    dbConn.query('DELETE FROM products WHERE id = ?', [product_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'Product has been updated successfully.' });
    });
    });

    // Retrieve all categories 
app.get('/categories', function (req, res) {
    dbConn.query('SELECT * FROM categories', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'categories list.' });
    });
    });
    // Retrieve category with id 
    app.get('/category/:id', function (req, res) {
    let category_id = req.params.id;
    if (!category_id) {
    return res.status(400).send({ error: true, message: 'Please provide category_id' });
    }
    dbConn.query('SELECT * FROM categories where id=?', category_id, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'categories list.' });
    });
    });
    
    //add new category
app.post('/addnewcategory', function (req, res) {
    let category = req.body;
   let parent_id = category.parent_id ?category.parent_id:0;
            var sql = "INSERT INTO categories (category_name,category_description,parent_id) VALUES ('"+category.category_name+"','"+category.category_description+"','"+parent_id+"')";
    dbConn.query(sql, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'New category has been created successfully.' });
    });
        
        });
    
    //  Update category with id
    app.put('/category', function (req, res) {
    let category_id = req.body.category_id;
    let category_name = req.body.category.category_name;
    let category_description = req.body.category.category_description;
    let parent_id = req.body.category.parent_id ?req.body.category.parent_id:0;
    if (!category_id || !category_name) {
    return res.status(400).send({ error: category_name, message: 'Please provide category and category_id' });
    }
    dbConn.query("UPDATE categories SET category_name = ?,category_description=?,parent_id=? WHERE id = ?", [category_name,category_description,parent_id, category_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'category has been updated successfully.' });
    });
    });
    //  Delete category
    app.delete('/category', function (req, res) {
    let category_id = req.body.category_id;
    if (!category_id) {
    return res.status(400).send({ error: true, message: 'Please provide category_id' });
    }
    dbConn.query('DELETE FROM categories WHERE id = ?', [category_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'category has been updated successfully.' });
    });
    });

     // Retrieve all pages 
app.get('/pages', function (req, res) {
    dbConn.query('SELECT * FROM pages', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'pages list.' });
    });
    });


    // Retrieve page with id 
    app.get('/page/:id', function (req, res) {
    let page_id = req.params.id;
    if (!page_id) {
    return res.status(400).send({ error: true, message: 'Please provide page_id' });
    }
    dbConn.query('SELECT * FROM pages where id=?', page_id, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'pages list.' });
    });
    });
    
    //add new page
app.post('/addnewpage', function (req, res) {
    let page = req.body;
    
            var sql = "INSERT INTO pages (title,description,slug,parent_id,image_url) VALUES ('"+page.title+"','"+page.description+"','"+page.slug+"','"+page.parent_id+"','"+page.image_url+"')";
    dbConn.query(sql, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'New page has been created successfully.' });
    });
        
        });
    
    //  Update page with id
    app.put('/page', function (req, res) {
        let page_id = req.body.page_id;
        let title = req.body.page.title;
        if (!page_id || !title) {
        return res.status(400).send({ error: title, message: 'Please provide page and page_id' });
        }
        dbConn.query("UPDATE pages SET title = ? WHERE id = ?", [title, page_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'page has been updated successfully.' });
        });
        });
    //  Delete page
    app.delete('/page', function (req, res) {
    let page_id = req.body.page_id;
    if (!page_id) {
    return res.status(400).send({ error: true, message: 'Please provide page_id' });
    }
    dbConn.query('DELETE FROM pages WHERE id = ?', [page_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'page has been updated successfully.' });
    });
    });

    //  login user
app.post('/login', function (req, res) {
    let username = req.body.username;
    let password = req.body.password
    if (!username) {
    return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbConn.query('select * from  users WHERE username = ? and password =?', [username,password], function (error, results, fields) {
    if (error) throw error;let  token ;
    if(results.length>0){
    token = jwt.sign(
        {username },
        username,
        {
          expiresIn: "1h",
        }
      );
    }
    return res.send({ error: false, data: results[0], token: token });
    });
    });

    //

    app.post('/uploads', function(req, res) {
        
        const file = req.files.upload
        const image  = new Date().getTime()+'_'+file.name;
        const filePath = path.join('D:\\Aarti Work\\EcommercePortal', 'public/assets/image', 'upload', `${image}`)
        file.mv(filePath, err => {
            if (err) return res.status(500).send(err)
            res.status(200).send(image);
        })

      })

// Retrieve categoryproduct with id 
app.get('/categoryproduct/:id', function (req, res) {
    let categoryproduct_id = req.params.id;
    if (!categoryproduct_id) {
    return res.status(400).send({ error: true, message: 'Please provide categoryproduct_id' });
    }
   
    dbConn.query('SELECT pd.id,pd.title,pd.description,pd.price,pd.image_url,cat.id as category_id ,cat.category_name,cr.id as currency_id,cr.name,cr.symbol FROM products as pd left join categories as cat on cat.id = pd.category_id join currency as cr on cr.id = pd.currency_id where pd.category_id=?', categoryproduct_id, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'categoryproduct list.' });
    });
    });
    let genrateOrder = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    }

    // create order
    app.post('/createorder', function (req, res) {
        let orders = req.body;
        let customerbilling = req.body.billing_info;
        let customershipping = req.body.shipping_info;               
        let order_products = req.body.product_info;
        var sql = "INSERT INTO customer_billing (country,first_name,last_name,company_name,address,address1,city,state,postcode,email_address,phone,create_an_account) VALUES ('"+customerbilling.country+"','"+customerbilling.first_name+"','"+customerbilling.last_name+"','"+customerbilling.company_name+"','"+customerbilling.address+"','"+customerbilling.address1+"','"+customerbilling.city+"','"+customerbilling.state+"','"+customerbilling.postcode+"','"+customerbilling.email_address+"','"+customerbilling.phone+"','"+customerbilling.create_an_account+"')";
        dbConn.query(sql, function (error, billing_results, fields) {
        if (error) throw error;
        let billing_id = billing_results.insertId;
        if(customerbilling.create_an_account){
            var sql = "INSERT INTO users (name,email,phone,username,address,city,zip,role_id) VALUES ('"+customerbilling.first_name+"','"+customerbilling.email_address+"','"+customerbilling.phone+"','"+customerbilling.email_address+"','"+customerbilling.address+"','"+customerbilling.city+"','"+customerbilling.postcode+"','4')";
            dbConn.query(sql, function (error, billing_results, fields) {
            if (error) throw error;
            })   
        }
         var sql = "INSERT INTO customer_shipping (country,first_name,last_name,company_name,address,address1,city,state,postcode,email_address,phone) VALUES ('"+customershipping.country+"','"+customershipping.first_name+"','"+customershipping.last_name+"','"+customershipping.company_name+"','"+customershipping.address+"','"+customershipping.address1+"','"+customershipping.city+"','"+customershipping.state+"','"+customershipping.postcode+"','"+customershipping.email_address+"','"+customershipping.phone+"')";
        dbConn.query(sql, function (error, shipping_results, fields) {
        if (error) throw error;
        let shipping_id = shipping_results.insertId;        
        var sql = "INSERT INTO orders (order_number,customer_id,subtotal,total,billing_address_id,shipping_address_id,status,payment_type,order_notes) VALUES ('"+orders.order_number+"','"+orders.customer_id+"','"+orders.subtotal+"','"+orders.total+"','"+billing_id+"','"+shipping_id+"','"+orders.status+"','"+orders.payment_type+"','"+orders.order_notes+"')";
        dbConn.query(sql, function (error, orders_results, fields) {
        if (error) throw error;
        let order_id = orders_results.insertId;
        let product_payload = [];
        order_products.forEach((item)=>{
        let product =[order_id,item.id,"1",item.price]
        product_payload.push(product);
        });
        var sql = "INSERT INTO order_products (order_id,product_id,product_quantity,price) VALUES ?";
        dbConn.query(sql,[product_payload], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New customershipping has been created successfully.' });
        });
        });
    });
    });
    });


    // PaymentMethods
app.get('/paymentmethods', function (req, res) {
    dbConn.query('SELECT * FROM payment_methods', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'paymentmethods list.' });
    });
    });


  // set port
  app.listen(5000, function () {
    console.log('Node app is running on port 5000');
    });
    module.exports = app;