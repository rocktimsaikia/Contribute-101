## **Contribute101 [www.contribute101.herokuapp.com](https://contribute101.herokuapp.com/) **

---

### Introduction:

Contribution to Open Source Projects is a great way to enhanching your coding skills and along with expanding your knowledge on the new technologies. But top of that contributing to Open Source Projects is FUN.The joy of the first time when your pull request gets accepted is amazing. Which you are going to find today by contributing to this project.

### What we are gonna do :

So in this project you are going to create a bootstrap card of yourself by filling up some given things which we will talk later.
But for now lets get straight into work.

### Prerequisite :

- install [nodejs](https://nodejs.org) on your local machine globally.

## Steps :

1. Fork this repo.

![alt text](screenshots/fork.jpg)

---

2. Clone your forked repo on anywhere on your laptop/computer .And how we do that :

- Click on here.
  ![alt text](screenshots/clone.jpg)
- Copy this url
  ![alt text](screenshots/clone-copy.jpg)

- Now run this command
  `git clone URL`
  ![alt text](screenshots/git-clone.jpg)

---

3. Now go that project folder and open it with your favorite IDE. I am using [Visual Studio Code](https://code.visualstudio.com) for this project.

- Currently the file structure would look like this.

![alt text](screenshots/file_structures.jpg)

- Now open the terminal and run
  `npm install`
  ![alt text](screenshots/npm-install.jpg)
  [This will install all our needed dependencies]

- Now click on the _views_ folder and open up the _index.ejs_ file.
- Then look for the card template with the comment on above saying

  `<!--Copy these code below and Paste it right Above this comment "-->`

- Now COPY this card template code and PASTE in right above the comment line.

![alt text](screenshots/card-template.jpg)

- Cool and now just do these specific things
  - Write Your name on the first `'h5'` tag.
  - Write the name of your place where you live on the `'h6'` tag.
  - Then replace the `'li'` tags with 3 technologies that you are currently learning.
  - Then on the two last `'a'` tags add your **github** and **twitter** profile links on the `'href'` attributes respectively.
  - **DONE with the card thing.**

---

4.  Lets create a new remote branch and push our modified remote repo to our github repo. follow me :
    - `git checkout -b <BranchName>` [ex : `git checkout -b myCard`]
      ![alt text](screenshots/git-checkout.jpg)
    - `git add .`[don't forget the dot `'.'` in the end]
    - `git commit -m "Add YOURNAME's card"`[ex: git commit -m "Rocktim's card"]
    - `git push -u origin <Branchname>` [ex : `git push -u origin myCard`]
    - **DONE HERE ,Lets go to our github repo of this project**

---

5. Now you should see this button .Just click on this button.After that dont chnage anything and just create a pull request. **And We are done. Pheeewwwww!!!**

---

---

### \*After creating a successful pull request when you will go to github home page you should see your pull request on the up front. And as soon as i merge your code after reviewing it to my repo you will recieve an email from github and that pull request menu would be gone from your github's homepage. Enjoy then, You made your first open source contribution .
