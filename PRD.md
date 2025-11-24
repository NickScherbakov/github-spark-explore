# Planning Guide

An interactive showcase that demonstrates the unique capabilities of GitHub Spark through hands-on examples and live demonstrations.

**Experience Qualities**:
1. **Exploratory** - Users should feel empowered to discover features through interactive examples that invite experimentation
2. **Educational** - Clear explanations paired with working code help users understand how to leverage Spark's APIs in their own projects
3. **Inspiring** - Beautiful design and thoughtful interactions demonstrate what's possible, motivating users to build their own Spark applications

**Complexity Level**: Light Application (multiple features with basic state)
  - The app showcases multiple Spark features (LLM integration, KV storage, user API) through interactive demos, with state management for user interactions and preferences

## Essential Features

### LLM Playground
- **Functionality**: Interactive prompt interface that calls Spark's LLM API and displays responses in real-time
- **Purpose**: Demonstrates the ease of integrating AI capabilities into Spark apps
- **Trigger**: User enters a prompt in the text area and clicks "Generate"
- **Progression**: Enter prompt → Click generate → Loading state → Response appears with animation → Option to save or try another prompt
- **Success criteria**: Response appears within 3-5 seconds with proper error handling for API failures

### KV Storage Demo
- **Functionality**: Simple note-taking interface that persists data using Spark's key-value storage
- **Purpose**: Shows how easy it is to add persistence without backend infrastructure
- **Trigger**: User types in a note field or clicks to add/delete notes
- **Progression**: Type note → Auto-saves after typing pause → Visual confirmation → Persists across page refreshes → Can delete individual notes
- **Success criteria**: Notes survive page refresh and updates feel instant without lag

### User Info Display
- **Functionality**: Card showing current user's GitHub profile information using spark.user() API
- **Purpose**: Demonstrates authentication and user context access
- **Trigger**: Loads automatically on app mount
- **Progression**: Page loads → Fetch user data → Display avatar, username, and owner status → Show conditional UI based on isOwner
- **Success criteria**: User data appears within 1 second with graceful loading state

### Code Examples Library
- **Functionality**: Tabbed interface showing code snippets for each Spark API
- **Purpose**: Provides copy-paste ready examples developers can use immediately
- **Trigger**: User clicks between tabs to view different API examples
- **Progression**: Select tab → Code example displays with syntax highlighting → Click copy button → Toast confirmation → Can switch between examples
- **Success criteria**: Code is formatted clearly and copy function works reliably

### Interactive Feature Grid
- **Functionality**: Visual grid of cards representing Spark's key capabilities with hover effects
- **Purpose**: Provides quick overview of what Spark offers at a glance
- **Trigger**: Visible on initial load
- **Progression**: View grid → Hover over card → Card elevates with details → Click to navigate to demo section
- **Success criteria**: Smooth animations and clear visual hierarchy guide user attention

## Edge Case Handling
- **Empty States**: Show helpful prompts when no notes exist or no prompts have been generated yet
- **API Failures**: Display friendly error messages if LLM calls fail with option to retry
- **Long Content**: Truncate or scroll long LLM responses while maintaining readability
- **Loading States**: Show skeleton loaders or spinners during async operations to prevent confusion
- **Mobile Responsiveness**: Stack elements vertically on small screens while maintaining usability

## Design Direction
The design should feel cutting-edge and sophisticated with a clean, minimal interface that emphasizes content and functionality, using refined color harmony, generous spacing, and purposeful animations to create an elevated, professional experience that inspires confidence.

## Color Selection
Custom palette - A refined, contemporary theme with sophisticated purple and blue tones that convey innovation and professionalism, built on a foundation of soft neutrals for optimal readability and visual harmony. Uses modern OKLCH color space for consistent perceptual brightness and improved color accuracy.

- **Primary Color**: Royal Purple (oklch(0.52 0.18 275)) - Conveys innovation and technical sophistication; used for primary actions and key interactive elements
- **Secondary Colors**: Deep Charcoal (oklch(0.35 0.02 270)) - Professional foundation for code blocks and secondary UI elements with high contrast
- **Accent Color**: Vibrant Blue (oklch(0.62 0.20 245)) - Energetic highlight for CTAs, focus states, and success indicators
- **Border Radius**: Consistent 0.5rem (8px) radius throughout for modern, refined appearance with smooth scaling (0.25rem to 1.5rem)
- **Foreground/Background Pairings**:
  - Background (Soft White oklch(0.985 0.003 270)): Dark text (oklch(0.18 0.02 275)) - Ratio 14.8:1 ✓
  - Card (Pure White oklch(1 0 0)): Dark text (oklch(0.18 0.02 275)) - Ratio 15.2:1 ✓
  - Primary (Royal Purple oklch(0.52 0.18 275)): White text (oklch(0.99 0 0)) - Ratio 8.1:1 ✓
  - Secondary (Deep Charcoal oklch(0.35 0.02 270)): White text (oklch(1 0 0)) - Ratio 10.5:1 ✓
  - Accent (Vibrant Blue oklch(0.62 0.20 245)): White text (oklch(0.99 0 0)) - Ratio 4.8:1 ✓
  - Muted (Light Gray oklch(0.96 0.005 270)): Muted text (oklch(0.48 0.02 275)) - Ratio 7.2:1 ✓
  - Destructive (Warm Red oklch(0.55 0.22 27)): White text (oklch(0.99 0 0)) - Ratio 5.2:1 ✓

## Font Selection
The typography should feel modern and refined with Inter's clean geometric forms providing excellent readability across all screen sizes, with carefully calibrated weight and spacing relationships that create clear visual hierarchy.

- **Typographic Hierarchy**:
  - H1 (Page Title): Inter Bold/56px/tight letter-spacing (-0.02em)/leading-none (scales to 36px mobile)
  - H2 (Section Headers): Inter Bold/40px/tight letter-spacing (-0.015em)/leading-tight (scales to 32px mobile)
  - H3 (Card Titles): Inter Bold/20px/normal letter-spacing/leading-snug
  - Body (Descriptions): Inter Regular/16px/normal letter-spacing/leading-relaxed
  - Labels (Form Elements): Inter SemiBold/14px/normal letter-spacing/leading-normal
  - Code (Snippets): Inter Regular/14px/normal letter-spacing/font-mono styling
  - Caption (Helper Text): Inter Medium/12px/normal letter-spacing/leading-normal

## Animations
Animations should be smooth and refined, emphasizing state transitions and providing satisfying feedback while maintaining a professional, polished aesthetic that never sacrifices performance or delays user actions.

- **Purposeful Meaning**: Elegant transitions communicate hierarchy and relationships, hover effects invite exploration with subtle elevation changes, and loading states use refined animations that feel engineered and intentional
- **Hierarchy of Movement**: Primary CTAs scale subtly on hover (1.02x scale, 200ms), card grid items elevate with shadow and border transitions (300ms), tab switching uses smooth content fades (250ms), toast notifications slide in gracefully with spring physics (400ms), and gradient backgrounds shift subtly creating depth

## Component Selection
- **Components**: 
  - Card (with sophisticated hover effects using gradient overlays and border transitions) for feature grid and demo sections
  - Tabs (with clean, modern styling) for code examples and API demonstrations
  - Textarea (with refined focus states) for prompt input with comfortable padding
  - Button (primary with gradient shadow for main actions, outline for secondary)
  - Badge (subtle with refined borders) for status indicators and tags
  - Separator for clean section divisions
  - ScrollArea for long code snippets and LLM responses with custom scrollbar styling
  - Skeleton (with subtle shimmer) for loading states
  - Sonner toast (with refined styling) for action feedback
  
- **Customizations**: 
  - Enhanced code blocks with refined background gradients and optimal contrast
  - Sophisticated gradient backgrounds in hero with subtle pattern overlays
  - Multi-layer hover states combining scale, shadow depth, border color, and subtle gradient overlays
  - Icon containers with gradient backgrounds and refined border radius
  - Information cards with accent-colored borders and gradient backgrounds
  
- **States**: 
  - Buttons: Default (solid with shadow), Hover (scale-102 + enhanced shadow), Active (scale-98), Disabled (reduced opacity), Loading (animated spinner with blur effect)
  - Inputs: Default (subtle border), Focus (ring-2 with accent color), Error (destructive border with subtle glow), Filled (enhanced border)
  - Cards: Default (refined border), Hover (gradient overlay + primary border + elevated shadow + slight lift), Active (primary border)
  
- **Icon Selection**: 
  - Sparkle (duotone) for AI/LLM features
  - Database (duotone) for KV storage
  - User (duotone) for profile/auth features
  - Code (duotone) for code examples
  - Copy (duotone) for copy-to-clipboard actions
  - Check (bold) for success states
  - Info (duotone) for informational elements
  - ArrowRight (bold) for CTAs and navigation
  
- **Spacing**: 
  - Container max-w-7xl with responsive px (px-4 sm:px-6 lg:px-8) for main content
  - Section spacing: space-y-32 md:space-y-40 between major sections for generous breathing room
  - Card padding: p-6 for info cards, p-8 for interactive cards, p-10 for feature showcases
  - Grid gaps: gap-6 for feature grids maintaining consistent rhythm
  - Consistent use of space-y-4 for vertical content stacks, gap-3/gap-4 for form elements
  - Icon container sizes: w-10 h-10 for small, w-12 h-12 for section headers, w-16 h-16 for features
  
- **Mobile**: 
  - Hero text scales from text-7xl to text-4xl on mobile with adjusted line-height
  - Feature grid transitions from 4 columns to 2 to 1 (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
  - Tabs convert to 2-column then full-width stacked layout on small screens
  - Demo layouts stack vertically with adjusted padding (p-8 to p-6 to p-4)
  - Buttons expand to full width on mobile (w-full sm:w-auto)
  - Responsive spacing scales (py-16 md:py-24 lg:py-32)
  - Section spacing reduces on mobile (space-y-24 md:space-y-32 lg:space-y-40)
