// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("home/index.html", "Boutique", "Welcome to UFS Tutors  BETA  Connecting Students  To Tutors  Best of the best  BROWSE BY MODULE CODES  MATM1644 Tutors  CUSTOMER SERVICES  SOCIAL MEDIA  COMPANY  Copyright © 2021 WYSIWYG Web Builder  All Rights Reserved  CONTACT US E-mail info@something.com Search by module code  Women's T-Shirt Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua R100/h UFS Tutors STSM1624  This module covers probability distributions, joint and conditional probabilities, expectations, variances, and independence  ACSF1623  This module covers actuarial financial reporting, focusing on core topics from CB1 course notes MATM1622  This module covers number systems, logic and set theory, proof techniques including mathematical induction and Newton’s method, MATM1644 This module covers integrals, differential equations, complex numbers, vectors, and matrix algebra  ", "");
   return this;
}
