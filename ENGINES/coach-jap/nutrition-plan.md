# Nutrition Plan Engine

Workflow, format rules, and programming standards for all nutrition outputs.

Source: `nutrition_programming_handoff_restart_fitness_ph.md` (2026-05-18)

Load this for every nutrition task — single-day plan, 5-day plan, or full 7-day system. Always complete the intake questionnaire before calculating.

---

## Pre-work: resolve before calculating

No plan is built without answers to these first:

1. Client stats — name, age, sex, height, weight
2. Activity level and training schedule
3. Goal — fat loss / muscle gain / recomposition / performance
4. Deficit preference — 5% (conservative) or 10% (default)
5. Meal structure — meals/day, snacks/day, rice type, yogurt/whey allowed
6. Food preferences and protein sources
7. Budget and cooking access
8. Restrictions or allergies

If any critical field is missing — ask one focused question at a time. Never guess a calorie target or macro split.

---

## Full intake questionnaire

Paste and fill before generating:

```
CLIENT
1. Name:
2. Age:
3. Sex:
4. Height:
5. Weight:
6. Activity: sedentary / light / moderate / very active
7. Training schedule + weekly hours:
8. Goal: fat loss / muscle gain / recomposition / performance
9. Deficit: 5% or 10%
10. Restrictions/allergies:
11. Budget: low / mid / high
12. Cooking: has cook / self-cook / limited cooking

MEAL STRUCTURE
13. Meals/day:
14. Snacks/day:
15. Rice: white / brown / mixed / none
16. Yogurt allowed: yes/no
17. Whey allowed: yes/no

GO-TO MEALS
18. Meal 1:
19. Meal 2:
20. Meal 3:
21. Meal 4:

PROTEIN PREFERENCES
22. Chicken / eggs / fish / beef / pork / tofu / lentils / whey

SPECIAL RULES
23. Salad at lunch + dinner: ON/OFF
24. Breakfast rice cap cooked: ____ g (default 150g)
25. Processed breakfast meats allowed: yes/no
    If yes, max frequency: ____ breakfasts/week (default 3–4)

PLAN OUTPUT
26. Plan length: 5 days or 7 days
27. Include recipes + batch prep + grocery totals + final PDF: YES
```

---

## Calculation rules

### BMR — use Mifflin-St Jeor

Female: BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) − 161
Male:   BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) + 5

### Activity multipliers

| Level | Multiplier |
|---|---|
| Sedentary office | 1.20 |
| Light active | 1.35–1.45 |
| Moderate active | 1.50–1.60 |
| Very active | 1.70–1.80 |

TDEE = BMR × activity multiplier

### Deficit rules

| Goal | Deficit |
|---|---|
| Fat loss (default) | 10% |
| Fat loss (conservative — stress, poor sleep, adherence concern) | 5% |
| Maintenance / recomposition | 5% or maintenance calories |
| Performance | Avoid aggressive deficits unless requested |

Target calories = TDEE × (1 − deficit%)

---

## Macro programming rules

### Default beginner fat loss split

| Macro | Range |
|---|---|
| Protein | 30–40% |
| Carbs | 35–45% |
| Fats | 20–30% |

### Protein-forward split

Use when: high body weight + fat loss goal + active training.

| Macro | % |
|---|---|
| Protein | 40% |
| Carbs | 35% |
| Fats | 25% |

Reference (Aira Quito): 2,564 kcal → Protein 256g / Carbs 224g / Fats 71g

### Low-carb / keto-leaning split

Use only when specifically requested. Not the default. Apply with coaching explanation.

| Macro | % |
|---|---|
| Carbs | 10% |
| Protein | 50% |
| Fats | 40% |

### Macro-to-calorie conversion

- Protein: 4 kcal/g
- Carbs: 4 kcal/g
- Fats: 9 kcal/g

### Protein distribution (3 meals + 2 snacks)

| Meal | Direction |
|---|---|
| Breakfast | Moderate-high protein |
| Snack 1 | Protein smoothie or whey-based |
| Lunch | Highest protein — main fuel meal |
| Snack 2 | Protein-based |
| Dinner | Salad + protein · lower carb if possible |

---

## Portion rules

### Protein (cooked weights)

- 1 palm cooked lean meat/fish ≈ 25–30g protein
- 2 palms cooked lean meat/fish ≈ 50–60g protein

### Rice

| Meal | Default |
|---|---|
| Breakfast | 120–150g cooked (cap at client's stated limit) |
| Lunch | Higher portion allowed — training or high energy demand |
| Dinner | Lower carb preferred — especially when salad + protein structure is used |

### Vegetables

| Meal | Default |
|---|---|
| Lunch salad | 2 cups |
| Dinner salad | 3–4 cups |
| Cooked vegetables | 1–2 cups per meal |

### Approved fat sources

Olive oil · avocado · nuts · seeds · small amount of butter/ghee · coconut oil (small amounts)

Avoid: seed oils · deep-fried oils · unmeasured sauces · sweet dressings

---

## Protein cheat sheet

### ~50g protein portions

| Source | Amount |
|---|---|
| Chicken breast (cooked) | 180–200g |
| Fish (cooked) | 220–260g |
| Shrimp (cooked) | 220–250g |
| Lean beef (cooked) | 200–230g |
| Lean pork (cooked) | 220–250g |
| Canned tuna (drained) | ~2 small cans |
| Egg whites | ~2 cups / 500ml |
| Whole eggs | ~8 large |
| Whey protein | ~2 scoops (brand-dependent) |

### ~25g protein portions

| Source | Amount |
|---|---|
| Chicken breast (cooked) | 90–100g |
| Fish (cooked) | 110–130g |
| Lean pork (cooked) | 110–130g |
| Lean beef (cooked) | 100–120g |
| Shrimp (cooked) | 110–130g |
| Egg whites | ~1 cup / 250ml |
| Whole eggs | ~4 large |
| Whey protein | ~1 scoop (brand-dependent) |

---

## Approved output structure

Every plan ships in this order. No sections skipped.

### 1. Client Summary

Name · Age · Sex · Height · Weight · Activity level · Training schedule · Goal · Deficit · Estimated TDEE · Target calories · Daily macros · Non-negotiables

### 2. Daily Targets

Protein · Carbs · Fats · Total calories

### 3. Per-Meal Macro Targets

Table format:

| Meal | Protein | Carbs | Fats |
|---|---:|---:|---:|
| Breakfast | g | g | g |
| Snack 1 | g | g | g |
| Lunch | g | g | g |
| Snack 2 | g | g | g |
| Dinner | g | g | g |

### 4. 7-Day Course Meals

Table format. No vague entries ("healthy meal" is not acceptable). Keep meals aligned to client's stated go-to meals.

| Day | Breakfast | Snack 1 | Lunch | Snack 2 | Dinner |
|---|---|---|---|---|---|
| Day 1 | | | meal + salad | | salad + protein |
| Day 2 | | | meal + salad | | salad + protein |
| Day 3 | | | meal + salad | | salad + protein |
| Day 4 | | | meal + salad | | salad + protein |
| Day 5 | | | meal + salad | | salad + protein |
| Day 6 | | | meal + salad | | salad + protein |
| Day 7 | | | meal + salad | | salad + protein |

Rules:
- Show salad at lunch and dinner if the client rule is ON
- Snacks must be protein-based
- Rotate proteins across the week — chicken, beef, fish, eggs minimum

### 5. Recipes with Preparation + Cooking Instructions

Required categories (when applicable):

1. Base salad + dressing
2. Breakfast templates
3. Main protein recipes
4. Smoothie / protein snack templates
5. Any client-specific go-to meal upgrade

Each recipe includes: Ingredients · Preparation · Cooking method · Portion guide · Coach note if needed

### 6. 7-Day Meal Prep Plan

Batch-cook proteins · Cook carbs · Prep vegetables and salads · Portioning rules · Storage rules

Default batch reference:
- Proteins: 2.0–2.5 kg raw chicken · 1.2–1.5 kg raw lean beef · 1.8–2.2 kg raw fish · 24–30 eggs
- Rice: calculate total cooked rice for the week → convert to uncooked buy weight (cooked ÷ 2.5 ≈ uncooked)
- Vegetables: prep for the full week's salads in one session
- Storage: fridge 3–4 days · freeze extras · fish best fresh or marinated ahead

### 7. Grocery List with Total Weights/Pieces

List format only. No vague entries. Total weights or pieces — not "some chicken."

```
Proteins
- Chicken: ____ kg raw
- Beef: ____ kg raw
- Fish: ____ kg raw
- Eggs: ____ pcs
- Whey: ____ servings
- Greek yogurt: ____ kg or cups

Carbs
- White/brown rice: ____ kg uncooked
- Potatoes/camote if used: ____ kg

Vegetables
- Leafy greens: ____ kg
- Cucumber: ____ pcs
- Tomato: ____ pcs
- Onion: ____ pcs
- Carrots: ____ pcs
- Mixed vegetables: ____ kg

Fruits
- Banana: ____ pcs
- Apple: ____ pcs
- Watermelon/pineapple: ____ kg
- Grapes or berries if used: ____ g/kg

Fats and Condiments
- Olive oil: ____ ml
- Low-sodium soy sauce: 1 bottle
- Vinegar: 1 bottle
- Calamansi/lemon: ____ pcs
- Garlic: ____ bulbs

Processed Items (only if allowed — list with max frequency)
```

### 8. Coaching Rules

Direct client-facing rules only. Keep it short and actionable.

Default rules to include:
- Protein at every meal.
- Rice must be measured.
- Salad at lunch and dinner.
- No sugary drinks.
- Coffee allowed — no sugar.
- Use whey or Greek yogurt for easy protein snacks.
- Processed meats: optional and limited (state max frequency).
- Weekly check-in: weight trend, meal adherence, hunger, training energy.

### 9. QA Check (run before final output)

**Nutrition math:**
- [ ] TDEE calculation is reasonable
- [ ] Deficit correctly applied
- [ ] Macro grams match target calories
- [ ] Per-meal macros roughly sum to daily macros
- [ ] Calories not excessively low for training demand

**Portion accuracy:**
- [ ] Rice portions match rules
- [ ] Breakfast rice cap respected
- [ ] Snack count matches client's stated meals/snacks
- [ ] Salad/vegetable rules followed
- [ ] Protein portions realistic
- [ ] Processed foods limited if used

**Grocery accuracy:**
- [ ] Grocery list matches the meal plan
- [ ] Rice totals not inflated
- [ ] Protein totals realistic for the plan length
- [ ] Vegetables and fruits in total weights or pieces
- [ ] Condiments included only when useful

**Formatting:**
- [ ] Tables do not overlap
- [ ] Text wraps properly
- [ ] No vague entries in grocery list or meal table
- [ ] No broken symbols or cutoff cells

**Language:**
- [ ] Direct coaching language throughout
- [ ] No "AI-generated," "As an AI," "Here is the generated plan," "Let me know if you want"
- [ ] No excessive caveats or over-technical explanations

---

## Nutrition philosophy

The client does not need to eat the same 4 meals every day.

Meal prep reduces decision fatigue, improves consistency, and prevents unintended overeating. Batch-cook components, then rotate across meals.

**Main priorities (in order):**
1. Protein at every meal
2. Whole foods first
3. Vegetables daily
4. Rice/starch controlled and matched to training demand
5. Safe fats only
6. Minimize sugar, sweet drinks, fried oils, and highly processed food
7. Build repeatable habits before adding complexity

**Simple client rule:** Protein first. Vegetables every meal. Rice measured. Drinks controlled.

**Frameworks in use:**
- MetFix Practical Diet Protocol — meat + vegetables · nuts + seeds · some starch · little fruit · avoid sugar/seed oils/processed foods
- Lifestyle Medicine Plate — whole food foundation · adequate protein · controlled starch · limit added sugar and refined grains

**Safety hierarchy:** Safety > Progress > Aesthetics. Always in that order.

---

## PDF output rules

Header format:
```
Logo top-left.
Title text on the right.
6Fix Program - Restart Fitness PH
by Coach Japhet Felipe
```

PDF layout: clean tables · no overlap · readable font size · no excessive design · details first, design second

Always produce:
1. Preview PNG pages
2. Final downloadable PDF

---

## Production workflow

Every client plan follows this sequence exactly:

1. Complete intake questionnaire
2. Calculate TDEE using Mifflin-St Jeor
3. Apply deficit → get target calories
4. Calculate daily macros
5. Build per-meal macro targets
6. Build 5-day or 7-day course meal table
7. Upgrade client go-to meals into whole-food versions
8. Write recipes with prep and cooking instructions
9. Build batch-cook meal prep system
10. Build grocery list with total weights/pieces
11. Run QA checklist
12. Generate final PDF + preview

---

## Quick commands

| Command | Output |
|---|---|
| "Nutrition plan for [client]" | Full intake → plan → grocery list → PDF |
| "Intake for [client]" | Walk through questionnaire only |
| "Macros for [client]" | TDEE + deficit + macro split only |
| "Grocery list for [client]" | Generate from existing plan |
| "Meal prep plan for [client]" | Batch-cook system from existing plan |
| "QA nutrition plan for [client]" | Run QA checklist against existing plan |

---

## Output destination

- Full plans → `/OUTPUTS/nutrition/[client-name]/YYYY-MM-DD-plan.md`
- One per client per cycle. Update when macros change or goal shifts.

---

## Last updated
2026-05-18 — Phase 3 complete. Built from nutrition_programming_handoff_restart_fitness_ph.md.
