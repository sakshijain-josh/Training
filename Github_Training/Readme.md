## Task 6: Undoing an Intentional Wrong Commit

### Why `git revert` was used

`git revert` creates a **new commit** that reverses the changes introduced by a specific commit.

This approach was chosen because:

* It **preserves commit history**
* It is **safe for shared branches**, as it does not rewrite history
* Reviewers can clearly see:
  * the original (intentional wrong) commit
  * the new commit that explicitly undoes it

---

### Why `git reset --soft` was not used

Although `git reset --soft` can undo a commit locally by moving `HEAD` while keeping the changes staged, it was not appropriate in this case because:

* It **rewrites commit history**
* It can cause issues if the commit has already been pushed to a remote branch
* It is better suited for **local-only cleanup** before pushing commits

---

