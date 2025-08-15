# SkilledBridge – Freelance Marketplace Platform

SkilledBridge is a modern freelance marketplace web application built with **React**, designed to connect Clients and Freelancers.  
It supports **role-based features**, **light/dark themes**, **responsive UI**, and integrates with APIs for job posting, user profiles, and authentication.

---

## 🚀 Features

### 1. **React Fundamentals**

- **Functional Components** – All UI and pages are built using React function components.
- **Props & Conditional Rendering** – Dynamically render content based on user role (`Client` / `Freelancer`) and authentication state.
- **React Router** – Client-side routing with `<Link>` and multiple pages like:
  - Home
  - All Jobs
  - Job Details
  - Add Job
  - Profiles (Client & Freelancer)
  - Login / Register / Edit Profile

---

### 2. **Authentication & User State**

- **LocalStorage** – Store and retrieve logged-in user details (`email`, `userType`).
- **AuthContext** – Manage authentication state globally across the app.
- **Conditional UI Rendering** – Show/hide buttons, navigation items, and pages based on login status and role.
- **JWT (Planned/Used)** – Token-based authentication for secure API requests.

---

## Form Validation (Yup + React Hook Form)

- **Yup + react-hook-form** – Integrated schema-based validation for forms.

- **Required Fields** – Enforces input for fields like username, email, password, and job title.

- **Format Checks** – Email pattern matching, password length limits, numeric/date validation.

- **Inline Errorsv** – Displays user-friendly error messages beneath invalid inputs.

- **Submission Blocking** – Prevents form submission until all rules are satisfied.

---

### 3. **API Integration**

- **Custom API Modules** – Organized API calls inside `JobAPI.jsx` and `UserAPI.jsx`.
- **Dynamic Data Fetching** – Retrieve job listings, user profiles, and saved/followed items from remote sources.
- **Data Mapping** – Transform API fields to fit the UI format.
- **Error Handling** – Fallback avatar images using `onError` with inline SVG.

---

### 4. **UI & Styling**

- **Bootstrap 5** – Navbar, dropdowns, responsive grid system.
- **Unified Custom CSS** – One global stylesheet controlling:
  - Light/Dark mode styles
  - Buttons
  - Cards
  - Job listings
  - Profile layouts
- **Theme System** – `:root` CSS variables for light/dark modes with smooth transitions.
- **Gradient Branding** – Consistent gradient backgrounds and accents across the site.
- **Responsive Design** – Mobile-first layout with media queries.

---

### 5. **UX Enhancements**

- **User Dropdown Menu** – Displays profile picture, name, email, and account options.
- **Theme Switcher** – Toggle between light and dark themes with sun/moon icons.
- **Back to Top Button** – Floating button with fade-in/fade-out effect and hover animation.
- **Tabbed Profiles** – Separate sections for About, Skills, and Experience.
- **Avatar Fallbacks** – Default base64-encoded SVG when no user image is found.

---

### 6. **Project Structure**

## Component Architecture Overview

```plaintext
src/
│
├── API/                           # Handles all API interaction logic
│   ├── AdminOverlay.jsx
│   ├── JobAPI.jsx
│   └── UserAPI.jsx
│
├── Components/                   # Reusable UI components
│   ├── Footer.jsx
│   ├── Jobs.jsx
│   ├── Navbar.jsx
│   └── UserSetting.jsx
│
├── Contexts/                     # Global state management
│   ├── AuthContext.jsx           # Handles authentication logic│
│   ├── ThemeContext.jsx          # Handles dark/light theme
│   └── TranslateButton.jsx       # UI control for translation
│
├── Pages/
│   ├── Jobs/                     # Pages related to job listings
│   │   ├── AddJob.jsx
│   │   ├── AllJobs.jsx
│   │   ├── JobCard.jsx
│   │   └── JobDetails.jsx
│   │
│   ├── Profiles/                # Pages for user/client profiles
│   │   ├── ClientProfile.jsx
│   │   ├── EditProfile.jsx
│   │   ├── FreelancerProfile.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Profiles.jsx│   │
│   │   └── UserManagement.jsx
│
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── PrivacyPolicy.jsx
│   ├── Register.jsx
│   └── TermsOdService.jsx
│
├── App.jsx                       # Root component
└── main.jsx                      # Entry point
```

## The hierarchical structure and relationships between components:

```plaintext
src/
├── main.jsx (Root)
│   ├── ThemeProvider
│   │   ├── AuthProvider
│   │   │   └── RouterProvider (App Router)
│   │   │       └── App.jsx (Layout)
│   │   │           ├── Outlet (Dynamic Pages)
│   │   │           └── BackToTopButton
│   │   │
│   │   └── Contexts/
│   │       ├── AuthContext.jsx
│   │       └── ThemeContext.jsx
│   │
│   └── Components/
│   │   ├── Navbar.jsx
│   │   │   ├── ThemeSwitcher
│   │   │   └── UserSetting.jsx (Dropdown)
│   │   ├── Footer.jsx
│   │   └── Jobs.jsx (Reusable)
│   │
│   └── Pages/
│       ├── Home.jsx
│       │   ├── HeroSection
│       │   ├── HowItWorks (Timeline)
│       │   └── CTA Section
│       │
│       ├── Auth/
│       │   ├── Login.jsx
│       │   └── Register.jsx
│       │
│       ├── Jobs/
│       │   ├── AllJobs.jsx
│       │   │   └── JobAPI.jsx (Container)
│       │   │       └── JobCard.jsx
│       │   ├── AddJob.jsx (Form)
│       │   └── JobDetails.jsx
│       │
│       ├── Profiles/
│       │   ├── Profiles.jsx (Listing)
│       │   │   ├── ProfileCard.jsx
│       │   │   └── AdminOverlay.jsx (Conditional)
│       │   │
│       │   ├── ClientProfile.jsx
│       │   ├── FreelancerProfile.jsx
│       │   ├── EditProfile.jsx (Dynamic Form)
│       │   └── UserManagement.jsx (Admin)
│       │
│       └── Legal/
│           ├── PrivacyPolicy.jsx
│           └── TermsOfService.jsx
│
└── Styles/
    ├── index.css (Global)
    ├── Pages.css
    ├── Profiles.css
    ├── Job.css
    ├── Components.css
    └── api.css

```

## Visual Representation:

```plaintext
main.jsx
│
├─ Providers (Language → Theme → Auth)
│   │
│   └─ Router
│      │
│      └─ App (Layout)
│         ├─ Navbar
│         │  ├─ ThemeSwitcher
│         │  └─ UserSettings
│         │
│         ├─ Dynamic Pages
│         │  ├─ Home
│         │  ├─ Auth (Login/Register)
│         │  ├─ Jobs
│         │  │  ├─ AllJobs → JobAPI → JobCard
│         │  │  ├─ AddJob
│         │  │  └─ JobDetails
│         │  │
│         │  ├─ Profiles
│         │  │  ├─ Listing → ProfileCard
│         │  │  ├─ Client/Freelancer Profiles
│         │  │  └─ UserManagement
│         │  │
│         │  └─ Legal
│         │
│         └─ Footer
│
└─ Contexts (Auth/Theme)
```

## 🔄 Key Relationships

### Root Providers

```
ThemeContext → AuthContext → App.jsx
```

- Router handles page navigation
- App layout wraps routed pages

### Job Flow

```
AddJob → saves to localStorage
   ↓
AllJobs → fetches from JobAPI → renders JobCards
   ↓
JobCard → click → JobDetails
```

### Profile Flow

```
Profiles → renders ProfileCard
   ↓
ProfileCard → click → ClientProfile or FreelancerProfile
   ↓
EditProfile → updates data in localStorage
```

### Admin Flow

```
Profiles → AdminOverlay → UserManagement
   ↓
UserManagement → updates users
```

---

---

### 7. **Extra UI Patterns**

- **Role-Based Navigation** – Different menu items for Clients vs. Freelancers.
- **Form Handling** – For job posting, login, register, and profile editing.
- **Responsive Navbar** – Mobile-friendly collapse with toggler.
- **Global State Synchronization** – Auth and theme state persist between reloads.

---

## 🛠 Tech Stack

**Frontend:**

- React (Hooks & Context API)
- React Router DOM
- Bootstrap 5
- Custom CSS (Light/Dark Themes with CSS Variables)

**State Management:**

- Context API (Auth, Theme, Language)
- LocalStorage Persistence

**Utilities:**

- Day.js (Date formatting & "time ago")
- Font Awesome Icons

**API:**

- Custom API handlers for Jobs & Users
- Fetch / Axios (configurable)

---

## 📌 Future Improvements

- Integrate real JWT authentication with refresh token handling.
- Add notifications & real-time updates via WebSockets.
- Enhanced job filtering & search.
- File uploads for resumes/portfolios.
