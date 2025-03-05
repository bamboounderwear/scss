Below is a comprehensive cheatsheet for your custom utility framework. It summarizes the most common classes and explains what they do. Use this as a quick reference while coding.

---

# Custom Utility Framework Cheatsheet

This cheatsheet breaks down your framework into logical sections. Each section lists classes, their purpose, and example usage.

---

## 1. Global Reset & Base Styles

- **Reset:**  
  ```css
  *, *:before, *:after { box-sizing: border-box; margin: 0; padding: 0; }
  ```
- **Body:**  
  Uses a system stack with a base font-size of 16px, 1.5 line-height, and default text/background colors.
  ```css
  body { 
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px; line-height: 1.5; color: #213547; background-color: #fff;
  }
  ```

---

## 2. Containers

- **Basic Containers:**  
  Centers content with auto margins and horizontal padding.
  ```css
  .container, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl, .container-fluid {
    width: 100%; margin: 0 auto; padding: 0 1rem;
  }
  ```
- **Max Widths:**  
  - `.container-sm`: max-width 540px  
  - `.container-md`: max-width 720px  
  - `.container-lg`: max-width 960px  
  - `.container-xl`: max-width 1140px  
  - `.container-xxl`: max-width 1320px  
  - `.container-fluid`: no max-width restriction

---

## 3. Sizing Utilities

### A. Percentage, Pixel & Viewport Sizes

- **Width/Height in Percent:**  
  - `.w-25`, `.w-33`, `.w-50`, `.w-66`, `.w-75`, `.w-100`  
  - `.h-25`, `.h-33`, `.h-50`, `.h-66`, `.h-75`, `.h-100`
- **Fixed Sizes (in rem or px):**  
  - `.w-1` equals 0.25rem, `.w-2` equals 0.5rem, … up to `.w-32`  
  - Similar for height: `.h-1`, `.h-2`, `.h-4`, etc.
- **Viewport Units:**  
  - `.vw-25`, `.vw-33`, `.vw-50`, `.vw-75`, `.vw-100`  
  - `.vh-25`, `.vh-33`, `.vh-50`, `.vh-75`, `.vh-100`  
  - Combined (vmin/vmax): `.vmin-25`, `.vmax-25`, etc.

### B. Min/Max Sizing

- **Min/Max Width & Height:**  
  - `.min-w-25` / `.max-w-25` (and similarly for 33, 50, 66, 75, 100)  
  - `.min-h-25` / `.max-h-25` (and similarly for other percentages)  
  - Also available in auto variants (`min-w-auto`, `max-h-auto`, etc.)

### C. Aspect Ratio

- **Aspect Ratio Utilities:**  
  - `.aspect-square` (1:1)  
  - `.aspect-video` (16:9)  
  - `.aspect-portrait` (3:4)

---

## 4. Color Utilities

### A. Background Colors

- **Primary Colors:**  
  - Blue: `.bg-blue-light`, `.bg-blue`, `.bg-blue-dark`  
  - Red: `.bg-red-light`, `.bg-red`, `.bg-red-dark`  
  - Yellow: `.bg-yellow-light`, `.bg-yellow`, `.bg-yellow-dark`  
  - Green: `.bg-green-light`, `.bg-green`, `.bg-green-dark`
- **Other Colors:**  
  - Grey, Brown, Pink, Orange, Purple with similar light/normal/dark variations  
- **Aliases:**  
  - `.bg-primary` (blue), `.bg-danger` (red), `.bg-warning` (yellow), `.bg-success` (green)
- **Background Utility:**  
  - `.bg-black`, `.bg-white`

### B. Text Colors

- Use analogous naming:  
  - e.g. `.text-blue-light`, `.text-red-dark`, `.text-grey`, `.text-primary`, etc.
- Standard colors: `.text-black`, `.text-white`

### C. Border Colors

- Use similar class names:  
  - `.border-blue-light`, `.border-red`, `.border-green-dark`, etc.
- Also: `.border-black`, `.border-white`

---

## 5. Display & Flexbox Utilities

- **Display:**  
  - `.display-block`, `.display-inline`, `.display-inline-block`, `.display-flex`, `.display-inline-flex`, `.display-grid`, `.display-none`
- **Visibility:**  
  - `.visible`, `.invisible`
- **Flex Direction:**  
  - `.flex-row`, `.flex-row-reverse`, `.flex-col`, `.flex-col-reverse`
- **Flex Wrap:**  
  - `.flex-wrap`, `.flex-nowrap`, `.flex-wrap-reverse`
- **Flex Grow/Shrink:**  
  - `.flex-1`, `.flex-auto`, `.flex-initial`, `.flex-none`
- **Justify Content:**  
  - `.justify-start`, `.justify-end`, `.justify-center`, `.justify-between`, `.justify-around`, `.justify-evenly`
- **Align Items:**  
  - `.items-start`, `.items-end`, `.items-center`, `.items-baseline`, `.items-stretch`

---

## 6. Grid Utilities

- **Grid Columns:**  
  - Use `.col-1` through `.col-12` for basic grid spans.
- **Responsive Grid Columns:**  
  - Append breakpoints:  
    - Small: `.col-1-sm`, `.col-2-sm`, …, `.col-12-sm`  
    - Medium: `.col-1-md`, …, `.col-12-md`  
    - Large: `.col-1-lg`, …, `.col-12-lg`  
    - Extra Large: `.col-1-xl`, …, `.col-12-xl`
- **Responsive Grid Template:**  
  - `.grid-cols-sm`, `.grid-cols-md`, `.grid-cols-lg`, `.grid-cols-xl`, `.grid-cols-2xl` (defines 12-column grid)

---

## 7. Positioning & Spacing

### A. Positioning

- **Position Types:**  
  - `.static`, `.relative`, `.absolute`, `.fixed`, `.sticky`
- **Z-Index:**  
  - `.z--10`, `.z-0`, `.z-10`, `.z-20`, `.z-30`, `.z-40`, `.z-50`
- **Edges & Inset:**  
  - Positional utilities:  
    - `.top-0`, `.right-0`, `.bottom-0`, `.left-0`  
    - Percent based: `.top-25`, `.left-50`, etc.  
    - Spacing steps: `.top-1` (0.25rem), `.top-2` (0.5rem), up to `.top-16`
  - Centering:  
    - `.center-x` (horizontally centered via left:50% & translateX(-50%))  
    - `.center-y` (vertically centered)  
    - `.center-both` (fully centered)

### B. Spacing (Margins & Padding)

- **Margin Utilities:**  
  - Classes like `.m-0`, `.m-1`, `.m-2`, …, `.m-32` and auto margin: `.m-auto`
  - Side-specific: `.mt-*`, `.mr-*`, `.mb-*`, `.ml-*`, as well as `.mx-*` and `.my-*`
- **Negative Margins:**  
  - Use a dash: `.-m-1`, `.-mt-1`, etc.
- **Padding Utilities:**  
  - Similar naming: `.p-0`, `.p-1`, …, `.p-32`, with side-specific versions (`.pt-*`, `.pr-*`, etc.)
- **Gap (for grid & flex):**  
  - `.gap-0`, `.gap-1`, `.gap-2`, …, `.gap-12` with horizontal (`.gap-x-*`) and vertical (`.gap-y-*`) variants

---

## 8. Typography Utilities

### A. Font Sizes

- **Text Sizing:**  
  - `.text-xs`, `.text-sm`, `.text-base` (and `<p>`), `.text-lg`, `.text-xl`, `.text-2xl`, up to `.text-8xl`
  - Note: Many use a responsive `clamp()` for fluid scaling.

### B. Font Weights

- Options from light to bold:  
  - `.font-thin` (100), `.font-extralight` (200), `.font-light` (300), `.font-normal` (400),  
  - `.font-medium` (500), `.font-semibold` (600), `.font-bold` (700), `.font-extrabold` (800), `.font-black` (900)

### C. Text Decorations & Transforms

- **Alignments & Decorations:**  
  - `.text-justify`, `.text-left`, `.text-center`, `.text-right`
  - Underline/overline/line-through: `.text-underline`, `.text-overline`, `.text-line-through`, `.text-no-underline`
- **Text Transform:**  
  - `.text-uppercase`, `.text-lowercase`, `.text-capitalize`, `.text-normal-case`

### D. Line Height & Letter Spacing

- **Line Height:**  
  - `.leading-none`, `.leading-tight`, `.leading-snug`, `.leading-normal`, `.leading-relaxed`, `.leading-loose`
- **Letter Spacing:**  
  - `.tracking-tighter`, `.tracking-tight`, `.tracking-normal`, `.tracking-wide`, `.tracking-wider`, `.tracking-widest`

### E. Other Text Utilities

- **Overflow & White-space:**  
  - `.truncate` (with ellipsis), `.overflow-ellipsis`, `.text-clip`
  - White-space controls: `.whitespace-normal`, `.whitespace-nowrap`, `.whitespace-pre`, `.whitespace-pre-line`, `.whitespace-pre-wrap`
- **Word Break:**  
  - `.break-normal`, `.break-words`, `.break-all`
- **Font Style:**  
  - `.italic` / `.not-italic`

---

## 9. Shadows, Opacity, Filters & Transitions

### A. Shadows

- `.shadow-sm`, `.shadow`, `.shadow-md`, `.shadow-lg`, `.shadow-xl`, `.shadow-inner`, `.shadow-none`

### B. Opacity

- `.opacity-0`, `.opacity-25`, `.opacity-50`, `.opacity-75`, `.opacity-100`

### C. Blur & Backdrop Blur

- **Blur:**  
  - `.blur-none`, `.blur-sm`, `.blur-md`, `.blur-lg`, `.blur-xl`
- **Backdrop Blur:**  
  - `.backdrop-blur-none`, `.backdrop-blur-sm`, `.backdrop-blur-md`, `.backdrop-blur-lg`, `.backdrop-blur-xl`

### D. Transforms (Scale & Rotate)

- **Scaling:**  
  - `.scale-0`, `.scale-50`, `.scale-75`, `.scale-90`, `.scale-100`, `.scale-110`, `.scale-125`, `.scale-150`
- **Rotation:**  
  - `.rotate-0`, `.rotate-45`, `.rotate-90`, `.rotate-180`, `.rotate-270`

### E. Transitions

- **General Transitions:**  
  - `.transition-none`, `.transition-all`, `.transition-colors`, `.transition-shadow`, `.transition-transform`, `.transition-opacity`
- **Hover Effects:**  
  - `.hover-scale` (scale up on hover)  
  - `.hover-lift` (lift element on hover)

### F. Filters

- **Brightness:**  
  - `.brightness-0`, `.brightness-50`, `.brightness-75`, `.brightness-90`, `.brightness-100`, `.brightness-110`, `.brightness-125`, `.brightness-150`, `.brightness-200`
- **Contrast:**  
  - `.contrast-0`, `.contrast-50`, `.contrast-75`, `.contrast-100`, `.contrast-125`, `.contrast-150`, `.contrast-200`
- **Grayscale:**  
  - `.grayscale-0`, `.grayscale-50`, `.grayscale-100`

---

## 10. Miscellaneous Utilities

### A. Box Sizing

- `.box-border` (default) and `.box-content`

### B. Accessibility

- **Screen Reader Only:**  
  - `.sr-only` hides elements visually but keeps them accessible to screen readers.

### C. Cursor Styles

- Classes like `.cursor-auto`, `.cursor-default`, `.cursor-pointer`, `.cursor-wait`, `.cursor-text`, `.cursor-move`, `.cursor-help`, `.cursor-not-allowed`, `.cursor-grab`, `.cursor-grabbing`, `.cursor-zoom-in`, `.cursor-zoom-out`

### D. User Interaction

- **User Select:**  
  - `.select-none`, `.select-text`, `.select-all`, `.select-auto`
- **Pointer Events:**  
  - `.pointer-events-none`, `.pointer-events-auto`
- **Touch Actions:**  
  - `.touch-auto`, `.touch-none`, `.touch-pan-x`, `.touch-pan-y`, `.touch-manipulation`
- **Scrolling Behavior:**  
  - `.scroll-auto`, `.scroll-smooth`
- **Resize Control:**  
  - `.resize-none`, `.resize-x`, `.resize-y`, `.resize-both`

---

## 11. Responsive Utilities

- **Visibility:**  
  - `.hidden-sm-up`, `.visible-sm-up` (and similar for md, lg, xl, 2xl)  
  - `.hidden-sm-down`, `.visible-sm-down`, etc.
- **Responsive Spacing:**  
  - Padding: `.p-sm`, `.p-md`, `.p-lg`, `.p-xl`, `.p-2xl`  
  - Margin: `.m-sm`, `.m-md`, `.m-lg`, `.m-xl`, `.m-2xl`

---

## 12. Table Utilities

- **Table Layout:**  
  - `.table` (full width, collapse borders)  
  - `.table-auto` and `.table-fixed` (for layout control)
- **Cell Padding & Borders:**  
  - `th, td` use default padding (.75rem)  
  - `.table-bordered` adds borders; `.table-striped` and `.table-hover` add row styles
- **Responsive Tables:**  
  - `.table-responsive` wraps tables for horizontal scrolling
- **Other:**  
  - `.thead-light` for header backgrounds  
  - `.table-compact` for tighter spacing  
  - `.table-divide` for dividing rows  
  - `.table-caption` for caption styling

---

## 13. List Utilities

- **List Styles:**  
  - `.list-none`, `.list-disc`, `.list-circle`, `.list-square`, `.list-decimal`, `.list-roman`, `.list-alpha`
- **List Positioning:**  
  - `.list-inside` / `.list-outside`
- **Spacing:**  
  - `.list-spacing-tight`, `.list-spacing-normal`, `.list-spacing-loose`
- **Nested Lists:**  
  - `.nested-list` (adds indentation for nested `<ul>` or `<ol>`)
- **Custom Markers:**  
  - `.marker-hidden` hides markers  
  - `.marker-custom` uses current text color

- **Counters:**  
  - `.counter-reset` and `.counter-increment`  
  - `.custom-counter` creates numbered lists with custom formatting

---

## 14. Animation & Transition Effects

- **Fade In/Out:**  
  - `.fade-in` starts hidden then becomes visible when `.active` is added  
  - `.fade-out` works in reverse
- **General Transitions:**  
  - `.transition-all` applies transition to all properties (default duration: .3s ease-in-out)

---

## 15. Utility for Object Fit & Position

- **Object Fit:**  
  - `.object-contain`, `.object-cover`, `.object-fill`, `.object-none`, `.object-scale-down`
- **Object Position:**  
  - `.object-top`, `.object-center`, `.object-bottom`, `.object-left`, `.object-right`

---

Use this cheatsheet as a quick lookup guide to help you remember class names and their effects when building your layouts and components. Happy coding!