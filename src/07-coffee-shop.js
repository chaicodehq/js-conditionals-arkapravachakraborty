/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here

  if ((size === "small" || size === "medium" || size === "large") && (type === "regular" || type === "latte" || type === "cappuccino" || type === "mocha")) {
    let totalCost = 0;
    const sizeMap = new Map();
    sizeMap.set("small", 3.00);
    sizeMap.set("medium", 4.00);
    sizeMap.set("large", 5.00);

    const typeMap = new Map();
    typeMap.set("regular", 0.00);
    typeMap.set("latte", 1.00);
    typeMap.set("cappuccino", 1.50);
    typeMap.set("mocha", 2.00);


    totalCost = sizeMap.get(size) + typeMap.get(type);

    if (extras.whippedCream) {
      totalCost += 0.50;
    }
    if (extras.extraShot) {
      totalCost += 0.75;
    }

    return Math.round(totalCost * 100) / 100;
  }

  return -1;

}
