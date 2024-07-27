
---

Title : Git commands

Description : Some important git commands

---



[Index](/
)



# Git commands


## configuring git 

<font color="#6495ED">
$ git config user.name

$ git remote add origin git@github.com/<username>/<repositoryname.git>

// if origin already exists

// to see which origin

$ git remote -v

// to set a particular origin

$ git remote set-url origin ssh://git@github.com/<username>/<repositoryname.git>


## staging

// add a file to stage

$ git add [file_name]

// add all the files in current directory to stage

$ git add .


// remove a file

$ git rm -r [file_name] 


// to check the files added to stage

$ git status

// to remove a file from stage

$ git restore --stage filename

// to commit the stage

$ git commit -m "message"

// push the files to remote repository where origin was set

$ git push -u origin <branch name>

// if branch name is master

$ git push -u origin master
</font>

If you create a branch in your local repository, the remote repository is not aware of the branch’s existence. Before you can push the branch code in the remote repository, you set the remote repository as the upstream branch using the git pushcommand. This command simultaneously sets the upstream branch and pushes the branch contents to the remote repository.

$ git push --set-upstream origin <branch name> 

## ssh authentication

$ ssh -T git@github.com


## working with branches

// list all branches

$ git branch

$ git branch -a

$ git branch [branch_name] // creates a new branch

$ git branch -d [branch_name] // deletes the branch

$ git push origin --delete [branch_name] // deletes remote branch

$ git checkout -b [branch_name] // create a branch and switch to it

$ git checkout -b [branch_name] origin/[branch_name]// clone a remote branch and switch to it

$ git branch -m [old_branch_name] [new_branch_name] // rename a branch

$ git checkout [branch_name] // switch to branch

$ git checkout - // switch to branch last checked out



## sub tree
// branch gh-pages

// git branch gh-pages

$ git subtree push --prefix dist origin gh-pages


## Resetting head

$ git log --oneline

$ git reflog

$ git reset --hard HEAD // resets head

$ git reset --hard HEAD@{N} // resets head to that row

$ git reset --hard HEAD^ // deletes the head