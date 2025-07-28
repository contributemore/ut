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
   this[database_length++] = new SearchPage("home/index.html", "Boutique", "Welcome to UFS Tutors Connecting Students  To Tutors  Best of the best  BROWSE BY MODULE CODES  MATM1644 Tutors  Copyright © 2025 ufstutors.co.za All Rights Reserved  CONTACT US E-mail info@ufstutors.co.za Search by module code  King of Log Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua R100/h UFS Tutors STSM1624  This module covers probability distributions, joint and conditional probabilities, expectations, variances, and independence  ACSF1623  This module covers actuarial financial reporting, focusing on core topics from CB1 course notes MATM1622  This module covers number systems, logic and set theory, proof techniques including mathematical induction and Newton’s method, MATM1644 This module covers integrals, differential equations, complex numbers, vectors, and matrix algebra Dipalo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua R100/h Ed Murphy Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua R100/h Learn with eMJAY Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua R100/h Disclaimer  ufstutors.co.za is an independent platform and is not affiliated with, endorsed by, or officially connected to the University of the Free State  UFS  All content and services offered are solely the responsibility of ufstutors.co.za  MATM1622 Tutors  Best of the best  King of Log Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua R100/h Dipalo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua R100/h Ed Murphy Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua R100/h Learn with eMJAY Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua R100/h  ", "");
   return this;
}
