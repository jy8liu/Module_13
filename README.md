
  # 12 13_E_Commerce_Backend

  ## Description

    A sequelize back-end project of a consumer goods business with sql models of products, tags and categories.


  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshots](#screenshots)
  - [License](#license)

  ## Installation

    Create a .env and populate it with your credentials as DB_USER='' and DB_PASSWORD=''. Open a terminal, run npm install. Go to the db folder and  login with psql -U #username and run the sql file using the command \i schema.sql. Return to the root folder then run npm run seed and npm run start.

  ## Usage

    Open Insomnia, make a GET, POST, PUT, and DELETE request to the following routes : localhost:3001/api/categories/, localhost:3001/api/products/, and 
    localhost:3001/api/tags/.

  ### Video Walkthrough
  
  [Click Here](https://drive.google.com/file/d/1JaxpYeQkCtKFfZAoPBYBZQ8zhaD0rvxN/view?usp=sharing)
  
  ## Screenshots

    This is get results from localhost:3001/api/categories/.
  ![A Screenshot of the GET request](./assets/get_categories.png)

    This is get results from localhost:3001/api/categories/3.
  ![A Screenshot of the GET request with a param](./assets/get_one_categories.png)

    This is post results from localhost:3001/api/categories/ with a JSON body of category_name: Body Pillows.
  ![A Screenshot of the POST request](./assets/post.png)

    This is put results from localhost:3001/api/categories/6 with a JSON body of category_name: Yoyos.
  ![A Screenshot of the PUT request](./assets/put.png)

    This is delete results from localhost:3001/api/categories/7.
  ![A Screenshot of the DELETE request](./assets/delete.png)

  ## License 
  ### Badge 
  ![Static Badge](https://img.shields.io/badge/MIT-license-blue)

    
      MIT License

      Copyright (c) function getFullYear() { [native code] } 
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
      

  https://choosealicense.com/licenses/mit/
  

  