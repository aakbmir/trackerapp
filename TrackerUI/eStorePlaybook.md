eStore Microservice Architectyre Style Based building Cloud Native Application
=======

## Overview

This playbook provides cloud native application (‘build on cloud’) development using microservice architecture on OpenShift Container Platform. A Retail eStore application will be used for microservice demo. 

eStore web application functionally permits retail customer to browse through the product catalog on web browser. Customer can view the product details page, providing product specific information like product image, current stock, price, etc. This application lets customer manage its shopping cart by viewing, adding & deleting the products from the cart/basket.  

Technically, eStore is a containerized polyglot microservices application consisting of services based on Open Liberty, JBoss EAP, NodeJS, Spring Boot and running on OpenShift. 

It demonstrates IBM Digital Microservice Builder (DMB) tool to generates microservice code skeleton and check-in the source code into repository, making developer to concentrate on writing business logic.
OpenShift & Istio platform helps to wire up small microservices into a larger application, this demo illustrates various capabilities like resiliency (‘circuit breaking’), security ( 'mutual tls'), auto scaling (‘cpu based horizontal scaling’) using microservice architectural principles.

## trackerapp Architecture Overview
Retail trackerapp application demonstrates how small microservices connects into a larger application using microservice architecture  leveraging Istio Service Mesh.

![Image](trackerapp_ArchOverview.png "icon")

## trackerapp Technology Stack
trackerapp is built on polygot technologies. Below Tables provides microservice implementation technology stack

![Image](trackerapp_TechStack.png "icon")

## Using trackerapp Web
trackerapp is hosted in IBM Cloud OpenShift Cluster.

### Opening trackerapp App in Web Browser
To access trackerapp please click [trackerapp](https://trackerapp.experiential-squad-na-56325c34021cf286d0e188cc291cdca2-0001.us-east.containers.appdomain.cloud).

### trackerapp Authentication
After hitting base URL, it ask for Username and password. Please use below details
  * UserName: demo
  * Password: demo@123

### trackerapp Home Page
---
Below details are shown in home page
  * **Product Catalog** - Various Product in trackerapp catalog for user to browse, user can add the product to his cart by clicking "Add to Cart"
  * _italic_**Inventory Details** - It provides the product price and product stock status in trackerapp inventory application
  * _italic_**Shopping Cart** - On clicking of Shoping Cart Link, user can view the product added

Snapshot of trackerapp Web Page
![Image](trackerappHomePage.jpg "icon")

### Testing Resiliency on Inventory Service
---
Istio Circuit Breaker policy applied on Inventory service.

#### Installing siege http load tester tool
```
Running on Linux Terminal
wget http://download.joedog.org/siege/siege-latest.tar.gz
tar zxvf siege-latest.tar.gz
cd siege-4.0.0/
./configure 
make
sudo make install
```
#### Running Load Tester on trackerapp
 siege -v -c 1 -r 1  --content-type "application/json" 'http://trackerappwebgw.experiential-squad-na-56325c34021cf286d0e188cc291cdca2-0001.us-east.containers.appdomain.cloud/api/products/ POST {"operationId":"catalogFindAllProduct"}'

  * c: No of connection to open
  * r: No of request per connection
  
Refresh trackerapp Web click [trackerapp](https://trackerapp.experiential-squad-na-56325c34021cf286d0e188cc291cdca2-0001.us-east.containers.appdomain.cloud/product). You can see Price Attribute will show 'Unavailable' value.

### Testing Istio Security on Catalog Service
Istio Security Policy is been applied on Catalog Service.

So when we try to access catalog service from internet [catalogservice](https://catalogservice.experiential-squad-na-56325c34021cf286d0e188cc291cdca2-0001.us-east.containers.appdomain.cloud/catalogsvc/api/products)., it will not allow to access the API, but On trackerapp Web Page, it is still accessible
