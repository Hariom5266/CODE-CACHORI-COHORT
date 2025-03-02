# Git & GitHub Guide for Learners

## 🚀 Introduction
Git is a **version control system** that helps track changes in code, making it easy to collaborate with a team. GitHub is a **cloud-based platform** where you can store and manage Git repositories online. This guide covers essential Git commands, best practices, and GitHub workflows.

---

## 🔧 Setting Up Git & GitHub

### 1️⃣ Install Git
#### Windows:
- Download and install from [Git Official Site](https://git-scm.com/downloads).

#### macOS:
```sh
brew install git
```

#### Linux:
```sh
sudo apt install git   # Ubuntu/Debian
sudo yum install git   # CentOS/RHEL
```

### 2️⃣ Configure Git
```sh
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```
Check if the configuration is successful:
```sh
git config --list
```

### 3️⃣ Create a GitHub Account
1. Go to [GitHub.com](https://github.com) and sign up
2. Verify your email address
3. Set up a profile picture and bio

### 4️⃣ Set Up SSH Key (Recommended)
Generate an SSH key:
```sh
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Add SSH key to GitHub:
1. Copy the SSH key to clipboard:
   ```sh
   # On macOS
   pbcopy < ~/.ssh/id_ed25519.pub
   
   # On Windows (using Git Bash)
   cat ~/.ssh/id_ed25519.pub | clip
   
   # On Linux
   cat ~/.ssh/id_ed25519.pub
   ```
2. Go to GitHub → Settings → SSH and GPG keys → New SSH key
3. Paste your key and save

---

## 📂 Creating & Connecting Repositories

### 1️⃣ Initialize a New Repository Locally
```sh
mkdir my-project
cd my-project
git init
```

### 2️⃣ Create a Repository on GitHub
1. Go to GitHub and click "New repository"
2. Name your repository and add an optional description
3. Choose public or private visibility
4. Click "Create repository"

### 3️⃣ Connect Local Repository to GitHub
```sh
git remote add origin https://github.com/username/repository.git
# OR if using SSH
git remote add origin git@github.com:username/repository.git
```

### 4️⃣ Clone an Existing Repository
```sh
git clone https://github.com/username/repository.git
# OR if using SSH
git clone git@github.com:username/repository.git
```

---

## 📝 Making Changes & Committing

### 1️⃣ Check the Current Status
```sh
git status
```

### 2️⃣ Add Files to Staging
```sh
git add filename    # Add a specific file
git add .           # Add all modified files
git add *.html      # Add all HTML files
git add src/        # Add all files in a directory
```

### 3️⃣ Commit Changes
```sh
git commit -m "Your commit message"
git commit -am "Add and commit in one step"  # Only works for modified files
```

### 4️⃣ Writing Good Commit Messages
- Be specific and concise
- Use imperative mood (e.g., "Add feature" not "Added feature")
- Keep the first line under 50 characters
- For complex changes, add details after a blank line:
```sh
git commit -m "Add user authentication
 
This implements the login and registration features with JWT authentication.
- Created user model
- Added validation
- Set up auth routes"
```

---

## 🚀 Pushing Changes to GitHub

### 1️⃣ Push to GitHub for the First Time
```sh
git push -u origin main   # Sets upstream and pushes
```

### 2️⃣ Push Subsequent Changes
```sh
git push   # After setting upstream
```

### 3️⃣ Push a Different Branch
```sh
git push origin feature-branch
```

### 4️⃣ Force Push (Use with Caution!)
```sh
git push -f origin main   # Overwrites remote history
```

### 5️⃣ Set Up GitHub Actions (CI/CD)
1. Create a `.github/workflows` directory in your repository
2. Add a YAML file like `main.yml` with your workflow configuration
3. Commit and push to GitHub
4. GitHub will automatically run your workflows

---

## 🔄 Branching, Merging & Collaboration

### 1️⃣ Work with Branches
```sh
git branch                # List all branches
git branch feature-branch # Create a new branch
git checkout feature-branch  # Switch to a branch
git checkout -b new-branch  # Create and switch to a new branch
git branch -m old-name new-name  # Rename a branch
```

### 2️⃣ Merge Changes
```sh
git checkout main
git merge feature-branch
```

### 3️⃣ Resolve Merge Conflicts
- Open conflicted files
- Edit to keep necessary changes
- Add the file and commit the changes
```sh
git add conflicted-file.txt
git commit -m "Resolve merge conflict"
```

### 4️⃣ Create a Pull Request on GitHub
1. Push your branch to GitHub:
   ```sh
   git push origin feature-branch
   ```
2. Go to your repository on GitHub
3. Click "Compare & pull request"
4. Fill in title and description
5. Click "Create pull request"

### 5️⃣ Code Review Process
1. Request reviewers on your PR
2. Address feedback and push changes
3. Merge when approved

---

## 📤 Pulling & Fetching Changes

### 1️⃣ Pull Latest Changes
```sh
git pull origin main
```

### 2️⃣ Fetch Updates Without Merging
```sh
git fetch
git fetch origin
git fetch --all  # Fetch from all remotes
```

### 3️⃣ Check Differences Before Pulling
```sh
git fetch
git diff origin/main
```

### 4️⃣ Pull with Rebase
```sh
git pull --rebase origin main
```

---

## 🚨 Undoing Changes

### 1️⃣ Discard Changes Before Staging
```sh
git checkout -- filename
git restore filename  # Git 2.23+
```

### 2️⃣ Unstage Files
```sh
git reset filename
git restore --staged filename  # Git 2.23+
```

### 3️⃣ Reset Last Commit
```sh
git reset --soft HEAD~1  # Keep changes but undo commit
git reset --hard HEAD~1  # Remove last commit and changes
```

### 4️⃣ Reverting Commits
```sh
git revert HEAD        # Revert the latest commit
git revert commit-hash # Revert a specific commit
```

### 5️⃣ Amend Commits
```sh
git commit --amend -m "New commit message"  # Change last commit message
git add forgotten-file.txt
git commit --amend --no-edit  # Add file to last commit without changing message
```

---

## 📌 Best Practices

✅ **Write clear, descriptive commit messages.**
✅ **Use branches for separate features or bug fixes.**
✅ **Always pull before pushing to avoid conflicts.**
✅ **Use .gitignore to exclude unnecessary files.**
✅ **Regularly review and clean up old branches.**
✅ **Commit early and commit often.**
✅ **Never commit sensitive data (passwords, API keys).**
✅ **Use meaningful branch names (feature/login, bugfix/header).**
✅ **Squash multiple commits before merging when appropriate.**
✅ **Document your code and update README files.**

---

## 🔒 Working with .gitignore

### 1️⃣ Create a .gitignore File
```sh
touch .gitignore
```

### 2️⃣ Common Patterns to Ignore
```
# Environment variables
.env
.env.local

# Dependencies
/node_modules
/vendor

# Build files
/build
/dist

# IDE files
.vscode/
.idea/

# System files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

### 3️⃣ Use Global .gitignore
```sh
git config --global core.excludesfile ~/.gitignore_global
```

---

## 📚 Advanced Git Techniques

### 1️⃣ Interactive Rebase
```sh
git rebase -i HEAD~3  # Rebase last 3 commits
```

### 2️⃣ Cherry-Pick Commits
```sh
git cherry-pick commit-hash
```

### 3️⃣ Git Bisect for Debugging
```sh
git bisect start
git bisect bad  # Current commit is bad
git bisect good commit-hash  # Last known good commit
# Git will help you find the problematic commit
git bisect reset  # When done
```

### 4️⃣ Submodules for External Dependencies
```sh
git submodule add https://github.com/username/repo.git path/to/submodule
git submodule update --init --recursive  # After cloning a repo with submodules
```

### 5️⃣ Git Hooks for Automation
Create scripts in the `.git/hooks` directory:
- `pre-commit`: Run tests before committing
- `pre-push`: Verify code quality before pushing
- `post-merge`: Update dependencies after pulling

---

## 🌟 GitHub Features & Tools

### 1️⃣ GitHub Issues
1. Use for bug reports, feature requests, and tasks
2. Add labels, assignees, and milestones
3. Link issues to pull requests

### 2️⃣ GitHub Projects
1. Create a project board for task management
2. Use automated workflows to track progress
3. Connect issues and pull requests to project cards

### 3️⃣ GitHub Pages for Static Websites
```sh
# Create a gh-pages branch
git checkout -b gh-pages
# OR use the main branch in repository settings
```
Configure in repository Settings → Pages

### 4️⃣ GitHub Actions for CI/CD
Example workflow file (`.github/workflows/ci.yml`):
```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 16
    - name: Install dependencies
      run: npm ci
    - name: Run tests
      run: npm test
```

### 5️⃣ GitHub CLI
```sh
# Install GitHub CLI
brew install gh  # macOS
# Login
gh auth login
# Create a repository
gh repo create my-repo --public
# Fork a repository
gh repo fork owner/repo
# Create a pull request
gh pr create --title "Feature Update" --body "Added new feature"
# Merge a pull request
gh pr merge --squash
# Clone a repository
gh repo clone owner/repo
```

---

## 🌎 Hosting a Static Website

### 1️⃣ GitHub Pages
1. Go to repository Settings → Pages
2. Choose a source branch (main or gh-pages)
3. Your site will be published at `https://username.github.io/repository`

### 2️⃣ Vercel Deployment
```sh
# Install Vercel CLI
npm install -g vercel
# Login to Vercel
vercel login
# Navigate to your project folder
cd my-project
# Deploy to Vercel
vercel
# Set up custom domain (Optional)
vercel domains add mydomain.com
```

### 3️⃣ Netlify Deployment
```sh
# Install Netlify CLI
npm install -g netlify-cli
# Login to Netlify
netlify login
# Deploy site
netlify deploy
# Deploy to production
netlify deploy --prod
```

---

## 🔍 Useful Git Commands

### 1️⃣ View Commit History
```sh
git log --oneline --graph --decorate --all
git log -p  # Show patches (changes)
git log --author="username"  # Filter by author
git log --since="2 weeks ago"  # Filter by date
git log --grep="bug fix"  # Search commit messages
```

### 2️⃣ Stash Changes Temporarily
```sh
git stash save "WIP: Feature implementation"  # Named stash
git stash list  # View all stashes
git stash apply stash@{0}  # Apply specific stash
git stash pop  # Apply and remove latest stash
git stash drop stash@{1}  # Delete a stash
git stash clear  # Remove all stashes
```

### 3️⃣ Git Reflog (Reference Log)
```sh
git reflog  # View all references
git reset --hard HEAD@{2}  # Recover deleted commits
```

### 4️⃣ Git Clean (Remove Untracked Files)
```sh
git clean -n  # Dry run (shows what will be deleted)
git clean -f  # Force delete untracked files
git clean -fd  # Delete untracked files and directories
```

### 5️⃣ Git Tag (For Versions and Releases)
```sh
git tag v1.0.0  # Create a lightweight tag
git tag -a v1.0.0 -m "Version 1.0.0"  # Create an annotated tag
git push origin v1.0.0  # Push a specific tag
git push origin --tags  # Push all tags
```

---

## 🛠️ Git Workflows

### 1️⃣ GitHub Flow
1. Create a branch from main
2. Add commits
3. Open a pull request
4. Discuss and review
5. Merge to main
6. Delete the branch

### 2️⃣ Git Flow
- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: New features
- `release/*`: Preparing for a release
- `hotfix/*`: Urgent fixes for production

### 3️⃣ Trunk-Based Development
1. Work in small batches
2. Commit directly to main (or short-lived feature branches)
3. Use feature flags for incomplete features
4. Deploy frequently

---

## 📱 Git & GitHub Mobile

### 1️⃣ GitHub Mobile App
- Available for iOS and Android
- Review code and merge PRs on the go
- Respond to issues and discussions

### 2️⃣ Git Commands on Mobile
- Use Termux (Android) or iSH (iOS) for terminal access
- Basic operations like commit, push, and pull

---

## 🤝 Contributing to Open Source

### 1️⃣ Find a Project
- Explore GitHub's "Explore" tab
- Check GitHub topics in your area of interest
- Look for "good first issue" labels

### 2️⃣ Fork, Clone, and Contribute
```sh
# Fork on GitHub, then clone your fork
git clone https://github.com/your-username/project.git
# Add the original repository as upstream
git remote add upstream https://github.com/original-owner/project.git
# Create a branch for your feature
git checkout -b feature-branch
# Make changes, commit, and push
git push origin feature-branch
# Create a pull request on GitHub
```

### 3️⃣ Keep Your Fork Updated
```sh
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

## 🔐 Security Best Practices

### 1️⃣ Protect Sensitive Information
- Use environment variables
- Add sensitive files to .gitignore
- Use git-secret or git-crypt for encryption

### 2️⃣ Enable Two-Factor Authentication
1. Go to GitHub → Settings → Security → Two-factor authentication
2. Follow the setup instructions

### 3️⃣ Regular Security Audits
```sh
# Check for sensitive data in git history
git log -p | grep -i password
# Use tools like GitLeaks or TruffleHog
```

### 4️⃣ Sign Your Commits (Optional)
```sh
git config --global commit.gpgsign true
git config --global user.signingkey YOUR_GPG_KEY_ID
```

---

## 🚧 Troubleshooting Common Issues

### 1️⃣ Authentication Problems
```sh
# Check your credentials
git config --list | grep user
# Update stored credentials
git config --global credential.helper cache
```

### 2️⃣ Undo a Git Merge
```sh
git merge --abort  # If merge is in progress
git reset --hard ORIG_HEAD  # After merge is complete
```

### 3️⃣ Fix "fatal: refusing to merge unrelated histories"
```sh
git pull origin main --allow-unrelated-histories
```

### 4️⃣ Recover Lost Commits
```sh
git reflog
git checkout HEAD@{1}  # Or appropriate reference
```

### 5️⃣ Handle Large Files
```sh
# Install Git LFS
git lfs install
# Track large file types
git lfs track "*.psd"
git lfs track "*.zip"
# Ensure .gitattributes is tracked
git add .gitattributes
```

---

## 👥 Team Collaboration Using Git & GitHub

### Forking and Cloning
- Each team member forks the main repository on GitHub.
- Clone the forked repository:
```sh
git clone https://github.com/your-username/repository.git
```

### Creating a Feature Branch
```sh
git checkout -b feature-branch
```

### Making Changes and Pushing
```sh
git add .
git commit -m "Describe your changes"
git push origin feature-branch
```

### Creating a Pull Request (PR)
1. Go to the original repository on GitHub.
2. Click “Compare & pull request.”
3. Add a meaningful description and submit the PR.

### Reviewing and Merging PRs
- The repository owner reviews the PR.
- If approved, merge the PR into `main`.

### Syncing with the Main Repository
```sh
git fetch upstream
```
```sh
git merge upstream/main
```
```sh
git push origin main
```

### Handling Merge Conflicts
- Identify conflicting files using `git status`.
- Open the conflicted files and manually resolve issues.
- Stage and commit resolved files:
```sh
git add resolved-file.txt
git commit -m "Resolved merge conflicts"
```

### Best Practices for Team Collaboration
✅ **Always create branches for new features.**
✅ **Review PRs thoroughly before merging.**
✅ **Sync with the main branch regularly.**
✅ **Communicate with your team about ongoing changes.**
✅ **Use descriptive commit messages and PR titles.**

---

## 🎓 Additional Resources

### 1️⃣ Documentation
- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [GitHub Skills](https://skills.github.com/)

### 2️⃣ Interactive Learning
- [Learn Git Branching](https://learngitbranching.js.org/)
- [GitHub Learning Lab](https://lab.github.com/)

### 3️⃣ Cheat Sheets
- [Git Cheat Sheet by GitHub](https://education.github.com/git-cheat-sheet-education.pdf)
- [Atlassian Git Cheat Sheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)