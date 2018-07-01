![cf](http://i.imgur.com/7v5ASc8.png) Lab 15- Binary Tree Data Structure
====
## To Submit this Assignment
* Read this document entirely and estimate how long this assignment will take.
* Work in a fork of this repository
* Work in a branch on your fork called `lab-15`
* Set up Travis CI on your repo
* Create a pull request from your `lab-15` branch to your master branch
* Submit on canvas a question and observation, your original estimate, how long you spent, and a link to your pull request

## Requirements
#### Configuration
<!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include all the standard configuration files and follow the same folder structure as the corresponding lecture for this lab.
  
#### Feature Tasks  
 * Implement an **in-order** traversal function that returns a string of the visited node's values.
      * For example : `6,8,7,9,2,1,4,3,5`
   
 #### Testing
* write at least one test assertion for each method of the Binary Tree Data Structure
* organize your tests into appropriate describe/test blocks for test output readability
   
## BONUS POINTS: Up to to 3 bonus points
 * Utilize Express to implement a **GET** route for your `inorder` traversal function that will traverse through the tree we built in lecture
 ### /api/inorder
   * Should return a 200 status code JSON string of the node's values when visited in an inorder traversal: `6, 8, 7, 9, 2, 1 ,4, 3, 5`
* Write tests for your `GET` route by making Superagent requests

####  Documentation
Big O time complexity: O(n) 

To run this program:

Click on click the button that says "Clone or download"
Copy the given link
In your terminal, in the directory that you would like to save the project in, git clone (paste link)
Navigate into the folder directory using the command  ```cd 15-BinaryTree```
Then, the command ```npm init -y```, and then ```npm i```
Open the project in your text editor using the command ```code .```
In your terminal, run a test by using the command ```npm run test```

