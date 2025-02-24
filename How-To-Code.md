# Tutorial on how to Code by Isaac
### **Original Code (Bad Example)**
This code is deeply nested, has duplicate logic, and uses unclear variable names.  
```python
def proc(u):
    if u:
        if u.act:
            if u.p > 100:
                d = u.p * 0.9
                print(f"Total: {d}")
            else:
                print(f"Total: {u.p}")
```
### **Step 1: Avoid Deep Nesting**  
We simplify the structure by using **early returns** and reducing unnecessary nesting.  
```python
def proc(u):
    if not u or not u.act:
        return  # Exit early if user is invalid or inactive
    
    if u.p > 100:
        d = u.p * 0.9
    else:
        d = u.p
    
    print(f"Total: {d}")
```
Now, the function is flatter and easier to read. But we still have duplication in how we calculate the total price.

---

### **Step 2: Extract Shared Logic to Avoid Duplication**  
We move the price calculation into its own function so it can be reused elsewhere if needed.  
```python
def apply_discount(price):
    return price * 0.9 if price > 100 else price

def proc(u):
    if not u or not u.act:
        return  # Exit early if user is invalid or inactive
    
    total = apply_discount(u.p)
    print(f"Total: {total}")
```
Now, the function is cleaner, and we avoid repeating the discount calculation logic.

---

### **Step 3: Use Clear and Descriptive Naming**  
Now, we rename functions and variables to make them more understandable.  
```python
def apply_discount(price):
    """Apply a 10% discount if the price is over 100."""
    return price * 0.9 if price > 100 else price

def process_user(user):
    """Check if the user is active and print their total price after discount."""
    if not user or not user.is_active:
        return  # Exit early if the user is invalid or inactive
    
    total_price = apply_discount(user.price)
    print(f"Total: {total_price}")
```

---

### **Final Version (Clean Code)**
Now, the function:  
✅ **Has no deep nesting** (uses early return)  
✅ **Avoids duplicate logic** (extracts discount calculation into a function)  
✅ **Uses clear, meaningful names** (so others can understand it easily)  

This step-by-step approach makes the code much **easier to read, maintain, and reuse**! 🚀