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
The design should feel cutting-edge and developer-focused with a clean, minimal interface that puts functionality front and center, using generous spacing and subtle animations to create a sense of polish without distraction.

## Color Selection
Custom palette - A modern developer-friendly theme with deep purple accents that convey innovation and technical sophistication, paired with cool grays for a professional foundation.

- **Primary Color**: Deep Purple (oklch(0.45 0.15 290)) - Represents innovation, creativity, and technical depth; used for primary actions and brand elements
- **Secondary Colors**: Cool Gray (oklch(0.35 0.02 260)) - Provides professional contrast for secondary UI elements and code blocks
- **Accent Color**: Electric Blue (oklch(0.65 0.19 240)) - Bright highlight for interactive elements, CTAs, and success states
- **Foreground/Background Pairings**:
  - Background (Cool White oklch(0.98 0.005 260)): Dark text (oklch(0.25 0.02 260)) - Ratio 12.1:1 ✓
  - Card (White oklch(1 0 0)): Dark text (oklch(0.25 0.02 260)) - Ratio 13.5:1 ✓
  - Primary (Deep Purple oklch(0.45 0.15 290)): White text (oklch(1 0 0)) - Ratio 7.2:1 ✓
  - Secondary (Cool Gray oklch(0.35 0.02 260)): White text (oklch(1 0 0)) - Ratio 10.8:1 ✓
  - Accent (Electric Blue oklch(0.65 0.19 240)): White text (oklch(1 0 0)) - Ratio 4.6:1 ✓
  - Muted (Light Gray oklch(0.96 0.005 260)): Muted text (oklch(0.55 0.02 260)) - Ratio 5.8:1 ✓

## Font Selection
The typography should feel modern and technical yet approachable, using Inter for its excellent readability and developer-friendly aesthetic with geometric precision.

- **Typographic Hierarchy**:
  - H1 (Page Title): Inter Bold/48px/tight letter-spacing (-0.02em)/leading-none
  - H2 (Section Headers): Inter SemiBold/32px/tight letter-spacing (-0.01em)/leading-tight
  - H3 (Card Titles): Inter SemiBold/20px/normal letter-spacing/leading-snug
  - Body (Descriptions): Inter Regular/16px/normal letter-spacing/leading-relaxed
  - Code (Snippets): Inter Regular/14px/normal letter-spacing/leading-normal
  - Caption (Helper Text): Inter Medium/14px/normal letter-spacing/leading-normal

## Animations
Animations should be purposeful and snappy, emphasizing state changes and interactive feedback while maintaining a technical, precise feeling that never delays user actions.

- **Purposeful Meaning**: Smooth page transitions communicate navigation flow, card hover effects invite interaction, and loading states use subtle pulse animations that feel engineered rather than playful
- **Hierarchy of Movement**: Primary CTAs get hover scale and color transitions (200ms), card grid items elevate on hover with shadow changes (250ms), tab switching uses slide transitions (300ms), and success toasts slide in from top (350ms)

## Component Selection
- **Components**: 
  - Card (with hover effects using Tailwind transforms) for feature grid and demo sections
  - Tabs for code examples and switching between different API demonstrations
  - Textarea for prompt input with auto-resize capability
  - Button (primary variant for main actions, outline for secondary)
  - Badge for status indicators and tags
  - Separator for visual section breaks
  - ScrollArea for long code snippets and LLM responses
  - Skeleton for loading states
  - Sonner toast for copy confirmations and action feedback
  
- **Customizations**: 
  - Custom syntax-highlighted code blocks using pre/code with appropriate background styling
  - Animated gradient background for hero section using Tailwind utilities
  - Custom hover states for feature cards that combine scale, shadow, and border color changes
  
- **States**: 
  - Buttons: Default (solid primary), Hover (scale-105 + brightness increase), Active (scale-95), Disabled (opacity-50), Loading (spinner icon)
  - Inputs: Default (border-input), Focus (ring-2 ring-accent), Error (border-destructive), Success (border-accent subtle pulse)
  - Cards: Default (border-subtle), Hover (border-accent + shadow-lg + translate-y-[-2px]), Active (border-primary)
  
- **Icon Selection**: 
  - Sparkles for AI/LLM features
  - Database for KV storage
  - User for profile/auth features
  - Code for code examples
  - Copy for copy-to-clipboard actions
  - Play for running demos
  - Check for success states
  
- **Spacing**: 
  - Container max-w-7xl with px-6 for main content
  - Section spacing: mb-24 between major sections
  - Card padding: p-6 for content cards, p-8 for hero sections
  - Grid gaps: gap-6 for feature grids, gap-4 for form elements
  - Consistent use of space-y-4 for vertical stacks, space-x-4 for horizontal groups
  
- **Mobile**: 
  - Hero text scales from text-5xl to text-3xl on mobile
  - Feature grid transitions from 3 columns to 1 column (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
  - Tabs convert to full-width stacked layout
  - Side-by-side demo layouts stack vertically
  - Reduce padding from p-8 to p-4 on small screens
  - Sticky header collapses on scroll for more content space
